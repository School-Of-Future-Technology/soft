import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    type: "parent",
    name: "Priya S.",
    role: "Parent of Grade 9 Student",
    content: "My son was always interested in games but never knew how to make them. After just 6 weeks, he built his first game! The teachers are incredibly patient.",
    rating: 5,
  },
  {
    type: "parent",
    name: "David M.",
    role: "Parent of Grade 8 Student (UK)",
    content: "The GCSE Computer Science prep is excellent. My daughter's confidence has grown tremendously. The small batch size makes all the difference.",
    rating: 5,
  },
  {
    type: "student",
    name: "Arjun K.",
    role: "Grade 10 Student",
    content: "I built an AI chatbot that actually works! My friends couldn't believe I made it myself. The instructors explain everything so clearly.",
    rating: 5,
  },
  {
    type: "parent",
    name: "Sneha R.",
    role: "Parent of Grade 7 Student",
    content: "What I love is they don't just teach coding — they teach problem-solving. My child now approaches homework differently too!",
    rating: 5,
  },
];

const whatsappMessages = [
  {
    sender: "Parent",
    message: "Thank you so much for the extra session yesterday! He finally understood recursion 🙏",
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
          {/* Main Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-6 card-hover relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-cyan-400/30 flex items-center justify-center">
                    <span className="text-sm font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <span className={`ml-auto px-2 py-1 rounded text-xs ${
                    testimonial.type === 'parent' 
                      ? 'bg-blue-500/10 text-blue-400' 
                      : 'bg-green-500/10 text-green-400'
                  }`}>
                    {testimonial.type === 'parent' ? 'Parent' : 'Student'}
                  </span>
                </div>
              </div>
            ))}
          </div>

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
