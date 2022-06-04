const connection = require('../mysqlConnection')

const getUserById = async (userId) => {
    const [[user]] = await connection.query(
        'SELECT id, header_pic AS hederPic, avatar, name , email, tel, profession_type AS professionType, profession_level AS professionLevel, bio, country, city, linkedin, github, gitlab, behance, stack_1 AS stack1, stack_2 AS stack2, stack_3 AS stack3, stack_4 AS stack4, stack_5 AS stack5, stack_6 AS stack6, ubication, type_company AS typeCompany, min_salary AS minSalary, like_salary AS likeSalary, availability_to_travel AS availabilityToTravel, remote_work AS remoteWork, inmediate_incorporation AS inmediateIncorporation FROM users WHERE id = ?',
        [userId]
    )
    return user
}

module.exports = getUserById