'use client';

import LeadForm from "@/components/LeadForm";
import HeroBanner from "@/components/HeroBanner";
import AboutUs from "@/components/AboutUs";
import Hospitals from "@/components/Hospitals";
import Specialities from "@/components/Specialities";
import PatientStories from "@/components/PatientStories";
import HealthTips from "@/components/HealthTips";
import Contact from "@/components/Contact";
import { useEffect } from "react";

export default function Home() {

  // Smooth scroll fix for mobile + production build safe
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            const input = el.querySelector('input, textarea, select');
            if (input) input.focus();
          }, 300);
        }
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);

    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <>
      <LeadForm />
      <HeroBanner />
      <AboutUs />
      <Hospitals />
      <Specialities />
      <PatientStories />
      <HealthTips />
      <Contact />
    </>
  );
}
