import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, Download, Star, Clock, Calendar, ChevronDown, ChevronUp,
  Tv, Film, Monitor
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

interface Episode {
  number: number;
  title: string;
  duration: string;
  quality: string;
  size: string;
}

interface Season {
  number: number;
  year: string;
  episodeCount: number;
  episodes: Episode[];
}

interface SeriesData {
  id: string;
  title: string;
  englishTitle: string;
  year: string;
  rating: string;
  genre: string[];
  status: string;
  network: string;
  image: string;
  plot: string;
  seasons: Season[];
}

const seriesData: SeriesData[] = [
  {
    id: "1",
    title: "بازی تاج و تخت",
    englishTitle: "Game of Thrones",
    year: "2011-2019",
    rating: "9.2",
    genre: ["فانتزی", "درام", "اکشن"],
    status: "پایان یافته",
    network: "HBO",
    image: movie1,
    plot: "داستان چند خانواده اشرافی که برای کنترل تخت آهنین، قدرت حاکم بر هفت پادشاهی، می‌جنگند.",
    seasons: [
      {
        number: 1,
        year: "2011",
        episodeCount: 10,
        episodes: [
          { number: 1, title: "زمستان در راه است", duration: "62 دقیقه", quality: "1080p", size: "1.5 GB" },
          { number: 2, title: "راه پادشاهان", duration: "56 دقیقه", quality: "1080p", size: "1.3 GB" },
          { number: 3, title: "لرد اسنو", duration: "58 دقیقه", quality: "1080p", size: "1.4 GB" },
          { number: 4, title: "معلولین، حرامزادگان و چیزهای شکسته", duration: "55 دقیقه", quality: "1080p", size: "1.2 GB" },
          { number: 5, title: "گرگ و شیر", duration: "54 دقیقه", quality: "1080p", size: "1.3 GB" },
        ]
      },
      {
        number: 2,
        year: "2012",
        episodeCount: 10,
        episodes: [
          { number: 1, title: "شمال فراموش نمی‌کند", duration: "53 دقیقه", quality: "1080p", size: "1.2 GB" },
          { number: 2, title: "شبهای تاریک", duration: "54 دقیقه", quality: "1080p", size: "1.3 GB" },
          { number: 3, title: "آنچه مرده است نمی‌میرد", duration: "53 دقیقه", quality: "1080p", size: "1.2 GB" },
        ]
      },
    ]
  },
  {
    id: "2",
    title: "بریکینگ بد",
    englishTitle: "Breaking Bad",
    year: "2008-2013",
    rating: "9.5",
    genre: ["جنایی", "درام", "هیجان‌انگیز"],
    status: "پایان یافته",
    network: "AMC",
    image: movie2,
    plot: "یک معلم شیمی دبیرستان که به سرطان ریه مبتلا شده، با یک دانش‌آموز سابق شروع به تولید و فروش مت‌آمفتامین می‌کند.",
    seasons: [
      {
        number: 1,
        year: "2008",
        episodeCount: 7,
        episodes: [
          { number: 1, title: "پایلوت", duration: "58 دقیقه", quality: "1080p", size: "1.4 GB" },
          { number: 2, title: "گربه در کیسه", duration: "48 دقیقه", quality: "1080p", size: "1.1 GB" },
          { number: 3, title: "...و کیسه در رودخانه", duration: "48 دقیقه", quality: "1080p", size: "1.1 GB" },
        ]
      },
    ]
  },
  {
    id: "3",
    title: "آخرین ما",
    englishTitle: "The Last of Us",
    year: "2023-",
    rating: "8.8",
    genre: ["درام", "اکشن", "ماجراجویی"],
    status: "در حال پخش",
    network: "HBO",
    image: movie3,
    plot: "بیست سال پس از نابودی تمدن مدرن، جوئل برای خارج کردن الی از یک منطقه قرنطینه سختگیرانه استخدام می‌شود.",
    seasons: [
      {
        number: 1,
        year: "2023",
        episodeCount: 9,
        episodes: [
          { number: 1, title: "وقتی که گم شدی در تاریکی", duration: "81 دقیقه", quality: "1080p", size: "2.0 GB" },
          { number: 2, title: "آلوده", duration: "55 دقیقه", quality: "1080p", size: "1.3 GB" },
          { number: 3, title: "طولانی، طولانی", duration: "76 دقیقه", quality: "1080p", size: "1.8 GB" },
        ]
      },
    ]
  },
  {
    id: "4",
    title: "چرنوبیل",
    englishTitle: "Chernobyl",
    year: "2019",
    rating: "9.4",
    genre: ["درام", "تاریخی", "هیجان‌انگیز"],
    status: "مینی سریال",
    network: "HBO",
    image: movie4,
    plot: "داستان فاجعه هسته‌ای چرنوبیل در سال ۱۹۸۶ و تلاش‌های فداکارانه برای مهار این فاجعه.",
    seasons: [
      {
        number: 1,
        year: "2019",
        episodeCount: 5,
        episodes: [
          { number: 1, title: "۱:۲۳:۴۵", duration: "66 دقیقه", quality: "1080p", size: "1.6 GB" },
          { number: 2, title: "لطفاً باقی بمانید آرام", duration: "64 دقیقه", quality: "1080p", size: "1.5 GB" },
        ]
      },
    ]
  },
];

const SeriesCard = ({ series, onClick }: { series: SeriesData; onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    onClick={onClick}
    className="group cursor-pointer"
  >
    <div className="relative rounded-2xl overflow-hidden mb-4">
      <img 
        src={series.image} 
        alt={series.title}
        className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Status Badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-xs font-bold ${
        series.status === "در حال پخش" 
          ? "bg-green-500 text-white" 
          : series.status === "مینی سریال"
            ? "bg-purple-500 text-white"
            : "bg-cinema-gold text-black"
      }`}>
        {series.status}
      </div>

      {/* Rating Badge */}
      <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg">
        <Star className="w-3 h-3 text-cinema-gold fill-cinema-gold" />
        <span className="text-white text-sm font-bold">{series.rating}</span>
      </div>

      {/* Play Button */}
      <motion.div 
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.1 }}
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <div className="w-16 h-16 rounded-full bg-cinema-gold flex items-center justify-center shadow-lg shadow-cinema-gold/50">
          <Play className="w-8 h-8 text-black fill-black" />
        </div>
      </motion.div>
    </div>

    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-cinema-gold transition-colors">
      {series.title}
    </h3>
    <p className="text-muted-foreground text-sm mb-2">{series.englishTitle}</p>
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <span className="flex items-center gap-1">
        <Tv className="w-4 h-4" />
        {series.seasons.length} فصل
      </span>
      <span>{series.year}</span>
    </div>
  </motion.div>
);

const SeasonAccordion = ({ season, isExpanded, onToggle }: { 
  season: Season; 
  isExpanded: boolean; 
  onToggle: () => void;
}) => (
  <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-5 hover:bg-card/50 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-cinema-gold/20 flex items-center justify-center">
          <Film className="w-6 h-6 text-cinema-gold" />
        </div>
        <div className="text-right">
          <h4 className="text-foreground font-bold">فصل {season.number}</h4>
          <p className="text-muted-foreground text-sm">{season.episodeCount} قسمت • {season.year}</p>
        </div>
      </div>
      <motion.div
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </motion.div>
    </button>
    
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-5 pt-0 space-y-3">
            {season.episodes.map((episode) => (
              <div 
                key={episode.number}
                className="flex items-center justify-between bg-background/50 rounded-xl p-4 hover:bg-background/70 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-foreground font-bold">
                    {episode.number}
                  </div>
                  <div>
                    <h5 className="text-foreground font-medium group-hover:text-cinema-gold transition-colors">
                      {episode.title}
                    </h5>
                    <p className="text-muted-foreground text-sm flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {episode.duration}
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">{episode.quality}</span>
                      <span className="text-xs">{episode.size}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="cinema-ghost" size="icon">
                    <Play className="w-4 h-4" />
                  </Button>
                  <Button variant="cinema" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Series = () => {
  const [selectedSeries, setSelectedSeries] = useState<SeriesData | null>(null);
  const [expandedSeasons, setExpandedSeasons] = useState<number[]>([1]);

  const toggleSeason = (seasonNumber: number) => {
    setExpandedSeasons(prev => 
      prev.includes(seasonNumber) 
        ? prev.filter(n => n !== seasonNumber)
        : [...prev, seasonNumber]
    );
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      
      {selectedSeries ? (
        // Series Detail View
        <>
          {/* Hero Section */}
          <section className="relative pt-20 min-h-[50vh]">
            <div className="absolute inset-0">
              <img 
                src={selectedSeries.image} 
                alt={selectedSeries.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-12">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setSelectedSeries(null)}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ChevronUp className="w-5 h-5 rotate-90" />
                <span>بازگشت به لیست سریال‌ها</span>
              </motion.button>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Poster */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-shrink-0"
                >
                  <div className="relative w-64 md:w-72 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                    <img 
                      src={selectedSeries.image} 
                      alt={selectedSeries.title}
                      className="w-full aspect-[2/3] object-cover"
                    />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-xs font-bold ${
                      selectedSeries.status === "در حال پخش" 
                        ? "bg-green-500 text-white" 
                        : "bg-cinema-gold text-black"
                    }`}>
                      {selectedSeries.status}
                    </div>
                  </div>
                </motion.div>

                {/* Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex-1"
                >
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                    {selectedSeries.title}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">{selectedSeries.englishTitle}</p>

                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-cinema-gold/20 px-4 py-2 rounded-xl">
                      <Star className="w-5 h-5 text-cinema-gold fill-cinema-gold" />
                      <span className="text-cinema-gold font-bold text-lg">{selectedSeries.rating}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-5 h-5" />
                      <span>{selectedSeries.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Monitor className="w-5 h-5" />
                      <span>{selectedSeries.network}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedSeries.genre.map((g) => (
                      <span key={g} className="px-4 py-2 rounded-xl bg-card/50 border border-border/50 text-sm">
                        {g}
                      </span>
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-7 mb-8 max-w-2xl">{selectedSeries.plot}</p>

                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Tv className="w-5 h-5 text-cinema-gold" />
                      <span className="font-semibold">{selectedSeries.seasons.length} فصل</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Film className="w-5 h-5 text-cinema-gold" />
                      <span className="font-semibold">
                        {selectedSeries.seasons.reduce((acc, s) => acc + s.episodeCount, 0)} قسمت
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Seasons & Episodes */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-cinema-gold rounded-full" />
                فصل‌ها و قسمت‌ها
              </h3>
              <div className="max-w-4xl space-y-4">
                {selectedSeries.seasons.map((season) => (
                  <SeasonAccordion
                    key={season.number}
                    season={season}
                    isExpanded={expandedSeasons.includes(season.number)}
                    onToggle={() => toggleSeason(season.number)}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        // Series List View
        <>
          <section className="relative pt-24 pb-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-cinema-gold/5 via-transparent to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cinema-gold/10 rounded-full blur-[150px]" />
            
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  <span className="text-cinema-gold">سریال‌های</span> برتر
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  مجموعه‌ای از بهترین سریال‌های جهان با کیفیت بالا و زیرنویس فارسی
                </p>
              </motion.div>
            </div>
          </section>

          <section className="pb-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {seriesData.map((series, index) => (
                  <motion.div
                    key={series.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SeriesCard 
                      series={series} 
                      onClick={() => setSelectedSeries(series)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Series;
