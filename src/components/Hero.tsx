export default function Hero() {
  return (
    <section className="pt-16 min-h-screen bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="max-w-3xl">
          <p className="text-brand-100 font-semibold text-sm uppercase tracking-widest mb-4">
            Nigeria&apos;s Full-Spectrum Tech Partner
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Build. Install. Secure.{' '}
            <span className="text-brand-100">Enable.</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
            JATLAD TECHNOLOGIES LIMITED delivers end-to-end technology solutions—from custom
            software and AI systems to ICT infrastructure, cybersecurity, and capacity building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-white text-brand-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
