import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Shield, Globe, Users, Heart, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center border-b-4 border-foreground">
          <div className="absolute inset-0 bg-primary/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-none">
                  MRUTHYUNJAYA
                  <br />
                  SASTRY
                  <br />
                  GABBITA
                </h1>
                <div className="border-l-8 border-primary pl-6 mb-8">
                  <p className="text-xl md:text-2xl font-mono mb-4">
                    AND HIS JOURNEY
                    <br />
                    WITH HUMANITY
                  </p>
                  <p className="text-lg leading-relaxed">Peace Advocate • Disarmament Activist • Humanitarian Leader</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/mission">
                    <Button size="lg" className="font-mono uppercase border-4 border-foreground text-lg">
                      Our Mission <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                  <Link href="/donate">
                    <Button
                      size="lg"
                      variant="outline"
                      className="font-mono uppercase border-4 border-foreground text-lg bg-transparent"
                    >
                      Support the Cause
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[500px] border-4 border-foreground overflow-hidden">
                <Image
                  src="/images/image1.png"
                  alt="Mruthyunjaya Sastry Gabbita speaking at a conference"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary text-secondary-foreground border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "40+", label: "Years of Experience" },
                { number: "1000+", label: "Communities Impacted" },
                { number: "60+", label: "NGOs Supported" },
                { number: "15+", label: "Countries Visited" },
              ].map((stat, index) => (
                <div key={index} className="text-center border-4 border-secondary-foreground p-6">
                  <div className="text-4xl md:text-5xl font-bold mb-2 font-mono">{stat.number}</div>
                  <div className="text-sm uppercase font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-mono uppercase">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Disarmament", desc: "Advocating for global nuclear disarmament and peace" },
                { icon: Globe, title: "Global Harmony", desc: "Building bridges across nations and cultures" },
                { icon: Users, title: "Community", desc: "Empowering rural communities and cooperatives" },
                { icon: Heart, title: "Compassion", desc: "Humanitarian work driven by empathy and service" },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="p-8 border-4 border-foreground hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <value.icon className="w-12 h-12 mb-4" strokeWidth={3} />
                  <h3 className="text-xl font-bold mb-3 font-mono uppercase">{value.title}</h3>
                  <p className="leading-relaxed">{value.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="py-20 bg-muted border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-mono uppercase">
              Professional Journey
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  org: "AMUL",
                  role: "Management Professional",
                  years: "1987-1989",
                  desc: "Contributed to dairy industry development and cooperative management",
                },
                {
                  org: "TATA CONSULTANCY SERVICES",
                  role: "Management Consultant",
                  years: "1990-1995",
                  desc: "Provided consultancy for cooperatives and sustainable businesses",
                },
                {
                  org: "COOPERATIVE DEVELOPMENT FOUNDATION",
                  role: "Advisor",
                  years: "1995-2005",
                  desc: "Supported 60+ NGOs and 1000+ cooperatives across India",
                },
              ].map((exp, index) => (
                <Card key={index} className="p-8 border-4 border-foreground bg-background">
                  <div className="text-3xl font-bold mb-2 font-mono text-primary">{exp.years}</div>
                  <h3 className="text-xl font-bold mb-2 font-mono uppercase">{exp.org}</h3>
                  <p className="text-sm font-bold mb-3 text-muted-foreground">{exp.role}</p>
                  <p className="leading-relaxed">{exp.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground border-b-4 border-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono uppercase">Join the Movement for Peace</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Together, we can create a world free from nuclear weapons and build lasting global harmony.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/donate">
                <Button
                  size="lg"
                  variant="secondary"
                  className="font-mono uppercase border-4 border-primary-foreground text-lg"
                >
                  Make a Donation
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-mono uppercase border-4 border-primary-foreground text-lg bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
