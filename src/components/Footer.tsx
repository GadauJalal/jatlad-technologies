export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-white text-lg font-bold">JATLAD</span>
            <p className="mt-2 text-sm leading-relaxed">
              A modern, full-spectrum tech and digital solutions company based in Nigeria.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Software &amp; Digital Solutions</li>
              <li>ICT Infrastructure</li>
              <li>Cybersecurity</li>
              <li>Data Services</li>
              <li>ICT Training</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Nigeria (Registered Office)</li>
              <li>
                <a href="mailto:info@jatlad.com" className="hover:text-white transition-colors">
                  info@jatlad.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          &copy; {new Date().getFullYear()} JATLAD TECHNOLOGIES LIMITED. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
