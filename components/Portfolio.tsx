const projects = [
  {
    title: 'Udo Okonjo',
    category: 'Personal Portfolio',
    color: 'bg-sage/20',
    url: 'https://udookonjo.com',
  },
  {
    title: 'Fine and Country',
    category: 'Real Estate',
    color: 'bg-mist/30',
    url: 'https://fineandcountry.ng',
  },
  {
    title: 'Compound Africa',
    category: 'Fintech',
    color: 'bg-stone',
    url: 'https://compoundafrica.com',
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
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
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
                    Visit Site
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

      </div>
    </section>
  )
}
