import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Film, Tv, Users, Download, Trophy, Globe } from "lucide-react";

const stats = [
  { icon: Film, value: 15420, suffix: "+", label: "فیلم", color: "from-red-500 to-orange-500" },
  { icon: Tv, value: 3850, suffix: "+", label: "سریال", color: "from-blue-500 to-cyan-500" },
  { icon: Users, value: 2500000, suffix: "+", label: "کاربر فعال", color: "from-green-500 to-emerald-500" },
  { icon: Download, value: 50000000, suffix: "+", label: "دانلود موفق", color: "from-purple-500 to-pink-500" },
];

const features = [
  { icon: Trophy, title: "کیفیت بالا", desc: "BluRay و 4K" },
  { icon: Globe, title: "زیرنویس فارسی", desc: "برای تمام فیلم‌ها" },
];

const CountUpAnimation = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toLocaleString("fa-IR");
  };

  return (
    <span ref={ref}>
      {formatNumber(count)}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="text-center p-6 md:p-8 rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-500">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Value */}
                <div className="text-3xl md:text-4xl font-black mb-2 text-gradient">
                  <CountUpAnimation target={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 px-6 py-3 rounded-full glass"
            >
              <feature.icon className="w-5 h-5 text-primary" />
              <div>
                <span className="font-bold">{feature.title}</span>
                <span className="text-muted-foreground mr-2">• {feature.desc}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
