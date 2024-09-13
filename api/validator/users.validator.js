import  Joi  from 'joi';


const userschema = Joi.object({
    // Contient une chaine obligatoire, doit contenir des caractères alphanumériques, au moins 3 caractères mais pas plus de 30
    nickname: Joi.string().alphanum().min(3).max(30).required(),
    first_name: Joi.string().min(3).max(30).required(),
    last_name: Joi.string().min(3).max(30).required(),
    role_name: Joi.string().min(3).max(30).required(),

    // une chaîne d'adresse e-mail valide doit avoir deux parties de domaine, par exemple@example.com et le TLD doit être .com ou .net ou .fr
    mail: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'))  /* nouveau : ajout d'une regex stricte */
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } })
    .lowercase()
    .required(),
    
    // Une chaine facultative, doit satisfaire le modèle d'expression régulière personnalisé et doit être accompagné repeat_password et égal à celui-ci
    //^[a-zA-Z0-9]{8,30}$ : ^ et $ délimitent le début et la fin de la chaîne. 
    //[a-zA-Z0-9] correspond à toute lettre majuscule/minuscule et à tout chiffre.
    //{8,30} signifie que la longueur doit être comprise entre 8 et 30 caractères.
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required(),
})

export default userschema ;