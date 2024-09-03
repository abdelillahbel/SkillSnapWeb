// app/m/[username]/page.tsx
import { notFound } from 'next/navigation';
import { FaArrowDown } from "react-icons/fa6";
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Metadata } from 'next';
import Image from "next/image";
import { constructMetadata } from '@/lib/utils';
import Experience from '@/components/experience';
import MagicButton from '@/components/ui/magic-button';
import { BentoGridItem, BentoGrid } from '@/components/ui/bento-grid';
import Education from '@/components/education';
import { FloatingNav } from '@/components/floating-navbar';
import { navItems } from '@/assets/data';


type User = {
    name: string;
    bio: string;
    avatar: string;
    about: string;
    resume: string;
    education: Record<string, { degree: string; institution: string; year: string }>;
    experience: Record<string, { title: string; company: string; period: string; description: string }>;
    projects: Record<string, { title: string; description: string; image: string }>;
    contact: {
        email: string;
        phone: string;
        linkedin: string;
        github: string;
    };
};

async function getUserData(username: string): Promise<User | null> {
    const docRef = doc(db, 'userProfiles', username);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data() as User;
    } else {
        return null;
    }
}

// For static hosting

// Define the interface for user data
// interface _User {
//     username: string;
// }

// Fetch the usernames from Firestore and generate static params
// export async function generateStaticParams() {
//     // Reference to the users collection
//     const usersCollection = collection(db, 'userProfiles');

//     // Fetch all documents from the users collection
//     const usersSnapshot = await getDocs(usersCollection);

//     // Extract usernames from the documents
//     const users: _User[] = usersSnapshot.docs.map(doc => ({
//         username: doc.id,
//     }));

//     // Map the usernames to the format required by Next.js
//     return users.map(user => ({
//         username: user.username,
//     }));
// }


export async function generateMetadata({
    params,
}: {
    params: { username: string };
}): Promise<Metadata | undefined> {

    const user = await getUserData(params.username);


    if (!user) {
        notFound();
    }

    return constructMetadata({
        title: `${user.name} Profile`,
        description: `${user.bio}`,
        image: user.avatar,
        icons: user.avatar,
        noIndex: false
    });
}

export default async function UserProfile({ params }: { params: { username: string } }) {
    const user = await getUserData(params.username);

    if (!user) {
        notFound();
    }

    // Convert the object-based experience and projects to arrays
    const educationArray = Object.values(user.education || {});
    const experienceArray = Object.values(user.experience || {});
    const projectsArray = Object.values(user.projects || {});

    return (

        <div className="min-h-screen bg-[#04071d] py-1 text-gray-100 transition duration-500 dark:bg-[#04071d] dark:text-gray-100">

            {/* Navbar */}
            <FloatingNav navItems={navItems} />


            <div className="mx-auto mt-40 max-w-6xl px-6">
                <div className="mb-10 flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-6 flex items-center space-x-4 md:mb-0">
                        <Image
                            width={24}
                            height={24}
                            src={user.avatar}
                            alt={user.name}
                            className="size-24 rounded-full object-cover p-1 shadow-xl ring-4 ring-gray-700 dark:ring-gray-700"
                        />
                        <div>
                            <h1 className="text-2xl font-bold">{user.name}</h1>
                            <p className="text-gray-400 dark:text-gray-400">{user.bio}</p>
                        </div>
                    </div>
                    {/* <button
                        className="rounded-lg bg-gray-800 px-4 py-2 text-white shadow-md transition duration-300 hover:bg-gray-700 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-400"
                    // onClick={() => window.location.href = `mailto:${user.contact.email}`}
                    >
                        Contact
                    </button> */}
                    <div>

                        <a href={user.resume}>
                            <MagicButton
                                title="Download My CV"
                                icon={<FaArrowDown />}
                                position="right"
                            />
                        </a>

                        {/* <ModeToggle /> */}
                    </div>

                </div>


                <section id="about">
                    <h2 className="mb-6 text-3xl font-semibold">About</h2>
                    <BentoGrid className="mb-10 w-full">

                        <BentoGridItem
                            id={1}
                            key={1}
                            title={user.about}
                            description=""
                            // remove icon prop
                            // remove original classname condition
                            className="md:col-span-full md:row-span-2"
                            imgClassName=""
                            titleClassName="justify-start"
                            spareImg="/_static/b4.svg"
                        />

                    </BentoGrid>
                </section>

                <section id="education" className="mb-10">
                    <Education education={user.education} />
                </section>

                <section id="experience" className="mb-10">
                    <Experience experience={user.experience} />
                </section>



                <section id="projects" className="mb-10">
                    <h2 className="mb-6 text-3xl font-semibold">Projects</h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {projectsArray.map((project, index) => (
                            <div key={index} className="rounded-lg bg-[#0b0e24] p-6 shadow-lg dark:bg-[#0b0e24]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="mb-4 h-40 w-full rounded-t-lg object-cover"
                                />
                                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 id="contact" className="mb-6 text-3xl font-semibold">Contact</h2>
                    <div className="rounded-lg bg-[#0b0e24] p-6 shadow-lg dark:bg-[#0b0e24]">
                        <p className="mb-4">
                            <strong>Email:</strong> <a href={`mailto:${user.contact.email}`} className="text-blue-600 dark:text-blue-400">{user.contact.email}</a>
                        </p>
                        <p className="mb-4"><strong>Phone:</strong> {user.contact.phone}</p>
                        <p className="mb-4"><strong>LinkedIn:</strong> <a href={user.contact.linkedin} target="_blank" className="text-blue-600 dark:text-blue-400">

                            {/* {user.contact.linkedin} */}

                            <button
                                type="button"
                                className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                                style={{ backgroundColor: "#0077b5" }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </button>





                        </a></p>
                        <p><strong>GitHub:</strong> <a href={user.contact.github} target="_blank" className="text-blue-600 dark:text-blue-400">

                            {/* {user.contact.github} */}


                            <button
                                type="button"
                                className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                                style={{ backgroundColor: "#333" }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </button>

                        </a></p>
                    </div>
                </section>
            </div>

            <div className="mt-12 inline-flex w-full items-center justify-center">
                <hr className="my-8 h-1 w-64 rounded border-0 bg-gray-700 dark:bg-gray-700" />
                <div className="absolute left-1/2 -translate-x-1/2 bg-gray-900 px-4 dark:bg-gray-900">
                    <svg className="size-4 text-gray-300 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 18 14">
                        <path
                            d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>

            <p className="my-8 w-full text-center text-gray-500 dark:text-gray-400">
                This person controls their profile information, which can be hidden or deleted upon request or by adjusting visibility settings.
            </p>







            <footer className="m-4 rounded-lg bg-gray-800 shadow dark:bg-gray-800">
                <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">© 2024 <a href="https://devunion.dev/" className="hover:underline">DevUnion™</a>. All Rights Reserved.
                    </span>
                    <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="/about" className="me-4 hover:underline md:me-6">About</a>
                        </li>
                        <li>
                            <a href="/privacy" className="me-4 hover:underline md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/licensing" className="me-4 hover:underline md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
            </footer>



        </div>
    );
}
