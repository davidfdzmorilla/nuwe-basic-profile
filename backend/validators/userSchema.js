const Joi = require('joi')

const userValidator = Joi.object().keys({
    headerPic: Joi
        .string()
        .required()
        .max(500)
        .min(2)
        .messages({
            'string.empty': '[header_pic] is required',
            'any.required': '[header_pic] is required',
            'string.max': '[header_pic] must be between 2 and 500 characters',
            'string.min': '[header_pic] must be between 2 and 500 characters'
        }),
    avatar: Joi
        .string()
        .required()
        .max(500)
        .min(2)
        .messages({
            'string.empty': '[avatar] is required',
            'any.required': '[avatar] is required',
            'string.max': '[avatar] must be between 2 and 500 characters',
            'string.min': '[avatar] must be between 2 and 500 characters'
        }),
    name: Joi
        .string()
        .required()
        .max(50)
        .min(2)
        .messages({
            'string.empty': '[name] is required',
            'any.required': '[name] is required',
            'string.max': '[name] must be between 2 and 50 characters',
            'string.min': '[name] must be between 2 and 50 characters'
        }),
    email: Joi
        .string()
        .required()
        .email()
        .messages({
            'string.empty': '[email] is required',
            'any.required': '[email] is required',
            'string.email': '[email] must be a valid email'
        }),
    password: Joi
        .string()
        .required()
        .max(50)
        .min(5)
        .messages({
            'string.empty': '[password] is required',
            'any.required': '[password] is required',
            'string.max': '[password] must be between 5 and 50 characters',
            'string.min': '[password] must be between 5 and 50 characters'
        }),
    tel: Joi
        .number()
        .required()
        .messages({
            'string.empty': '[tel] is required',
            'any.required': '[tel] is required'
        }),
    professionType: Joi
        .string()
        .required()
        .max(50)
        .min(2)
        .messages({
            'string.empty': '[professionType] is required',
            'any.required': '[professionType] is required',
            'string.max': '[professionType] must be between 2 and 50 characters',
            'string.min': '[professionType] must be between 2 and 50 characters'
        }),
    professionLevel: Joi
        .string()
        .required()
        .max(50)
        .min(2)
        .messages({
            'string.empty': '[profesionLevel] is required',
            'any.required': '[profesionLevel] is required',
            'string.max': '[profesionLevel] must be between 2 and 50 characters',
            'string.min': '[profesionLevel] must be between 2 and 50 characters'
        }),
    bio: Joi
        .string()
        .required()
        .max(800)
        .min(2)
        .messages({
            'string.empty': '[bio] is required',
            'any.required': '[bio] is required',
            'string.max': '[bio] must be between 2 and 500 characters',
            'string.min': '[bio] must be between 2 and 500 characters'
        }),
    country: Joi
        .string()
        .required()
        .max(50)
        .min(2)
        .messages({
            'string.empty': '[country] is required',
            'any.required': '[country] is required',
            'string.max': '[country] must be between 2 and 50 characters',
            'string.min': '[country] must be between 2 and 50 characters'
        }),
    city: Joi
        .string()
        .required()
        .max(50)
        .min(2)
        .messages({
            'string.empty': '[city] is required',
            'any.required': '[city] is required',
            'string.max': '[city] must be between 2 and 50 characters',
            'string.min': '[city] must be between 2 and 50 characters'
        }),
    linkedin: Joi
        .string()
        .required()
        .max(50)
        .min(2)
        .messages({
            'string.empty': '[linkedin] is required',
            'any.required': '[linkedin] is required',
            'string.max': '[linkedin] must be between 2 and 50 characters',
            'string.min': '[linkedin] must be between 2 and 50 characters'
        }),
    gitHub: Joi
        .string()
        .required()
        .max(50)
        .min(2)
        .messages({
            'string.empty': '[gitHub] is required',
            'any.required': '[gitHub] is required',
            'string.max': '[gitHub] must be between 2 and 50 characters',
            'string.min': '[gitHub] must be between 2 and 50 characters'
        }),
    gitLab: Joi
        .string()
        .required()
        .max(50)
        .min(2)
        .messages({
            'string.empty': '[gitLab] is required',
            'any.required': '[gitLab] is required',
            'string.max': '[gitLab] must be between 2 and 50 characters',
            'string.min': '[gitLab] must be between 2 and 50 characters'
        }),
    behance: Joi
        .string()
        .required()
        .max(50)
        .min(2)
        .messages({
            'string.empty': '[behance] is required',
            'any.required': '[behance] is required',
            'string.max': '[behance] must be between 2 and 50 characters',
            'string.min': '[behance] must be between 2 and 50 characters'
        }),
    ubication: Joi
        .string()
        .required()
        .max(50)
        .min(2)
        .messages({
            'string.empty': '[ubication] is required',
            'any.required': '[ubication] is required',
            'string.max': '[ubication] must be between 2 and 50 characters',
            'string.min': '[ubication] must be between 2 and 50 characters'
        }),
    typeCompany: Joi
        .string()
        .required()
        .max(50)
        .min(2)
        .messages({
            'string.empty': '[typeCompany] is required',
            'any.required': '[typeCompany] is required',
            'string.max': '[typeCompany] must be between 2 and 50 characters',
            'string.min': '[typeCompany] must be between 2 and 50 characters'
        }),
    minSalary: Joi
        .number()
        .required()
        .messages({
            'string.empty': '[minSalary] is required',
            'any.required': '[minSalary] is required',
            'string.max': '[minSalary] must be between 6 and 50 characters',
            'string.min': '[minSalary] must be between 6 and 50 characters'
        }),
    likeSalary: Joi
        .number()
        .required()
        .messages({
            'string.empty': '[likeSalary] is required',
            'any.required': '[likeSalary] is required',
            'string.max': '[likeSalary] must be between 2 and 50 characters',
            'string.min': '[likeSalary] must be between 2 and 50 characters'
        }),
    availabilityToTravel: Joi
        .boolean()
        .required()
        .messages({
            'string.empty': '[availabilityToTravel] is required',
            'any.required': '[availabilityToTravel] is required',
        }),
    remoteWork: Joi
        .boolean()
        .required()
        .messages({
            'string.empty': '[remoteWork] is required',
            'any.required': '[remoteWork] is required',
        }),
    inmediateIncorporation: Joi
        .boolean()
        .required()
        .messages({
            'string.empty': '[inmediateIncorporation] is required',
            'any.required': '[inmediateIncorporation] is required',
        })
})

module.exports = userValidator
