import { useEffect } from 'react';

export default function DeleteAccount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <div className="container">
        <div className="legal-content">
          <h1>Delete Your Account</h1>
          <p className="updated">Last updated: March 10, 2026</p>

          <p>
            We're sorry to see you go. If you'd like to delete your Layali
            account and all associated data, follow the steps below.
          </p>

          <h2>How to Delete Your Account</h2>

          <h3>Option 1: From the App</h3>
          <ol>
            <li>Open the Layali app</li>
            <li>Go to the <strong>Settings</strong> tab</li>
            <li>Scroll down and tap <strong>Delete Account</strong></li>
            <li>Confirm the deletion when prompted</li>
          </ol>

          <h3>Option 2: Via Email</h3>
          <p>
            If you're unable to access the app, send an email to{' '}
            <a href="mailto:support@layalipro.com">support@layalipro.com</a>{' '}
            from the email address associated with your account. Include
            "Delete My Account" in the subject line. We will process your
            request within 7 business days.
          </p>

          <h2>What Gets Deleted</h2>
          <p>When your account is deleted, the following data is permanently removed:</p>
          <ul>
            <li>Your account profile (name, email, authentication credentials)</li>
            <li>Prayer tracking history and streaks</li>
            <li>Rewards progress, Layali Points, and sanctuary level</li>
            <li>Mosque check-in history and passport stamps</li>
            <li>Quran bookmarks and reading progress</li>
            <li>Community events you created</li>
            <li>All locally stored preferences and settings</li>
          </ul>

          <h2>Important Notes</h2>
          <ul>
            <li>
              Account deletion is <strong>permanent and cannot be undone</strong>.
              Your data cannot be recovered after deletion.
            </li>
            <li>
              If you have an active subscription, deleting your account does not
              automatically cancel it. Please cancel your subscription through
              the App Store or Google Play before deleting your account.
            </li>
            <li>
              Anonymized, aggregated data that cannot identify you may be
              retained for analytics purposes.
            </li>
          </ul>

          <h2>Questions?</h2>
          <p>
            If you have any questions about account deletion, contact us at{' '}
            <a href="mailto:support@layalipro.com">support@layalipro.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
