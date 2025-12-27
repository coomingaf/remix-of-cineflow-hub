import { motion } from "framer-motion";
import { Smartphone, Download, Star, Zap, Shield, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Zap, text: "سرعت بالا" },
  { icon: Shield, text: "امن و مطمئن" },
  { icon: Wifi, text: "آفلاین مود" },
];

export const AppDownloadSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Decorative Circles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full border border-primary/10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full border border-accent/10 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-right"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Smartphone className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">اپلیکیشن موبایل</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              تجربه بهتر با
              <br />
              <span className="text-gradient">اپلیکیشن سینما پلاس</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              با نصب اپلیکیشن، فیلم‌ها و سریال‌های مورد علاقتون رو 
              در هر زمان و مکانی تماشا کنید. حتی بدون اینترنت!
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass"
                >
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-cinema-gold fill-cinema-gold"
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                <strong className="text-foreground">4.8</strong> از 5 (۱۲۵,۰۰۰ نظر)
              </span>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button variant="cinema" size="xl" className="group">
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                دانلود برای اندروید
              </Button>
              <Button variant="cinema-outline" size="lg">
                <Download className="w-5 h-5" />
                دانلود برای iOS
              </Button>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-full" />
              
              {/* Phone Frame */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-[580px] rounded-[3rem] border-4 border-foreground/20 bg-secondary overflow-hidden shadow-2xl"
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-background rounded-b-2xl" />
                
                {/* Screen Content */}
                <div className="absolute inset-4 top-10 rounded-2xl overflow-hidden bg-background">
                  {/* App Header */}
                  <div className="p-4 flex items-center justify-between border-b border-border">
                    <span className="text-gradient font-bold">سینما پلاس</span>
                    <div className="w-8 h-8 rounded-full bg-primary/20" />
                  </div>
                  
                  {/* Content Placeholder */}
                  <div className="p-4 space-y-4">
                    <div className="h-32 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-24 rounded-xl bg-secondary" />
                      <div className="h-24 rounded-xl bg-secondary" />
                    </div>
                    <div className="h-4 w-3/4 rounded-full bg-secondary" />
                    <div className="h-4 w-1/2 rounded-full bg-secondary" />
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-8 px-4 py-2 rounded-xl glass shadow-lg"
              >
                <span className="text-sm font-bold text-gradient">+1000 فیلم جدید</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -left-12 px-4 py-2 rounded-xl glass shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold">دانلود سریع</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
