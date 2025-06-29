import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-400">Daniel</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Web Developer & Creative Thinker
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/about" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Learn More About Me
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Get In Touch
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
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg inline-block transition-colors shadow-md hover:shadow-lg"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
}
