import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>


      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white bg-gray-100 shadow-2xl transform hover:scale-110 transition-transform duration-300 relative flex items-center justify-center">
              <img src="/me.jpg" alt="Val" className="w-full h-full object-cover object-top" />
              <div className="absolute -top-2 -right-2 animate-spin" style={{ animationDuration: '3s' }}>
                <Sparkles className="text-yellow-300" size={24} />
              </div>
            </div>
          </div>

  
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4">
            Hello! I'm <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Valarie</span> ✨
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Final Year Student | NTU Mathematical Sciences (Statistics)
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed whitespace-pre-line">
            Welcome to a snapshot of my life and work!
            {"\n"}
            I built this website to learn full stack web development~
            {"\n"}
            Keep scrolling, you’ll like what you find.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          <a
            href="https://github.com/valariek"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-all hover:scale-125 hover:shadow-2xl hover:shadow-pink-300 transform"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/valarie-koh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:shadow-2xl hover:shadow-pink-400 transition-all hover:scale-125 transform"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:vkyc2002@gmail.com"
            className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-2xl hover:shadow-purple-400 transition-all hover:scale-125 transform"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-bold hover:shadow-2xl hover:shadow-pink-400 transition-all hover:scale-105 transform"
          >
            🚀 View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-white text-pink-600 border-3 border-pink-300 rounded-full font-bold hover:bg-pink-50 transition-all hover:scale-105 transform"
          >
            💬 Let's Chat
          </button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="mt-16 animate-bounce text-pink-600 hover:text-purple-600 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}
