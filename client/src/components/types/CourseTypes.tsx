export default interface CourseTypes {
    course_id: number;
    course_title: string;
    course_desc: string;
    course_tags: string[];
    course_content?: string;
    creation_date: string;
    update_date: string;
    author_user_id?: number | null;
}
