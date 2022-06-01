const connection = require('../mysqlConnection')

const updateUser = async (newUserData) => {



    const { userId, headerPic, avatar, professionType, professionLevel, bio, country, city, linkedin, gitHub, gitLab, behance, ubication, typeCompany, minSalary, likeSalary, availabilityToTravel, remoteWork, inmediateIncorporation } = newUserData
    if (!avatar && !headerPic && !professionType && !professionLevel && !bio && !country && !city && !linkedin && !gitHub && !gitLab && !behance && !ubication && !typeCompany && !minSalary && !likeSalary && !availabilityToTravel & !remoteWork & !inmediateIncorporation) return

    let query = 'UPDATE users SET'
    const params = []

    if (avatar) {
        query += ' avatar = ?'
        params.push(avatar)
    }
    if (headerPic) {
        if (params.length > 0) query += ','
        query += ' header_pic = ?'
        params.push(headerPic)
    }
    if (professionType) {
        if (params.length > 0) query += ','
        query += ' profession_type = ?'
        params.push(professionType)
    }
    if (professionLevel) {
        if (params.length > 0) query += ','
        query += ' profession_level = ?'
        params.push(professionLevel)
    }
    if (bio) {
        if (params.length > 0) query += ','
        query += ' bio = ?'
        params.push(bio)
    }
    if (country) {
        if (params.length > 0) query += ','
        query += ' country = ?'
        params.push(country)
    }
    if (city) {
        if (params.length > 0) query += ','
        query += ' city = ?'
        params.push(city)
    }
    if (linkedin) {
        if (params.length > 0) query += ','
        query += ' linkedin = ?'
        params.push(linkedin)
    }
    if (gitHub) {
        if (params.length > 0) query += ','
        query += ' github = ?'
        params.push(gitHub)
    }
    if (gitLab) {
        if (params.length > 0) query += ','
        query += ' gitlab = ?'
        params.push(gitLab)
    }
    if (behance) {
        if (params.length > 0) query += ','
        query += ' behance = ?'
        params.push(behance)
    }
    if (ubication) {
        if (params.length > 0) query += ','
        query += ' ubication = ?'
        params.push(ubication)
    }
    if (typeCompany) {
        if (params.length > 0) query += ','
        query += ' type_company = ?'
        params.push(typeCompany)
    }
    if (minSalary) {
        if (params.length > 0) query += ','
        query += ' min_salary = ?'
        params.push(minSalary)
    }
    if (likeSalary) {
        if (params.length > 0) query += ','
        query += ' like_salary = ?'
        params.push(likeSalary)
    }
    if (availabilityToTravel) {
        if (params.length > 0) query += ','
        query += ' availability_to_travel = ?'
        params.push(availabilityToTravel)
    }
    if (remoteWork) {
        if (params.length > 0) query += ','
        query += ' remote_work = ?'
        params.push(remoteWork)
    }
    if (inmediateIncorporation) {
        if (params.length > 0) query += ','
        query += ' inmediate_incorporation = ?'
        params.push(inmediateIncorporation)
    }
    query += ' WHERE id = ?'

    await connection.query(query, [...params, userId])
}
module.exports = updateUser