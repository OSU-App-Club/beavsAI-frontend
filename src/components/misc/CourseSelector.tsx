import { useCallback, useState } from "react";
import useCourses from "../../hooks/useCourses";

interface CourseSelectorProps {
  onSelectCourse: (courseId: string) => void;
}

export default function CourseSelector({
  onSelectCourse,
}: CourseSelectorProps) {
  const { courses, loading, error } = useCourses();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const courseId = event.target.value;
      setSelectedCourse(courseId);
      onSelectCourse(courseId);
    },
    [onSelectCourse]
  );

  return (
    <>
      <label className="w-full flex flex-col">
        <div className="label">
          <span className="label-text text-black dark:text-white">
            Available Courses
          </span>
        </div>
        <select
          className="select select-lg select-bordered w-full max-w-full bg-white dark:bg-gray-900 text-black dark:text-white shadow-inner shadow-slate-300 dark:shadow-slate-900"
          onChange={handleCourseChange}
          value={selectedCourse === null ? "Pick one" : selectedCourse}
        >
          <option defaultValue={"Pick One"}>Pick one</option>
          {loading && <option>Loading...</option>}
          {error && <option>Error</option>}
          {courses?.map((course) => (
            <option key={course._id} value={course._id}>
              {course.course_name}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
