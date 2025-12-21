import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    
  {
    title: 'Medical Chatbot (RAG)',
    description: 'Built a medical-related chatbot using Retrieval-Augmented Generation (RAG) to answer domain-specific queries, learning RAG from scratch.',
    technologies: ['Python', 'RAG', 'LangChain', 'OpenAI API', 'Pinecone'],
    liveUrl: '#',
    githubUrl: 'https://github.com/valariek/Medical-Chatbot',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80'

  },

  {
    title: 'Disney+ Data Analysis',
    description: "As a Marvel fan, analyzed Disney+ subscription data to uncover trends and insights, learning Tableau entirely on my own.",
    technologies: ['Tableau', 'SQL', 'Pandas'],
    liveUrl: '#',
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Retail Insights with SQL',
    description: 'Started learning SQL by running queries to analyze retail sales data.',
    technologies: ['Python', 'SQL', 'Pandas'],
    liveUrl: '#',
    githubUrl: 'https://github.com/valariek/retailsales_sqlproj',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'

  },

  {
    title: '<Work in Progress> Full-Stack AI-Powered Web App',
    description: 'Developing a full-stack web app powered by AI, integrating user interactions with backend data processing and AI features.',
    technologies: ['React', 'Node.js', 'Python', 'OpenAI API', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
  }
];



  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-4">
          Projects 🚀
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Coming from a semi-non-technical background, these projects are driven purely by curiosity and a desire to learn. 
          Each one pushed me to pick up new skills, and I can’t wait to tackle even bigger ones!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-pink-200 transition-all hover:-translate-y-2 group border-2 border-pink-100"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm rounded-full font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-bold transition-all hover:gap-3"
                  >
                   
                    
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 font-bold transition-all hover:gap-3"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
