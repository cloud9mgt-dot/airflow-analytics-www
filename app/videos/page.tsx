import Link from "next/link";
import Image from "next/image";
import { Video, Calendar, PlayCircle } from "lucide-react";

export default function VideosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0f1623] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <div className="flex justify-center pb-2">
            <Image src="/Logo.png" alt="Airflow Analytics" width={240} height={72} className="h-16 w-auto object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">See it in action.</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Watch a walkthrough of Airflow Analytics and see how it works for real aircraft management operations.
          </p>
        </div>
      </section>

      {/* Placeholder content */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-12">

          {/* Coming soon card */}
          <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-12 text-center space-y-5">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                <Video className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Demo videos are on the way.</h2>
              <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                We're producing a series of short videos covering every major feature — expense tracking, invoice reconciliation, AI receipt matching, and more.
              </p>
            </div>
            <Link href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-md transition-colors text-sm">
              Request a Live Walkthrough
            </Link>
          </div>

          {/* What the videos will cover */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-gray-900 text-center">What we'll be covering</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Dashboard Overview", desc: "Monthly expenses, flight hours, cost per hour — your operation at a glance." },
                { title: "Expense Import & Tracking", desc: "Importing from QuickBooks and Airplane Manager, and browsing the full expense history." },
                { title: "Invoice Reconciliation", desc: "Uploading a management invoice and comparing it against your expense records instantly." },
                { title: "AI Receipt Matching", desc: "Uploading receipts, watching AI extract and match them to transactions, and reviewing confidence scores." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white">
                  <PlayCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{title}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Live demo CTA */}
          <div className="bg-[#0f1623] rounded-2xl p-8 text-center space-y-4">
            <div className="flex justify-center">
              <Calendar className="h-7 w-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Don't want to wait?</h3>
            <p className="text-white/60 text-sm max-w-sm mx-auto">
              Schedule a live walkthrough with us. We'll tailor it to your aircraft and show you exactly what Airflow Analytics looks like for your operation.
            </p>
            <Link href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-md transition-colors text-sm">
              Schedule a Live Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
