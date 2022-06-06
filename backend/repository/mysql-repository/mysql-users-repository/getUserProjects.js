const connection = require('../mysqlConnection')

const getUserProjects = async (userId) => {
  const [projects] = await connection.query(
    'SELECT id, title, link, description FROM users_projects WHERE id_user = ?',
    [userId]
  )
  return projects
}

module.exports = getUserProjects