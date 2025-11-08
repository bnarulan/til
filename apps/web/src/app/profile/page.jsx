import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Edit,
  Trophy,
  Users,
  Star,
  BookOpen,
  Target,
  Award,
  Settings,
  Camera,
} from "lucide-react";

// Mock user profile data
const userProfile = {
  id: 1,
  username: "Aigerim_KZ",
  email: "aigerim@example.com",
  fullName: "Aigerim Nazarbayeva",
  profilePicture:
    "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=300&h=300&q=80",
  totalPoints: 2850,
  rank: 1,
  joinDate: "2024-01-15",
  allianceId: 1,
  alliance: {
    name: "Altyn Orda",
    rank: 2,
    role: "Leader",
  },
  courses: [
    {
      id: "beginners",
      title: "Course for Beginners",
      progress: 95,
      points: 1850,
      chaptersCompleted: 11,
      totalChapters: 12,
      lastActivity: "2024-11-08",
    },
    {
      id: "main-course",
      title: "Main Course ECOTIL",
      progress: 45,
      points: 1000,
      chaptersCompleted: 4,
      totalChapters: 10,
      lastActivity: "2024-11-07",
    },
  ],
  achievements: [
    {
      id: 1,
      title: "First Steps",
      description: "Completed your first lesson",
      icon: "🎯",
      earned: true,
    },
    {
      id: 2,
      title: "Streak Master",
      description: "7-day learning streak",
      icon: "🔥",
      earned: true,
    },
    {
      id: 3,
      title: "Chapter Champion",
      description: "Completed 10 chapters",
      icon: "📚",
      earned: true,
    },
    {
      id: 4,
      title: "Point Collector",
      description: "Earned 2000+ points",
      icon: "⭐",
      earned: true,
    },
    {
      id: 5,
      title: "Alliance Leader",
      description: "Created or lead an alliance",
      icon: "👑",
      earned: true,
    },
    {
      id: 6,
      title: "Perfect Score",
      description: "100% on any chapter",
      icon: "💯",
      earned: false,
    },
  ],
};

function ProgressBar({ percentage, accentColor = "#38C5B0" }) {
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

function CourseCard({ course }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        bg-white dark:bg-[#1E1E1E] border border-[#E7ECF3] dark:border-[#2A2A2A] 
        rounded-xl p-6 transition-all duration-200 cursor-pointer
        ${isHovered ? "shadow-lg -translate-y-0.5" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => (window.location.href = `/courses/${course.id}`)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-montserrat font-bold text-lg text-[#04111C] dark:text-[#E5E7EB] mb-1">
            {course.title}
          </h3>
          <div className="flex items-center space-x-4 text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
            <span>
              {course.chaptersCompleted}/{course.totalChapters} chapters
            </span>
            <span>•</span>
            <span>{course.points} points</span>
          </div>
        </div>
        <div className="text-right">
          <div className="font-poppins font-bold text-2xl text-[#38C5B0]">
            {course.progress}%
          </div>
          <div className="font-inter text-xs text-[#6D7A8B] dark:text-[#9CA3AF]">
            complete
          </div>
        </div>
      </div>

      <ProgressBar percentage={course.progress} />

      <div className="mt-3 text-xs text-[#6D7A8B] dark:text-[#9CA3AF]">
        Last activity: {new Date(course.lastActivity).toLocaleDateString()}
      </div>
    </div>
  );
}

function AchievementBadge({ achievement }) {
  return (
    <div
      className={`
        p-4 rounded-xl border transition-all duration-200 text-center
        ${
          achievement.earned
            ? "bg-gradient-to-br from-[#38C5B0]/10 to-[#17C8AD]/5 border-[#38C5B0]/30 text-[#04111C] dark:text-[#E5E7EB]"
            : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600"
        }
      `}
    >
      <div className="text-2xl mb-2">{achievement.icon}</div>
      <h4 className="font-montserrat font-semibold text-sm mb-1">
        {achievement.title}
      </h4>
      <p className="font-inter text-xs">{achievement.description}</p>
      {!achievement.earned && (
        <div className="mt-2">
          <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
            Locked
          </span>
        </div>
      )}
    </div>
  );
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    fullName: userProfile.fullName,
    email: userProfile.email,
    username: userProfile.username,
  });

  const handleSave = () => {
    // In a real app, this would update the user profile via API
    setIsEditing(false);
  };

  const earnedAchievements = userProfile.achievements.filter((a) => a.earned);
  const memberSince = new Date(userProfile.joinDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
    },
  );

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#121212] transition-colors duration-200">
      <Navbar />

      {/* Profile Header */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#001D2E] via-[#002A3F] to-[#003551] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src={userProfile.profilePicture}
                alt={userProfile.fullName}
                className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
              />
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#38C5B0] hover:bg-[#32B5A1] rounded-full flex items-center justify-center transition-colors duration-200">
                <Camera size={20} className="text-white" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-4">
                {isEditing ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editForm.fullName}
                      onChange={(e) =>
                        setEditForm({ ...editForm, fullName: e.target.value })
                      }
                      className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/70"
                      placeholder="Full Name"
                    />
                    <input
                      type="text"
                      value={editForm.username}
                      onChange={(e) =>
                        setEditForm({ ...editForm, username: e.target.value })
                      }
                      className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/70"
                      placeholder="Username"
                    />
                  </div>
                ) : (
                  <>
                    <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-2">
                      {userProfile.fullName}
                    </h1>
                    <p className="font-inter text-xl text-gray-200">
                      @{userProfile.username}
                    </p>
                  </>
                )}
              </div>

              {/* Stats */}
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
                <div className="flex items-center space-x-2">
                  <Trophy className="text-[#38C5B0]" size={20} />
                  <span className="font-montserrat font-semibold">
                    Rank #{userProfile.rank}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-500" size={20} />
                  <span className="font-montserrat font-semibold">
                    {userProfile.totalPoints.toLocaleString()} Points
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-[#38C5B0]" size={20} />
                  <span className="font-montserrat font-semibold">
                    {userProfile.alliance.name}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="bg-[#38C5B0] hover:bg-[#32B5A1] text-white font-montserrat font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="border border-white/20 hover:bg-white/10 text-white font-montserrat font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center space-x-2 bg-[#38C5B0] hover:bg-[#32B5A1] text-white font-montserrat font-semibold px-6 py-2 rounded-lg transition-colors duration-200"
                    >
                      <Edit size={18} />
                      <span>Edit Profile</span>
                    </button>
                    <button className="flex items-center space-x-2 border border-white/20 hover:bg-white/10 text-white font-montserrat font-semibold px-6 py-2 rounded-lg transition-colors duration-200">
                      <Settings size={18} />
                      <span>Settings</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Progress */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="font-poppins font-bold text-2xl text-[#0B0F1A] dark:text-[#E5E7EB] mb-2">
              Course Progress
            </h2>
            <p className="font-inter text-[#6D7A8B] dark:text-[#9CA3AF]">
              Track your learning journey across all courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userProfile.courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-6 bg-white dark:bg-[#1E1E1E] transition-colors duration-200">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="font-poppins font-bold text-2xl text-[#0B0F1A] dark:text-[#E5E7EB] mb-2">
              Achievements
            </h2>
            <p className="font-inter text-[#6D7A8B] dark:text-[#9CA3AF]">
              {earnedAchievements.length} of {userProfile.achievements.length}{" "}
              badges earned
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {userProfile.achievements.map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Alliance & Stats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Alliance Info */}
            <div className="bg-white dark:bg-[#1E1E1E] border border-[#E7ECF3] dark:border-[#2A2A2A] rounded-xl p-6">
              <h3 className="font-montserrat font-bold text-xl text-[#04111C] dark:text-[#E5E7EB] mb-4">
                Alliance
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Altyn Orda"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-montserrat font-semibold text-lg text-[#04111C] dark:text-[#E5E7EB]">
                    {userProfile.alliance.name}
                  </h4>
                  <p className="font-inter text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
                    {userProfile.alliance.role} • Rank #
                    {userProfile.alliance.rank}
                  </p>
                </div>
              </div>
              <button
                onClick={() => (window.location.href = "/alianses")}
                className="w-full bg-[#38C5B0] hover:bg-[#32B5A1] text-white font-montserrat font-semibold py-2 rounded-lg transition-colors duration-200"
              >
                View Alliance
              </button>
            </div>

            {/* Statistics */}
            <div className="bg-white dark:bg-[#1E1E1E] border border-[#E7ECF3] dark:border-[#2A2A2A] rounded-xl p-6">
              <h3 className="font-montserrat font-bold text-xl text-[#04111C] dark:text-[#E5E7EB] mb-4">
                Statistics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-inter text-[#6D7A8B] dark:text-[#9CA3AF]">
                    Member Since:
                  </span>
                  <span className="font-montserrat font-semibold text-[#04111C] dark:text-[#E5E7EB]">
                    {memberSince}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-inter text-[#6D7A8B] dark:text-[#9CA3AF]">
                    Courses Enrolled:
                  </span>
                  <span className="font-montserrat font-semibold text-[#04111C] dark:text-[#E5E7EB]">
                    {userProfile.courses.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-inter text-[#6D7A8B] dark:text-[#9CA3AF]">
                    Chapters Completed:
                  </span>
                  <span className="font-montserrat font-semibold text-[#04111C] dark:text-[#E5E7EB]">
                    {userProfile.courses.reduce(
                      (sum, course) => sum + course.chaptersCompleted,
                      0,
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-inter text-[#6D7A8B] dark:text-[#9CA3AF]">
                    Average Progress:
                  </span>
                  <span className="font-montserrat font-semibold text-[#04111C] dark:text-[#E5E7EB]">
                    {Math.round(
                      userProfile.courses.reduce(
                        (sum, course) => sum + course.progress,
                        0,
                      ) / userProfile.courses.length,
                    )}
                    %
                  </span>
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
