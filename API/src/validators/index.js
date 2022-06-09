const userValidator = require('./userSchema')
const credentialsValidator = require('./credentialsSchema')
const updateUserValidator = require('./updateUserSchema')
const projectValidator = require('./projectSchema')
const updateProjectValidator = require('./updateProjectSchema')



module.exports = {
    userValidator,
    credentialsValidator,
    updateUserValidator,
    projectValidator,
    updateProjectValidator
}