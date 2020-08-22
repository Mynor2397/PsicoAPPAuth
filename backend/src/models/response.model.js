/**
 * Represent a model of Response.
 * 
 * @param {boolean} ok is the result successfully o failed.
 * @param {string} message is a message property of response.
 * @param {string} data contain all data necesery for the response.
 */

class Response {

    constructor(ok, message, data) {
        this.ok = ok
        this.message = message
        this.data = data
    }

}

module.exports = Response;