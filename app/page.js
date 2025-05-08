import CoursePreview from "@/components/CoursePreview";
import LandingPage from "@/components/LandingPage";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <main className="">
      <LandingPage />
      <CoursePreview />
      <Trusted />
    </main>
  );
}
