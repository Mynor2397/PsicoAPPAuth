const respondError = (res, error) => {
    console.log('SQL Message: ', error.sqlMessage);
    console.log('SQL Query: ', error.sql, ' \n');
    console.log(error);
    res.status(500).json({
        error: 'Internal Server Error',
    })
}

module.exports = respondError;