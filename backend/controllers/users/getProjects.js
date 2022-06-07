const { usersRepository } = require('../../repository')

const getProjects = async (req, res) => {

  const userId = req.user.id
  let projects
  try {
    projects = await usersRepository.getUserProjects(userId)
  } catch (error) {
    res.status(500)
    res.send({ error: error.message })
    return
  }

  res.status(200)
  res.send(projects)
}

module.exports = getProjects
