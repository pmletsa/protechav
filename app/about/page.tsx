import { Button } from "@/components/ui/button";
import { Clock, Users, Trophy, Target, Video, Tv } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-gradient">Protech AV</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Since 2005, we've been at the forefront of broadcast technology and live streaming,
            delivering excellence in TV production, multi-camera streaming, and professional AV services.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatCard
              icon={<Clock className="w-8 h-8 text-[hsl(var(--gold))]" />}
              value="18+"
              label="Years Experience"
            />
            <StatCard
              icon={<Video className="w-8 h-8 text-[hsl(var(--gold))]" />}
              value="28"
              label="TV Episodes"
            />
            <StatCard
              icon={<Trophy className="w-8 h-8 text-[hsl(var(--gold))]" />}
              value="100+"
              label="Music DVDs"
            />
            <StatCard
              icon={<Target className="w-8 h-8 text-[hsl(var(--gold))]" />}
              value="1000+"
              label="Projects Completed"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2005, Protech AV has evolved into a leading provider of professional broadcast
                and streaming solutions. Our journey includes producing the successful 28-episode Gamenite
                show for One FreeState TV and delivering countless high-quality live streams across multiple platforms.
              </p>
              <p className="text-gray-300 mb-6">
                From music DVDs for renowned artists to multi-camera live streaming of major events,
                our commitment to quality and innovation has made us the trusted choice for
                professional audio-visual solutions.
              </p>
              <Button className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))] text-black">
                Contact Us
              </Button>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
                alt="Professional streaming setup"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Excellence"
              description="We deliver broadcast-quality production in everything we do, from TV shows to live streams."
            />
            <ValueCard
              title="Innovation"
              description="Staying ahead with the latest in streaming and broadcast technology."
            />
            <ValueCard
              title="Reliability"
              description="Ensuring professional quality and stability in every broadcast and stream."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="text-center p-6 rounded-lg bg-black border border-zinc-800">
      <div className="mb-4 flex justify-center">{icon}</div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-black border border-zinc-800">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}