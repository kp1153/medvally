'use client';

import LeadForm from "@/components/LeadForm";
import HeroBanner from "@/components/HeroBanner";
import AboutUs from "@/components/AboutUs";
import Hospitals from "@/components/Hospitals";
import Specialities from "@/components/Specialities";
import PatientStories from "@/components/PatientStories";
import HealthTips from "@/components/HealthTips";
import Contact from "@/components/Contact";

export default function Home() {
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
