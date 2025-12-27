import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrendingSection } from "@/components/TrendingSection";
import { MovieSection } from "@/components/MovieSection";
import { GenreSection } from "@/components/GenreSection";
import { TopRatedSection } from "@/components/TopRatedSection";
import { ComingSoonSection } from "@/components/ComingSoonSection";
import { StatsSection } from "@/components/StatsSection";
import { AppDownloadSection } from "@/components/AppDownloadSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrendingSection />
        <MovieSection />
        <GenreSection />
        <TopRatedSection />
        <ComingSoonSection />
        <StatsSection />
        <AppDownloadSection />
        <ReviewsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
