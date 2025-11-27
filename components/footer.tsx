import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-mono uppercase">About</h3>
            <p className="text-sm leading-relaxed">
              Dedicated to world peace, disarmament, and humanitarian work. Building a better future for all.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-mono uppercase">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mission" className="hover:underline">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-mono uppercase">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/donate" className="hover:underline">
                  Donate Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/inquiry" className="hover:underline">
                  Inquiry Form
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-mono uppercase">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/mgabbita/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/gmsastryhyd/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gmsastry/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/sastry6/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCPV59NJ4gCSEQq1MI5AgFVg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
            <a
              href="https://wa.me/919848746446"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-[#25D366] text-white font-mono text-sm uppercase border-2 border-secondary-foreground hover:opacity-90 transition-opacity"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-secondary-foreground text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Mruthyunjaya Sastry Gabbita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
