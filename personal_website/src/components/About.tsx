import { GraduationCap, Code, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-4">
          About Me 👋
        </h2>
        <p className="text-center text-gray-600 mb-12"> </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="https://www.notion.so/My-Year-at-Coffee-Meets-Bagel-An-Internship-Reflection-2d07af463d108049af9ad2216501421f?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read internship reflection on Notion"
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 hover:shadow-2xl hover:shadow-pink-200 transition-all hover:-translate-y-2 border-2 border-pink-100"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Product and Data Associate at Coffee Meets Bagel </h3>
            <p className="text-gray-700">
              Tap here to read the parts that didn't make it onto my resume. I promise you, it's a good read!
            </p>
          </a>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl hover:shadow-purple-200 transition-all hover:-translate-y-2 border-2 border-purple-100">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
              <Code className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Projects</h3>
            <p className="text-gray-700">
              I learn fast! I've been teaching myself coding and data skills through hands-on projects.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 hover:shadow-2xl hover:shadow-rose-200 transition-all hover:-translate-y-2 border-2 border-rose-100">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-rose-400 to-orange-500 rounded-full flex items-center justify-center">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Roles</h3>
            <p className="text-gray-700">
              I'm passionate about making an impact through leadership and community involvement. 
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            
          </p>
        </div>
      </div>
    </section>
  );
}
