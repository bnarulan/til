import { useState } from "react";
import Navbar from "@/components/Navbar";
import { BookOpen, Users, Clock, Award, ArrowRight, Star } from "lucide-react";

const courses = [
  {
    id: "beginners",
    title: "Course for Beginners",
    description:
      "Perfect for those just starting their Kazakh language journey. Learn fundamental vocabulary, basic grammar, and essential phrases through interactive lessons.",
    level: "Beginner",
    duration: "6 months",
    students: "2,450",
    rating: 4.8,
    thumbnail:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&h=500&q=80",
    features: [
      "Alphabet and pronunciation",
      "Basic vocabulary (500+ words)",
      "Essential grammar rules",
      "Common phrases and expressions",
      "Cultural context and traditions",
    ],
    bgColor: "bg-[#DDF7F5] dark:bg-[#1A2F2B]",
    borderColor: "border-[#17C8AD] dark:border-[#1ED4B0]",
    accentColor: "#17C8AD",
    chapters: 12,
    progress: 0,
  },
  {
    id: "main-course",
    title: "Main Course ECOTIL",
    description:
      "Designed for native speakers and advanced learners who want to perfect their Kazakh language skills, explore literature, and master complex linguistic concepts.",
    level: "Advanced",
    duration: "12 months",
    students: "1,890",
    rating: 4.9,
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=500&q=80",
    features: [
      "Advanced grammar and syntax",
      "Literary analysis and composition",
      "Regional dialects and variations",
      "Professional communication",
      "Cultural heritage deep dive",
    ],
    bgColor: "bg-[#EFE9FF] dark:bg-[#2A2440]",
    borderColor: "border-[#805EFF] dark:border-[#9A7DFF]",
    accentColor: "#805EFF",
    chapters: 18,
    progress: 0,
  },
];

function CourseCard({ course }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleEnroll = (courseId) => {
    // In a real app, this would handle enrollment logic
    window.location.href = `/courses/${courseId}`;
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border transition-all duration-300 ease-out cursor-pointer ${course.bgColor} ${course.borderColor} ${
        isHovered ? "shadow-xl scale-105" : "shadow-md hover:shadow-lg"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Level Badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: course.accentColor }}
          >
            {course.level}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
          <Star size={12} className="text-yellow-500 fill-current" />
          <span className="text-xs font-semibold text-gray-800">
            {course.rating}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="font-poppins font-bold text-xl text-[#09121F] dark:text-[#E5E7EB] mb-2">
          {course.title}
        </h3>

        <p className="font-inter text-sm text-[#64748B] dark:text-[#9CA3AF] mb-4 leading-relaxed">
          {course.description}
        </p>

        {/* Course Stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users size={14} />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen size={14} />
            <span>{course.chapters} chapters</span>
          </div>
        </div>

        {/* Course Features */}
        <div className="mb-6">
          <h4 className="font-montserrat font-semibold text-sm text-[#09121F] dark:text-[#E5E7EB] mb-2">
            What you'll learn:
          </h4>
          <ul className="space-y-1">
            {course.features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-xs text-[#64748B] dark:text-[#9CA3AF]"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0"
                  style={{ backgroundColor: course.accentColor }}
                ></div>
                {feature}
              </li>
            ))}
            {course.features.length > 3 && (
              <li className="text-xs text-[#6D7A8B] dark:text-[#9CA3AF] ml-3.5">
                +{course.features.length - 3} more topics
              </li>
            )}
          </ul>
        </div>

        {/* Enroll Button */}
        <button
          onClick={() => handleEnroll(course.id)}
          className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-montserrat font-semibold text-white transition-all duration-200 transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: course.accentColor }}
        >
          <span>Start Learning</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="80" cy="80" r="20" fill={course.accentColor} />
          <circle cx="60" cy="90" r="10" fill={course.accentColor} />
          <circle cx="90" cy="60" r="8" fill={course.accentColor} />
        </svg>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#121212] transition-colors duration-200">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#001D2E] via-[#002A3F] to-[#003551] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Choose Your Learning Path
          </h1>
          <p className="font-inter text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Select the course that best fits your current level and learning
            goals. Both courses are designed to provide comprehensive Kazakh
            language education.
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <div className="font-poppins font-bold text-2xl text-[#38C5B0]">
                4,340+
              </div>
              <div className="font-inter text-sm text-gray-300">
                Active Students
              </div>
            </div>
            <div className="text-center">
              <div className="font-poppins font-bold text-2xl text-[#38C5B0]">
                30+
              </div>
              <div className="font-inter text-sm text-gray-300">
                Total Chapters
              </div>
            </div>
            <div className="text-center">
              <div className="font-poppins font-bold text-2xl text-[#38C5B0]">
                4.8★
              </div>
              <div className="font-inter text-sm text-gray-300">
                Average Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-[#1E1E1E] border border-[#E7ECF3] dark:border-[#2A2A2A] rounded-xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Award className="text-[#38C5B0] mr-3" size={32} />
                <h3 className="font-poppins font-bold text-xl text-[#09121F] dark:text-[#E5E7EB]">
                  Certificate of Completion
                </h3>
              </div>
              <p className="font-inter text-[#64748B] dark:text-[#9CA3AF] mb-4">
                Upon successful completion of either course, you'll receive an
                official ECOTIL certificate that validates your Kazakh language
                proficiency level.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center text-[#6D7A8B] dark:text-[#9CA3AF]">
                  <div className="w-2 h-2 bg-[#17C8AD] rounded-full mr-2"></div>
                  Industry Recognized
                </div>
                <div className="flex items-center text-[#6D7A8B] dark:text-[#9CA3AF]">
                  <div className="w-2 h-2 bg-[#805EFF] rounded-full mr-2"></div>
                  Downloadable PDF
                </div>
                <div className="flex items-center text-[#6D7A8B] dark:text-[#9CA3AF]">
                  <div className="w-2 h-2 bg-[#FF983B] rounded-full mr-2"></div>
                  LinkedIn Shareable
                </div>
              </div>
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
