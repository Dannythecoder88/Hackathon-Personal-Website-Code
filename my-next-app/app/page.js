import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent">Daniel</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Web Developer & Creative Thinker
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/about" 
              className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Learn More About Me</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <Link 
              href="/contact" 
              className="relative overflow-hidden group border-2 border-transparent bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-padding hover:from-pink-500 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                <p className="text-gray-600 mb-4">A brief description of the project and what it does.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Node.js</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 rounded-xl p-12 text-center my-16 mx-6">
        <h2 className="text-4xl font-extrabold mb-4 text-black">Have a project in mind?</h2>
        <p className="text-gray-800 mb-8 max-w-2xl mx-auto text-lg">
          I'm currently available for freelance work. Let's discuss how I can help bring your ideas to life!
        </p>
        <Link 
          href="/contact" 
          className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-lg inline-block transition-all shadow-md hover:shadow-lg hover:opacity-90"
        >
          <span className="relative z-10">Get In Touch</span>
          <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </section>
    </div>
  );
}
