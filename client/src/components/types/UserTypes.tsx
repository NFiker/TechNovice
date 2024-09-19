export default interface UserTypes {
    user_id: number;
    nickname: string;
    mail: string;
    password: string;
    first_name: string;
    last_name: string;
    role_name: string;
    comments: string[];
    watches: {
        course_id: number;
        user_id: number;
        start_date: string;
    }[];
}
