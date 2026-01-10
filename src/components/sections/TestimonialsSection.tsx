import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "My son was always interested in games but never knew how to make them. After just 6 weeks, he built his first game! The teachers are incredibly patient.",
    name: "Priya S.",
    designation: "Parent of Grade 9 Student",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2000&auto=format&fit=crop",
  },
  {
    quote:
      "The GCSE Computer Science prep is excellent. My daughter's confidence has grown tremendously. The small batch size makes all the difference.",
    name: "David M.",
    designation: "Parent of Grade 8 Student (UK)",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    quote:
      "I built an AI chatbot that actually works! My friends couldn't believe I made it myself. The instructors explain everything so clearly.",
    name: "Arjun K.",
    designation: "Grade 10 Student",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop",
  },
  {
    quote:
      "What I love is they don't just teach coding — they teach problem-solving. My child now approaches homework differently too!",
    name: "Sneha R.",
    designation: "Parent of Grade 7 Student",
    src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2000&auto=format&fit=crop",
  },
];

const whatsappMessages = [
  {
    sender: "Parent",
    message:
      "Thank you so much for the extra session yesterday! He finally understood recursion.",
    time: "Today",
  },
  {
    sender: "Parent",
    message: "She showed her AI project at school today and her teacher was amazed!",
    time: "Yesterday",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Parents & Students <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real families. Unfiltered and authentic.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <AnimatedTestimonials testimonials={testimonials} />

          {/* WhatsApp Style Messages */}
          <div className="max-w-md mx-auto">
            <p className="text-center text-sm text-muted-foreground mb-4 uppercase tracking-wider">
              From our WhatsApp groups
            </p>
            <div className="space-y-3">
              {whatsappMessages.map((msg, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-2xl rounded-tl-sm"
                >
                  <p className="text-sm">{msg.message}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-muted-foreground">{msg.sender}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
