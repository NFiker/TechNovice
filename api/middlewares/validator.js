
import createHttpError from 'http-errors'; 
import validators from '../validator/index.js';

//use Validator to check data
export default function Validator(validator) {
    //This method checks if the validators object has a specific property called validator. 
    if (!Object.prototype.hasOwnProperty.call(validators, validator)) {
        throw new Error(`'${validator}' validator is not exist`)
    }

    return async function (req, res, next) {
        try {
            // validateAsync: This is an asynchronous method that verifies data in a non-blocking manner
            const validated = await validators[validator].validateAsync(req.body)
            req.body = validated;
            next()
        } catch (err) {
            //If the error comes from Joi, it means that the data sent by the client is not compliant (HTTP error 400)
            if (err.isJoi) {
                return next(createHttpError(400, err));
            }
            // If the error is not related to validation, this line creates an HTTP 500 error
            next(createHttpError(500))
        }        
    }
}
