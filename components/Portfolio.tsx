const projects = [
  {
    title: 'Evergreen Studio',
    category: 'Brand & Web Design',
    color: 'bg-sage/20',
  },
  {
    title: 'Nova Fitness',
    category: 'E-commerce',
    color: 'bg-mist/30',
  },
  {
    title: 'Maple & Co',
    category: 'Landing Page',
    color: 'bg-stone',
  },
  {
    title: 'Drift Coffee',
    category: 'Restaurant Site',
    color: 'bg-sage/10',
  },
  {
    title: 'Cloudform',
    category: 'SaaS Website',
    color: 'bg-mist/20',
  },
  {
    title: 'Artisan Goods',
    category: 'Portfolio',
    color: 'bg-stone/80',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-stone/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-serif italic text-sage mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-medium text-slate">
            Selected Work
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href="#"
              className="group block"
            >
              <div
                className={`${project.color} rounded-2xl aspect-[4/3] mb-4 overflow-hidden relative`}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate/20 text-6xl font-serif">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate/0 group-hover:bg-slate/5 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-slate font-medium">
                    View Project
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-medium text-slate group-hover:text-sage transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate/50">{project.category}</p>
            </a>
          ))}
        </div>

        {/* View more */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sage hover:text-sage-dark transition-colors font-medium"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
