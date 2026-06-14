import Image from "next/image";
import { Mail, Clock, PlaneTakeoff, MessageSquare, CalendarCheck, CheckCircle } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    title: "You'll hear back within one business day",
    desc: "We'll ask a few questions about your operation — number of aircraft, current tools, and what's frustrating you.",
  },
  {
    icon: CalendarCheck,
    title: "We'll schedule a live walkthrough",
    desc: "A 30-minute demo tailored to your aircraft and setup. We'll show you exactly what Airflow Analytics looks like for your operation.",
  },
  {
    icon: CheckCircle,
    title: "You decide if it's a fit",
    desc: "No pressure, no contract until you're ready. If it's not the right fit, we'll tell you that too.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0f1623] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <div className="flex justify-center pb-2">
            <Image src="/Logo.png" alt="Airflow Analytics" width={240} height={72} className="h-16 w-auto object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Let's talk</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Ready to see Airflow Analytics in action? Tell us about your operation and we'll set up a personalized walkthrough.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Left: contact info */}
            <div className="space-y-8 pt-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Reach us directly</h2>
                <a href="mailto:sales@airflow-analytics.com"
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors">
                  <Mail className="h-5 w-5 shrink-0" />
                  <span className="font-medium">sales@airflow-analytics.com</span>
                </a>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Response time</p>
                    <p className="text-sm text-gray-500">We typically respond within one business day.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PlaneTakeoff className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">What to include</p>
                    <p className="text-sm text-gray-500">
                      Number of aircraft, what software you currently use for expense tracking and aircraft scheduling, and what's not working.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl border border-blue-100 p-5 space-y-2">
                <p className="text-sm font-semibold text-blue-900">Prefer to see it first?</p>
                <p className="text-sm text-blue-700">
                  Check out our <a href="/videos" className="underline hover:text-blue-900">demo videos</a> to get
                  a feel for the platform before reaching out.
                </p>
              </div>
            </div>

            {/* Right: what to expect */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">What to expect</h2>
              <div className="space-y-6">
                {STEPS.map(({ icon: Icon, title, desc }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-gray-900">{title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
