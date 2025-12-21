import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center text-gray-900 mb-4">
          Let's Connect! 💌
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          I'm actively seeking opportunities and genuinely excited to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Contact Info 📞</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-pink-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:vkyc2002@gmail.com" className="text-pink-600 hover:text-pink-700 font-semibold">
                    vkyc2002@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Linkedin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/valarie-koh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    linkedin.com/in/valarie-koh
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Github className="text-pink-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">GitHub</h4>
                  <a
                    href="https://github.com/valariek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 font-semibold"
                  >
                    github.com/valariek
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-rose-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-700 font-semibold">Singapore</p>
                </div>
              </div>
            </div>

          </div>

          <div>
            <div className="mt-0 md:mt-8 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-2 border-pink-200">
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Looking For 🎯</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2 text-lg font-bold">⭐</span>
                  Full-time positions
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2 text-lg font-bold">⭐</span>
                  Internship opportunities
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2 text-lg font-bold">⭐</span>
                  Freelance projects
                </li>
                <li className="flex items-center">
                  <span className="text-pink-500 mr-2 text-lg font-bold">⭐</span>
                  Collaborations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
