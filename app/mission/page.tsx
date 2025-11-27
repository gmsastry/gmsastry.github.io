import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { Target, Shield, Globe2, Users, Heart, Leaf } from "lucide-react"

export default function MissionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 border-b-4 border-foreground bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono uppercase">Our Mission</h1>
            <p className="text-2xl max-w-3xl leading-relaxed">
              Building a world free from nuclear weapons, advancing global harmony, and empowering vulnerable
              communities through sustainable development.
            </p>
          </div>
        </section>

        {/* Core Mission */}
        <section className="py-20 border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-8 font-mono uppercase">Why Disarmament Matters</h2>
                <div className="space-y-6 leading-relaxed text-lg">
                  <p>
                    Nuclear weapons represent the greatest existential threat to humanity. A single nuclear exchange
                    could end civilization as we know it, causing immediate deaths in the millions and long-term
                    environmental catastrophe that would make large parts of Earth uninhabitable.
                  </p>
                  <p>
                    The resources spent on maintaining and modernizing nuclear arsenals - estimated at over $80 billion
                    annually - could instead address urgent humanitarian needs: ending hunger, providing clean water,
                    ensuring universal education, and combating climate change.
                  </p>
                  <p className="font-bold border-l-8 border-primary pl-6">
                    "Every dollar spent on weapons of mass destruction is a dollar stolen from those who hunger, those
                    who are cold, and those without hope."
                  </p>
                </div>
              </div>
              <div>
                <Card className="border-4 border-foreground p-8 bg-muted h-full">
                  <h3 className="text-2xl font-bold mb-6 font-mono uppercase">Key Statistics</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <div className="text-4xl font-bold font-mono mb-2">13,000+</div>
                      <p className="text-sm">Nuclear warheads exist globally</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <div className="text-4xl font-bold font-mono mb-2">$80B+</div>
                      <p className="text-sm">Annual spending on nuclear weapons</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <div className="text-4xl font-bold font-mono mb-2">90%</div>
                      <p className="text-sm">Of world population supports nuclear disarmament</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <div className="text-4xl font-bold font-mono mb-2">ZERO</div>
                      <p className="text-sm">Acceptable use cases for nuclear weapons</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Advocacy in Action */}
        <section className="py-20 bg-muted border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center font-mono uppercase">Advocacy in Action</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
              Watch our latest videos on disarmament, peace advocacy, and global cooperation.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="border-4 border-foreground overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/GNDKcq4Qolw?si=LqrLOiclqvVdRy5c" 
                    title="Disarmament"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
              </Card>
              <Card className="border-4 border-foreground p-8 bg-background">
                <h3 className="text-2xl font-bold mb-4 font-mono uppercase">Join the Conversation</h3>
                <p className="leading-relaxed mb-6">
                  Subscribe to our YouTube channel for regular updates on disarmament advocacy, peace initiatives, and
                  insights from conferences around the world. Be part of the movement for global nuclear disarmament.
                </p>
                <a
                  href="https://www.youtube.com/channel/UCPV59NJ4gCSEQq1MI5AgFVg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground font-mono uppercase border-4 border-foreground hover:bg-primary/90 transition-colors"
                >
                  Visit YouTube Channel
                </a>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission Pillars */}
        <section className="py-20 bg-secondary text-secondary-foreground border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center font-mono uppercase">Mission Pillars</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Nuclear Disarmament",
                  desc: "Advocating for complete elimination of nuclear weapons through international cooperation and treaties. Supporting the Treaty on the Prohibition of Nuclear Weapons (TPNW).",
                },
                {
                  icon: Globe2,
                  title: "Global Peace",
                  desc: "Promoting dialogue between nations, cultures, and religions. Building understanding and cooperation to prevent conflicts before they start.",
                },
                {
                  icon: Users,
                  title: "Community Empowerment",
                  desc: "Supporting rural cooperatives, NGOs, and grassroots organizations. Providing resources and training to communities to achieve self-sufficiency.",
                },
                {
                  icon: Heart,
                  title: "Humanitarian Aid",
                  desc: "Addressing immediate needs of vulnerable populations. Working on healthcare access, education, and poverty alleviation in underserved areas.",
                },
                {
                  icon: Leaf,
                  title: "Environmental Justice",
                  desc: "Connecting disarmament with climate action. Redirecting military spending toward environmental protection and sustainable development.",
                },
                {
                  icon: Target,
                  title: "Policy Advocacy",
                  desc: "Engaging with governments and international organizations. Pushing for legislation that supports peace, justice, and sustainable development.",
                },
              ].map((pillar, index) => (
                <Card
                  key={index}
                  className="p-8 border-4 border-secondary-foreground bg-background text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <pillar.icon className="w-16 h-16 mb-6" strokeWidth={3} />
                  <h3 className="text-2xl font-bold mb-4 font-mono uppercase">{pillar.title}</h3>
                  <p className="leading-relaxed">{pillar.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision for the Future */}
        <section className="py-20 border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center font-mono uppercase">Vision for the Future</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-4 border-foreground p-8 bg-muted">
                <h3 className="text-2xl font-bold mb-4 font-mono uppercase">A World Without Nuclear Weapons</h3>
                <p className="leading-relaxed text-lg">
                  We envision a world where nuclear weapons are relegated to history museums, not military arsenals.
                  Where international disputes are resolved through diplomacy and dialogue, not threats of annihilation.
                  Where the $80 billion+ spent annually on nuclear weapons is redirected to solving humanity's real
                  challenges: poverty, disease, climate change, and inequality.
                </p>
              </Card>

              <Card className="border-4 border-foreground p-8 bg-muted">
                <h3 className="text-2xl font-bold mb-4 font-mono uppercase">Empowered Communities</h3>
                <p className="leading-relaxed text-lg">
                  We work toward a future where every community has access to quality education, healthcare, and
                  economic opportunities. Where cooperatives and grassroots organizations have the resources and support
                  they need to lift themselves out of poverty. Where no one is left behind because of their
                  circumstances.
                </p>
              </Card>

              <Card className="border-4 border-foreground p-8 bg-muted">
                <h3 className="text-2xl font-bold mb-4 font-mono uppercase">Global Cooperation</h3>
                <p className="leading-relaxed text-lg">
                  We strive for a world where nations work together to address shared challenges. Where borders are
                  bridges, not barriers. Where diversity is celebrated and differences are resolved through
                  understanding, not violence. Where humanity recognizes its common destiny on this fragile planet.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 font-mono uppercase">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              This mission is too important to leave to governments alone. Every voice matters. Every action counts.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-secondary text-secondary-foreground font-mono uppercase border-4 border-primary-foreground text-lg hover:bg-secondary/90 transition-colors"
              >
                Get Involved
              </a>
              <a
                href="/donate"
                className="px-8 py-4 bg-transparent border-4 border-primary-foreground font-mono uppercase text-lg hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                Support the Cause
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
