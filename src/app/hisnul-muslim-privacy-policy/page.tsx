import { Main } from '@/components/atoms/main';
import { Section } from '@/components/atoms/section';
import { getColoredTextClasses } from '@/utils/colored-text';

export default function Page() {
  return (
    <Main>
      <Section
        id={'privacy-policy'}
        className={'flex-1 w-full h-full -mb-7 tablet-sm:-mb-8'}
      >
        <h1
          className={getColoredTextClasses(
            'red',
            'orange',
            'red',
            'mb-4 self-start',
          )}
        >
          Hisnul Muslim Privacy Policy
        </h1>
        <p>
          This Privacy Policy explains how we use the notification feature in
          the Hisnul-Muslim app.
        </p>
        <h2>Notification Feature</h2>
        <p>
          When you use the Hisnul-Muslim app, we may request your permission to
          send you notifications. If you allow notifications, we will only use
          this feature to send you alerts related to the app, such as updates or
          reminders.
        </p>
        <p>
          We will not collect any information about you or your device other
          than your decision to allow notifications. We will not share your
          notification settings with any third parties.
        </p>
        <p>
          You can choose to disable notifications for the app at any time by
          changing the notification settings in your device settings.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about our privacy practices,
          please contact us at{' '}
          <a href={'mailto:cabdirizaaqyare12@gmail.com'}>My Email</a>.
        </p>
      </Section>
    </Main>
  );
}
