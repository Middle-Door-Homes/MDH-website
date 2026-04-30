import type { Metadata } from "next";
import Image from "next/image";
import { Card, Container, Eyebrow, Heading, Section } from "@/components/ui";
import { InvestorLoginForm } from "@/components/investor-login-form";

export const metadata: Metadata = {
  title: "Investor Login",
  description: "Investor portal login for Middle Door Homes.",
  robots: { index: false, follow: false },
};

export default function InvestorLoginPage() {
  return (
    <main>
      <Section className="pb-6 pt-7 md:pt-10">
        <Container>
          <div className="grid gap-7 lg:grid-cols-[minmax(0,480px)_1fr] lg:items-start">
            <div>
              <Eyebrow>Investor Access</Eyebrow>
              <Heading className="mt-3">Investor Login</Heading>
              <Card className="mt-6">
                <InvestorLoginForm />
              </Card>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="relative h-48 overflow-hidden rounded-xl border border-[var(--mdh-line)] sm:col-span-2 md:h-64">
                <Image
                  src="/images/px-23973560.jpg"
                  alt="Classic stone multifamily apartment building"
                  fill
                  quality={92}
                  sizes="100vw"
                  className="object-cover object-[center_50%]"
                />
              </div>
              <div className="relative h-36 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-44">
                <Image
                  src="/images/px-9559775.jpg"
                  alt="Red brick apartment building with fire escapes"
                  fill
                  quality={90}
                  sizes="50vw"
                  className="object-cover object-[center_62%]"
                />
              </div>
              <div className="relative h-36 overflow-hidden rounded-xl border border-[var(--mdh-line)] md:h-44">
                <Image
                  src="/images/px-28662920.jpg"
                  alt="Ornate brownstone apartment building stoops"
                  fill
                  quality={90}
                  sizes="50vw"
                  className="object-cover object-[center_44%]"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
