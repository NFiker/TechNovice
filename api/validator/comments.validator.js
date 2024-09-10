import Joi  from 'joi';

const commentSchema = Joi.object({
    com_content: Joi.string().required(),
    author_user_id: Joi.number().required(),
    topic_id: Joi.number().required(),
});

export default commentSchema;
