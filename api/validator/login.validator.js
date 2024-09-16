import Joi  from 'joi';

const loginSchema = Joi.object({
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    mail: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'))  /* nouveau : ajout d'une regex stricte */
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } })
    .lowercase()
    .required(),
   
});

export default loginSchema ;
