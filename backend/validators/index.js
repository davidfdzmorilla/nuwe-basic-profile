const userValidator = require('./userSchema')
const credentialsValidator = require('./credentialsSchema')
const updateUserValidator = require('./updateUserSchema')
const projectValidator = require('./projectSchema')



module.exports = {
    userValidator,
    credentialsValidator,
    updateUserValidator,
    projectValidator
}