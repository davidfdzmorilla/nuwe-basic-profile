const connection = require('../mysqlConnection')

const getUserProjects = async ({ id }) => {
  const [project] = await connection.query(
    'SELECT id, title, link, description, id_user AS userId FROM users_projects WHERE id = ?',
    [id]
  )
  return project
}

module.exports = getUserProjects