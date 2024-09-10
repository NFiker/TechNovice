import Joi from 'joi';

const watchSchema = Joi.object({
    user_id: Joi.number().required(),
    course_id: Joi.number().required(),
});

export default watchSchema ;