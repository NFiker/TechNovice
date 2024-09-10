import  Joi  from 'joi';

const topicSchema = Joi.object({
    topic_title: Joi.string().min(3).max(255).required(),
    topic_tag: Joi.array().items(Joi.string().max(20)),
    topic_content: Joi.string().required(),
    author_user_id: Joi.number().required(),
    course_id: Joi.number().required(),
});

export default topicSchema ;

