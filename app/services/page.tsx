import { Button } from "@/components/ui/button";
import {
  Video,
  Music,
  Play,
  Code,
  Monitor,
  Speaker,
  CheckCircle,
  Tv,
  Youtube,
  Facebook,
  Share2
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Leaders in professional live streaming and broadcast production. From multi-camera events
            to TV shows, we deliver high-quality content across all platforms.
          </p>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="bg-black p-8 rounded-lg border border-zinc-800 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Play className="w-8 h-8 text-[hsl(var(--gold))]" />
                  <h2 className="text-3xl font-bold">Professional Live Streaming</h2>
                </div>
                <p className="text-gray-300 mb-6">
                  Industry-leading multi-camera live streaming solutions for any event. We broadcast directly
                  to Facebook, YouTube, and custom platforms with professional quality and reliability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Youtube className="w-6 h-6 text-[hsl(var(--gold))]" />
                    <span>YouTube Live</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Facebook className="w-6 h-6 text-[hsl(var(--gold))]" />
                    <span>Facebook Live</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Tv className="w-6 h-6 text-[hsl(var(--gold))]" />
                    <span>Custom RTMP</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Share2 className="w-6 h-6 text-[hsl(var(--gold))]" />
                    <span>Multi-platform</span>
                  </div>
                </div>
                <Button className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))] text-black">
                  Learn More
                </Button>
              </div>
              <div className="relative h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
                  alt="Multi-camera streaming setup"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ServiceCard
              icon={<Video className="w-12 h-12 text-[hsl(var(--gold))]" />}
              title="Broadcast Production"
              description="Professional TV show production including our successful 28-episode Gamenite show for One FreeState TV."
              features={[
                "Multi-Camera Production",
                "Professional TV Shows",
                "Live Event Broadcasting",
                "Post-Production",
                "Content Distribution"
              ]}
            />
            
            <ServiceCard
              icon={<Play className="w-12 h-12 text-[hsl(var(--gold))]" />}
              title="Live Event Streaming"
              description="High-quality live streaming services for events, conferences, and performances."
              features={[
                "Multi-Platform Streaming",
                "Real-time Graphics",
                "Live Switching",
                "Chat Moderation",
                "Analytics & Reports"
              ]}
            />

            <ServiceCard
              icon={<Music className="w-12 h-12 text-[hsl(var(--gold))]" />}
              title="Sound System Hire"
              description="High-quality sound systems for events of all sizes."
              features={[
                "Concert Sound Systems",
                "Conference Audio Setup",
                "Event PA Systems",
                "Technical Support",
                "Professional Installation"
              ]}
            />

            <ServiceCard
              icon={<Code className="w-12 h-12 text-[hsl(var(--gold))]" />}
              title="Software Development"
              description="Custom software solutions to streamline your business operations."
              features={[
                "Custom Applications",
                "Mobile App Development",
                "Web Applications",
                "API Integration",
                "Maintenance & Support"
              ]}
            />

            <ServiceCard
              icon={<Monitor className="w-12 h-12 text-[hsl(var(--gold))]" />}
              title="Website Development"
              description="Modern, responsive websites that drive results for your business."
              features={[
                "Responsive Design",
                "E-commerce Solutions",
                "CMS Integration",
                "SEO Optimization",
                "Website Maintenance"
              ]}
            />

            <ServiceCard
              icon={<Speaker className="w-12 h-12 text-[hsl(var(--gold))]" />}
              title="Recording Services"
              description="Professional audio recording for musicians and artists."
              features={[
                "Music Recording",
                "Audio Mixing",
                "Voice-over Recording",
                "Audio Mastering",
                "Studio Sessions"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your streaming or production requirements and how we can help bring your vision to life.
          </p>
          <Button size="lg" className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))] text-black">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ 
  icon, 
  title, 
  description, 
  features 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  features: string[];
}) {
  return (
    <div className="p-8 rounded-lg bg-black border border-zinc-800 hover:border-[hsl(var(--gold))] transition-colors">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <CheckCircle className="w-5 h-5 text-[hsl(var(--gold))] mr-3" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}