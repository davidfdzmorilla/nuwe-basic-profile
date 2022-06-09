const { updateProjectValidator } = require('../../validators')
const { usersRepository } = require('../../repository')

const editProject = async (req, res) => {

  let newProjectData = req.body
  const userId = req.user.id
  const projectId = req.params

  try {
    await updateProjectValidator.validateAsync(newProjectData)
  } catch (error) {
    res.status(400)
    res.send({ error: error.message })
    return
  }

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
    await usersRepository.updateUserProject({ ...newProjectData, ...projectId })
  } catch (error) {
    res.status(500)
    res.send({ error: error.message })
    return
  }

  let updatedUserProject

  try {
    updatedUserProject = await usersRepository.getUserProjectById(projectId)
  } catch (error) {
    res.status(500)
    res.send({ error: error.message })
    return
  }

  res.status(202)
  res.send({
    message: 'Project data updated',
    data: { ...updatedUserProject }
  })
}

module.exports = editProject

