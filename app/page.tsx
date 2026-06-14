import Link from "next/link";
import { BarChart3, PlaneTakeoff, FileText, ScanLine, Users, Moon } from "lucide-react";

const FEATURES = [
  {
    icon: BarChart3,
    title: "Expense Tracking",
    desc: "Every dollar categorized and summarized — fixed monthly costs separated from trip-variable expenses.",
  },
  {
    icon: PlaneTakeoff,
    title: "Trip & Flight Hours",
    desc: "Full trip records with legs, passengers, pilot, and flight hours. Drill into any trip's cost breakdown.",
  },
  {
    icon: FileText,
    title: "Invoice Reconciliation",
    desc: "Upload monthly invoices and instantly compare billed totals against your own expense records.",
  },
  {
    icon: ScanLine,
    title: "AI Receipt Matching",
    desc: "Upload receipts and let AI extract vendor, date, and amount — then automatically match them to expenses.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f1623] text-white">
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-36 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-500/30 uppercase tracking-wider">
            Private Aviation Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
            Your aircraft finances,<br className="hidden md:block" /> finally under control.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Airflow Analytics is a concierge reporting platform for private aircraft owners and management companies.
            Real-time expense tracking, automated invoice reconciliation, and AI-powered receipt matching — built specifically for private aviation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm">
              Request a Demo
            </Link>
            <Link href="/videos"
              className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-8 py-3.5 rounded-md transition-colors text-sm">
              Watch Demo Videos
            </Link>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need. Nothing you don't.</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Purpose-built for private aviation — not adapted from generic accounting software.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-200 p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/features" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              See all features →
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof / credibility strip */}
      <section className="bg-white py-16 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-4xl font-bold text-gray-900">100%</p>
              <p className="text-gray-500 text-sm">Purpose-built for private aviation</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold text-gray-900">AI-Powered</p>
              <p className="text-gray-500 text-sm">Receipt scanning & expense matching</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold text-gray-900">Custom</p>
              <p className="text-gray-500 text-sm">Tailored to your operation's needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#0f1623] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to see it in action?</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Schedule a personalized walkthrough and see how Airflow Analytics fits your operation.
          </p>
          <Link href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
