import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this suitable for absolute beginners?",
    answer: "Absolutely! Most of our students start with zero coding experience. We begin with fundamentals and gradually build up. Our instructors are trained to identify each student's pace and adjust accordingly.",
  },
  {
    question: "What is the batch size?",
    answer: "We maintain small batches of 4-6 students maximum. This ensures every child gets individual attention and can ask questions freely without feeling lost in a crowd.",
  },
  {
    question: "Are class recordings available?",
    answer: "Yes! All classes are recorded and shared within 24 hours. Students can rewatch lessons anytime, which is especially helpful when revising before projects or exams.",
  },
  {
    question: "How do you ensure online safety?",
    answer: "All our classes are conducted on secure, password-protected video calls. We require cameras to be on during class. Parents receive a direct WhatsApp line to instructors and are welcome to join any session.",
  },
  {
    question: "What if my child misses a class?",
    answer: "No problem! We provide class recordings, and instructors offer 15-minute catch-up sessions before the next class if needed. We also have a WhatsApp group for quick doubt-clearing between classes.",
  },
  {
    question: "Do you help with school/GCSE coursework?",
    answer: "Yes, especially for our GCSE Computer Science program. We align our curriculum with the UK syllabus and help students with their coursework, past papers, and exam preparation.",
  },
  {
    question: "What equipment does my child need?",
    answer: "Just a laptop or desktop computer with a stable internet connection. All software we use is free (Python, VS Code, etc.). We'll guide you through the setup in the first session.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything parents want to know before enrolling their child.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 rounded-xl border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions */}
          <div className="text-center mt-12 glass-card p-8">
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Reach out to us on WhatsApp and we'll get back to you within hours.
            </p>
            <a
              href="https://chat.whatsapp.com/LiAko3R5Lf41uQuVo0VVbr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <span className="text-lg">💬</span>
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
