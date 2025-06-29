import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-blue-500">
            <div className="relative w-full h-full">
              <div className="w-full h-full bg-blue-500 flex items-center justify-center rounded-full">
                <span className="text-white text-4xl font-bold">DJ</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-white mb-4">Hello, I'm Daniel</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I'm a passionate web developer with expertise in creating beautiful, functional, and user-friendly websites. 
            With a strong foundation in modern web technologies, I love turning complex problems into simple, beautiful, 
            and intuitive solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-2">Name:</h3>
              <p className="text-gray-600">Daniel Joseph</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Email:</h3>
              <a href="mailto:daniel.joseph666666@gmail.com" className="text-blue-600 hover:underline">daniel.joseph666666@gmail.com</a>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Location:</h3>
              <p className="text-gray-600">New York, USA</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Availability:</h3>
              <p className="text-gray-600">Open to opportunities</p>
            </div>
          </div>
          
          <a 
            href="/resume.pdf" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-white mb-6">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
          {[
            'Python', 'Git', 'Linux', 'JavaScript'
          ].map((skill) => (
            <div 
              key={skill} 
              className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow font-bold text-black"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Education & Experience</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Student Programmer</h3>
            <p className="text-gray-600">High School Student | 2023 - Present</p>
            <p className="mt-2 text-gray-700">
              I am a student at Guilderland High School with a strong passion for coding and web development. 
              I enjoy creating interactive and responsive websites and am constantly learning new technologies 
              to enhance my skills in programming and software development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
