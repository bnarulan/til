import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, User } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", hasDropdown: false },
  {
    name: "Courses",
    href: "/courses",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "MAIN COURSE ECOTIL",
        href: "/courses/main-course",
        description: "For native speakers",
      },
      {
        name: "COURSE FOR BEGINNERS",
        href: "/courses/beginners",
        description: "For new learners",
      },
    ],
  },
  { name: "Leaderboard", href: "/leaderboard", hasDropdown: false },
  { name: "Alianses", href: "/alianses", hasDropdown: false },
];

// Mock user data - in a real app this would come from auth context
const currentUser = {
  id: 1,
  username: "user123",
  email: "user@example.com",
  profilePicture:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
  totalPoints: 1500,
  allianceId: 5,
};

function DropdownMenu({ items, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-[#1E1E1E] border border-[#E7ECF3] dark:border-[#2A2A2A] rounded-xl shadow-lg overflow-hidden z-50 transition-colors duration-200">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="block px-4 py-3 hover:bg-[#F7F9FC] dark:hover:bg-[#2A2A2A] transition-colors duration-150"
          onClick={onClose}
        >
          <div className="font-montserrat font-semibold text-sm text-[#04111C] dark:text-[#E5E7EB]">
            {item.name}
          </div>
          <div className="font-inter text-xs text-[#6D7A8B] dark:text-[#9CA3AF] mt-1">
            {item.description}
          </div>
        </a>
      ))}
    </div>
  );
}

function UserProfileDropdown({ user, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-[#1E1E1E] border border-[#E7ECF3] dark:border-[#2A2A2A] rounded-xl shadow-lg overflow-hidden z-50 transition-colors duration-200">
      <div className="p-4 border-b border-[#E7ECF3] dark:border-[#2A2A2A]">
        <div className="flex items-center space-x-3">
          <img
            src={user.profilePicture}
            alt={user.username}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-montserrat font-semibold text-sm text-[#04111C] dark:text-[#E5E7EB]">
              {user.username}
            </div>
            <div className="font-inter text-xs text-[#6D7A8B] dark:text-[#9CA3AF]">
              {user.email}
            </div>
            <div className="font-inter text-xs text-[#38C5B0] font-semibold">
              {user.totalPoints} points
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <a
          href="/profile"
          className="block px-4 py-2 font-inter text-sm text-[#04111C] dark:text-[#E5E7EB] hover:bg-[#F7F9FC] dark:hover:bg-[#2A2A2A] transition-colors duration-150"
          onClick={onClose}
        >
          View Profile
        </a>
        <a
          href="/settings"
          className="block px-4 py-2 font-inter text-sm text-[#04111C] dark:text-[#E5E7EB] hover:bg-[#F7F9FC] dark:hover:bg-[#2A2A2A] transition-colors duration-150"
          onClick={onClose}
        >
          Settings
        </a>
        <hr className="my-2 border-[#E7ECF3] dark:border-[#2A2A2A]" />
        <button
          className="w-full text-left px-4 py-2 font-inter text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-150"
          onClick={() => {
            // Handle logout
            onClose();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setActiveDropdown(null);
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleNavLinkHover = (linkName, hasDropdown) => {
    if (hasDropdown) {
      setActiveDropdown(linkName);
    }
  };

  const handleNavLinkLeave = () => {
    // Don't close immediately - allow time to move to dropdown
    setTimeout(() => {
      if (!document.querySelector(".dropdown-container:hover")) {
        setActiveDropdown(null);
      }
    }, 150);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#001D2E] border-b border-[#E7ECF3] dark:border-[#2A2A2A] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="font-montserrat font-bold text-2xl text-[#38C5B0] tracking-tight">
                ECOTIL
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative dropdown-container"
                onMouseEnter={() =>
                  handleNavLinkHover(link.name, link.hasDropdown)
                }
                onMouseLeave={handleNavLinkLeave}
              >
                <a
                  href={link.href}
                  className="flex items-center font-montserrat font-medium text-[#04111C] dark:text-[#E5E7EB] hover:text-[#38C5B0] dark:hover:text-[#38C5B0] transition-colors duration-200"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-200 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>
                {link.hasDropdown && (
                  <DropdownMenu
                    items={link.dropdownItems}
                    isVisible={activeDropdown === link.name}
                    onClose={() => setActiveDropdown(null)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* User Profile */}
          <div className="flex items-center">
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center space-x-2 p-1 rounded-lg hover:bg-[#F7F9FC] dark:hover:bg-[#2A2A2A] transition-colors duration-200"
              >
                <img
                  src={currentUser.profilePicture}
                  alt={currentUser.username}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <ChevronDown
                  size={14}
                  className={`text-[#6D7A8B] dark:text-[#9CA3AF] transition-transform duration-200 hidden md:block ${
                    isProfileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <UserProfileDropdown
                user={currentUser}
                isVisible={isProfileDropdownOpen}
                onClose={() => setIsProfileDropdownOpen(false)}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden ml-4 p-2 rounded-lg hover:bg-[#F7F9FC] dark:hover:bg-[#2A2A2A] transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-[#04111C] dark:text-[#E5E7EB]" />
              ) : (
                <Menu
                  size={24}
                  className="text-[#04111C] dark:text-[#E5E7EB]"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#E7ECF3] dark:border-[#2A2A2A] py-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    className="block px-4 py-2 font-montserrat font-medium text-[#04111C] dark:text-[#E5E7EB] hover:bg-[#F7F9FC] dark:hover:bg-[#2A2A2A] rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                  {link.hasDropdown && (
                    <div className="ml-4 space-y-1">
                      {link.dropdownItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 font-inter text-sm text-[#6D7A8B] dark:text-[#9CA3AF] hover:bg-[#F7F9FC] dark:hover:bg-[#2A2A2A] rounded-lg transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
