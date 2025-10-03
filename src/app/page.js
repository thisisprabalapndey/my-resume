export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Animated Header Section */}
      <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 animate-slide-down">
              Prabal Pandey
            </h1>
            <p className="text-xl text-gray-700 mb-6 font-medium animate-slide-up">
              Business Professional | Strategic Thinker | Data Analytics Enthusiast
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a 
                href="mailto:Prabalpandey2006@gmail.com" 
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="font-medium">Prabalpandey2006@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-2 text-gray-600 group">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                  <svg className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="font-medium">9335995029</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 group">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                  <svg className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">C-86 Barra 8</span>
              </div>
              
              <a 
                href="https://www.linkedin.com/in/prabal-pandey-baa54b326" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="font-medium">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        
        {/* About Me Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              About Me
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
          <p className="text-gray-700 leading-relaxed text-lg">
            I am a motivated and growth-oriented business professional passionate about solving problems 
            through strategic thinking, consulting, marketing, and data analytics. Currently building my 
            profile with high-value certifications and academic achievements, I am eager to apply my skills 
            in dynamic environments where I can contribute to meaningful projects while gaining hands-on experience.
          </p>
        </section>

        {/* Education Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up animation-delay-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Education
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mb-6"></div>
          
          <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500 hover:border-purple-600 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              BBA in Digital Business & Entrepreneurship
            </h3>
            <p className="text-blue-600 font-semibold text-lg mb-1">Indian Institute of Management Bangalore</p>
            <p className="text-gray-600 text-sm mb-3 font-medium">Online Program</p>
            <p className="text-gray-700 leading-relaxed">
              Specialized coursework in Business Analytics, Marketing, Entrepreneurship, and Strategic Management.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Certifications
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-700 font-medium">Advanced Algorithms and Portfolio Management – IIT Kanpur</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-700 font-medium">Statistics for Management and Economics</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-700 font-medium">McKinsey Forward Program – Business, Problem Solving & Leadership Skills</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-700 font-medium">Data, Data Everywhere – Google Data Analytics Certificate</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-gray-700 font-medium">Other relevant certifications in progress (AI, Data Science, Consulting)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up animation-delay-400">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Experience
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-6"></div>
          
          <div className="relative pl-8 border-l-2 border-blue-200">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="mb-4 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Content Media Specialist</h3>
              <p className="text-orange-600 font-semibold text-lg mb-1">Entreconnect</p>
              <p className="text-gray-600 text-sm mb-3 font-medium">3 months</p>
              <p className="text-gray-700 leading-relaxed">
                Planning a full scale consulting revolution within the tier 2 cities.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Skills
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl px-6 py-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="text-white font-semibold text-lg relative z-10">Problem Solving</span>
            </div>
            <div className="group relative bg-gradient-to-br from-green-500 to-green-600 rounded-xl px-6 py-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="text-white font-semibold text-lg relative z-10">Effective Communication</span>
            </div>
            <div className="group relative bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl px-6 py-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="text-white font-semibold text-lg relative z-10">Strategic Thinking</span>
            </div>
            <div className="group relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl px-6 py-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="text-white font-semibold text-lg relative z-10">Organization</span>
            </div>
            <div className="group relative bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl px-6 py-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="text-white font-semibold text-lg relative z-10">Multiframework Thinking</span>
            </div>
            <div className="group relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl px-6 py-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="text-white font-semibold text-lg relative z-10">Collaboration</span>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up animation-delay-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Activities
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mb-6"></div>
          <p className="text-gray-700 leading-relaxed text-lg">
            Currently seeking opportunities to apply academic knowledge and analytical skills in real-world 
            business settings. Although I don't yet have direct industry experience, I have worked on 
            simulated projects, research initiatives, and business ideas that focus on efficiency, 
            innovation, and market expansion.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-300 text-lg">© 2025 Prabal Pandey. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
