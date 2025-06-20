import { Microscope, Atom, Zap, Calculator } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface SubjectPageProps {
  params: {
    level: string;
    board: string;
  };
}

export async function generateStaticParams() {
  const validCombinations = [
    // iGCSE boards
    { level: 'igcse', board: 'aqa' },
    { level: 'igcse', board: 'edexcel' },
    { level: 'igcse', board: 'cambridge' },
    // GCSE boards
    { level: 'gcse', board: 'aqa' },
    { level: 'gcse', board: 'edexcel' },
    { level: 'gcse', board: 'ocr' },
    { level: 'gcse', board: 'wjec' },
    // A-Level boards
    { level: 'a-level', board: 'aqa' },
    { level: 'a-level', board: 'edexcel' },
    { level: 'a-level', board: 'cambridge' },
    { level: 'a-level', board: 'ocr' },
    // IB levels
    { level: 'ib', board: 'sl' },
    { level: 'ib', board: 'hl' }
  ];
  
  return validCombinations;
}

export default function SubjectSelection({ params }: SubjectPageProps) {
  const { level, board } = params;

  // Validate level and board combinations
  const validCombinations = [
    // iGCSE boards
    { level: 'igcse', boards: ['aqa', 'edexcel', 'cambridge'] },
    // GCSE boards
    { level: 'gcse', boards: ['aqa', 'edexcel', 'ocr', 'wjec'] },
    // A-Level boards
    { level: 'a-level', boards: ['aqa', 'edexcel', 'cambridge', 'ocr'] },
    // IB levels
    { level: 'ib', boards: ['sl', 'hl'] }
  ];

  const levelConfig = validCombinations.find(config => config.level === level);
  if (!levelConfig || !levelConfig.boards.includes(board)) {
    notFound();
  }

  const levelTitles = {
    'igcse': 'iGCSE',
    'gcse': 'GCSE',
    'a-level': 'A-Level',
    'ib': 'IB'
  };

  const boardTitles = {
    'cambridge': 'Cambridge (CIE)',
    'edexcel': 'Edexcel',
    'aqa': 'AQA',
    'ocr': 'OCR',
    'wjec': 'WJEC',
    'sl': 'SL (Standard Level)',
    'hl': 'HL (Higher Level)'
  };

  const subjects = [
    {
      id: 'biology',
      title: 'Biology',
      icon: <Microscope className="h-8 w-8 text-green-600" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'chemistry',
      title: 'Chemistry',
      icon: <Atom className="h-8 w-8 text-blue-600" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'physics',
      title: 'Physics',
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'maths',
      title: 'Mathematics',
      icon: <Calculator className="h-8 w-8 text-red-600" />,
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <Link href={`/learn/${level}`} className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Board Selection
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Select a Subject
          </h1>
          <div className="bg-white rounded-lg shadow-sm p-4 inline-block mb-6">
            <p className="text-lg text-gray-600">
              <span className="font-semibold text-gray-800">{levelTitles[level as keyof typeof levelTitles]}</span>
              {' • '}
              <span className="font-semibold text-gray-800">{boardTitles[board as keyof typeof boardTitles]}</span>
            </p>
          </div>
        </div>

        {/* Subject Selection - Single Row */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {subjects.map((subject) => (
              <div key={subject.id} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${subject.color} flex items-center justify-center hover:scale-110 transition-transform duration-300`}>
                  {subject.icon}
                </div>
                <Link href={`/learn/${level}/${board}/${subject.id}`}>
                  <button className={`inline-block px-6 py-3 bg-gradient-to-r ${subject.color} text-white font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-lg`}>
                    {subject.title}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Features */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Get
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each subject provides a comprehensive learning experience with multiple resources 
              and tools to help you master the curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Content</h3>
              <p className="text-gray-600 text-sm">
                Engaging lessons with multimedia content and interactive elements.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Atom className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Questions</h3>
              <p className="text-gray-600 text-sm">
                Extensive question banks with detailed explanations and solutions.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Revision</h3>
              <p className="text-gray-600 text-sm">
                Flashcards and summary notes for efficient revision sessions.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600 text-sm">
                Monitor your learning progress and identify areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}