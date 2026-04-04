const pillars = [
  { label: 'Build', description: 'Software, AI, platforms' },
  { label: 'Support', description: 'Infrastructure, networks, installations' },
  { label: 'Secure', description: 'Cybersecurity services' },
  { label: 'Enable', description: 'Training, consulting, data' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Nigeria&apos;s Tech Ecosystem Company
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              JATLAD TECHNOLOGIES LIMITED is a private ICT company registered in Nigeria. We
              combine software innovation with hands-on infrastructure delivery to serve businesses,
              government, and enterprises across Africa.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team brings deep expertise across the full technology stack—from writing code to
              racking servers, securing networks, and training teams. We are not niche; we are a
              broad, scalable partner for every stage of your technology journey.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-brand-700 font-semibold hover:text-brand-900 transition-colors"
            >
              Work with us
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="bg-brand-50 rounded-xl p-6 border border-brand-100"
              >
                <h3 className="text-2xl font-bold text-brand-700 mb-2">{pillar.label}</h3>
                <p className="text-gray-600 text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
