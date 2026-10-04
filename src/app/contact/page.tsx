import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Send Middle Door Homes your building address for a personalized valuation and proposal on a 721 exchange.",
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
                Whether you are a property owner exploring a 721 exchange, a real estate broker
                representing a client&apos;s sale, or an advisor interested in learning more, we would be glad to connect.
              </Lead>
              <Lead>
                For property owners, send us the address for a personalized, no-commitment
                valuation and proposal, with a clear walkthrough of how the numbers work for your
                situation. Use the form below or reach us at{" "}
                <a
                  href="tel:7084126898"
                  className="font-medium text-[var(--mdh-title)] underline-offset-2 hover:underline"
                >
                  (708) 412-6898
                </a>
                {" "}or{" "}
                <a
                  href="mailto:acquisitions@middledoorhomes.com"
                  className="font-medium text-[var(--mdh-title)] underline-offset-2 hover:underline"
                >
                  Acquisitions@MiddleDoorHomes.com
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
          <div className="rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_10px_32px_rgba(18,29,41,0.05)] md:p-8">
            <p className="text-[1.05rem] font-medium text-[var(--mdh-title)]">
              Send us the address for a personalized valuation and proposal
            </p>
            <p className="mt-1 text-[0.95rem] leading-relaxed text-[var(--mdh-ink)]">
              An address is enough to start. We will come back with a number and walk you through how it works for your building.
            </p>
            <div className="mt-6 border-t border-[var(--mdh-line)] pt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
