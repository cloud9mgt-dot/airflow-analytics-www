import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f1623] text-white/60 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <Image src="/Logo.png" alt="Airflow Analytics" width={140} height={40} className="h-9 w-auto object-contain" />
          <p className="text-white/50 text-xs leading-relaxed">
            Concierge aircraft management reporting for private aviation.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-white font-medium text-xs uppercase tracking-wider">Product</p>
          <ul className="space-y-2">
            <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link href="/videos" className="hover:text-white transition-colors">Demo Videos</Link></li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-white font-medium text-xs uppercase tracking-wider">Get in Touch</p>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li>
              <a href="mailto:sales@airflow-analytics.com" className="hover:text-white transition-colors">
                sales@airflow-analytics.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-white/30">
          © {new Date().getFullYear()} Airflow Analytics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
