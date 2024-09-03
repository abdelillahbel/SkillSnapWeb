// app/page.tsx

export default function Home() {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-600 py-20 text-white dark:from-blue-700 dark:to-blue-800">
          <h1 className="mb-4 text-5xl font-bold">Welcome to SkillSnap</h1>
          <p className="mb-8 max-w-2xl text-center text-xl">
            SkillSnap helps you capture and showcase your skills effortlessly. Create your portfolio, share your achievements, and connect with others.
          </p>
          <a
            href="#features"
            className="rounded-md bg-white px-8 py-3 font-semibold text-blue-600 shadow-lg transition hover:bg-gray-100"
          >
            Discover Features
          </a>
        </section>
  
        {/* Features Section */}
        <section id="features" className="px-4 py-20 md:px-0">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold">Capture Your Skills</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Easily add and organize your skills, experiences, and projects in a visually appealing portfolio.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold">Showcase Your Work</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create a beautiful portfolio page to share with employers, clients, and collaborators.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-md dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold">Connect & Grow</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with others, share your journey, and grow your network within the SkillSnap community.
              </p>
            </div>
          </div>
        </section>
  
        {/* Call to Action Section */}
        <section className="bg-gradient-to-b from-gray-200 to-gray-300 py-20 dark:from-gray-700 dark:to-gray-800">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Get Started with SkillSnap Today</h2>
            <p className="mb-8 text-xl">
              Sign up now and start building your professional portfolio in minutes!
            </p>
            <a
              href="/signup"
              className="rounded-md bg-blue-600 px-10 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-500"
            >
              Sign Up
            </a>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-100 py-6 dark:bg-gray-900">
          <div className="mx-auto max-w-4xl text-center text-gray-600 dark:text-gray-400">
            <p>&copy; 2024 SkillSnap. All rights reserved.</p>
            <nav className="mt-4">
              <a href="/" className="mx-4 hover:underline">
                Home
              </a>
              <a href="/privacy" className="mx-4 hover:underline">
                Privacy Policy
              </a>
              <a href="/contact" className="mx-4 hover:underline">
                Contact
              </a>
            </nav>
          </div>
        </footer>
      </div>
    );
  }
  