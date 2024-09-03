# SkillSnapWeb

SkillSnapWeb is the web-based companion to the SkillSnap mobile application. This repository contains the source code for the SkillSnap web app, which allows users to create, manage, and showcase their portfolios online. SkillSnapWeb is built with Next.js, TypeScript, and Tailwind CSS, and supports modern web design practices, including dark mode.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design**: A fully responsive web app that looks great on all devices.
- **Dark Mode**: Supports dark and light modes, adapting to the user's system preferences.
- **Portfolio Management**: Users can create and manage their portfolios with an easy-to-use interface.
- **Authentication**: Secure user authentication with Firebase.
- **Mobile App Promotion**: Encourages users to download the SkillSnap mobile app for the best experience.
- **Open Source**: The project is open-source and encourages contributions from the community.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/abdelillahbel/SkillSnapWeb.git
    cd SkillSnapWeb
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env.local` file** in the root directory and add your environment variables. Here's an example:

    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```

5. **Open your browser** and navigate to `http://localhost:3000`.

## Usage

- **Home Page**: The home page introduces the platform and allows users to sign up or log in.
- **Portfolio Pages**: Users can view and edit their portfolios, showcasing their skills, projects, and experience.
- **Profile Management**: Users can update their profiles, including personal information and contact details.
- **Privacy Policy**: Accessible at `/privacy`, explaining how user data is handled.

## Project Structure

```bash
SkillSnapWeb/
├── app/                # Main application directory
│   ├── (username)/     # Dynamic user profile pages
│   ├── privacy/        # Privacy policy page
│   ├── signup/         # Signup page
│   ├── layout.tsx      # Layout for consistent UI
│   └── page.tsx        # Main page of the app
├── components/         # Reusable UI components
├── public/             # Public assets (images, etc.)
├── styles/             # Global styles and Tailwind setup
├── .env.local          # Environment variables (not included in the repo)
├── .gitignore          # Git ignore file
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation