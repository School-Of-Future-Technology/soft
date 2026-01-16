import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import rishanFeedback from "@/assets/Rishan_feedback_.png";

const testimonials = [
  {
    quote:
      "My 19-year-old son is learning Python and AI with Planet Scholars, and his confidence grows every week as he builds real projects. He’s currently creating a neural network to predict whether a person may have diabetes, which has been truly impressive to see.",
    name: "Wendy",
    designation: "Parent of 19-year-old Student",
    src: "/Wendy.png",
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
    sender: "Rishan's Mother",
    message:
      "We are lucky to have you as a coach in Rishan’s starting journey of learning. Everyone doesn’t understand him and how passionate he is about your field. You gave so much time whenever we needed.",
    time: "Jan 2026",
    className: "absolute top-6 left-[8%] rotate-[-4deg]",
    image: rishanFeedback,
  },
  {
    sender: "Nivaan's Father Raj",
    message:
      "Hi Akash and Nis, wishing you both a very Happy New Year and continued success on your journey ahead. It's truly wonderful to have mentors like you guiding Nevan.",
    time: "Jan 2026",
    className: "absolute top-44 left-[10%] rotate-[5deg]",
    image:
      "https://cdn.jsdelivr.net/gh/schooloffuturetechnology-wq/website-assets@main/nivaan_.png",
  },
  {
    sender: "Aarush's Mother",
    message:
      "Ok sir. I am happy that he got chance to learn from you. Thanks for understand him. Many times teacher doesn't like they take in negative way. ❤️",
    time: "Jan 2026",
    className: "absolute top-52 right-[12%] rotate-[-5deg]",
    image:
      "https://cdn.jsdelivr.net/gh/schooloffuturetechnology-wq/website-assets@main/Aarush.png",
  },
  {
    sender: "Daksheena, 3rd year, Cardiff University, USA",
    message: "Video Review From Classroom",
    time: "Jan 2026",
    className: "absolute top-12 left-[52%] rotate-[3deg]",
    videoUrl: "https://www.youtube.com/embed/WFRjQBy2VMU",
  },
  {
    sender: "Adhrit on our book",
    message:
      "Sir, I really enjoyed reading it. It was not only easy to understand, but also very creative and interesting. The story format with characters like Aryan, Rhea, and Vayun made it feel like an adventure, not just a coding lesson.\n\nWhat I loved most:\nThe magical and fun storytelling made loops feel exciting.\nVisuals and examples like the lanterns and hammer helped me understand the difference between for and while loops easily.",
    time: "Nov 2025",
    className: "absolute top-10 right-[18%] rotate-[6deg]",
    image:
      "https://cdn.jsdelivr.net/gh/schooloffuturetechnology-wq/website-assets@main/adhrit.jpeg",
  }
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
          <div className="mx-auto">
            <p className="text-center text-sm text-muted-foreground mb-4 uppercase tracking-wider">
              From our WhatsApp groups
            </p>
            <DraggableCardContainer className="relative mx-auto flex min-h-[560px] w-full max-w-4xl items-center justify-center overflow-visible">
              {whatsappMessages.map((msg, index) => (
                <DraggableCardBody
                  key={`${msg.sender}-${index}`}
                  className={msg.className}
                  dragElastic={0.35}
                >
                  <div className="flex h-full flex-col justify-between">
                    {msg.videoUrl ? (
                      <div className="space-y-3">
                        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-md">
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src={msg.videoUrl}
                            title={`${msg.sender} video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300">
                          {msg.message}
                        </p>
                      </div>
                    ) : msg.image ? (
                      <div className="space-y-3">
                        <div className="overflow-hidden rounded-md">
                          <img
                            src={msg.image}
                            alt={`${msg.sender} feedback`}
                            className="h-64 w-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300">
                          {msg.message}
                        </p>
                      </div>
                    ) : (
                      <p className="text-sm text-neutral-700 dark:text-neutral-300">
                        {msg.message}
                      </p>
                    )}
                    <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                      <span>{msg.sender}</span>
                      <span>{msg.time}</span>
                    </div>
                  </div>
                </DraggableCardBody>
              ))}
            </DraggableCardContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
