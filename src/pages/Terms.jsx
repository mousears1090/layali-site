import { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Terms of Service</h1>
          <p className="updated">Last updated: February 17, 2026</p>

          <p>
            These Terms of Service ("Terms") govern your use of the Layali
            mobile application ("App") and related services operated by Layali
            ("we," "us," or "our"). By downloading, installing, or using the
            App, you agree to be bound by these Terms.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Layali, you confirm that you are at least 13
            years of age and have the legal capacity to enter into these Terms.
            If you are under 18, you represent that your parent or legal
            guardian has reviewed and agreed to these Terms on your behalf.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Layali is an Islamic companion app that provides Qur'an reading,
            duas (supplications), prayer times, Qibla direction, and related
            features. The App is available for iOS devices and includes both
            free and premium subscription-based features.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            You may create an account using your email address. You are
            responsible for maintaining the confidentiality of your account
            credentials and for all activity that occurs under your account.
            You agree to notify us immediately of any unauthorized use.
          </p>

          <h2>4. Subscriptions and Payments</h2>
          <h3>4.1 Layali Pro</h3>
          <p>
            Layali Pro is a premium subscription that unlocks additional
            features including audio recitation, the full dua library, and
            memorization mode. Subscriptions are billed on a recurring monthly
            basis through your Apple ID account.
          </p>

          <h3>4.2 Free Trial</h3>
          <p>
            New subscribers may be eligible for a free trial period. If you do
            not cancel before the trial ends, your subscription will
            automatically renew and you will be charged the applicable
            subscription fee.
          </p>

          <h3>4.3 Cancellation</h3>
          <p>
            You may cancel your subscription at any time through your Apple ID
            account settings. Cancellation takes effect at the end of the
            current billing period. No refunds are provided for partial billing
            periods.
          </p>

          <h3>4.4 Price Changes</h3>
          <p>
            We reserve the right to change subscription pricing. Any price
            changes will take effect at the start of the next billing period
            following notice to you.
          </p>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the App for any unlawful purpose or in violation of any
              applicable laws or regulations
            </li>
            <li>
              Attempt to reverse engineer, decompile, or disassemble the App
            </li>
            <li>
              Interfere with or disrupt the App's servers, networks, or
              infrastructure
            </li>
            <li>
              Share your account credentials with third parties or allow others
              to access your subscription
            </li>
            <li>
              Use automated systems or bots to access or interact with the App
            </li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            The App, including its design, code, features, and branding, is
            owned by Layali and protected by intellectual property laws. Qur'anic
            text and translations are sourced from publicly available scholarly
            works. You are granted a limited, non-exclusive, non-transferable
            license to use the App for personal, non-commercial purposes.
          </p>

          <h2>7. Content Accuracy</h2>
          <p>
            We strive to provide accurate Qur'anic text, translations, prayer
            time calculations, and Qibla directions. However, we do not warrant
            that all content is free from errors. Prayer times are calculated
            using standard astronomical algorithms and may vary slightly from
            your local mosque or authority. For critical religious obligations,
            we recommend cross-referencing with your local Islamic authority.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            The App may integrate with third-party services including but not
            limited to Firebase (authentication and data storage), RevenueCat
            (subscription management), and the Al Quran Cloud API (Qur'anic
            data). Your use of these services is subject to their respective
            terms and privacy policies.
          </p>

          <h2>9. Disclaimer of Warranties</h2>
          <p>
            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES
            OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
            TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL
            BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, LAYALI SHALL NOT BE LIABLE
            FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE APP, WHETHER
            BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
          </p>

          <h2>11. Termination</h2>
          <p>
            We may suspend or terminate your access to the App at any time for
            violation of these Terms or for any other reason at our sole
            discretion. Upon termination, your right to use the App ceases
            immediately.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of
            material changes by updating the "Last updated" date and, where
            appropriate, through in-app notifications. Continued use of the App
            after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of the United States, without regard to its conflict of law
            provisions.
          </p>

          <h2>14. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us
            at{' '}
            <a href="mailto:support@layalipro.com">support@layalipro.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
