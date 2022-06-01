const encryptor = require('../../shared/encryptor')
const { userValidator } = require('../../validators')
const { usersRepository } = require('../../repository')


const register = async (req, res) => {
    const user = req.body


    try {
        await userValidator.validateAsync(user)
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
        return
    }

    let userExists
    try {
        userExists = await usersRepository.getUserByEmail(user.email)

    } catch (error) {
        res.status(500)
        res.send({ error: error.message })
        return
    }

    if (userExists) {
        res.status(409)
        res.send({ error: 'User already exists' })
        return
    }

    let encryptedPassword
    try {
        encryptedPassword = await encryptor.encrypt(user.password)
    } catch (error) {
        res.status(500)
        res.send({ error: error.message })
        return
    }

    let userId
    try {
        userId = await usersRepository.saveUser({ ...user, password: encryptedPassword })
    } catch (error) {
        res.status(500)
        res.send({ error: error.message })
        return
    }

    res.status(201)
    res.send({
        message: 'User registered and validation email sent',
        userId: userId
    })

}

module.exports = register
