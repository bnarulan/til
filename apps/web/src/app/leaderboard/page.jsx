import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Trophy, Star, Award, TrendingUp, Users, Medal } from "lucide-react";

// Mock leaderboard data
const leaderboardData = {
  beginners: [
    {
      id: 1,
      rank: 1,
      username: "Aigerim_KZ",
      email: "aigerim@example.com",
      profilePicture:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=150&h=150&q=80",
      points: 2850,
      progress: 95,
      chaptersCompleted: 11,
      totalChapters: 12,
      alliance: "Altyn Orda",
    },
    {
      id: 2,
      rank: 2,
      username: "Nurlan_2024",
      email: "nurlan@example.com",
      profilePicture:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      points: 2640,
      progress: 88,
      chaptersCompleted: 10,
      totalChapters: 12,
      alliance: "Көк Орда",
    },
    {
      id: 3,
      rank: 3,
      username: "Amina_Learn",
      email: "amina@example.com",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
      points: 2320,
      progress: 78,
      chaptersCompleted: 9,
      totalChapters: 12,
      alliance: "Altyn Orda",
    },
    {
      id: 4,
      rank: 4,
      username: "Bolat_Student",
      email: "bolat@example.com",
      profilePicture:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      points: 2190,
      progress: 74,
      chaptersCompleted: 8,
      totalChapters: 12,
      alliance: "Жас Ұлан",
    },
    {
      id: 5,
      rank: 5,
      username: "Sanya_Kaz",
      email: "sanya@example.com",
      profilePicture:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=150&h=150&q=80",
      points: 2050,
      progress: 68,
      chaptersCompleted: 8,
      totalChapters: 12,
      alliance: "Көк Орда",
    },
  ],
  "main-course": [
    {
      id: 1,
      rank: 1,
      username: "Meruert_Pro",
      email: "meruert@example.com",
      profilePicture:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150&q=80",
      points: 4280,
      progress: 92,
      chaptersCompleted: 9,
      totalChapters: 10,
      alliance: "Тіл Майстары",
    },
    {
      id: 2,
      rank: 2,
      username: "Arman_Elite",
      email: "arman@example.com",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      points: 4150,
      progress: 89,
      chaptersCompleted: 8,
      totalChapters: 10,
      alliance: "Ақын Жолы",
    },
    {
      id: 3,
      rank: 3,
      username: "Dinara_Advanced",
      email: "dinara@example.com",
      profilePicture:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      points: 3980,
      progress: 85,
      chaptersCompleted: 8,
      totalChapters: 10,
      alliance: "Тіл Майстары",
    },
    {
      id: 4,
      rank: 4,
      username: "Qairat_Scholar",
      email: "qairat@example.com",
      profilePicture:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
      points: 3760,
      progress: 80,
      chaptersCompleted: 7,
      totalChapters: 10,
      alliance: "Ақын Жолы",
    },
    {
      id: 5,
      rank: 5,
      username: "Zhanna_Master",
      email: "zhanna@example.com",
      profilePicture:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=150&h=150&q=80",
      points: 3590,
      progress: 76,
      chaptersCompleted: 7,
      totalChapters: 10,
      alliance: "Білім Жолы",
    },
  ],
};

function RankBadge({ rank }) {
  const getRankStyle = (rank) => {
    switch (rank) {
      case 1:
        return {
          bg: "bg-gradient-to-r from-yellow-400 to-yellow-600",
          text: "text-yellow-900",
          icon: <Trophy size={16} className="text-yellow-900" />,
        };
      case 2:
        return {
          bg: "bg-gradient-to-r from-gray-300 to-gray-500",
          text: "text-gray-800",
          icon: <Medal size={16} className="text-gray-800" />,
        };
      case 3:
        return {
          bg: "bg-gradient-to-r from-orange-400 to-orange-600",
          text: "text-orange-900",
          icon: <Award size={16} className="text-orange-900" />,
        };
      default:
        return {
          bg: "bg-gray-100 dark:bg-gray-600",
          text: "text-gray-600 dark:text-gray-200",
          icon: null,
        };
    }
  };

  const style = getRankStyle(rank);

  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${style.bg} ${style.text}`}
    >
      {rank <= 3 ? style.icon : rank}
    </div>
  );
}

function ToggleSwitch({ options, activeOption, onChange }) {
  return (
    <div className="bg-white dark:bg-[#1E1E1E] border border-[#E7ECF3] dark:border-[#2A2A2A] rounded-xl p-2 flex transition-colors duration-200">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`
            flex-1 px-4 py-2 rounded-lg font-montserrat font-medium text-sm transition-all duration-200
            ${
              activeOption === option.value
                ? "bg-[#38C5B0] text-white shadow-sm"
                : "text-[#6D7A8B] dark:text-[#9CA3AF] hover:text-[#04111C] dark:hover:text-[#E5E7EB] hover:bg-[#F7F9FC] dark:hover:bg-[#2A2A2A]"
            }
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function LeaderboardRow({ user, isTopThree }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        bg-white dark:bg-[#1E1E1E] border border-[#E7ECF3] dark:border-[#2A2A2A] 
        rounded-xl p-4 transition-all duration-200 
        ${isHovered ? "shadow-lg -translate-y-0.5" : ""}
        ${isTopThree ? "ring-2 ring-[#38C5B0] ring-opacity-20" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-4">
        {/* Rank Badge */}
        <RankBadge rank={user.rank} />

        {/* User Avatar */}
        <img
          src={user.profilePicture}
          alt={user.username}
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* User Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="font-montserrat font-semibold text-lg text-[#04111C] dark:text-[#E5E7EB] truncate">
              {user.username}
            </h3>
            {user.rank <= 3 && (
              <Star
                size={16}
                className="text-yellow-500 fill-current flex-shrink-0"
              />
            )}
          </div>
          <p className="font-inter text-sm text-[#6D7A8B] dark:text-[#9CA3AF] truncate">
            {user.alliance}
          </p>
        </div>

        {/* Progress Info */}
        <div className="hidden md:flex flex-col items-center">
          <div className="font-montserrat font-semibold text-sm text-[#04111C] dark:text-[#E5E7EB]">
            {user.progress}%
          </div>
          <div className="font-inter text-xs text-[#6D7A8B] dark:text-[#9CA3AF]">
            {user.chaptersCompleted}/{user.totalChapters} chapters
          </div>
        </div>

        {/* Points */}
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <div className="font-poppins font-bold text-xl text-[#38C5B0]">
              {user.points.toLocaleString()}
            </div>
            <div className="font-inter text-xs text-[#6D7A8B] dark:text-[#9CA3AF]">
              points
            </div>
          </div>
          <TrendingUp
            size={20}
            className="text-[#17C8AD] opacity-60 flex-shrink-0"
          />
        </div>
      </div>

      {/* Mobile Progress Info */}
      <div className="md:hidden mt-3 pt-3 border-t border-[#E7ECF3] dark:border-[#2A2A2A]">
        <div className="flex justify-between text-sm">
          <span className="text-[#6D7A8B] dark:text-[#9CA3AF]">
            Progress: {user.progress}%
          </span>
          <span className="text-[#6D7A8B] dark:text-[#9CA3AF]">
            {user.chaptersCompleted}/{user.totalChapters} chapters
          </span>
        </div>
      </div>
    </div>
  );
}

export default function LeaderboardPage() {
  const [selectedCourse, setSelectedCourse] = useState("beginners");

  const courseOptions = [
    { value: "beginners", label: "Course for Beginners" },
    { value: "main-course", label: "Main Course ECOTIL" },
  ];

  const currentLeaderboard = leaderboardData[selectedCourse];
  const courseTitle = courseOptions.find(
    (option) => option.value === selectedCourse,
  )?.label;

  // Add more mock data to show scrolling
  const extendedLeaderboard = [...currentLeaderboard];
  for (let i = 6; i <= 20; i++) {
    extendedLeaderboard.push({
      id: i,
      rank: i,
      username: `User_${i.toString().padStart(3, "0")}`,
      email: `user${i}@example.com`,
      profilePicture: `https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=150&h=150&q=80`,
      points: Math.max(500, 3000 - i * 150 + Math.floor(Math.random() * 100)),
      progress: Math.max(10, 90 - i * 4 + Math.floor(Math.random() * 10)),
      chaptersCompleted: Math.max(1, 12 - Math.floor(i / 2)),
      totalChapters: selectedCourse === "beginners" ? 12 : 10,
      alliance: [
        "Altyn Orda",
        "Көк Орда",
        "Жас Ұлан",
        "Тіл Майстары",
        "Білім Жолы",
      ][i % 5],
    });
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#121212] transition-colors duration-200">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#001D2E] via-[#002A3F] to-[#003551] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="text-[#38C5B0] mr-3" size={48} />
            <h1 className="font-poppins font-bold text-4xl md:text-5xl">
              Leaderboard
            </h1>
          </div>
          <p className="font-inter text-lg md:text-xl text-gray-200 mb-8">
            See how you rank among fellow Kazakh language learners
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <div className="font-poppins font-bold text-2xl text-[#38C5B0]">
                4,340+
              </div>
              <div className="font-inter text-sm text-gray-300">
                Total Learners
              </div>
            </div>
            <div className="text-center">
              <div className="font-poppins font-bold text-2xl text-[#38C5B0]">
                24
              </div>
              <div className="font-inter text-sm text-gray-300">
                Active Alliances
              </div>
            </div>
            <div className="text-center">
              <div className="font-poppins font-bold text-2xl text-[#38C5B0]">
                89K+
              </div>
              <div className="font-inter text-sm text-gray-300">
                Points Earned
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Selection */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div>
              <h2 className="font-poppins font-bold text-2xl text-[#0B0F1A] dark:text-[#E5E7EB] mb-2">
                Course Rankings
              </h2>
              <p className="font-inter text-[#6D7A8B] dark:text-[#9CA3AF]">
                Switch between courses to see different leaderboards
              </p>
            </div>

            <div className="md:min-w-[400px]">
              <ToggleSwitch
                options={courseOptions}
                activeOption={selectedCourse}
                onChange={setSelectedCourse}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Table */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h3 className="font-montserrat font-semibold text-lg text-[#04111C] dark:text-[#E5E7EB] mb-2">
              {courseTitle} Rankings
            </h3>
            <div className="flex items-center space-x-4 text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
              <div className="flex items-center space-x-2">
                <Users size={16} />
                <span>{extendedLeaderboard.length} learners</span>
              </div>
              <span>•</span>
              <span>Updated daily</span>
            </div>
          </div>

          <div className="space-y-3">
            {extendedLeaderboard.map((user) => (
              <LeaderboardRow
                key={user.id}
                user={user}
                isTopThree={user.rank <= 3}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="bg-[#38C5B0] hover:bg-[#32B5A1] text-white font-montserrat font-semibold px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105">
              Load More
            </button>
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
