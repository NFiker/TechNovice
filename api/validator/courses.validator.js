import Joi  from 'joi';

const courseSchema = Joi.object({
    course_title: Joi.string().min(3).max(255).required(),
    course_desc: Joi.string().required(),
    course_tags: Joi.array().items(Joi.string().min(2).max(20).required()),
    course_content: Joi.string().required(),
    author_user_id: Joi.number().required(),
});

export default courseSchema ;
