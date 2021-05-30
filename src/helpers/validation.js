const Joi = require('@hapi/joi')

//List Item Validation
const ListItemValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().max(60).min(6),
        description: Joi.string().max(300).min(6),
        status: Joi.string(),
    });

    return schema.validate(data);
}

module.exports.ListItemValidation = ListItemValidation;