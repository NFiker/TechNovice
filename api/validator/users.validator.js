import Joi from 'joi';

const userschema = Joi.object({
    
    nickname: Joi.string().alphanum().min(3).max(30).required(),
    first_name: Joi.string().min(3).max(30).required(),
    last_name: Joi.string().min(3).max(30).required(),
    role_name: Joi.string().min(3).max(30).required(),

   
    mail: Joi.string()
        .pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/) /* nouveau : ajout d'une regex stricte */
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } })
        .lowercase()
        .required(),

    
    password: Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/)
        .required(),
});

export default userschema;
