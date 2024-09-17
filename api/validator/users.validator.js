import Joi from 'joi';

const userschema = Joi.object({
    // Contient une chaine obligatoire, doit contenir des caractères alphanumériques, au moins 3 caractères mais pas plus de 30
    nickname: Joi.string().alphanum().min(3).max(30).required(),
    first_name: Joi.string().min(3).max(30).required(),
    last_name: Joi.string().min(3).max(30).required(),
    role_name: Joi.string().min(3).max(30).required(),

    // une chaîne d'adresse e-mail valide doit avoir deux parties de domaine, par exemple@example.com et le TLD doit être .com ou .net ou .fr
    mail: Joi.string()
        .pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/) /* nouveau : ajout d'une regex stricte */
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } })
        .lowercase()
        .required(),

    // Une chaine facultative, doit satisfaire le modèle d'expression régulière personnalisé et doit être accompagné repeat_password et égal à celui-ci
    password: Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/)
        .required(),
});

export default userschema;
