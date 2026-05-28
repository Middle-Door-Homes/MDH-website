import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";
import { CalendlyEmbed } from "@/components/calendly-embed";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Schedule a call with Middle Door Homes to discuss a 721 exchange for your multifamily building.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <Section className="pb-6 pt-7 md:pt-10">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[1fr_380px] lg:items-end">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <Heading className="mt-3">Contact Us</Heading>
              <Lead>
                Whether you are a property owner exploring a 721 exchange, a broker with a client
                referral, or an advisor interested in learning more, we would be glad to connect.
                For property owners, we offer a personalized, no-commitment valuation of your
                building and a clear walkthrough of how the numbers work for your specific
                situation. Schedule a 20-minute call below or reach us at{" "}
                <a
                  href="tel:7084126898"
                  className="font-medium text-[var(--mdh-title)] underline-offset-2 hover:underline"
                >
                  (708) 412-6898
                </a>
                {" "}or{" "}
                <a
                  href="mailto:info@middledoorhomes.com"
                  className="font-medium text-[var(--mdh-title)] underline-offset-2 hover:underline"
                >
                  info@middledoorhomes.com
                </a>
                .
              </Lead>
            </div>
            <div className="relative h-[280px] overflow-hidden rounded-xl border border-[var(--mdh-line)] shadow-[0_10px_28px_rgba(18,29,41,0.05)]">
              <Image
                src="/images/hero-redbrick.jpg"
                alt="Classic red brick apartment building"
                fill
                quality={90}
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover object-[center_46%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-4">
        <Container>
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-4 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-6">
            <CalendlyEmbed />
          </div>
        </Container>
      </Section>
    </main>
  );
}
