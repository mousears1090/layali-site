import { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Privacy Policy</h1>
          <p className="updated">Last updated: February 17, 2026</p>

          <p>
            This Privacy Policy describes how Layali ("we," "us," or "our")
            collects, uses, and protects your information when you use the
            Layali mobile application ("App"). We are committed to protecting
            your privacy and handling your data responsibly.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Account Information</h3>
          <p>
            When you create an account, we collect your email address and a
            display name you choose. If you sign in with Apple or Google, we
            receive only the information those providers share (typically your
            name and email).
          </p>

          <h3>1.2 Usage Data</h3>
          <p>
            We collect anonymous usage data to improve the App, including:
          </p>
          <ul>
            <li>Pages and features you interact with</li>
            <li>App version and device type</li>
            <li>Crash reports and performance metrics</li>
          </ul>

          <h3>1.3 Location Data</h3>
          <p>
            With your permission, we access your device's location to provide
            accurate prayer times and Qibla direction. Location data is
            processed on-device and is not stored on our servers. If you deny
            location access, the App defaults to Makkah, Saudi Arabia for
            prayer time calculations.
          </p>

          <h3>1.4 Reading Progress and Preferences</h3>
          <p>
            We store your Qur'an reading progress, bookmarks, dua favorites,
            prayer preferences, and notification settings. This data is
            synced to your account via Firebase Firestore so you can access
            it across devices.
          </p>

          <h3>1.5 Subscription Information</h3>
          <p>
            Subscription purchases are processed by Apple through the App
            Store and managed by RevenueCat. We do not collect or store your
            payment information (credit card numbers, billing address, etc.).
            We receive only subscription status information (active, expired,
            trial) from RevenueCat to determine your access level.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain the App's core functionality</li>
            <li>
              Calculate prayer times and Qibla direction based on your
              location
            </li>
            <li>Sync your reading progress and preferences across devices</li>
            <li>
              Manage your subscription status and provide access to premium
              features
            </li>
            <li>
              Send prayer time notifications and other alerts you have opted
              into
            </li>
            <li>Improve the App's performance, features, and user experience</li>
            <li>Respond to your support requests</li>
          </ul>

          <h2>3. Data Sharing</h2>
          <p>
            We do not sell, rent, or trade your personal information. We share
            data only with the following service providers who assist us in
            operating the App:
          </p>
          <ul>
            <li>
              <strong>Firebase (Google)</strong> — Authentication, cloud data
              storage, and crash reporting
            </li>
            <li>
              <strong>RevenueCat</strong> — Subscription management and
              entitlement verification
            </li>
            <li>
              <strong>Expo</strong> — Push notification delivery and over-the-air
              updates
            </li>
            <li>
              <strong>Al Quran Cloud API</strong> — Qur'anic text and audio
              recitation data
            </li>
          </ul>
          <p>
            These providers process data in accordance with their own privacy
            policies and are bound by data processing agreements where
            applicable.
          </p>

          <h2>4. Data Storage and Security</h2>
          <p>
            Your data is stored in Firebase Firestore servers located in the
            United States (us-east1 region). We implement industry-standard
            security measures including encryption in transit (TLS) and
            Firebase Security Rules to restrict unauthorized access. However,
            no method of electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your account data for as long as your account is active.
            If you delete your account, we will delete your personal data
            within 30 days, except where we are required to retain it by law.
            Anonymized usage data may be retained indefinitely for analytics
            purposes.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>
              <strong>Access</strong> — Request a copy of the data we hold
              about you
            </li>
            <li>
              <strong>Correction</strong> — Request correction of inaccurate
              data
            </li>
            <li>
              <strong>Deletion</strong> — Request deletion of your account and
              associated data
            </li>
            <li>
              <strong>Portability</strong> — Request your data in a portable
              format
            </li>
            <li>
              <strong>Opt-out</strong> — Disable notifications, location
              access, or analytics at any time through the App's settings or
              your device settings
            </li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:support@layali.app">support@layali.app</a>.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>
            The App is not directed at children under 13. We do not knowingly
            collect personal information from children under 13. If we become
            aware that a child under 13 has provided us with personal data, we
            will take steps to delete it promptly.
          </p>

          <h2>8. Push Notifications</h2>
          <p>
            With your permission, we send push notifications for prayer time
            reminders and other alerts you configure. You can manage
            notification preferences in the App's settings or through your
            device's system settings at any time.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            The App may contain links to third-party websites or services.
            We are not responsible for the privacy practices of these third
            parties. We encourage you to review their privacy policies before
            providing any information.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will
            notify you of material changes by updating the "Last updated"
            date at the top of this page and, where appropriate, through
            in-app notifications. We encourage you to review this policy
            periodically.
          </p>

          <h2>11. California Privacy Rights</h2>
          <p>
            If you are a California resident, you have additional rights
            under the California Consumer Privacy Act (CCPA), including the
            right to know what personal information we collect, the right to
            delete your information, and the right to opt out of the sale of
            your information. We do not sell personal information.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our
            data practices, please contact us at:
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@layali.app">support@layali.app</a>
          </p>
        </div>
      </div>
    </main>
  );
}
