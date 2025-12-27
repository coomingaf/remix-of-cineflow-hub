import { motion } from "framer-motion";
import { Star, Play, Download, Flame } from "lucide-react";

import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";

const topMovies = [
  { rank: 1, title: "سفر به ناشناخته", year: "2024", rating: "9.1", genre: "علمی-تخیلی", image: movie2 },
  { rank: 2, title: "جزیره رنگین", year: "2024", rating: "8.9", genre: "انیمیشن", image: movie5 },
  { rank: 3, title: "سایه تاریک", year: "2024", rating: "8.5", genre: "هیجان‌انگیز", image: movie1 },
  { rank: 4, title: "عشق بی‌پایان", year: "2023", rating: "8.2", genre: "عاشقانه", image: movie3 },
  { rank: 5, title: "شب ترسناک", year: "2024", rating: "7.8", genre: "ترسناک", image: movie4 },
];

export const TopRatedSection = () => {
  return (
    <section id="top" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Flame className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">برترین‌های IMDB</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ۵ فیلم <span className="text-gradient">برتر</span> این ماه
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            بر اساس امتیاز کاربران و منتقدان IMDB
          </p>
        </motion.div>

        {/* List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {topMovies.map((movie, index) => (
            <motion.div
              key={movie.rank}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="group relative flex items-center gap-4 md:gap-6 p-3 md:p-4 rounded-2xl glass border border-border/50 hover:border-primary/50 cursor-pointer transition-all duration-500"
            >
              {/* Rank */}
              <div className="relative">
                <span
                  className={`text-5xl md:text-7xl font-black ${
                    movie.rank === 1
                      ? "text-cinema-gold"
                      : movie.rank === 2
                      ? "text-gray-400"
                      : movie.rank === 3
                      ? "text-amber-700"
                      : "text-muted-foreground/30"
                  }`}
                >
                  {movie.rank}
                </span>
              </div>

              {/* Image */}
              <div className="w-16 h-24 md:w-20 md:h-28 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold mb-1 group-hover:text-primary transition-colors truncate">
                  {movie.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <span>{movie.year}</span>
                  <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                  <span className="text-primary">{movie.genre}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 px-3 py-2 rounded-xl glass">
                <Star className="w-4 h-4 text-cinema-gold fill-cinema-gold" />
                <span className="font-bold">{movie.rating}</span>
              </div>

              {/* Actions (visible on hover) */}
              <div className="hidden md:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                >
                  <Play className="w-4 h-4 text-primary-foreground" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center"
                >
                  <Download className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
