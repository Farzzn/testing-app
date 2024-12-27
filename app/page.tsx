//import styles from './about.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next JS Example',
  description: 'We provide simple and easy to learn tutorial on Next JS',
};

export default function Home() {
  return (
    <div >
        <h1>Next JS</h1>
        <h2>Welcome to the Next JS About page!</h2>
    </div>
  );
}
