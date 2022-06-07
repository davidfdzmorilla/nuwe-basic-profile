const { usersRepository } = require('../../repository')

const deleteProject = async (req, res) => {

  const userId = req.user.id
  const projectId = req.params

  let project
  try {
    project = await usersRepository.getUserProjectById(projectId)
    if (project.length < 1) throw Error('Project not found')
  } catch (error) {
    res.status(500)
    res.send({ error: error.message })
    return
  }

  try {
    await usersRepository.removeUserProject(projectId)
  } catch (error) {
    res.status(500)
    res.send({ error: error.message })
    return
  }

  res.status(200)
  res.send('Deleted Project')
}

module.exports = deleteProject
