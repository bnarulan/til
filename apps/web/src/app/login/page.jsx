import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Basic validation
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      // In a real app, this would call your authentication API
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      // Redirect to homepage after successful login
      window.location.href = "/";
    } catch (error) {
      setErrors({ general: "Login failed. Please check your credentials." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F9FC] via-[#E8F4F8] to-[#DDF7F5] flex items-center justify-center p-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#38C5B0] rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#17C8AD] rounded-full opacity-5 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#38C5B0] to-[#17C8AD] rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-montserrat font-bold text-3xl text-[#38C5B0] mb-2">
            ECOTIL
          </h1>
          <h2 className="font-poppins font-bold text-2xl text-[#0B0F1A] dark:text-[#E5E7EB] mb-2">
            Welcome Back
          </h2>
          <p className="font-inter text-[#6D7A8B] dark:text-[#9CA3AF]">
            Continue your Kazakh language learning journey
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl shadow-lg border border-[#E7ECF3] dark:border-[#2A2A2A] p-8 transition-colors duration-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.general && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{errors.general}</p>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block font-montserrat font-medium text-sm text-[#04111C] dark:text-[#E5E7EB] mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail
                    size={18}
                    className="text-[#6D7A8B] dark:text-[#9CA3AF]"
                  />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`
                    w-full pl-10 pr-4 py-3 border rounded-lg font-inter text-sm
                    bg-white dark:bg-[#2A2A2A] text-[#04111C] dark:text-[#E5E7EB]
                    placeholder-[#6D7A8B] dark:placeholder-[#9CA3AF]
                    transition-colors duration-200 focus:outline-none focus:ring-2
                    ${
                      errors.email
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                        : "border-[#E7ECF3] dark:border-[#2A2A2A] focus:border-[#38C5B0] focus:ring-[#38C5B0]/20"
                    }
                  `}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-red-600 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block font-montserrat font-medium text-sm text-[#04111C] dark:text-[#E5E7EB] mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock
                    size={18}
                    className="text-[#6D7A8B] dark:text-[#9CA3AF]"
                  />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className={`
                    w-full pl-10 pr-12 py-3 border rounded-lg font-inter text-sm
                    bg-white dark:bg-[#2A2A2A] text-[#04111C] dark:text-[#E5E7EB]
                    placeholder-[#6D7A8B] dark:placeholder-[#9CA3AF]
                    transition-colors duration-200 focus:outline-none focus:ring-2
                    ${
                      errors.password
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                        : "border-[#E7ECF3] dark:border-[#2A2A2A] focus:border-[#38C5B0] focus:ring-[#38C5B0]/20"
                    }
                  `}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-[#F7F9FC] dark:hover:bg-[#2A2A2A] rounded-r-lg transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff
                      size={18}
                      className="text-[#6D7A8B] dark:text-[#9CA3AF]"
                    />
                  ) : (
                    <Eye
                      size={18}
                      className="text-[#6D7A8B] dark:text-[#9CA3AF]"
                    />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-red-600 text-xs">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#38C5B0] bg-white border-[#E7ECF3] rounded focus:ring-[#38C5B0] focus:ring-2 dark:bg-[#2A2A2A] dark:border-[#2A2A2A]"
                />
                <span className="ml-2 font-inter text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
                  Remember me
                </span>
              </label>
              <a
                href="/forgot-password"
                className="font-inter text-sm text-[#38C5B0] hover:text-[#32B5A1] transition-colors duration-200"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#38C5B0] hover:bg-[#32B5A1] disabled:bg-[#9CA3AF] text-white font-montserrat font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-[#38C5B0] focus:ring-opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E7ECF3] dark:border-[#2A2A2A]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-[#1E1E1E] text-[#6D7A8B] dark:text-[#9CA3AF] font-inter">
                  Don't have an account?
                </span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <a
                href="/register"
                className="font-montserrat font-semibold text-[#38C5B0] hover:text-[#32B5A1] transition-colors duration-200"
              >
                Create Account
              </a>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="font-inter text-sm text-[#6D7A8B] dark:text-[#9CA3AF]">
            By signing in, you agree to our{" "}
            <a
              href="/terms"
              className="text-[#38C5B0] hover:text-[#32B5A1] transition-colors duration-200"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="text-[#38C5B0] hover:text-[#32B5A1] transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

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
