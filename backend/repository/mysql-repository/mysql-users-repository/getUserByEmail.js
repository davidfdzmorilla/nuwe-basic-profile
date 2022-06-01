const connection = require('../mysqlConnection')

const getUserByEmail = async (userEmail) => {
    const [[result]] = await connection.query(
        'SELECT id, header_pic AS headerPic, avatar, name , email, password, tel, profession_type AS professionType, profession_level AS professionLevel, bio, country, city, linkedin, github, gitlab, behance, ubication, type_company AS typeCompany, min_salary AS minSalary, like_salary AS likeSalary, availability_to_travel AS availabilityToTrabel, remote_work AS remoteWork, inmediate_incorporation AS inmediateIncorporation FROM users WHERE email = ?',
        [userEmail]
    )
    return result
}

module.exports = getUserByEmail