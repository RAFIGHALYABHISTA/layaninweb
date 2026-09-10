import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { SITE_CONFIG } from "@/config/site";
import { CONTACT_CONFIG } from "@/config/contact";

export default function Home() {
  return (
    <main className="w-full flex-1 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
            description: SITE_CONFIG.description,
            areaServed: "ID",
            serviceType: "Bantuan tugas pemrograman dan pengembangan aplikasi",
            email: CONTACT_CONFIG.email.address,
            telephone: CONTACT_CONFIG.whatsapp.numberFormatted,
            sameAs: [
              CONTACT_CONFIG.social.instagram.href,
              CONTACT_CONFIG.social.linkedin.href,
            ],
          }),
        }}
      />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <CTA />
      <Contact />
    </main>
  );
}
