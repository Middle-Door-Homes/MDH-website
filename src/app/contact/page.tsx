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
      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1fr_380px] lg:items-end">
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
            <div className="relative h-[280px] overflow-hidden">
              <Image
                src="/images/nb-entrance.jpg"
                alt="Building entrance with stone steps and a wooden door"
                fill
                quality={90}
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover object-[center_46%]"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="">
            <p className="text-[0.96rem] font-medium text-[var(--mdh-title)]">
              Send us an address for a personalized valuation and proposal
            </p>
            <p className="mt-1 text-[0.92rem] leading-relaxed text-[var(--mdh-ink)]">
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
