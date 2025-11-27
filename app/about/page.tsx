import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 border-b-4 border-foreground bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono uppercase">About</h1>
            <p className="text-2xl max-w-3xl leading-relaxed">
              A life dedicated to humanitarian service, cooperative development, and advocacy for global disarmament.
            </p>
          </div>
        </section>

        {/* Biography */}
        <section className="py-20 border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold mb-8 font-mono uppercase">Early Life & Education</h2>
                <div className="space-y-6 leading-relaxed">
                  <p>
                    Born in 1965, Mruthyunjaya Sastry Gabbita is the first child of Sri Gabbita Durga Prasad and Smt
                    Prabhavati. Raised in a rural area with a humble upbringing, he always had a penchant for studying,
                    particularly mathematics and humanities.
                  </p>
                  <p>
                    His family was a follower of the Hindu faith, and he was inculcated with ideas like compassion,
                    learning, and curiosity. As he grew older, he realized that people are honest, kind, and lovable in
                    general - values that would guide his life's work.
                  </p>
                  <p>
                    His educational journey took him from his native village of Vuyyuru for Intermediate, to Kurnool for
                    his Degree (1981-84), Hyderabad for DCA (1984-85), and finally to Anand for his PGDRM at IRMA
                    (1985-87), where his association with the dairy industry began.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="border-4 border-foreground overflow-hidden">
                  <div className="relative h-[400px]">
                    <Image src="/images/image.png" alt="Family photo from early years" fill className="object-cover" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="py-20 bg-secondary text-secondary-foreground border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 font-mono uppercase">Professional Journey</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Amul (1987-1989)",
                  desc: "Joined Amul after completing PGDRM from IRMA. Worked across Production (Milk products), Cattle Feed Factory, Societies division, Quality Control, and Technical Services. Provided computer-based analysis using Lotus 123 and dBase for milk procurement, quality control, and raw material optimization using linear programming and OR techniques.",
                },
                {
                  title: "Tata Consultancy Services (1990-1995)",
                  desc: "Management Consultant working on implementation support for Girijan Cooperative Corporation on sustainable collection and marketing systems of Non-Timber Forest Produce (NTFP), particularly Gum Karaya. Successfully executed consultancy projects for cooperative super markets and industrial growth centers. Studied models like Grahak Panchayat for retail cooperatives.",
                },
                {
                  title: "Cooperative Development Foundation (1995-2005)",
                  desc: "Joined as Advisor to propagate the liberal MACS Act (1995) in Andhra Pradesh. Provided professional support to 60+ NGOs and 1000+ cooperatives. Facilitated conversion of dairy cooperatives to MACS platform, working closely with Sangam Dairy (Guntur), Krishna Dairy, and Vizag Dairy. Advocated for similar legislation in Madhya Pradesh and Karnataka. Attended Theodor Heuss Academie (FNF International Academy) in Germany (1999) on civil society's role in transition economies.",
                },
                {
                  title: "Telangana Natural Resource Management Network",
                  desc: "Network Coordinator installing democratic systems of network management, internal control, and monitoring. Facilitated capacity building on water management, watershed development, non-pesticidal management, organic farming, and dairying. Established links with CRIDA, WASSAN, ICRISAT, NDDB, CWS, IIED, and Water Conservation Mission. Mobilized Rs 50 lakhs from funding organizations including SDC/IC. Led advocacy campaign for scrapping prohibitive grazing policy through multi-level community consultations.",
                },
                {
                  title: "International HIV/AIDS Alliance (2005-2008)",
                  desc: "Program Officer enabling State-level CBO networks with 17,000 members to formalize as autonomous bodies. Managed projects worth Rs 3 crores for 6 NGOs with 10,000 CBO members. Advocated successfully for extending health insurance to CBO members and initiating harm reduction programmes in 5 major AP cities. Attended International Training Program on Harm Reduction in Bangkok. Prepared proposals for Phase II ($14 million) and supplement grant ($0.5 million).",
                },
                {
                  title: "Freshwater Action Network South Asia (2008-2010)",
                  desc: "Regional Coordinator leading network building across India, Bangladesh, Pakistan, and Nepal. Supported SACOSAN CSO consultation process and its influence on Ministerial outcomes. Engaged with Sanitation and Water for All (Global Framework) as partner and interim-core-group member. Facilitated World Bank CSO consultations and follow-up on Delhi Declaration. Gained extensive international exposure through visits to Netherlands (Amsterdam), Turkey (Istanbul), Bangladesh (Dhaka), Sri Lanka (Colombo/Negombo), and Costa Rica.",
                },
                {
                  title: "Development and Research Services (2010+)",
                  desc: "Senior Manager conducting impact studies and evaluations. Studied Regional Capacity Building Unit functioning for UNICEF and Government of Karnataka. Conducted study on Ragging for Ministry of HRD in AP, insurance policies study for Ministry of Textiles in AP. Evaluated Don Bosco technical education institutions impact with CMS. Conducted Disaster Risk Reduction baseline study for Indian Red Cross AP.",
                },
              ].map((exp, index) => (
                <Card key={index} className="p-8 border-4 border-secondary-foreground bg-background text-foreground">
                  <h3 className="text-2xl font-bold mb-4 font-mono">{exp.title}</h3>
                  <p className="leading-relaxed">{exp.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Affiliations */}
        <section className="py-20 border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 font-mono uppercase">Current Affiliations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Water Action Hub (Pacific Institute & UN Organization)",
                "PRME Working Group Member",
                "IEP Ambassador (Institute for Economics and Peace)",
                "Independent Director (Directors Institute Certified)",
                "Disarmament Advocacy Networks",
                "Civil Society Organizations for Global Peace",
              ].map((affiliation, index) => (
                <Card key={index} className="p-6 border-4 border-foreground bg-muted">
                  <p className="font-mono leading-relaxed">{affiliation}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* International Experience */}
        <section className="py-20 border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 font-mono uppercase">Global Impact</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Card className="border-4 border-foreground overflow-hidden mb-8">
                  <div className="relative h-[400px]">
                    <Image src="/images/image.png" alt="International conference" fill className="object-cover" />
                  </div>
                </Card>
              </div>
              <div className="space-y-6 leading-relaxed">
                <p>
                  Attended Theodor Heuss Academie (FNF International Academy for Leadership) in Germany in 1999,
                  focusing on the role of civil society in transition economies. This training programme gave him
                  first-hand understanding of the global environment and liberal democratic values.
                </p>
                <p>
                  Throughout his career, he has visited multiple countries including the Netherlands (Amsterdam), Turkey
                  (Istanbul), Bangladesh (Dhaka), Sri Lanka (Colombo/Negombo), and Costa Rica, gaining international
                  perspectives on development and peace-building.
                </p>
                <p className="font-bold border-l-4 border-primary pl-6">
                  "The visit to Costa Rica helped me understand that a country can survive without defense forces - a
                  powerful lesson in the possibility of peaceful coexistence."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 font-mono uppercase text-center">Vision for Humanity</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p>
                Through decades of work with the poorest communities, Mruthyunjaya has witnessed how lack of support,
                opportunity, and infrastructure perpetuates poverty. His experience has shown that people are not poor
                by choice, but by circumstance.
              </p>
              <p>
                His advocacy extends beyond local issues to global concerns - particularly the urgent need for
                disarmament and addressing climate change. He questions why governments focus on weapons trade while
                global warming and pollution threaten humanity's future.
              </p>
              <p className="text-2xl font-bold border-4 border-primary-foreground p-8 text-center">
                "We need to discuss how we are going to save our planet, not how we are going to destroy each other."
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
