'use client';

import { useEffect } from 'react';
import LeadForm from '@/components/LeadForm';
import HeroBanner from '@/components/HeroBanner';
import AboutUs from '@/components/AboutUs';
import Hospitals from '@/components/Hospitals';
import Specialities from '@/components/Specialities';
import PatientStories from '@/components/PatientStories';
import HealthTips from '@/components/HealthTips';
import Contact from '@/components/Contact';

export default function Home() {
  useEffect(() => {
    // Auto-scroll to lead form on initial page load (option 3 chosen)
    const id = '#lead-form';
    const el = document.querySelector(id);
    if (el) {
      // slight delay to ensure layout/images settle
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // focus the first input for quick typing
        const input = el.querySelector('input, textarea, select') as HTMLElement | null;
        if (input) input.focus();
      }, 300);
    }
  }, []);

  return (
    <>
      <HeroBanner />
      <LeadForm />
      <AboutUs />
      <Hospitals />
      <Specialities />
      <PatientStories />
      <HealthTips />
      <Contact />
    </>
  );
}
