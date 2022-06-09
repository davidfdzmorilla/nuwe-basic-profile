const connection = require('../mysqlConnection')

const removeUserProject = async ({ id }) => {
  await connection.query(
    'DELETE FROM users_projects WHERE id = ?',
    [id]
  )
  return true
}

module.exports = removeUserProject