const jwt = require('../helper/jwt-token')
const userService = require('../services/user_service')
const { google } = require('googleapis')

const userController = {}


const credentials = {
    clientId: '420807577452-hbfjt9iilrqtuvopipot93ck917at4th.apps.googleusercontent.com',
    clientSecret: 'yvADMIJEWLRh_NZ0-Xh6jHaK',
    // redirectUri: "http://www.psicoapp.online:4000/auth/google/callback"
    redirectUri: "http://localhost:4000/auth/google/callback"
}

const oAuth2Client = new google.auth.OAuth2(credentials)

function getAuthUrl() {
    return oAuth2Client.generateAuthUrl({
        access_type: "offline",
        prompt: "consent",
        scope: [
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile"
        ]
    })
}

userController.Login = async (req, res) => {
    const url = getAuthUrl()
    res.send(url)
}

userController.OAuth2Google = async (req, res) => {
    const { code } = req.query;

    const { tokens } = await oAuth2Client.getToken(code)
    oAuth2Client.credentials = tokens;
    const oauth2 = google.oauth2("v2")

    const { data: { email, id: google_open_id, name, picture } } = await oauth2.userinfo.v2.me.get({
        auth: oAuth2Client
    })

    try {
        let results;

        results = await userService.getCredentials(google_open_id, email)

        if (results == 404) {
            results = await userService.createUser(google_open_id, name, email)

        }

        var token = await jwt.CreateToken(google_open_id, email, results.data.rol)

        const data = {
            id: google_open_id,
            rol: results.data.rol,
            email: email,
            name: name,
            picture: picture,
            token: token,
        }

        return res
            .status(200)
            .json(data)

    } catch (error) {
        console.log(error);
        return
    }
}



module.exports = userController;