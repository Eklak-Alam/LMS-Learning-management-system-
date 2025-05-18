import Connect from "@/components/Connect";
import CoursePreview from "@/components/CoursePreview";
// import FAQ from "@/components/Faqs";
import LandingPage from "@/components/LandingPage";
import Process from "@/components/Process";
import Trusted from "@/components/Trusted";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhyUs from "@/components/Whyus";

export default function Home() {
  return (
    <main className="relative">
      {/* Main content */}
      <LandingPage />
      <CoursePreview />
      <WhyUs />
      <Process />
      <Trusted />
      {/* <FAQ /> */}
      <Connect />
      
      {/* WhatsApp floating button */}
      <WhatsAppFloat />
    </main>
  );
}