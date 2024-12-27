//import styles from './about.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next JS About Page',
  description: 'We provide simple and easy to learn tutorial on Next JS',
};

export default function About() {
  return (
    <div >
        <h1>About Us</h1>
        <h2>Welcome to the Next JS About page!</h2>
    </div>
  );
}
