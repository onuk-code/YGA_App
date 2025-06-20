import { GraduationCap, BookOpen, Award, School } from 'lucide-react';
import Link from 'next/link';

export default function Learn() {
  const levels = [
    {
      id: 'igcse',
      title: 'iGCSE',
      description: 'International General Certificate of Secondary Education - Ages 14-16',
      icon: <School className="h-12 w-12 text-orange-600" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'gcse',
      title: 'GCSE',
      description: 'General Certificate of Secondary Education - Ages 14-16',
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'a-level',
      title: 'A-Level',
      description: 'Advanced Level - Ages 16-18',
      icon: <GraduationCap className="h-12 w-12 text-green-600" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'ib',
      title: 'IB',
      description: 'International Baccalaureate - Ages 16-19',
      icon: <Award className="h-12 w-12 text-purple-600" />,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Level
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your educational level to access tailored content and resources 
            designed specifically for your curriculum requirements.
          </p>
        </div>

        {/* Level Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {levels.map((level) => (
            <div key={level.id} className="text-center">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center hover:scale-110 transition-transform duration-300`}>
                {level.icon}
              </div>
              <Link href={`/learn/${level.id}`}>
                <button className={`inline-block px-8 py-4 bg-gradient-to-r ${level.color} text-white font-bold text-2xl rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg mb-4`}>
                  {level.title}
                </button>
              </Link>
              <p className="text-gray-600 text-lg">
                {level.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Learning Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform provides structured learning paths for each educational level, 
              ensuring you receive content that matches your curriculum requirements and learning objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Curriculum Aligned</h3>
              <p className="text-gray-600">
                All content is carefully aligned with official curriculum standards and examination requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Content</h3>
              <p className="text-gray-600">
                Created by experienced educators and subject matter experts with proven track records.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Thousands of students have achieved their academic goals using our comprehensive resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}