import CourseCard, { CourseType } from '../reusable-ui/CourseCard';

interface CatalogCourseProps {
    courses: CourseType[];
}

export default function CatalogCourse({ courses }: CatalogCourseProps) {
    return (
        <div className="py-8 px-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 w-full rounded-lg shadow-md p-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-400 mb-6">Catalogue des cours</h1>
                {/* Configuration de la grille pour s'adapter à différents écrans */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {courses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
