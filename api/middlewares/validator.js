//* middlewares/Validator.js

import createHttpError from 'http-errors';

//* Include joi to check error type
// import Joi from 'joi'

//* Include all validators
import Validators from '../validators/index.js';

export default function (validator) {
    //! If validator is not exist, throw err
    if (!Object.prototype.hasOwnProperty.call(Validators, validator)) {
        throw new Error(`'${validator}' validator is not exist`);
    }

    return async function (req, res, next) {
        try {
            const validated = await Validators[validator].validateAsync(req.body);
            req.body = validated;
            next();
        } catch (err) {
            //* Pass err to next
            //! If validation error occurs call next with HTTP 422. Otherwise HTTP 500
            if (err.isJoi) {
                return next(createHttpError(422, { message: err.message }));
            }
            next(createHttpError(500));
        }
    };
}
