import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const INCLUDED = [
  "Expense tracking & categorization",
  "Monthly summary reports",
  "Trip & flight hour logging",
  "Invoice upload & reconciliation",
  "AI-powered receipt scanning & matching",
  "Multi-user access with role controls",
  "QuickBooks & Airplane Manager import",
  "Unlimited data history",
  "Onboarding & ongoing support",
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0f1623] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <div className="flex justify-center pb-2">
            <Image src="/Logo.png" alt="Airflow Analytics" width={240} height={72} className="h-16 w-auto object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Built around your operation</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            No off-the-shelf tiers. Every engagement is scoped and priced to fit your specific fleet, reporting needs, and level of support.
          </p>
        </div>
      </section>

      {/* Concierge section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
              Concierge Pricing
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Your quote, your operation.</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Aircraft management situations vary widely — a single-aircraft owner has different needs than a multi-fleet management company.
              We scope each engagement based on the number of aircraft, reporting complexity, import sources, and the level of ongoing support you need.
            </p>
          </div>

          {/* What's included */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 space-y-6">
            <h3 className="font-semibold text-gray-900 text-lg">Every engagement includes:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center space-y-4">
            <p className="text-gray-500">Tell us about your aircraft and we'll put together a proposal.</p>
            <Link href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-md transition-colors">
              Contact Us for a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#0f1623] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
          <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">Why custom pricing?</p>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            We believe in charging for value delivered — not locking you into a tier that under-serves or overcharges.
            One conversation is all it takes to find out if Airflow Analytics is the right fit.
          </p>
        </div>
      </section>
    </>
  );
}
