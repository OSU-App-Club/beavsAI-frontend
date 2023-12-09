import { useEffect, useState } from "react";

interface Course {
  _id: string;
  index: string;
  term: string;
  crn: string;
  course_name: string;
  users?: string[];
}

interface HookResponse {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

const useCourses = (): HookResponse => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:8000/courses");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error: unknown) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error };
};

export default useCourses;
