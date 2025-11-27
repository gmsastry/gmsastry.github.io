import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function GalleryPage() {
  const images = [
    {
      src: "/images/image.png",
      title: "Public Speaking",
      desc: "Addressing conference on humanitarian issues",
    },
    {
      src: "/images/image.png",
      title: "International Conference",
      desc: "Networking with global leaders and activists",
    },
    {
      src: "/images/image.png",
      title: "TCS Team",
      desc: "With colleagues during consulting days",
    },
    {
      src: "/images/image.png",
      title: "Family",
      desc: "Early years with family",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 border-b-4 border-foreground bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono uppercase">Gallery</h1>
            <p className="text-2xl max-w-3xl leading-relaxed">
              A visual journey through decades of humanitarian work, international conferences, and community
              engagement.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {images.map((image, index) => (
                <Card key={index} className="border-4 border-foreground overflow-hidden group">
                  <div className="relative h-[500px] overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-muted">
                    <h3 className="text-2xl font-bold mb-2 font-mono uppercase">{image.title}</h3>
                    <p className="text-muted-foreground">{image.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Gallery Categories */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center font-mono uppercase">More Collections</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Field Work", count: "50+", desc: "Rural community visits and project sites" },
                { title: "Conferences", count: "30+", desc: "International and national events" },
                { title: "Workshops", count: "100+", desc: "Training and capacity building sessions" },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="p-8 border-4 border-secondary-foreground bg-background text-foreground text-center"
                >
                  <div className="text-5xl font-bold mb-4 font-mono text-primary">{category.count}</div>
                  <h3 className="text-2xl font-bold mb-3 font-mono uppercase">{category.title}</h3>
                  <p className="text-muted-foreground">{category.desc}</p>
                  <button className="mt-6 px-6 py-2 border-2 border-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-mono uppercase text-sm">
                    View Collection
                  </button>
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
