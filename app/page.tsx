import { Button } from "@/components/ui/button";
import { Play, Monitor, Music, Video, Code, Speaker, Youtube, Facebook, Tv, Star, Quote } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
            alt="Professional streaming setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Professional <span className="text-gradient">Live Streaming,
              <br />  Broadcasting & IT </span> Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
            Industry leaders in multi-camera live streaming, TV production, professional audio-visual services, and IT solutions since 2005
          </p>
          <div className="space-x-4">

            <Link href="/services">
              <Button size="lg" className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))] text-black">
                Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient">Gamenite Show</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Proud producers of the 28-episode Gamenite show for One FreeState TV, showcasing our expertise in professional broadcast production.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Video className="w-6 h-6 text-[hsl(var(--gold))]" />
                  <span>28 Episodes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Tv className="w-6 h-6 text-[hsl(var(--gold))]" />
                  <span>Broadcast Quality</span>
                </div>
                <div className="flex items-center gap-3">
                  <Monitor className="w-6 h-6 text-[hsl(var(--gold))]" />
                  <span>Multi-Camera</span>
                </div>
                <div className="flex items-center gap-3">
                  <Play className="w-6 h-6 text-[hsl(var(--gold))]" />
                  <span>Professional Production</span>
                </div>
              </div>
              <Button className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))] text-black">
                View Portfolio
              </Button>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80"
                alt="TV Production"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-gradient">Our Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Play className="w-10 h-10 text-[hsl(var(--gold))]" />}
              title="Live Streaming"
              description="Professional multi-camera live streaming to Facebook, YouTube, and custom platforms."
            />
            <ServiceCard
              icon={<Video className="w-10 h-10 text-[hsl(var(--gold))]" />}
              title="TV Production"
              description="Full-scale television show production and broadcasting services."
            />
            <ServiceCard
              icon={<Music className="w-10 h-10 text-[hsl(var(--gold))]" />}
              title="Sound System Hire"
              description="High-quality sound systems for events, concerts, and professional productions."
            />
            <ServiceCard
              icon={<Monitor className="w-10 h-10 text-[hsl(var(--gold))]" />}
              title="Video Production"
              description="Professional video production for music DVDs and promotional content."
            />
            <ServiceCard
              icon={<Code className="w-10 h-10 text-[hsl(var(--gold))]" />}
              title="Software Development"
              description="Custom software solutions tailored to your business needs."
            />
            <ServiceCard
              icon={<Speaker className="w-10 h-10 text-[hsl(var(--gold))]" />}
              title="Recording Services"
              description="Professional audio recording for musicians and artists."
            />
          </div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            <span className="text-gradient">Stream Everywhere</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800">
              <Youtube className="w-12 h-12 text-[hsl(var(--gold))] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">YouTube Live</h3>
              <p className="text-gray-400">Professional streaming to YouTube with high quality output.</p>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800">
              <Facebook className="w-12 h-12 text-[hsl(var(--gold))] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Facebook Live</h3>
              <p className="text-gray-400">Direct streaming to Facebook with professional quality.</p>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800">
              <Tv className="w-12 h-12 text-[hsl(var(--gold))] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom RTMP</h3>
              <p className="text-gray-400">Stream to any platform that supports RTMP protocol.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-gradient">Client Testimonials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Protech AV's multi-camera streaming setup was exceptional. They delivered a professional broadcast that exceeded our expectations."
              author="One FreeState TV"
              role="Gamenite Show Production"
              rating={5}
            />
            <TestimonialCard
              quote="Their sound system and recording quality for my DVD was outstanding. True professionals in the music industry."
              author="Ntate Mants'a"
              role="Recording Artist"
              rating={5}
            />
            <TestimonialCard
              quote="The live streaming service for our corporate event was flawless. Multiple platforms, perfect quality."
              author="MGC Aviation"
              role="Corporate Client"
              rating={5}
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
    </>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-black border border-zinc-800 hover:border-[hsl(var(--gold))] transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  rating
}: {
  quote: string;
  author: string;
  role: string;
  rating: number;
}) {
  return (
    <div className="p-8 rounded-lg bg-black border border-zinc-800">
      <Quote className="w-10 h-10 text-[hsl(var(--gold))] mb-6" />
      <p className="text-gray-300 mb-6 text-lg italic">"{quote}"</p>
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
        ))}
      </div>
      <div>
        <div className="font-bold">{author}</div>
        <div className="text-gray-400">{role}</div>
      </div>
    </div>
  );
}