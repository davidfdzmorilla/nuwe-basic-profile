const connection = require('../mysqlConnection')

const updateUserProject = async (newProjectData) => {

  console.log(newProjectData)

  let { id, title, link, description } = newProjectData
  if (!title && !link && !description) return
  let query = 'UPDATE users_projects SET'
  const params = []


  if (title) {
    query += ' title = ?'
    params.push(title)
  }
  if (link) {
    if (params.length > 0) query += ','
    query += ' link = ?'
    params.push(link)
  }
  if (description) {
    if (params.length > 0) query += ','
    query += ' description = ?'
    params.push(description)
  }
  query += ' WHERE id = ?'

  await connection.query(query, [...params, id])
}
module.exports = updateUserProject