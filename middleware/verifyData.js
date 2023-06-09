const Joi = require ('joi');

module.exports = (req , res , next ) => {
    const schema = Joi.object({
        id:Joi.number().allow(null,('')),
        name : Joi.string().required(),
        author : Joi.string().required()
    })

    const result = schema.validate(req.body)

if (result.error) {
    return res.status(400).send({ ok: false, msg: 'Invalid parameters sent' });
}
next()
}

