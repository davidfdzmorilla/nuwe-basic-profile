const Joi = require('joi')

const projectValidator = Joi.object().keys({
    title: Joi
        .string()
        .required()
        .max(80)
        .min(2)
        .messages({
            'string.empty': '[title] is required',
            'any.required': '[title] is required',
            'string.max': '[title] must be between 2 and 80 characters',
            'string.min': '[title] must be between 2 and 80 characters'
        }),
    link: Joi
        .string()
        .required()
        .max(500)
        .min(2)
        .messages({
            'string.empty': '[link] is required',
            'any.required': '[link] is required',
            'string.max': '[link] must be between 2 and 500 characters',
            'string.min': '[link] must be between 2 and 500 characters'
        }),
    description: Joi
        .string()
        .required()
        .max(500)
        .min(2)
        .messages({
            'string.empty': '[description] is required',
            'any.required': '[description] is required',
            'string.max': '[description] must be between 2 and 500 characters',
            'string.min': '[description] must be between 2 and 500 characters'
        }),
})

module.exports = projectValidator
