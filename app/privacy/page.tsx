// app/apps/skillsnap/privacy/page.tsx

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-10 dark:bg-black md:px-0">
      <div className="max-w-3xl space-y-8 text-left text-gray-800 dark:text-gray-300">
        <h1 className="mb-8 text-center text-4xl font-bold">Privacy Policy</h1>
        
        <section>
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            Welcome to SkillSnap, a mobile application designed to help users capture and showcase their skills. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p>
            We collect various types of information to provide and improve our services. The types of data we collect include:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Personal Information:</strong> When you register for SkillSnap, we collect personal details such as your name, email address, and profile picture.
            </li>
            <li>
              <strong>Skills Data:</strong> Information about the skills you capture and showcase, including descriptions, images, and related metadata.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect information on how you interact with the app, such as features you use, the time spent on the app, and errors encountered.
            </li>
            <li>
              <strong>Device Information:</strong> Details about the device you use to access SkillSnap, such as the device model, operating system, and unique device identifiers.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
          <p>
            The information we collect is used to:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Provide and maintain the SkillSnap app.</li>
            <li>Personalize your experience and recommend features.</li>
            <li>Improve our app by analyzing user behavior and feedback.</li>
            <li>Communicate with you regarding updates, offers, and support.</li>
            <li>Ensure the security and integrity of our app.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Sharing Your Information</h2>
          <p>
            We do not sell your personal information. However, we may share your data with third parties under the following circumstances:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating the app and providing our services. These providers are obligated to keep your information confidential and use it only for the purposes for which we disclose it to them.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
            </li>
            <li>
              <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Data Security</h2>
          <p>
            We take the security of your data seriously and implement appropriate technical and organizational measures to protect it from unauthorized access, alteration, or disclosure. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Your Data Protection Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>The Right to Access:</strong> You have the right to request copies of your personal data.
            </li>
            <li>
              <strong>The Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.
            </li>
            <li>
              <strong>The Right to Erasure:</strong> You have the right to request that we erase your personal data under certain conditions.
            </li>
            <li>
              <strong>The Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data under certain conditions.
            </li>
            <li>
              <strong>The Right to Data Portability:</strong> You have the right to request that we transfer your data to another organization, or directly to you, under certain conditions.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last Updated&ldquo; date at the top. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:
          </p>
          <address className="not-italic">
            <strong>Email:</strong> privacy@skillsnap.com<br />
            <strong>Address:</strong> 1234 SkillSnap Ave, Tech City, TX 75001, USA
          </address>
        </section>

      </div>
    </div>
  );
}
