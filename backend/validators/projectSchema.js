const Joi = require('joi')

const projectValidator = Joi.object().keys({
    title: Joi
        .string()
        .required()
        .max(80)
        .min(5)
        .messages({
            'string.empty': '[title] is required',
            'any.required': '[title] is required',
            'string.max': '[title] must be between 5 and 80 characters',
            'string.min': '[title] must be between 5 and 80 characters'
        }),
    link: Joi
        .string()
        .max(255)
        .min(10)
        .messages({
            'string.max': '[link] must be between 10 and 255 characters',
            'string.min': '[link] must be between 10 and 255 characters'
        }),
    description: Joi
        .string()
        .required()
        .max(255)
        .min(20)
        .messages({
            'string.empty': '[description] is required',
            'any.required': '[description] is required',
            'string.max': '[description] must be between 20 and 255 characters',
            'string.min': '[description] must be between 20 and 255 characters'
        }),
})

module.exports = projectValidator
