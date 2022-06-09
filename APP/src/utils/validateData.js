
export function validateData(name, email, tel, professionType, professionLevel, country, city, ubication, typeCompany, minSalary, likeSalary) {

    let errorData = { errorTypeValidation: '', errorTextValidation: '' }

    const stringSeveralWords = /^([A-ZÁÉÍÓÚa-záéíóú]{1}[a-zñáéíóú]+[\s]*)+$/
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    const telRegex = /^[679]{1}[0-9]{8}$/
    const stringOneWord = /^[A-Za-zaáÁéÉíÍóÓúÚ\u00f1\u00d1]+$/
    const numRegex = /[0-9]/


    switch (true) {
        case name &&
            (!stringSeveralWords.test(name)):
            errorData = { errorTypeValidation: 'name', errorTextValidation: 'Tu nombre debe contener entre 4 y 20 letras.' }
            return errorData
        case email &&
            !emailRegex.test(email):
            errorData = { errorTypeValidation: 'email', errorTextValidation: 'Email no válido.' }
            return errorData
        case tel && !telRegex.test(tel):
            errorData = { errorTypeValidation: 'tel', errorTextValidation: 'Teléfono no válido.' }
            return errorData
        case professionType && !stringSeveralWords.test(professionType):
            errorData = { errorTypeValidation: 'professionType', errorTextValidation: 'Tu puesto debe contener entre 4 y 20 letras.' }
            return errorData
        case professionLevel && !stringOneWord.test(professionLevel):
            errorData = { errorTypeValidation: 'professionLevel', errorTextValidation: 'Tu nivel solo debe contener una palabra y debe contener entre 4 y 20 letras.' }
            return errorData
        case country && !stringSeveralWords.test(country):
            errorData = { errorTypeValidation: 'country', errorTextValidation: 'País no válido.' }
            return errorData
        case city && !stringSeveralWords.test(city):
            errorData = { errorTypeValidation: 'city', errorTextValidation: 'Ciudad no válida.' }
            return errorData
        case ubication && !stringSeveralWords.test(ubication):
            errorData = { errorTypeValidation: 'ubication', errorTextValidation: 'Ubicación no válida.' }
            return errorData
        case typeCompany && !stringSeveralWords.test(typeCompany):
            errorData = { errorTypeValidation: 'typeCompany', errorTextValidation: 'Tipo de compañia debe contener entre 4 y 20 letras.' }
            return errorData
        case minSalary && !numRegex.test(minSalary):
            errorData = { errorTypeValidation: 'minSalary', errorTextValidation: 'Salario mínimo deben ser números.' }
            return errorData
        case likeSalary && (!numRegex.test(likeSalary) || Number(minSalary) > Number(likeSalary)):
            errorData = { errorTypeValidation: 'likeSalary', errorTextValidation: 'Salario deseado deben ser número y mayor a salario mínimo.' }
            return errorData
        default:
            return false
    }
}