"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Send
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Get in touch with us for any inquiries about our services or to start your project.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <ContactCard
              icon={<Phone className="w-8 h-8 text-[hsl(var(--gold))]" />}
              title="Phone"
              info="+266 5886 5770"
              link="tel:+26658865770"
            />
            <ContactCard
              icon={<Mail className="w-8 h-8 text-[hsl(var(--gold))]" />}
              title="Email"
              info="info@protechav.com"
              link="mailto:info@protechav.com"
            />
            <ContactCard
              icon={<MapPin className="w-8 h-8 text-[hsl(var(--gold))]" />}
              title="Address"
              info="Maseru, Lesotho"
              link="#"
            />
            <ContactCard
              icon={<Clock className="w-8 h-8 text-[hsl(var(--gold))]" />}
              title="Business Hours"
              info="Mon - Fri: 8AM - 5PM"
              link="#"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black p-8 rounded-lg border border-zinc-800">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-zinc-900 border-zinc-800"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-zinc-900 border-zinc-800"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-zinc-900 border-zinc-800"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-zinc-900 border-zinc-800"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-zinc-900 border-zinc-800 min-h-[150px]"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold-dark))] text-black"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-black p-8 rounded-lg border border-zinc-800">
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="aspect-square w-full bg-zinc-900 rounded-lg">
                {/* Add your map implementation here */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Map will be displayed here
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactCard({ 
  icon, 
  title, 
  info,
  link
}: { 
  icon: React.ReactNode; 
  title: string; 
  info: string;
  link: string;
}) {
  return (
    <a 
      href={link}
      className="p-6 rounded-lg bg-black border border-zinc-800 hover:border-[hsl(var(--gold))] transition-colors block"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{info}</p>
    </a>
  );
}