import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "آیا دانلود فیلم‌ها رایگان است؟",
    answer: "بله، تمامی فیلم‌ها و سریال‌ها به صورت کاملاً رایگان قابل دانلود هستند. همچنین امکان تماشای آنلاین نیز وجود دارد.",
  },
  {
    question: "کیفیت فیلم‌ها چگونه است؟",
    answer: "ما فیلم‌ها را در کیفیت‌های مختلف از 480p تا 4K BluRay ارائه می‌دهیم. شما می‌توانید بر اساس سرعت اینترنت و نیاز خود، کیفیت مورد نظر را انتخاب کنید.",
  },
  {
    question: "آیا زیرنویس فارسی دارید؟",
    answer: "بله، برای تمامی فیلم‌ها و سریال‌های خارجی زیرنویس فارسی با کیفیت بالا ارائه می‌شود. زیرنویس‌ها توسط تیم حرفه‌ای ترجمه می‌شوند.",
  },
  {
    question: "چگونه می‌توانم از انتشار فیلم جدید باخبر شوم؟",
    answer: "با عضویت در خبرنامه یا دانلود اپلیکیشن، می‌توانید اعلان‌های مربوط به فیلم‌های جدید را دریافت کنید. همچنین می‌توانید ما را در شبکه‌های اجتماعی دنبال کنید.",
  },
  {
    question: "آیا برای دانلود نیاز به ثبت‌نام است؟",
    answer: "خیر، برای دانلود نیازی به ثبت‌نام نیست. اما با ثبت‌نام می‌توانید از امکانات بیشتری مانند لیست علاقه‌مندی‌ها و دنبال کردن سریال‌ها استفاده کنید.",
  },
  {
    question: "سرعت دانلود چقدر است؟",
    answer: "سرورهای ما با پهنای باند بالا کار می‌کنند و معمولاً سرعت دانلود بسیار بالاست. همچنین امکان استفاده از دانلود منیجر و ادامه دانلود نیمه‌تمام وجود دارد.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">سوالات متداول</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              سوالی دارید؟
              <br />
              <span className="text-gradient">ما اینجاییم</span>
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              پاسخ سوالات رایج را اینجا پیدا کنید. اگر سوال شما در این لیست نیست، 
              با تیم پشتیبانی ما تماس بگیرید.
            </p>

            <Button variant="cinema" size="lg" className="group">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              تماس با پشتیبانی
            </Button>
          </motion.div>

          {/* Right Side - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none"
                >
                  <AccordionTrigger className="px-6 py-4 rounded-xl glass border border-border/50 hover:border-primary/50 hover:no-underline transition-all duration-300 text-right [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b-0">
                    <span className="font-medium text-base">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 glass border border-t-0 border-border/50 rounded-b-xl">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
