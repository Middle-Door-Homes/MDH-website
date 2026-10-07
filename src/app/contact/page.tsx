import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Send Middle Door Homes your building address for a personalized valuation and proposal on a 721 exchange.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[var(--mdh-stone)] py-12 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="font-display mt-4 text-[2.2rem] font-medium leading-[1.1] tracking-[-0.015em] text-[var(--mdh-green)] md:text-[3rem]">
              Send us the address for a personalized valuation and proposal
            </h1>
            <p className="mt-5 max-w-[56ch] text-[1.08rem] leading-[1.7]">
              An address is enough to start. We will come back with a number and walk you through how it works
              for your building. Brokers and advisors, use the same form to introduce a client.
            </p>
            <div className="mt-10 rounded-md border border-[var(--mdh-line)] bg-white p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
          <aside className="space-y-8">
            <div className="relative hidden aspect-[4/5] overflow-hidden rounded-md lg:block">
              <Image
                src="/images/nb-entrance.jpg"
                alt="Building entrance with stone steps and a wooden door"
                fill
                quality={88}
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="border-t-2 border-[var(--mdh-brass)] pt-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--mdh-brass)]">
                Prefer to talk?
              </p>
              <ul className="mt-4 space-y-2 text-[1.02rem]">
                <li>
                  <a href="tel:7084126898" className="font-medium text-[var(--mdh-green)] hover:underline">
                    (708) 412-6898
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:acquisitions@middledoorhomes.com"
                    className="font-medium text-[var(--mdh-green)] hover:underline"
                  >
                    Acquisitions@MiddleDoorHomes.com
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </main>
  );
}
