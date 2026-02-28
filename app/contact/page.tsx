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
import { Mail, Phone, MapPin, Send, Briefcase, Award, DollarSign, CheckCircle } from "lucide-react"
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono uppercase">Contact for Work</h1>
            <p className="text-2xl max-w-3xl leading-relaxed">
              Available for consulting, program management, and advisory services. Bringing 40+ years of expertise in
              cooperative development, project management, and organizational strategy.
            </p>
          </div>
        </section>

        {/* Professional Services */}
        <section className="py-20 border-b-4 border-foreground bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-mono uppercase">
              Professional Services Available
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Briefcase,
                  title: "Program Management",
                  desc: "Expert leadership in cooperative development, NGO capacity building, and multi-stakeholder project coordination. Proven track record managing programs worth crores across multiple states.",
                },
                {
                  icon: Award,
                  title: "Strategic Consulting",
                  desc: "Management consultancy for cooperatives, sustainable businesses, and social enterprises. Specialized in organizational development, governance frameworks, and policy advocacy.",
                },
                {
                  icon: CheckCircle,
                  title: "Impact Evaluation",
                  desc: "Comprehensive impact studies and program evaluations. Experience conducting assessments for UNICEF, Government agencies, and international development organizations.",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="p-8 border-4 border-primary-foreground bg-background text-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
                >
                  <service.icon className="w-12 h-12 mb-4" strokeWidth={3} />
                  <h3 className="text-xl font-bold mb-3 font-mono uppercase">{service.title}</h3>
                  <p className="leading-relaxed">{service.desc}</p>
                </Card>
              ))}
            </div>

            {/* Rate Card */}
            <Card className="border-4 border-primary-foreground bg-background text-foreground p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <DollarSign className="w-12 h-12" strokeWidth={3} />
                <div>
                  <h3 className="text-3xl font-bold font-mono uppercase">Professional Rate</h3>
                  <p className="text-5xl font-bold mt-2 text-primary">$1,000 / Day</p>
                </div>
              </div>
              <p className="text-center text-lg leading-relaxed mt-6">
                Competitive daily rate for desk-based consulting, program management, strategic advisory, and evaluation
                services. Flexible engagement models available for short-term and long-term projects.
              </p>
            </Card>
          </div>
        </section>

        {/* Core Expertise */}
        <section className="py-20 border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center font-mono uppercase">Areas of Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Cooperative Development & MACS Act Implementation",
                "NGO Capacity Building & Network Coordination",
                "Program Management & Project Evaluation",
                "Water & Sanitation Advocacy (WATSAN)",
                "Natural Resource Management & Watershed Development",
                "HIV/AIDS Community Support Programs",
                "Organizational Governance & Policy Frameworks",
                "Impact Studies & Research Services",
                "Dairy Cooperative Management",
                "Non-Timber Forest Produce (NTFP) Systems",
                "Community-Based Organization (CBO) Development",
                "International Development & Cross-Border Coordination",
              ].map((expertise, index) => (
                <Card key={index} className="p-6 border-4 border-foreground bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                  <p className="font-mono leading-relaxed">{expertise}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Track Record */}
        <section className="py-20 border-b-4 border-foreground bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center font-mono uppercase">Proven Track Record</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "60+", label: "NGOs Supported" },
                { number: "1000+", label: "Cooperatives Advised" },
                { number: "50K+", label: "Direct Beneficiaries" },
                { number: "40+", label: "Years Experience" },
              ].map((stat, index) => (
                <Card key={index} className="text-center border-4 border-secondary-foreground p-8 bg-background text-foreground">
                  <div className="text-5xl font-bold mb-2 font-mono text-primary">{stat.number}</div>
                  <div className="text-sm uppercase font-mono">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
              <Card className="p-8 border-4 border-secondary-foreground bg-background text-foreground">
                <h3 className="text-2xl font-bold mb-6 font-mono uppercase">Notable Engagements</h3>
                <ul className="space-y-4 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-primary" />
                    <span>
                      <strong>AMUL (1987-1989):</strong> Management professional handling production, quality control,
                      and technical services with computer-based optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-primary" />
                    <span>
                      <strong>Tata Consultancy Services (1990-1995):</strong> Management consultant for cooperative
                      corporations and sustainable business models
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-primary" />
                    <span>
                      <strong>Cooperative Development Foundation (1995-2005):</strong> Advisor supporting 60+ NGOs and
                      1000+ cooperatives across India
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-primary" />
                    <span>
                      <strong>International HIV/AIDS Alliance (2005-2008):</strong> Program Officer managing Rs 3 crore
                      projects with 17,000+ CBO members
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-primary" />
                    <span>
                      <strong>Freshwater Action Network South Asia (2008-2010):</strong> Regional Coordinator leading
                      network across India, Bangladesh, Pakistan, and Nepal
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-primary" />
                    <span>
                      <strong>Development and Research Services (2010+):</strong> Senior Manager conducting impact
                      studies for UNICEF, Ministry of HRD, and Indian Red Cross
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center font-mono uppercase">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h3 className="text-3xl font-bold mb-8 font-mono uppercase">Inquiry Form</h3>
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
                  <h3 className="text-3xl font-bold mb-8 font-mono uppercase">Contact Information</h3>
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
            <h2 className="text-4xl font-bold mb-6 font-mono uppercase">Quick Consultation</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              For immediate inquiries about consulting services, project collaboration, or professional engagements,
              reach out directly on WhatsApp.
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
