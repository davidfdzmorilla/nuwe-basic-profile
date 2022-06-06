const encryptor = require('../../shared/encryptor')
const { projectValidator } = require('../../validators')
const { usersRepository } = require('../../repository')


const createProject = async (req, res) => {

    const userId = req.user.id
    const newProject = req.body

    try {
        await projectValidator.validateAsync(newProject)
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
        return
    }

    let projectId
    try {
        projectId = await usersRepository.saveUserProject({ userId, ...newProject })
    } catch (error) {
        res.status(500)
        res.send({ error: error.message })
        return
    }

    res.status(201)
    res.send({
        message: 'Project registered',
        projectId
    })

}

module.exports = createProject
