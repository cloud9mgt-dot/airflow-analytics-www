import Image from "next/image";
import { Mail, Clock, PlaneTakeoff } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0f1623] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <div className="flex justify-center pb-2">
            <Image src="/Logo.png" alt="Airflow Analytics" width={240} height={72} className="h-16 w-auto object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Let's talk.</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Ready to see Airflow Analytics in action? Tell us about your operation and we'll set up a personalized walkthrough.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Left: form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
              <form
                action="mailto:sales@airflow-analytics.com"
                method="get"
                encType="text/plain"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Jane Smith"
                      className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-700" htmlFor="company">Company</label>
                    <input
                      id="company" name="company" type="text"
                      placeholder="Skyline Air LLC"
                      className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="jane@skylineair.com"
                    className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-gray-700" htmlFor="body">Message</label>
                  <textarea
                    id="body" name="body" rows={5} required
                    placeholder="Tell us about your aircraft, current reporting setup, and what you're looking to improve..."
                    className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-md transition-colors text-sm"
                >
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">
                  This will open your email client. You can also email us directly at{" "}
                  <a href="mailto:sales@airflow-analytics.com" className="text-blue-600 hover:underline">
                    sales@airflow-analytics.com
                  </a>
                </p>
              </form>
            </div>

            {/* Right: info */}
            <div className="space-y-8 pt-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Or reach us directly</h2>
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
                      Number of aircraft, what software you currently use for expense tracking, and what's not working.
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
          </div>
        </div>
      </section>
    </>
  );
}
