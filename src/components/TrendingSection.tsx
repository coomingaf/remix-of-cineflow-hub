import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronRight, ChevronLeft, Star, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie4 from "@/assets/movie-4.jpg";

const trendingMovies = [
  {
    id: 1,
    title: "سایه‌های تاریک",
    subtitle: "یک راز، هزار سوال",
    year: "2024",
    rating: "8.5",
    duration: "2 ساعت و 15 دقیقه",
    genre: "هیجان‌انگیز",
    image: movie1,
    description: "یک کارآگاه باتجربه در تعقیب قاتلی زنجیره‌ای است که هر بار رد پای خود را به شکلی مرموز پاک می‌کند.",
  },
  {
    id: 2,
    title: "سفر به ناشناخته",
    subtitle: "آینده اینجاست",
    year: "2024",
    rating: "9.1",
    duration: "2 ساعت و 45 دقیقه",
    genre: "علمی-تخیلی",
    image: movie2,
    description: "در سال 2150، بشریت به دنبال سیاره‌ای جدید برای زندگی است. یک تیم از فضانوردان به سفری خطرناک می‌روند.",
  },
  {
    id: 3,
    title: "شب وحشت",
    subtitle: "تاریکی همه جاست",
    year: "2024",
    rating: "7.8",
    duration: "1 ساعت و 50 دقیقه",
    genre: "ترسناک",
    image: movie4,
    description: "یک خانواده در یک خانه قدیمی گیر می‌افتند و با موجوداتی روبرو می‌شوند که از کابوس‌هایشان آمده‌اند.",
  },
];

export const TrendingSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % trendingMovies.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % trendingMovies.length);
  const prev = () => setCurrent((prev) => (prev - 1 + trendingMovies.length) % trendingMovies.length);

  const movie = trendingMovies[current];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={movie.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold">
            پرطرفدارترین <span className="text-gradient">این هفته</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full glass text-primary text-sm font-medium mb-4">
                #{current + 1} در رتبه‌بندی
              </span>

              <h3 className="text-4xl md:text-6xl font-bold mb-2">{movie.title}</h3>
              <p className="text-xl text-muted-foreground mb-6">{movie.subtitle}</p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-cinema-gold fill-cinema-gold" />
                  <span className="font-bold text-foreground">{movie.rating}</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {movie.year}
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {movie.duration}
                </div>
                <span className="px-2 py-1 rounded-md bg-primary/20 text-primary text-xs font-medium">
                  {movie.genre}
                </span>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg">
                {movie.description}
              </p>

              <div className="flex gap-4">
                <Button variant="cinema" size="xl" className="group">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  تماشا کنید
                </Button>
                <Button variant="cinema-outline" size="lg">
                  دانلود فیلم
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[2/3] max-w-md mx-auto rounded-2xl overflow-hidden movie-card">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Play Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center glow cursor-pointer backdrop-blur-sm">
                    <Play className="w-8 h-8 text-primary-foreground mr-[-2px]" />
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-accent/20 blur-2xl" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <Button
            variant="cinema-ghost"
            size="icon"
            onClick={prev}
            className="rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div className="flex gap-2">
            {trendingMovies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="cinema-ghost"
            size="icon"
            onClick={next}
            className="rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
