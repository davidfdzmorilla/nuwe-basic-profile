const register = require('./register')
const login = require('./login')
const profile = require('./profile')
const editProfile = require('./editProfile')
const getProjects = require('./getProjects')
const createProject = require('./createProject')
const deleteProject = require('./deleteProject')



module.exports = {
    register,
    login,
    profile,
    editProfile,
    getProjects,
    createProject,
    deleteProject
}