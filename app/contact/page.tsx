"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setStatus("success")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 border-b-4 border-foreground bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono uppercase">Contact Us</h1>
            <p className="text-2xl max-w-3xl leading-relaxed">
              Get in touch to learn more about our work, collaborate on projects, or support our mission for global
              peace and disarmament.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8 font-mono uppercase">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-mono uppercase mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-2 border-foreground"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-mono uppercase mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-2 border-foreground"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-mono uppercase mb-2 block">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-2 border-foreground"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="font-mono uppercase mb-2 block">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="border-2 border-foreground"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="font-mono uppercase mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="border-2 border-foreground"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full font-mono uppercase border-4 border-foreground text-lg"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"} <Send className="ml-2" size={20} />
                  </Button>
                  {status === "success" && (
                    <p className="text-green-600 font-bold border-2 border-green-600 p-4">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  )}
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-8 font-mono uppercase">Contact Information</h2>
                  <div className="space-y-6">
                    <Card className="p-6 border-4 border-foreground flex items-start gap-4">
                      <Mail className="w-8 h-8 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 font-mono uppercase">Email</h3>
                        <a href="mailto:gmsastryhyd@gmail.com" className="text-primary hover:underline">
                          gmsastryhyd@gmail.com
                        </a>
                      </div>
                    </Card>

                    <Card className="p-6 border-4 border-foreground flex items-start gap-4">
                      <Phone className="w-8 h-8 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 font-mono uppercase">Phone</h3>
                        <p>+91 9848474646</p>
                      </div>
                    </Card>

                    <Card className="p-6 border-4 border-foreground flex items-start gap-4">
                      <MapPin className="w-8 h-8 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 font-mono uppercase">Location</h3>
                        <p>Hyderabad, India</p>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Google Map */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-mono uppercase">Find Us</h3>
                  <div className="border-4 border-foreground overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4351.492842168035!2d78.56313731127403!3d17.44452558338344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bf7f9345a31%3A0xa6e33ac209e60c09!2sGK%20Arunodaya%20Enclave!5e1!3m2!1sen!2sus!4v1764208079207!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="py-20 bg-[#25D366] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 font-mono uppercase">Connect on WhatsApp</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              For quick questions or urgent matters, reach out to us directly on WhatsApp.
            </p>
            <a
              href="https://wa.me/919848746446"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-[#25D366] font-mono uppercase border-4 border-white text-lg hover:bg-transparent hover:text-white transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
