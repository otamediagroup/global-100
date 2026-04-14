import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-navy/50">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-gold mb-3">Global 100</div>
            <p className="text-gray-400 text-sm">
              Ranking sustainable corporate leaders transforming global business responsibility.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Rankings
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Methodology
                </Link>
              </li>
              <li>
                <a
                  href="https://fifty.otamediagroup.com"
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  The Fifty
                </a>
              </li>
            </ul>
          </div>

          {/* OTA Media */}
          <div>
            <h3 className="font-semibold text-white mb-4">OTA Media</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://index.otamediagroup.com"
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Leadership Index
                </a>
              </li>
              <li>
                <a
                  href="https://otamediagroup.com"
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  OTA Media Group
                </a>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="font-semibold text-white mb-4">Sectors</h3>
            <ul className="space-y-1">
              <li>
                <span className="text-gray-400 text-sm">Renewable Energy</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Technology</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Financial Services</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Infrastructure</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} OTA Media Group. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="https://otamediagroup.com/privacy"
                className="text-gray-400 hover:text-gold transition-colors text-sm"
              >
                Privacy
              </a>
              <a
                href="https://otamediagroup.com/terms"
                className="text-gray-400 hover:text-gold transition-colors text-sm"
              >
                Terms
              </a>
              <a
                href="https://otamediagroup.com/contact"
                className="text-gray-400 hover:text-gold transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
