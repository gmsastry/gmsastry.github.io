import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Dairy Cooperative Development",
      location: "Andhra Pradesh, India",
      year: "1995-2005",
      beneficiaries: "10,000+ farmers",
      desc: "Facilitated conversion of dairy cooperatives to MACS Act platform, providing governance support to Sangam Dairy, Krishna Dairy, and Vizag Dairy. Promoted women's dairy cooperatives in Karimnagar district.",
      image: "/images/image6.png",
    },
    {
      title: "Natural Resource Management",
      location: "Telangana, India",
      year: "2003-2005",
      beneficiaries: "15 NGOs, thousands of community members",
      desc: "Coordinated network of 15 NGOs in Telangana for watershed development, organic farming, non-pesticidal management, and sustainable agriculture. Advocated for policy changes in grazing rights.",
      image: "/images/image5.png",
    },
    {
      title: "HIV/AIDS Community Support",
      location: "Andhra Pradesh, India",
      year: "2005-2008",
      beneficiaries: "17,000+ CBO members",
      desc: "Enabled state-level CBO networks for people living with HIV/AIDS. Advocated for health insurance coverage and harm reduction programmes in major cities. Managed projects worth Rs 3 crores.",
      image: "/images/image7.png",
    },
    {
      title: "Water & Sanitation Advocacy",
      location: "South Asia",
      year: "2008-2010",
      beneficiaries: "Regional impact across 4 countries",
      desc: "Led Freshwater Action Network South Asia, coordinating civil society organizations across India, Bangladesh, Pakistan, and Nepal. Engaged with World Bank and global frameworks for WATSAN issues.",
      image: "/images/image8.png",
    },
    {
      title: "Tribal Welfare & Forest Produce",
      location: "Andhra Pradesh, India",
      year: "1992-1994",
      beneficiaries: "Tribal communities",
      desc: "Established sustainable collection and marketing systems for non-timber forest products (NTFP), primarily Gum Karaya, through Girijan Cooperative Corporation.",
      image: "/images/image9.jpg",
    },
    // {
    //   title: "Cooperative Legislation Advocacy",
    //   location: "Multiple Indian States",
    //   year: "1995-2005",
    //   beneficiaries: "1000+ cooperatives",
    //   desc: "Advocated with Madhya Pradesh and Karnataka governments to introduce liberal cooperative legislation similar to APMACS Act. Provided professional support to 60+ NGOs.",
    //   image: "/policy-advocacy-meeting.jpg",
    // },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 border-b-4 border-foreground bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono uppercase">Projects</h1>
            <p className="text-2xl max-w-3xl leading-relaxed">
              Four decades of transformative work across cooperatives, community development, health advocacy, and
              environmental sustainability.
            </p>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-primary text-primary-foreground border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 font-mono">60+</div>
                <div className="uppercase font-mono text-sm">NGOs Supported</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 font-mono">1000+</div>
                <div className="uppercase font-mono text-sm">Cooperatives</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 font-mono">50K+</div>
                <div className="uppercase font-mono text-sm">Direct Beneficiaries</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 font-mono">4</div>
                <div className="uppercase font-mono text-sm">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <div className="grid gap-12">
              {projects.map((project, index) => (
                <Card key={index} className="border-4 border-foreground overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-[300px] md:h-auto border-b-4 md:border-b-0 md:border-r-4 border-foreground">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-3xl font-bold mb-4 font-mono uppercase">{project.title}</h3>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={20} />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={20} />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users size={20} />
                          <span>{project.beneficiaries}</span>
                        </div>
                      </div>
                      <p className="leading-relaxed text-lg mb-6">{project.desc}</p>
                      <button className="flex items-center gap-2 font-mono uppercase text-sm px-4 py-2 border-2 border-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                        Learn More <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ongoing Initiatives */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center font-mono uppercase">Ongoing Initiatives</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Disarmament Advocacy",
                  desc: "Building public awareness and political will for nuclear disarmament through social media, public speaking, and policy engagement.",
                },
                {
                  title: "Climate Action",
                  desc: "Connecting military spending reduction with climate change mitigation. Advocating for reallocation of defense budgets to environmental protection.",
                },
                {
                  title: "Digital Outreach",
                  desc: "Leveraging social media platforms to build a global community supporting peace, disarmament, and humanitarian causes.",
                },
              ].map((initiative, index) => (
                <Card key={index} className="p-8 border-4 border-secondary-foreground bg-background text-foreground">
                  <h3 className="text-2xl font-bold mb-4 font-mono uppercase">{initiative.title}</h3>
                  <p className="leading-relaxed">{initiative.desc}</p>
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
