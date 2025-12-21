import { Briefcase, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'internship',
      title: 'Product and Data Associate',
      organization: 'Coffee Meets Bagel',
      period: 'Jan 2025 - Dec 2025',
      description: 'Re-hired twice and agreed to stay on until the end of 2025 to contribute more to key product initiatives and data projects in a full-time capacity.',
      achievements: [
        'Wrote PRDs for major product features and enhancements that improved chat experience by 30%',
        'Dashboarded key metrics to monitor user engagement and retention',
        'Conducted user research to identify pain points and inform product decisions',
        'Rapid experimentation of A/B tests to optimise user engagement and retention',
      ],
    },
    {
      type: 'leadership position',
      title: 'Vice-President (External)',
      organization: 'NTU Women In Tech',
      period: 'May 2025 - Present',
      //description: 'Leading external relations and partnerships to promote women in tech initiatives and events.',
      achievements: [
        'Established partnerships with industry leaders for mentorship programs',
        'Organized workshops and events to empower women in technology',
        'Advocated for diversity and inclusion within the tech community',
      ],
    },
    {
      type: 'leadership position',
      title: 'Events Executive',
      organization: 'NTU Product Club',
      period: 'May 2024 - May 2025',
     // description: 'Organised and executed events to promote product management skills.',
      achievements: [
        'Organised and executed events with companies (ShopBack, Razer, Zalora) to promote product management skills',
        'Coordinated workshops and speaker sessions with industry professionals',
        'Spearheaded hackathon in collaboration with ShopBack, attracting 100+ signups islandwide',
      ],
    },

    {
      type: 'internship',
      title: 'Intern',
      organization: 'GoodHood.SG',
      period: 'Mar 2024 - Aug 2024',
     // description: 'Organised and executed events to promote product management skills.',
      achievements: [
        'Planned and executed 5 islandwide community events, increasing volunteer engagement by 25%',
        'Sought partnerships with businesses for sponsorships and in-kind donations',
        'Coordinated volunteer activities and managed logistics for smooth event operations',
      ],
    },
  ];

  const certifications = [
    { name: 'Advanced Data Analytics Certification', issuer: 'Google-Coursera', year: '2024' },
    { name: 'AI Product Management Specialization', issuer: 'Coursera', year: '2025' },
    { name: 'Google Business Intelligence Specialization', issuer: 'Google-Coursera', year: '2025' },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-4">
          My Experiences 🏆
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">My journey so far in the past 2 years</p>

        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="text-pink-600 mr-3" size={28} />
            <h3 className="text-3xl font-bold text-gray-900">Relevant Experiences</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const card = (
                <div
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-pink-200 transition-all hover:-translate-y-1 border-l-4 border-gradient-to-b from-pink-500 to-purple-600"
                  style={{ borderLeftColor: 'rgb(236, 72, 153)' }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{exp.title}</h4>
                      <p className="text-pink-600 font-bold text-lg">{exp.organization}</p>
                    </div>
                    <span className="text-gray-600 text-sm mt-2 md:mt-0 font-semibold">{exp.period}</span>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-pink-500 mr-3 text-lg font-bold">✓</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );

              // If this is the Product and Data Associate card, wrap it in an external link to Notion
              if (exp.title === 'Product and Data Associate') {
                return (
                  <a
                    key={index}
                    href="https://www.notion.so/My-Year-at-Coffee-Meets-Bagel-An-Internship-Reflection-2d07af463d108049af9ad2216501421f?source=copy_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Read internship reflection on Notion"
                  >
                    {card}
                  </a>
                );
              }

              return (
                <div key={index}>
                  {card}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-8">
            <Award className="text-purple-600 mr-3" size={28} />
            <h3 className="text-3xl font-bold text-gray-900">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-purple-200 transition-all hover:-translate-y-2 border-2 border-purple-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-white" size={28} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">{cert.name}</h4>
                <p className="text-sm text-gray-700 font-semibold">{cert.issuer}</p>
                <p className="text-sm text-gray-600 mt-1">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
