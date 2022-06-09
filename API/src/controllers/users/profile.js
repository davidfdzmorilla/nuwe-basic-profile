const { usersRepository } = require('../../repository')

const profile = async (req, res) => {

    const userId = req.user.id
    let user
    try {
        user = await usersRepository.getUserById(userId)
    } catch (error) {
        res.status(500)
        res.send({ error: error.message })
        return
    }

    try {
        if (!user) throw new Error('User not found')
        res.status(200)
        res.send({
            ...user
        })

    } catch (error) {
        res.status(404)
        res.send({ error: error.message })
        return
    }
}

module.exports = profile
