import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import {
  ChevronRight,
  BookOpen,
  Clock,
  CheckCircle,
  Lock,
  Star,
  Users,
  Award,
} from "lucide-react";

// Mock course data
const coursesData = {
  beginners: {
    id: "beginners",
    title: "Course for Beginners",
    description:
      "Perfect for those just starting their Kazakh language journey",
    level: "Beginner",
    accentColor: "#17C8AD",
    bgGradient: "from-[#17C8AD] to-[#14B39A]",
    chapters: [
      {
        id: 1,
        title: "Introduction to Kazakh",
        progress: 100,
        topics: 8,
        isLocked: false,
      },
      {
        id: 2,
        title: "Alphabet and Pronunciation",
        progress: 85,
        topics: 12,
        isLocked: false,
      },
      {
        id: 3,
        title: "Basic Vocabulary",
        progress: 60,
        topics: 15,
        isLocked: false,
      },
      {
        id: 4,
        title: "Numbers and Counting",
        progress: 40,
        topics: 10,
        isLocked: false,
      },
      {
        id: 5,
        title: "Family and Relationships",
        progress: 20,
        topics: 14,
        isLocked: false,
      },
      {
        id: 6,
        title: "Colors and Shapes",
        progress: 0,
        topics: 8,
        isLocked: false,
      },
      {
        id: 7,
        title: "Food and Drinks",
        progress: 0,
        topics: 16,
        isLocked: true,
      },
      {
        id: 8,
        title: "Time and Calendar",
        progress: 0,
        topics: 12,
        isLocked: true,
      },
      {
        id: 9,
        title: "Weather and Seasons",
        progress: 0,
        topics: 9,
        isLocked: true,
      },
      {
        id: 10,
        title: "Basic Grammar Rules",
        progress: 0,
        topics: 18,
        isLocked: true,
      },
      {
        id: 11,
        title: "Common Phrases",
        progress: 0,
        topics: 20,
        isLocked: true,
      },
      {
        id: 12,
        title: "Cultural Context",
        progress: 0,
        topics: 11,
        isLocked: true,
      },
    ],
  },
  "main-course": {
    id: "main-course",
    title: "Main Course ECOTIL",
    description:
      "Advanced Kazakh language mastery for native speakers and experts",
    level: "Advanced",
    accentColor: "#805EFF",
    bgGradient: "from-[#805EFF] to-[#7354E6]",
    chapters: [
      {
        id: 1,
        title: "Advanced Grammar Structures",
        progress: 100,
        topics: 22,
        isLocked: false,
      },
      {
        id: 2,
        title: "Literary Analysis Techniques",
        progress: 95,
        topics: 18,
        isLocked: false,
      },
      {
        id: 3,
        title: "Regional Dialects Study",
        progress: 78,
        topics: 25,
        isLocked: false,
      },
      {
        id: 4,
        title: "Historical Linguistics",
        progress: 45,
        topics: 20,
        isLocked: false,
      },
      {
        id: 5,
        title: "Poetry and Verse Forms",
        progress: 30,
        topics: 16,
        isLocked: false,
      },
      {
        id: 6,
        title: "Professional Communication",
        progress: 15,
        topics: 24,
        isLocked: false,
      },
      {
        id: 7,
        title: "Academic Writing",
        progress: 0,
        topics: 19,
        isLocked: false,
      },
      {
        id: 8,
        title: "Comparative Linguistics",
        progress: 0,
        topics: 21,
        isLocked: true,
      },
      {
        id: 9,
        title: "Cultural Heritage Deep Dive",
        progress: 0,
        topics: 17,
        isLocked: true,
      },
      {
        id: 10,
        title: "Modern Usage and Evolution",
        progress: 0,
        topics: 23,
        isLocked: true,
      },
      // ... continue for 18 chapters total
    ],
  },
};

function ProgressBar({ percentage, accentColor }) {
  return (
    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-300"
        style={{
          width: `${percentage}%`,
          backgroundColor: accentColor,
        }}
      />
    </div>
  );
}

function ChapterCard({ chapter, courseAccentColor, onChapterClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusIcon = () => {
    if (chapter.progress === 100) {
      return <CheckCircle size={20} className="text-green-500" />;
    } else if (chapter.isLocked) {
      return <Lock size={20} className="text-gray-400" />;
    } else if (chapter.progress > 0) {
      return <BookOpen size={20} style={{ color: courseAccentColor }} />;
    } else {
      return <BookOpen size={20} className="text-gray-400" />;
    }
  };

  const getStatusText = () => {
    if (chapter.progress === 100) return "Completed";
    if (chapter.isLocked) return "Locked";
    if (chapter.progress > 0) return "In Progress";
    return "Not Started";
  };

  return (
    <div
      className={`
        bg-white dark:bg-[#1E1E1E] border border-[#E7ECF3] dark:border-[#2A2A2A] 
        rounded-xl p-6 cursor-pointer transition-all duration-200 
        ${isHovered && !chapter.isLocked ? "shadow-lg -translate-y-0.5" : ""}
        ${chapter.isLocked ? "opacity-60 cursor-not-allowed" : "hover:shadow-lg"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => !chapter.isLocked && onChapterClick(chapter.id)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm"
              style={{
                backgroundColor: chapter.isLocked
                  ? "#9CA3AF"
                  : courseAccentColor,
              }}
            >
              {chapter.id}
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg text-[#04111C] dark:text-[#E5E7EB]">
                {chapter.title}
              </h3>
              <div className="flex items-center text-sm text-[#6D7A8B] dark:text-[#9CA3AF] space-x-4">
                <span>{chapter.topics} topics</span>
                <span>•</span>
                <span>{getStatusText()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-2">
          {getStatusIcon()}
          {!chapter.isLocked && (
            <ChevronRight
              size={16}
              className="text-gray-400 group-hover:text-gray-600 transition-colors"
            />
          )}
        </div>
      </div>

      {/* Progress Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-montserrat font-medium text-[#04111C] dark:text-[#E5E7EB]">
            Progress
          </span>
          <span className="text-[#6D7A8B] dark:text-[#9CA3AF]">
            {chapter.progress}%
          </span>
        </div>
        <ProgressBar
          percentage={chapter.progress}
          accentColor={courseAccentColor}
        />
      </div>
    </div>
  );
}

export default function CoursePage({ params }) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading course data
    const courseData = coursesData[params.courseId];
    if (courseData) {
      setCourse(courseData);
    }
    setLoading(false);
  }, [params.courseId]);

  const handleChapterClick = (chapterId) => {
    window.location.href = `/courses/${params.courseId}/chapters/${chapterId}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#38C5B0] mx-auto mb-4"></div>
          <p className="text-[#6D7A8B] dark:text-[#9CA3AF]">
            Loading course...
          </p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#121212] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#04111C] dark:text-[#E5E7EB] mb-2">
            Course Not Found
          </h1>
          <p className="text-[#6D7A8B] dark:text-[#9CA3AF] mb-4">
            The course you're looking for doesn't exist.
          </p>
          <a
            href="/courses"
            className="text-[#38C5B0] hover:text-[#32B5A1] font-semibold"
          >
            Back to Courses
          </a>
        </div>
      </div>
    );
  }

  const completedChapters = course.chapters.filter(
    (ch) => ch.progress === 100,
  ).length;
  const totalProgress = Math.round(
    course.chapters.reduce((sum, ch) => sum + ch.progress, 0) /
      course.chapters.length,
  );

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#121212] transition-colors duration-200">
      <Navbar />

      {/* Course Header */}
      <section
        className={`py-16 px-6 bg-gradient-to-br ${course.bgGradient} text-white`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between space-y-6 lg:space-y-0">
            <div className="flex-1">
              <div className="mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                  {course.level}
                </span>
              </div>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
                {course.title}
              </h1>
              <p className="font-inter text-xl text-gray-100 mb-6 max-w-2xl">
                {course.description}
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <BookOpen size={20} />
                  <span>{course.chapters.length} Chapters</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={20} />
                  <span>
                    {course.id === "beginners" ? "2,450" : "1,890"} Students
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={20} className="fill-current" />
                  <span>
                    {course.id === "beginners" ? "4.8" : "4.9"} Rating
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[300px]">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold mb-2">{totalProgress}%</div>
                <p className="text-gray-200">Overall Progress</p>
              </div>

              <ProgressBar
                percentage={totalProgress}
                accentColor="rgba(255,255,255,0.8)"
              />

              <div className="flex justify-between mt-4 text-sm">
                <span>{completedChapters} completed</span>
                <span>
                  {course.chapters.length - completedChapters} remaining
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters List */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-poppins font-bold text-2xl text-[#0B0F1A] dark:text-[#E5E7EB]">
              Course Chapters
            </h2>
            <div className="flex items-center space-x-4 text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: course.accentColor }}
                ></div>
                <span>Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span>Locked</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.chapters.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                courseAccentColor={course.accentColor}
                onChapterClick={handleChapterClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Course Info */}
      <section className="py-16 px-6 bg-white dark:bg-[#1E1E1E] transition-colors duration-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Award className="text-[#38C5B0] mr-3" size={32} />
            <h3 className="font-poppins font-bold text-2xl text-[#09121F] dark:text-[#E5E7EB]">
              Earn Your Certificate
            </h3>
          </div>
          <p className="font-inter text-lg text-[#64748B] dark:text-[#9CA3AF] mb-6">
            Complete all chapters to earn your official ECOTIL certificate and
            showcase your
            {course.level === "Beginner" ? " foundational" : " advanced"} Kazakh
            language skills.
          </p>
          <div className="bg-[#F7F9FC] dark:bg-[#2A2A2A] rounded-xl p-6">
            <div className="text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
              Certificate Progress: {completedChapters} of{" "}
              {course.chapters.length} chapters completed
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}
