import Link from "next/link";
import Image from "next/image";
import {
  BarChart3, PlaneTakeoff, FileText, ScanLine,
  Users, LayoutDashboard, Calendar, Receipt, Moon, Shield,
} from "lucide-react";

const SECTIONS = [
  {
    icon: LayoutDashboard,
    title: "Dashboard & Expense Overview",
    body: "A single view of your aircraft's financial health. See total expenses, flight hours, and cost-per-hour at a glance. Filter by year and month. Pie chart breakdown by expense category alongside a flight hours trend line.",
  },
  {
    icon: BarChart3,
    title: "Monthly Summary Reports",
    body: "Every month's expenses split into fixed monthly costs (management fees, insurance, subscriptions) and trip-variable costs (fuel, FBO, catering, maintenance). Color-coded tables with year-to-date totals and cost-per-flight-hour calculations.",
  },
  {
    icon: PlaneTakeoff,
    title: "Trip Tracking",
    body: "Every trip logged with departure, return, route, flight legs, passengers, pilot, block hours, and flight hours. Drill into any trip to see a full itemized expense breakdown. Late-billed and training trip indicators included.",
  },
  {
    icon: FileText,
    title: "Invoice Management & Reconciliation",
    body: "Upload your monthly management invoices as PDFs. Airflow Analytics automatically extracts the billed total and compares it against your imported expense records — flagging any discrepancy instantly.",
  },
  {
    icon: ScanLine,
    title: "AI-Powered Receipt Scanning",
    body: "Upload receipts as PDFs or images. Claude AI extracts the vendor, date, and amount and automatically matches each receipt to the corresponding expense transaction. Review matches, confirm, reassign, or reject — all from one screen.",
  },
  {
    icon: Receipt,
    title: "Expense Import (QuickBooks & Airplane Manager)",
    body: "Import expense data directly from QuickBooks Online CSV exports and Airplane Manager flight logs. Smart parsers normalize categories, detect tail numbers, and handle late-billed entries automatically.",
  },
  {
    icon: Users,
    title: "Multi-User Access & Roles",
    body: "Invite clients with view-only access to their aircraft. Assign access by client (all aircraft under that client) or by individual tail number. Full admin access for your management team.",
  },
  {
    icon: Moon,
    title: "Light & Dark Theme",
    body: "A professional interface that works in any environment. Toggle between a clean light theme and a deep navy aviation-inspired dark theme from the Settings page.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    body: "Each client only sees their own aircraft and data. Session-based authentication with role enforcement at every API endpoint. Hosted on enterprise-grade infrastructure.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0f1623] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <div className="flex justify-center pb-2">
            <Image src="/Logo.png" alt="Airflow Analytics" width={240} height={72} className="h-16 w-auto object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Built for private aviation. Full stop</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Every feature exists because aircraft management companies needed it — not because a generic platform happened to have it.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECTIONS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="space-y-3 p-6 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Want to see these features in your operation?</h2>
          <p className="text-gray-500">We'll walk you through a live demo tailored to your aircraft and reporting needs.</p>
          <Link href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm mt-2">
            Schedule a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
