// app/signup/page.tsx

import { FaAndroid, FaGithub } from 'react-icons/fa';

export default function SignUpPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
            <div className="m-28 w-full max-w-lg rounded-md bg-white p-8 shadow-md dark:bg-gray-800">
                {/* Header */}
                <h1 className="mb-4 text-center text-3xl font-bold">Join SkillSnap</h1>
                <p className="mb-8 text-center text-lg">
                    We recommend using our mobile app for the best experience.
                </p>

                {/* Mobile App Promotion */}
                <div className="mb-8 flex flex-col items-center">
                    <FaAndroid className="mb-4 text-6xl text-green-500" />
                    <h2 className="mb-2 text-center text-2xl font-semibold">SkillSnap Android App</h2>
                    <p className="mb-4 text-center text-gray-600 dark:text-gray-400">
                        Download the SkillSnap Android app for a seamless experience on the go.
                    </p>
                    <a
                        href="https://github.com/abdelillahbel/SkillSnapAndroid/releases/download/v0.1.1/skillsnap.apk" // Replace with your app's Google Play link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-green-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-green-500"
                    >
                        Direct Download
                    </a>
                </div>

                {/* Open-Source Promotion */}
                <div className="mb-8 flex flex-col items-center">
                    <FaGithub className="mb-4 text-6xl text-gray-800 dark:text-white" />
                    <h2 className="mb-2 text-center text-2xl font-semibold">Open Source</h2>
                    <p className="mb-4 text-center text-gray-600 dark:text-gray-400">
                        SkillSnap is open-source! Contribute to our project or explore the code on GitHub.
                    </p>
                    <a
                        href="https://github.com/abdelillahbel/SkillSnapAndroid" // Replace with your GitHub repository link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-gray-800 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                    >
                        View on GitHub
                    </a>
                </div>

                {/* Alternative Sign Up Link */}
                <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Do you have any feedbacks?{' '}
                        <a
                            href="/contact"
                            className="text-blue-600 hover:underline dark:text-blue-400"
                        >
                            Tell us now
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
