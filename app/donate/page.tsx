"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign, Heart, Users, Globe } from "lucide-react"
import { useState } from "react"

export default function DonatePage() {
  const [amount, setAmount] = useState<string>("")
  const [customAmount, setCustomAmount] = useState<string>("")

  const presetAmounts = ["25", "50", "100", "250", "500", "1000"]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 border-b-4 border-foreground bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono uppercase">Donate Now</h1>
            <p className="text-2xl max-w-3xl mx-auto leading-relaxed">
              Support our mission for global disarmament, peace advocacy, and humanitarian work. Every contribution
              makes a difference.
            </p>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-secondary text-secondary-foreground border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Users, amount: "$50", impact: "Supports community workshop materials" },
                { icon: Heart, amount: "$100", impact: "Funds educational program for 10 students" },
                { icon: Globe, amount: "$250", impact: "Sponsors international advocacy event" },
                { icon: DollarSign, amount: "$500+", impact: "Major impact on multiple initiatives" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 border-4 border-secondary-foreground bg-background text-foreground text-center"
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4" strokeWidth={3} />
                  <div className="text-3xl font-bold mb-2 font-mono text-primary">{item.amount}</div>
                  <p className="text-sm">{item.impact}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-center font-mono uppercase">Choose Your Contribution</h2>

            <Card className="p-8 border-4 border-foreground">
              <div className="space-y-8">
                {/* Preset Amounts */}
                <div>
                  <Label className="font-mono uppercase mb-4 block text-lg">Select Amount (USD)</Label>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {presetAmounts.map((preset) => (
                      <button
                        key={preset}
                        onClick={() => {
                          setAmount(preset)
                          setCustomAmount("")
                        }}
                        className={`p-4 border-4 font-bold font-mono text-xl transition-colors ${
                          amount === preset
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                        }`}
                      >
                        ${preset}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <Label htmlFor="custom" className="font-mono uppercase mb-2 block">
                    Or Enter Custom Amount
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2" />
                    <Input
                      id="custom"
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setAmount("")
                      }}
                      className="border-2 border-foreground pl-12 text-xl"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                {/* Donor Information */}
                <div className="space-y-4 pt-4 border-t-4 border-foreground">
                  <h3 className="font-mono uppercase text-lg">Donor Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="donor-name" className="font-mono uppercase mb-2 block text-sm">
                        Full Name *
                      </Label>
                      <Input id="donor-name" className="border-2 border-foreground" />
                    </div>
                    <div>
                      <Label htmlFor="donor-email" className="font-mono uppercase mb-2 block text-sm">
                        Email *
                      </Label>
                      <Input id="donor-email" type="email" className="border-2 border-foreground" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="donor-phone" className="font-mono uppercase mb-2 block text-sm">
                      Phone (Optional)
                    </Label>
                    <Input id="donor-phone" type="tel" className="border-2 border-foreground" />
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full font-mono uppercase border-4 border-foreground text-xl"
                  disabled={!amount && !customAmount}
                >
                  Donate {(amount || customAmount) && `$${amount || customAmount}`}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Your donation is tax-deductible. You will receive a receipt via email.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Why Donate */}
        <section className="py-20 bg-muted border-t-4 border-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center font-mono uppercase">Why Your Donation Matters</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Disarmament Advocacy",
                  desc: "Fund research, policy papers, and advocacy campaigns pushing for nuclear weapons elimination worldwide.",
                },
                {
                  title: "Community Programs",
                  desc: "Support grassroots initiatives, cooperative development, and capacity building in underserved communities.",
                },
                {
                  title: "Education & Awareness",
                  desc: "Create educational materials, organize workshops, and build public awareness about peace and disarmament.",
                },
              ].map((item, index) => (
                <Card key={index} className="p-8 border-4 border-foreground">
                  <h3 className="text-2xl font-bold mb-4 font-mono uppercase">{item.title}</h3>
                  <p className="leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
