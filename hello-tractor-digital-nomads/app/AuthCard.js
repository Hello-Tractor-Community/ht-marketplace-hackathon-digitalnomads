export default function AuthCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [hasAccount, setHasAccount] = useState(true); // Tracks whether the user has an account
  
    const [email, setEmail] = useState(""); // Tracks email input
    const [password, setPassword] = useState(""); // Tracks password input
    const [error, setError] = useState(null); // Tracks errors
    const [loading, setLoading] = useState(false); // Tracks loading state
  
  
    const handleSignIn = async (e) => {
      e.preventDefault();  // prevent page reload
      setLoading(true);
      setError(null);
  
      console.log('This is the email and password', email, password)
  
      try {
        const response = await fetch("/api/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.error || "Failed to sign in");
        }
  
        //Succeccfully signed in
        console.log("Login successfully", data);
        alert("Login successful");
        //You can store the access token in localStorage or state here
        //localStorage.setItem("access_token", data.access_token);
      } catch (err) {
        console.log("Email and password passed are", email, password);
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="relative flex items-center justify-center min-h-screen">
        {/* Split Background */}
  
        <div className="absolute inset-0 flex">
          {/* Left Side with Pink Background and Image */}
          <div className="w-1/2 bg-primary relative flex items-center justify-center">
            <img
              src="/AzizaGesture1.png"
              alt="Left Side Image"
              className="object-contain w-3/4 h-auto"
              style={{ maxHeight: "80%" }}
            />
          </div>
  
          {/* Right Side with White Background and Image */}
          <div className="w-1/2 bg-white relative flex items-center justify-center">
            <img
              src="/GitongaGesture1.png"
              alt="Right Side Image"
              className="object-contain w-full h-auto"
              style={{ maxHeight: "60%" }}
            />
          </div>
  
          <div className="absolute top-4 left-4">
            <img
              src="/HT_LOGO_RGB_white 1.png"
              alt="Logo"
              className="w-48 h-auto" /* Adjust width to size the logo */
            />
          </div>
        </div>
  
  
  
        {/* Auth Card */}
        <div className="z-10 p-8 w-[300px] lg:w-[500px] h-[600px] bg-white rounded-lg shadow-md">
          {/* Top Toggle Link */}
          <div className="text-right mb-6">
            {hasAccount ? (
              <>
                <span className="text-sm text-gray-500">No Account? </span>
                <button
                  onClick={() => setHasAccount(false)}
                  className="text-sm text-pink-500 hover:text-pink-600"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <span className="text-sm text-gray-500">Already have an account? </span>
                <button
                  onClick={() => setHasAccount(true)}
                  className="text-sm text-pink-500 hover:text-pink-600"
                >
                  Sign In
                </button>
              </>
            )}
          </div>
  
          {/* Dynamic Card Title */}
          <h1 className="text-2xl font-avenir font-extralight text-gray-900">Welcome to Hello Tractor</h1>
          <h2 className="text-5xl font-bold text-gray-900 font-merriweather">{hasAccount ? "Sign In" : "Sign Up"}</h2>
  
          {/* Dynamic Form */}
          <form className="mt-6" onSubmit={hasAccount ? handleSignIn : undefined}>
            {hasAccount ? (
              <>
                {/* Email/Username Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600" htmlFor="email">
                    Enter your username or email address
                  </label>
                  <input
                    type="email"
                    placeholder="Username or email address"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hibiscus"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
  
                {/* Password Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hibiscus"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {!showPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-400" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
  
                {/* Forgot Password */}
                <div className="flex items-center justify-end mb-4">
                  <a href="#" className="text-sm text-right text-hibiscus hover:text-pink-600">
                    Forgot Password
                  </a>
                </div>
              </>
            ) : (
              <>
                {/* Name Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
  
                {/* Email and Phone Number Inputs Side by Side */}
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div className="w-1/2 mb-4">
                    <label className="block text-sm font-medium text-gray-600" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>
              </>
            )}
  
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-hibiscus hover:bg-hibiscus w-full px-4 py-2 text-white rounded-lg"
            >
              {hasAccount ? "Sign In" : "Sign Up"}
            </button>
          </form>
  
          {/* Social Login Options */}
          <div>
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <img
                  className="w-5 h-5 mr-2"
                  src="google.png"
                  alt="Google"
                />
                {hasAccount ? "Sign In with Google" : "Sign Up with Google"}
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                <img
                  className="w-5 h-5 mr-2"
                  src="Facebook.png"
                  alt="Facebook"
                />
                {hasAccount ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }