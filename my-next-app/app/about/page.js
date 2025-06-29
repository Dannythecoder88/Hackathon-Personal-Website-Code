import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent mb-8">
        About Me
      </h1>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-64 flex-shrink-0 rounded-full border-4 border-blue-500 flex items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100 dark:from-blue-900 dark:to-pink-900">
            <span className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">DJ</span>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Hello, I'm Daniel
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I'm a passionate web developer with expertise in creating beautiful, functional, and user-friendly websites. 
            With a strong foundation in modern web technologies, I love turning complex problems into simple, beautiful, 
            and intuitive solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">Name:</h3>
              <p className="text-gray-600">Daniel Joseph</p>
            </div>
            <div>
              <h3 className="font-semibold bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">Email:</h3>
              <a href="mailto:daniel.joseph666666@gmail.com" className="text-blue-600 hover:underline">daniel.joseph666666@gmail.com</a>
            </div>
            <div>
              <h3 className="font-semibold bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">Location:</h3>
              <p className="text-gray-600">New York, USA</p>
            </div>
            <div>
              <h3 className="font-semibold bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent mb-2">Availability:</h3>
              <p className="text-gray-600">Open to opportunities</p>
            </div>
          </div>
          
          <a 
            href="https://docs.google.com/document/d/1mf5wAc58CUVFnZhf8MzWagzbs5htNiTDDsfC6LNhmN0/edit?pli=1&tab=t.0" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors transform hover:scale-105 hover:shadow-lg"
          >
            View My Resume
          </a>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent mb-6">
          My Skills
        </h2>
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
        <h2 className="text-2xl font-semibold bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent mb-6">
          Education & Experience
        </h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold bg-gradient-to-t from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Student Programmer
            </h3>
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
