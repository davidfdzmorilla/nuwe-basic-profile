const connection = require('../mysqlConnection')

const saveUser = async ({ userId, title, link, description }) => {



  const [{ insertId }] = await connection.query(
    `INSERT INTO users_projects (title, link, description, id_user) VALUES (?, ?, ?, ?)`,
    [title, link, description, userId]
  )

  return insertId
}

module.exports = saveUser