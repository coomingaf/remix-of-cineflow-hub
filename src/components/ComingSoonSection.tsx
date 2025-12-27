import { motion } from "framer-motion";
import { Bell, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

import movie2 from "@/assets/movie-2.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

const upcomingMovies = [
  {
    title: "مأموریت غیرممکن ۸",
    releaseDate: "۱۵ بهمن ۱۴۰۳",
    daysLeft: 45,
    genre: "اکشن",
    image: movie6,
  },
  {
    title: "ماتریکس ۵",
    releaseDate: "۲۲ اسفند ۱۴۰۳",
    daysLeft: 82,
    genre: "علمی-تخیلی",
    image: movie2,
  },
  {
    title: "شب‌های تهران",
    releaseDate: "۵ فروردین ۱۴۰۴",
    daysLeft: 95,
    genre: "درام",
    image: movie4,
  },
  {
    title: "دنیای جادویی",
    releaseDate: "۱۸ فروردین ۱۴۰۴",
    daysLeft: 108,
    genre: "انیمیشن",
    image: movie5,
  },
];

export const ComingSoonSection = () => {
  return (
    <section id="soon" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                به‌زودی در <span className="text-gradient">سینما پلاس</span>
              </h2>
            </div>
            <p className="text-muted-foreground">
              فیلم‌هایی که منتظرشون هستید
            </p>
          </div>
          <Button variant="cinema-outline" className="group">
            <Bell className="w-4 h-4" />
            دریافت اعلان
          </Button>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingMovies.map((movie, index) => (
            <motion.div
              key={movie.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold animate-pulse">
                    به‌زودی
                  </div>
                </div>

                {/* Countdown */}
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1.5 rounded-lg glass text-sm font-medium">
                    {movie.daysLeft} روز
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-0.5 rounded-md bg-primary/20 text-primary text-xs mb-2">
                    {movie.genre}
                  </span>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {movie.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {movie.releaseDate}
                  </div>
                </div>
              </div>

              {/* Notify Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 glow"
              >
                <Bell className="w-4 h-4 inline-block ml-1" />
                یادآوری
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
