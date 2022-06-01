const connection = require('../mysqlConnection')

const saveUser = async (user) => {
  const { headerPic, avatar, name, email, password, tel, professionType, professionLevel, bio, country, city, linkedin, gitHub, gitLab, behance, ubication, typeCompany, minSalary, likeSalary, availabilityToTravel, remoteWork, inmediateIncorporation } = user
  const [{ insertId }] = await connection.query(
    'INSERT INTO users (header_pic, avatar, name, email, password, tel, profession_type, profession_level, bio, country, city, linkedin, github, gitlab, behance, ubication, type_company, min_salary, like_salary, availability_to_travel, remote_work, inmediate_incorporation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [headerPic, avatar, name, email, password, tel, professionType, professionLevel, bio, country, city, linkedin, gitHub, gitLab, behance, ubication, typeCompany, minSalary, likeSalary, availabilityToTravel, remoteWork, inmediateIncorporation]
  )

  return insertId
}

module.exports = saveUser