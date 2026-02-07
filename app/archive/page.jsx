import { sessions } from '../../data/sessions';
import SessionLog from '../../components/SessionLog';

export const metadata = {
  title: 'Archive | Learning to See',
  description: 'Session logs and development history',
};

export default function ArchivePage() {
  return (
    <section style={{ animation: 'fadeIn 0.6s ease' }}>
      {sessions.map(session => (
        <SessionLog key={session.id} session={session} />
      ))}
    </section>
  );
}
