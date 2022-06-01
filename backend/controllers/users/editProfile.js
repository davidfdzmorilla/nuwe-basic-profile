const { updateUserValidator } = require('../../validators')
const { usersRepository } = require('../../repository')

const updateUser = async (req, res) => {
    let newUserData = req.body
    const userId = req.user.id
    console.log(userId)

    console.log(newUserData)

    try {
        await updateUserValidator.validateAsync(newUserData)
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
        return
    }

    try {
        await usersRepository.updateUser({ ...newUserData, userId })
    } catch (error) {
        res.status(500)
        res.send({ error: 'error.message' })
        return
    }

    let updatedUser

    try {
        updatedUser = await usersRepository.getUserById(userId)
    } catch (error) {
        res.status(500)
        res.send({ error: error.message })
        return
    }

    res.status(202)
    res.send({
        message: 'User data updated',
        user: {
            ...updatedUser
        }
    })
}

module.exports = updateUser

