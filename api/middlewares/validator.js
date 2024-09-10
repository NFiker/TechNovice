//* middlewares/Validator.js
//Une bibliothèque qui permet de créer facilement des erreurs HTTP
import createHttpError from 'http-errors'

//* Importe tous les validadors 
import validators from '../validator/index.js'

// utilisattion de validator pour verifiér les données
export default  function(validator) {
    //Cette méthode vérifie si l'objet validators possède une propriété spécifique appelée validator. 
    //Si ce n'est pas le cas, une erreur est levée.
    if (!Object.prototype.hasOwnProperty.call(validators, validator)) {
        throw new Error(`'${validator}' validator is not exist`)
    }

    return async function(req, res, next) {
        try {
            //on utilise un validateur spécifique (validator) pour valider les données contenues dans req.body
            // validateAsync : C'est une méthode asynchrone qui vérifie les données de manière non bloquante (asynchrone)
            const validated = await validators[validator].validateAsync(req.body)
            req.body = validated
            next()
        } catch (err) {
            //Si l'erreur vient de Joi, cela signifie que les données envoyées par le client ne sont pas conformes (erreur HTTP 422 )
            //Cette ligne vérifie si l'erreur provient de la validation (via la bibliothèque Joi).
            if (err.isJoi) {
                return next(createHttpError(422, {message: err.message}))
            }
            // Si l'erreur n'est pas liée à la validation,  cette ligne crée une erreur HTTP 500
            next(createHttpError(500))
        }        
    }
}
