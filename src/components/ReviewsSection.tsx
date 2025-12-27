import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "علی محمدی",
    avatar: "ع",
    rating: 5,
    text: "بهترین سایت دانلود فیلم که تا حالا دیدم! کیفیت عالی، سرعت بالا و همیشه به‌روز هست.",
    date: "۲ روز پیش",
  },
  {
    id: 2,
    name: "مریم حسینی",
    avatar: "م",
    rating: 5,
    text: "زیرنویس‌های فارسی همیشه سر وقت هستن و کیفیتشون حرف نداره. واقعاً ممنون از تیم سینما پلاس.",
    date: "۵ روز پیش",
  },
  {
    id: 3,
    name: "رضا کریمی",
    avatar: "ر",
    rating: 4,
    text: "رابط کاربری خیلی خوب و راحته. پیدا کردن فیلم‌ها آسونه و دانلودا سریع انجام میشه.",
    date: "۱ هفته پیش",
  },
  {
    id: 4,
    name: "سارا احمدی",
    avatar: "س",
    rating: 5,
    text: "اپلیکیشن موبایلشون عالیه! میتونم توی مترو فیلم ببینم بدون اینترنت.",
    date: "۲ هفته پیش",
  },
];

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Quote className="w-12 h-12 text-primary mx-auto mb-4 rotate-180" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            نظرات <span className="text-gradient">کاربران</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            ببینید کاربران ما چه نظری دارند
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl glass border transition-all duration-500 ${
                index === currentIndex ? "border-primary" : "border-border/50 hover:border-primary/50"
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating
                        ? "text-cinema-gold fill-cinema-gold"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Navigation (Mobile) */}
        <div className="flex items-center justify-center gap-4 md:hidden">
          <Button variant="cinema-ghost" size="icon" onClick={prev}>
            <ChevronRight className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-6 bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <Button variant="cinema-ghost" size="icon" onClick={next}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
