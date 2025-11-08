import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Shield,
  Users,
  Trophy,
  Star,
  Crown,
  TrendingUp,
  Award,
  Target,
} from "lucide-react";

// Mock user's alliance data
const userAlliance = {
  id: 1,
  name: "Altyn Orda",
  profilePicture:
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&h=300&q=80",
  description: "Golden Horde - United in learning, stronger together",
  totalPoints: 18750,
  rank: 2,
  memberCount: 8,
  members: [
    {
      id: 1,
      username: "Aigerim_KZ",
      profilePicture:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=150&h=150&q=80",
      points: 2850,
      role: "Leader",
      isCurrentUser: true,
    },
    {
      id: 2,
      username: "Amina_Learn",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
      points: 2320,
      role: "Member",
      isCurrentUser: false,
    },
    {
      id: 3,
      username: "Daniyar_Pro",
      profilePicture:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      points: 2180,
      role: "Member",
      isCurrentUser: false,
    },
    {
      id: 4,
      username: "Zhuldyz_Star",
      profilePicture:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=150&h=150&q=80",
      points: 1950,
      role: "Member",
      isCurrentUser: false,
    },
    {
      id: 5,
      username: "Arman_Cool",
      profilePicture:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      points: 1800,
      role: "Member",
      isCurrentUser: false,
    },
  ],
};

// Mock overall alliances leaderboard data
const allianceLeaderboard = [
  {
    id: 1,
    rank: 1,
    name: "Тіл Майстары",
    profilePicture:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f51?auto=format&fit=crop&w=300&h=300&q=80",
    totalPoints: 22450,
    memberCount: 12,
    avgPointsPerMember: 1871,
  },
  {
    id: 2,
    rank: 2,
    name: "Altyn Orda",
    profilePicture:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&h=300&q=80",
    totalPoints: 18750,
    memberCount: 8,
    avgPointsPerMember: 2344,
    isUserAlliance: true,
  },
  {
    id: 3,
    rank: 3,
    name: "Көк Орда",
    profilePicture:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=300&h=300&q=80",
    totalPoints: 17890,
    memberCount: 10,
    avgPointsPerMember: 1789,
  },
  {
    id: 4,
    rank: 4,
    name: "Ақын Жолы",
    profilePicture:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=300&h=300&q=80",
    totalPoints: 16420,
    memberCount: 9,
    avgPointsPerMember: 1824,
  },
  {
    id: 5,
    rank: 5,
    name: "Жас Ұлан",
    profilePicture:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=300&h=300&q=80",
    totalPoints: 15680,
    memberCount: 11,
    avgPointsPerMember: 1425,
  },
  {
    id: 6,
    rank: 6,
    name: "Білім Жолы",
    profilePicture:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=300&h=300&q=80",
    totalPoints: 14290,
    memberCount: 7,
    avgPointsPerMember: 2041,
  },
];

function RankBadge({ rank }) {
  const getRankStyle = (rank) => {
    switch (rank) {
      case 1:
        return {
          bg: "bg-gradient-to-r from-yellow-400 to-yellow-600",
          text: "text-yellow-900",
          icon: <Crown size={16} className="text-yellow-900" />,
        };
      case 2:
        return {
          bg: "bg-gradient-to-r from-gray-300 to-gray-500",
          text: "text-gray-800",
          icon: <Trophy size={16} className="text-gray-800" />,
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
      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${style.bg} ${style.text}`}
    >
      {rank <= 3 ? style.icon : rank}
    </div>
  );
}

function MemberCard({ member }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        bg-white dark:bg-[#2A2A2A] rounded-lg p-4 transition-all duration-200 
        ${isHovered ? "shadow-lg -translate-y-0.5" : "shadow-sm"}
        ${member.isCurrentUser ? "ring-2 ring-[#38C5B0] ring-opacity-30" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            src={member.profilePicture}
            alt={member.username}
            className="w-12 h-12 rounded-full object-cover"
          />
          {member.role === "Leader" && (
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#38C5B0] rounded-full flex items-center justify-center">
              <Crown size={12} className="text-white" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h4 className="font-montserrat font-semibold text-sm text-[#04111C] dark:text-[#E5E7EB] truncate">
              {member.username}
            </h4>
            {member.isCurrentUser && (
              <span className="px-2 py-0.5 bg-[#38C5B0] text-white text-xs rounded-full">
                You
              </span>
            )}
          </div>
          <p className="font-inter text-xs text-[#6D7A8B] dark:text-[#9CA3AF]">
            {member.role}
          </p>
        </div>

        <div className="text-right">
          <div className="font-poppins font-bold text-lg text-[#38C5B0]">
            {member.points.toLocaleString()}
          </div>
          <div className="font-inter text-xs text-[#6D7A8B] dark:text-[#9CA3AF]">
            points
          </div>
        </div>
      </div>
    </div>
  );
}

function AllianceLeaderboardRow({ alliance }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        bg-white dark:bg-[#1E1E1E] border border-[#E7ECF3] dark:border-[#2A2A2A] 
        rounded-xl p-5 transition-all duration-200 
        ${isHovered ? "shadow-lg -translate-y-0.5" : ""}
        ${alliance.isUserAlliance ? "ring-2 ring-[#38C5B0] ring-opacity-20" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-4">
        {/* Rank Badge */}
        <RankBadge rank={alliance.rank} />

        {/* Alliance Avatar */}
        <img
          src={alliance.profilePicture}
          alt={alliance.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        {/* Alliance Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-montserrat font-bold text-xl text-[#04111C] dark:text-[#E5E7EB] truncate">
              {alliance.name}
            </h3>
            {alliance.isUserAlliance && (
              <span className="px-2 py-1 bg-[#38C5B0] text-white text-xs rounded-full">
                Your Alliance
              </span>
            )}
            {alliance.rank <= 3 && (
              <Star
                size={18}
                className="text-yellow-500 fill-current flex-shrink-0"
              />
            )}
          </div>
          <div className="flex items-center space-x-4 text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
            <div className="flex items-center space-x-1">
              <Users size={14} />
              <span>{alliance.memberCount} members</span>
            </div>
            <div className="flex items-center space-x-1">
              <Target size={14} />
              <span>{alliance.avgPointsPerMember} avg/member</span>
            </div>
          </div>
        </div>

        {/* Points */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="font-poppins font-bold text-2xl text-[#38C5B0]">
              {alliance.totalPoints.toLocaleString()}
            </div>
            <div className="font-inter text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
              total points
            </div>
          </div>
          <TrendingUp
            size={24}
            className="text-[#17C8AD] opacity-60 flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
}

export default function AliansesPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#121212] transition-colors duration-200">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#001D2E] via-[#002A3F] to-[#003551] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="text-[#38C5B0] mr-3" size={48} />
            <h1 className="font-poppins font-bold text-4xl md:text-5xl">
              Alianses
            </h1>
          </div>
          <p className="font-inter text-lg md:text-xl text-gray-200 mb-8">
            Join forces with fellow learners and compete as a team
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
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
                186
              </div>
              <div className="font-inter text-sm text-gray-300">
                Total Members
              </div>
            </div>
            <div className="text-center">
              <div className="font-poppins font-bold text-2xl text-[#38C5B0]">
                125K+
              </div>
              <div className="font-inter text-sm text-gray-300">
                Alliance Points
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User's Alliance Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-[#0B0F1A] dark:text-[#E5E7EB] mb-8 text-center">
            Your Alliance
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Alliance Info Card */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-[#1E1E1E] border border-[#E7ECF3] dark:border-[#2A2A2A] rounded-xl p-6">
                {/* Alliance Header */}
                <div className="text-center mb-6">
                  <img
                    src={userAlliance.profilePicture}
                    alt={userAlliance.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="font-montserrat font-bold text-2xl text-[#04111C] dark:text-[#E5E7EB] mb-2">
                    {userAlliance.name}
                  </h3>
                  <p className="font-inter text-sm text-[#6D7A8B] dark:text-[#9CA3AF] mb-4">
                    {userAlliance.description}
                  </p>

                  {/* Rank Badge */}
                  <div className="inline-flex items-center space-x-2 bg-[#F7F9FC] dark:bg-[#2A2A2A] rounded-lg px-4 py-2">
                    <Trophy className="text-[#38C5B0]" size={20} />
                    <span className="font-montserrat font-semibold text-[#04111C] dark:text-[#E5E7EB]">
                      Rank #{userAlliance.rank}
                    </span>
                  </div>
                </div>

                {/* Alliance Stats */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-inter text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
                      Total Points:
                    </span>
                    <span className="font-poppins font-bold text-lg text-[#38C5B0]">
                      {userAlliance.totalPoints.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-inter text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
                      Members:
                    </span>
                    <span className="font-montserrat font-semibold text-[#04111C] dark:text-[#E5E7EB]">
                      {userAlliance.memberCount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-inter text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
                      Avg per Member:
                    </span>
                    <span className="font-montserrat font-semibold text-[#04111C] dark:text-[#E5E7EB]">
                      {Math.round(
                        userAlliance.totalPoints / userAlliance.memberCount,
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Members List */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-[#1E1E1E] border border-[#E7ECF3] dark:border-[#2A2A2A] rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-montserrat font-bold text-xl text-[#04111C] dark:text-[#E5E7EB]">
                    Alliance Members
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
                    <Users size={16} />
                    <span>{userAlliance.memberCount} members</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userAlliance.members.map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
                </div>

                {userAlliance.members.length < userAlliance.memberCount && (
                  <div className="mt-4 text-center">
                    <button className="text-[#38C5B0] hover:text-[#32B5A1] font-montserrat font-semibold text-sm">
                      View All Members
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alliance Leaderboard */}
      <section className="py-16 px-6 bg-white dark:bg-[#1E1E1E] transition-colors duration-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-[#0B0F1A] dark:text-[#E5E7EB] mb-4">
              Alliance Leaderboard
            </h2>
            <p className="font-inter text-lg text-[#64748B] dark:text-[#9CA3AF]">
              See how all alliances rank against each other
            </p>
          </div>

          <div className="space-y-4">
            {allianceLeaderboard.map((alliance) => (
              <AllianceLeaderboardRow key={alliance.id} alliance={alliance} />
            ))}
          </div>

          {/* Load More */}
          <div className="mt-8 text-center">
            <button className="bg-[#38C5B0] hover:bg-[#32B5A1] text-white font-montserrat font-semibold px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105">
              View All Alliances
            </button>
          </div>
        </div>
      </section>

      {/* Join Alliance CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#38C5B0] to-[#32B5A1] rounded-xl p-8 text-white">
            <Shield className="mx-auto mb-4" size={48} />
            <h3 className="font-poppins font-bold text-2xl mb-4">
              Create Your Own Alliance
            </h3>
            <p className="font-inter text-lg mb-6 max-w-2xl mx-auto">
              Think you can lead a team to victory? Create your own alliance and
              invite friends to join your quest for Kazakh language mastery.
            </p>
            <button className="bg-white text-[#38C5B0] font-montserrat font-semibold px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
              Create Alliance
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
