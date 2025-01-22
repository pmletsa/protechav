import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore our collection of successful projects across broadcast television,
            live streaming, and professional productions.
          </p>
        </div>
      </section>

      {/* TV Production Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">TV Productions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PortfolioCard
              image="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80"
              title="Gamenite Show"
              category="TV Series"
              description="28-episode production for One FreeState TV, featuring dynamic content and professional broadcast quality."
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&q=80"
              title="Live Events"
              category="Broadcast"
              description="Multi-camera live event coverage with professional broadcasting to multiple platforms."
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
              title="Streaming Productions"
              category="Live Streaming"
              description="Professional live streaming services for corporate events and conferences."
            />
          </div>
        </div>
      </section>

      {/* Music DVDs Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Music DVDs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PortfolioCard
              image="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80"
              title="Ntate Mants'a"
              category="Music DVD"
              description="Full concert recording and production of Ntate Mants'a's live performance."
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80"
              title="Mosia"
              category="Music DVD"
              description="Studio performance and music video compilation for Mosia."
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80"
              title="Lets'ohla"
              category="Music DVD"
              description="Live concert recording with multi-camera production."
            />
          </div>
        </div>
      </section>

      {/* Corporate Videos Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Corporate Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PortfolioCard
              image="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&q=80"
              title="MGC Aviation Launch"
              category="Corporate Video"
              description="Promotional video production for company launch event."
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              title="Government Projects"
              category="Corporate Video"
              description="Various promotional videos for government initiatives."
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
              title="Corporate Training"
              category="Corporate Video"
              description="Professional training and instructional videos."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Project</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to create something amazing? Let's work together to bring your vision to life.
          </p>
          <Button size="lg" className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))] text-black">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}

function PortfolioCard({ 
  image, 
  title, 
  category,
  description 
}: { 
  image: string; 
  title: string; 
  category: string;
  description: string;
}) {
  return (
    <div className="rounded-lg overflow-hidden bg-black border border-zinc-800 hover:border-[hsl(var(--gold))] transition-colors">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="text-sm text-[hsl(var(--gold))] mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}