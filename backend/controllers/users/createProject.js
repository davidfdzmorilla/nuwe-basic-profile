const encryptor = require('../../shared/encryptor')
const { projectValidator } = require('../../validators')
const { usersRepository } = require('../../repository')


const createProject = async (req, res) => {
    const userId = req.user.id


    const title = 'Projecto  1'
    const link = 'https://davidfdzmorilla.dev'
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus ex dolor, volutpat eleifend arcu tristique sed. Aliquam id odio pulvinar, tincidunt sem ut, viverra odio. Praesent tempus nulla id diam vehicula, id feugiat odio commodo. Nunc sed libero pulvinar, convallis lorem non, vulputate augue. In ut sagittis est. In tristique dolor eu sapien tempus porttitor. In hac habitasse platea dictumst. Nunc sed lectus aliquet, venenatis nulla quis, mollis justo'

    const newProject = {
        title,
        link,
        description
    }


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
