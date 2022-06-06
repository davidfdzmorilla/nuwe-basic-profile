const { usersRepository } = require('../../repository')

const getProjects = async (req, res) => {

  // const userId = req.user.id
  // let user
  // try {
  //   user = await usersRepository.getUserById(userId)
  // } catch (error) {
  //   res.status(500)
  //   res.send({ error: error.message })
  //   return
  // }

  // try {
  //   if (!user) throw new Error('User not found')
  //   res.status(202)
  //   res.send({
  //     ...user
  //   })

  // } catch (error) {
  //   res.status(400)
  //   res.send({ error: error.message })
  //   return
  // }
}

module.exports = getProjects
