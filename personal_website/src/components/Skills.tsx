export default function Skills() {
  const skillCategories = [
    
    {
      title: 'Data & Analytics',
      skills: ['SQL', 'Pandas', 'NumPy', 'Tableau'],
      icon: '📊',
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      title: 'Applied AI',
      skills: [
        'LLM Prompting',
        'Retrieval-Augmented Generation (RAG)',
        'LangChain',
        'OpenAI API',
        'AI Feature Prototyping',
      ],
      icon: '🤖',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      title: 'Backend & Developer Tools',
      skills: ['Python', 'Node.js', 'REST APIs', 'Git', 'Docker', 'MongoDB', 'Postman'],
      icon: '⚙️',
      gradient: 'from-purple-400 to-pink-500',
    },
    
    {
      title: 'Soft Skills',
      skills: [
        'Problem Solving',
        'Clear Communication',
        'Fast Learner',
        'Adaptability',
        'Collaboration',
        'Ownership',
      ],
      icon: '🚀',
      gradient: 'from-pink-400 to-purple-500',
    },
  ];
  


  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-4">
          Technical Skills 🎯
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Continuously growing and building on these skills.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`p-8 rounded-2xl bg-gradient-to-br ${category.gradient} bg-opacity-10 border-2 border-white hover:shadow-2xl transition-all hover:-translate-y-1`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">{category.icon}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 bg-white text-gray-800 border-2 border-pink-200 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:scale-110 hover:border-pink-400`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
