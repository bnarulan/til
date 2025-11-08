import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Trophy, Users, BookOpen, Target, Star, Award } from "lucide-react";

// Mock data for top leaders
const topLeaders = [
  {
    id: 1,
    username: "Aigerim_KZ",
    points: 2850,
    profilePicture:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=150&h=150&q=80",
    rank: 1,
  },
  {
    id: 2,
    username: "Nurlan_2024",
    points: 2640,
    profilePicture:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rank: 2,
  },
  {
    id: 3,
    username: "Amina_Learn",
    points: 2320,
    profilePicture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    rank: 3,
  },
];

const features = [
  {
    id: 1,
    title: "Interactive Learning",
    description:
      "Engage with multimedia content and interactive exercises designed for Kazakh language mastery",
    icon: BookOpen,
    bgColor: "bg-[#DDF7F5] dark:bg-[#1A2F2B]",
    borderColor: "border-[#17C8AD] dark:border-[#1ED4B0]",
    iconColor: "#17C8AD",
  },
  {
    id: 2,
    title: "Alliance System",
    description:
      "Join teams and compete together while supporting each other's language learning journey",
    icon: Users,
    bgColor: "bg-[#EFE9FF] dark:bg-[#2A2440]",
    borderColor: "border-[#805EFF] dark:border-[#9A7DFF]",
    iconColor: "#805EFF",
  },
  {
    id: 3,
    title: "Gamified Progress",
    description:
      "Earn points, unlock achievements, and track your progress with our comprehensive scoring system",
    icon: Target,
    bgColor: "bg-[#FFF1E4] dark:bg-[#3D2B1A]",
    borderColor: "border-[#FF983B] dark:border-[#FFB366]",
    iconColor: "#FF983B",
  },
  {
    id: 4,
    title: "Leaderboards",
    description:
      "Compete with learners worldwide and see how you rank in our global Kazakh learning community",
    icon: Trophy,
    bgColor: "bg-[#E4F3FF] dark:bg-[#1A2E3D]",
    borderColor: "border-[#009EF7] dark:border-[#1DB5FF]",
    iconColor: "#009EF7",
  },
];

function RankBadge({ rank }) {
  const getRankStyle = (rank) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-gray-800";
      case 3:
        return "bg-gradient-to-r from-orange-400 to-orange-600 text-orange-900";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${getRankStyle(rank)}`}
    >
      {rank}
    </div>
  );
}

function FeatureCard({ feature }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = feature.icon;

  return (
    <div
      className={`relative p-6 rounded-xl border transition-all duration-200 ease-out cursor-pointer ${feature.bgColor} ${feature.borderColor} hover:shadow-lg hover:-translate-y-1`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-white dark:bg-[#262626] rounded-xl flex items-center justify-center mb-4 transition-colors duration-200">
          <IconComponent size={32} color={feature.iconColor} />
        </div>
        <h3 className="font-montserrat font-bold text-lg text-[#09121F] dark:text-[#E5E7EB] mb-2">
          {feature.title}
        </h3>
        <p className="font-inter text-sm text-[#64748B] dark:text-[#9CA3AF] leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function LeaderCard({ leader }) {
  return (
    <div className="bg-white dark:bg-[#1E1E1E] border border-[#E7ECF3] dark:border-[#2A2A2A] rounded-xl p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
      <div className="flex items-center space-x-4">
        <RankBadge rank={leader.rank} />
        <img
          src={leader.profilePicture}
          alt={leader.username}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h4 className="font-montserrat font-semibold text-[#04111C] dark:text-[#E5E7EB]">
            {leader.username}
          </h4>
          <div className="flex items-center text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
            <Star size={14} className="mr-1 text-yellow-500" />
            <span>{leader.points.toLocaleString()} points</span>
          </div>
        </div>
        <Award size={20} className="text-[#17C8AD]" />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#121212] transition-colors duration-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001D2E] via-[#002A3F] to-[#003551] text-white py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Master the <span className="text-[#38C5B0]">Kazakh Language</span>
          </h1>
          <p className="font-inter text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of learners in our interactive platform designed to
            make Kazakh language learning engaging, fun, and effective through
            gamification and community support.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-[#38C5B0] hover:bg-[#32B5A1] text-white font-montserrat font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105">
              Start Learning Today
            </button>
            <button className="border-2 border-white/20 hover:border-[#38C5B0] text-white font-montserrat font-semibold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-[#38C5B0] rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#38C5B0] rounded-full opacity-5 blur-2xl"></div>
      </section>

      {/* Our Functions Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#0B0F1A] dark:text-[#E5E7EB] mb-4">
              Our Platform Features
            </h2>
            <p className="font-inter text-lg text-[#64748B] dark:text-[#9CA3AF] max-w-2xl mx-auto">
              Discover the powerful tools and features that make ECOTIL the
              premier destination for learning Kazakh language
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Mini Leaderboard Section */}
      <section className="py-16 px-6 bg-white dark:bg-[#1E1E1E] transition-colors duration-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-bold text-3xl text-[#0B0F1A] dark:text-[#E5E7EB] mb-4">
              Top Learners This Week
            </h2>
            <p className="font-inter text-lg text-[#64748B] dark:text-[#9CA3AF]">
              See who's leading the way in our community
            </p>
          </div>

          <div className="space-y-4">
            {topLeaders.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/leaderboard"
              className="inline-flex items-center font-montserrat font-semibold text-[#38C5B0] hover:text-[#32B5A1] transition-colors duration-200"
            >
              View Full Leaderboard
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&display=swap');
        
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-onest { font-family: 'Onest', sans-serif; }
      `}</style>
    </div>
  );
}
