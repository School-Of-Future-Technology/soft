import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Calendar, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const web3FormsEndpoint = "https://api.web3forms.com/submit";
  const web3FormsAccessKey = "9b4ddfef-b36f-4588-a3dc-ae13409338f0";
  const [formData, setFormData] = useState({
    parentName: "",
    grade: "",
    whatsapp: "",
    preferredTime: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(web3FormsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          parent_name: formData.parentName,
          child_grade: formData.grade,
          whatsapp_number: formData.whatsapp,
          preferred_time: formData.preferredTime,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result?.success) {
        throw new Error("Submission failed");
      }
      toast({
        title: "Request Received!",
        description:
          "We'll contact you within 24 hours to schedule your free session.",
      });
      setFormData({
        parentName: "",
        grade: "",
        whatsapp: "",
        preferredTime: "",
      });
      navigate("/thank-you");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Still unsure?
                <br />
                <span className="gradient-text">Let your child experience a real class.</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Book a free demo class for your child, or attend a parent webinar to learn about our teaching methodology.
              </p>
              
              {/* Options */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 glass-card p-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Play className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">Free Demo Class</h3>
                    <p className="text-sm text-muted-foreground">30-minute live session with a real instructor. Your child will build something!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 glass-card p-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold">Free Parent Webinar</h3>
                    <p className="text-sm text-muted-foreground">Learn about our curriculum, see student projects, and ask questions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <CardContainer containerClassName="py-0" className="w-full">
              <CardBody className="h-auto w-full">
                <CardItem translateZ={18} className="w-full">
                  <div className="glass-card p-8 glow-effect animated-border">
                    <h3 className="text-xl font-semibold mb-6 text-center">Book Your Free Session</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Parent's Name</label>
                        <Input
                          placeholder="Enter your name"
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          required
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Child's Grade</label>
                        <select
                          value={formData.grade}
                          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                          required
                          className="w-full h-10 px-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select grade</option>
                          {[7, 8, 9, 10, 11, 12].map((grade) => (
                            <option key={grade} value={grade}>Grade {grade}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">WhatsApp Number</label>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          required
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm text-muted-foreground mb-1.5 block">Preferred Time</label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          required
                          className="w-full h-10 px-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select time slot</option>
                          <option value="morning">Morning (9 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                          <option value="evening">Evening (5 PM - 8 PM)</option>
                          <option value="weekend">Weekend Only</option>
                        </select>
                      </div>
                      
                      <Button
                        type="submit"
                        variant="hero"
                        size="xl"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Book Free Session"}
                      </Button>
                      
                      <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          <span>100% Free</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          <span>No commitment</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
