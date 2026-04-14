import type { Metadata } from 'next';
import { ResumeClient } from './resume-client';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Wisdom Divine - Product Engineer Resume',
};

export default function ResumePage() {
  return <ResumeClient />;
}
