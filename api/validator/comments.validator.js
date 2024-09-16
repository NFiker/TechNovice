import Joi  from 'joi';

const commentSchema = Joi.object({
    com_content: Joi.string().required(),
    user_id: Joi.number().required(),
    topic_id: Joi.number().required(),
});

export default commentSchema;
