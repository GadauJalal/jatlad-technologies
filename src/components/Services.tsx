const services = [
  {
    icon: '💻',
    title: 'Software & Digital Solutions',
    description:
      'Modern web apps, SaaS platforms, and AI-powered systems built to scale. From dashboards to full-stack product development.',
  },
  {
    icon: '🏗️',
    title: 'ICT Infrastructure Services',
    description:
      'Data centre relocation, office IT migrations, infrastructure enablement, and tech installations for enterprises.',
  },
  {
    icon: '🔐',
    title: 'Cybersecurity',
    description:
      'End-to-end security services for banks, government, and enterprises. Vulnerability assessments, hardening, and monitoring.',
  },
  {
    icon: '🌐',
    title: 'Network & Connectivity',
    description:
      'Structured data cabling, network infrastructure design, and ongoing connectivity support for any scale.',
  },
  {
    icon: '📊',
    title: 'Data Services',
    description:
      'Data collection, verification, and analysis for research firms, NGOs, government, and AI training pipelines.',
  },
  {
    icon: '🛒',
    title: 'Tech Sales & Distribution',
    description:
      'Procurement and distribution of software tools, digital products, and technology resources for businesses.',
  },
  {
    icon: '🧠',
    title: 'Consulting & Contracts',
    description:
      'Strategic technology consultancy for B2B, government, and enterprise clients. General tech contracts and advisory.',
  },
  {
    icon: '🎓',
    title: 'ICT Training',
    description:
      'Bootcamps, certifications, and corporate training programmes to build technical capacity in organisations.',
  },
  {
    icon: '🧹',
    title: 'IT Asset Lifecycle',
    description:
      'Responsible ICT asset disposal, office liquidation, and decommissioning services for upgrading organisations.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            A Full Tech Ecosystem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you need to build, secure, move, or operate technology—JATLAD has the team and
            expertise to deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-100 transition-all group"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
