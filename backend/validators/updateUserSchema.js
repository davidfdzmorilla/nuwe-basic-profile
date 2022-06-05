const Joi = require('joi')

const userValidator = Joi.object().keys({
    avatar: Joi
        .string()
        .max(500)
        .min(2)
        .messages({
            'string.max': '[avatar] must be between 2 and 500 characters',
            'string.min': '[avatar] must be between 2 and 500 characters'
        }),
    headerPic: Joi
        .string()
        .max(500)
        .min(2)
        .messages({
            'string.max': '[headerPic] must be between 2 and 500 characters',
            'string.min': '[headerPic] must be between 2 and 500 characters'
        }),
    professionType: Joi
        .string()
        .max(50)
        .min(2)
        .messages({
            'string.max': '[professionType] must be between 2 and 50 characters',
            'string.min': '[professionType] must be between 2 and 50 characters'
        }),
    professionLevel: Joi
        .string()
        .max(50)
        .min(2)
        .messages({
            'string.max': '[profesionLevel] must be between 2 and 50 characters',
            'string.min': '[profesionLevel] must be between 2 and 50 characters'
        }),
    bio: Joi
        .string()
        .max(800)
        .min(2)
        .messages({
            'string.max': '[bio] must be between 2 and 500 characters',
            'string.min': '[bio] must be between 2 and 500 characters'
        }),
    country: Joi
        .string()
        .max(50)
        .min(2)
        .messages({
            'string.max': '[country] must be between 2 and 50 characters',
            'string.min': '[country] must be between 2 and 50 characters'
        }),
    city: Joi
        .string()
        .max(50)
        .min(2)
        .messages({
            'string.max': '[city] must be between 2 and 50 characters',
            'string.min': '[city] must be between 2 and 50 characters'
        }),
    stack: Joi
        .string()
        .max(100)
        .min(2)
        .messages({
            'string.max': '[stack] must be between 2 and 100 characters',
            'string.min': '[stack] must be between 2 and 100 characters'
        }),
    linkedin: Joi
        .string()
        .max(50)
        .min(2)
        .messages({
            'string.max': '[linkedin] must be between 2 and 50 characters',
            'string.min': '[linkedin] must be between 2 and 50 characters'
        }),
    gitHub: Joi
        .string()
        .max(50)
        .min(2)
        .messages({
            'string.max': '[gitHub] must be between 2 and 50 characters',
            'string.min': '[gitHub] must be between 2 and 50 characters'
        }),
    gitLab: Joi
        .string()
        .max(50)
        .min(2)
        .messages({
            'string.max': '[gitLab] must be between 2 and 50 characters',
            'string.min': '[gitLab] must be between 2 and 50 characters'
        }),
    behance: Joi
        .string()
        .max(50)
        .min(2)
        .messages({
            'string.max': '[behance] must be between 2 and 50 characters',
            'string.min': '[behance] must be between 2 and 50 characters'
        }),
    ubication: Joi
        .string()
        .max(50)
        .min(2)
        .messages({
            'string.max': '[ubication] must be between 2 and 50 characters',
            'string.min': '[ubication] must be between 2 and 50 characters'
        }),
    typeCompany: Joi
        .string()
        .max(50)
        .min(2)
        .messages({
            'string.max': '[typeCompany] must be between 2 and 50 characters',
            'string.min': '[typeCompany] must be between 2 and 50 characters'
        }),
    minSalary: Joi
        .number()
        .messages({
            'string.max': '[minSalary] must be between 6 and 50 characters',
            'string.min': '[minSalary] must be between 6 and 50 characters'
        }),
    likeSalary: Joi
        .number()
        .messages({
            'string.max': '[likeSalary] must be between 2 and 50 characters',
            'string.min': '[likeSalary] must be between 2 and 50 characters'
        }),
    availabilityToTravel: Joi
        .boolean()
        .messages({
            'string.empty': '[availabilityToTravel] is required',
            'any.required': '[availabilityToTravel] is required',
        }),
    remoteWork: Joi
        .boolean()
        .messages({
            'string.empty': '[remoteWork] is required',
            'any.required': '[remoteWork] is required',
        }),
    inmediateIncorporation: Joi
        .boolean()
        .messages({
            'string.empty': '[inmediateIncorporation] is required',
            'any.required': '[inmediateIncorporation] is required',
        })
})

module.exports = userValidator
