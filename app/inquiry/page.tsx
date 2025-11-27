"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setStatus("success")
    setFormData({ name: "", email: "", phone: "", organization: "", inquiryType: "", message: "" })

    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 border-b-4 border-foreground bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono uppercase">Inquiry Form</h1>
            <p className="text-2xl max-w-3xl leading-relaxed">
              Submit a detailed inquiry about collaboration opportunities, speaking engagements, or partnership
              proposals.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="font-mono uppercase mb-2 block">
                    Full Name *
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
                    Email Address *
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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="font-mono uppercase mb-2 block">
                    Phone Number
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
                  <Label htmlFor="organization" className="font-mono uppercase mb-2 block">
                    Organization
                  </Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="border-2 border-foreground"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="inquiryType" className="font-mono uppercase mb-2 block">
                  Inquiry Type *
                </Label>
                <Select
                  value={formData.inquiryType}
                  onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                >
                  <SelectTrigger className="border-2 border-foreground">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="collaboration">Collaboration Opportunity</SelectItem>
                    <SelectItem value="speaking">Speaking Engagement</SelectItem>
                    <SelectItem value="partnership">Partnership Proposal</SelectItem>
                    <SelectItem value="media">Media Inquiry</SelectItem>
                    <SelectItem value="research">Research/Academic</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="font-mono uppercase mb-2 block">
                  Detailed Message *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={8}
                  className="border-2 border-foreground"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                size="lg"
                className="w-full font-mono uppercase border-4 border-foreground text-lg"
              >
                {status === "loading" ? "Submitting..." : "Submit Inquiry"}
              </Button>

              {status === "success" && (
                <div className="border-4 border-green-600 bg-green-50 p-6">
                  <p className="text-green-600 font-bold text-center">
                    Thank you for your inquiry! We will review your message and respond within 2-3 business days.
                  </p>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
