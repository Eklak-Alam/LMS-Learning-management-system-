import Connect from "@/components/Connect";
import CoursePreview from "@/components/CoursePreview";
import FAQ from "@/components/Faqs";
import LandingPage from "@/components/LandingPage";
import Process from "@/components/Process";
import Trusted from "@/components/Trusted";
import WhyUs from "@/components/Whyus";

export default function Home() {
  return (
    <main className="">
      <LandingPage />
      <CoursePreview />
      <WhyUs />
      <Process />
      <Trusted />
      <FAQ />
    </main>
  );
}
