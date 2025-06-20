import { Building, School, Globe, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BoardPageProps {
  params: {
    level: string;
  };
}

export async function generateStaticParams() {
  return [
    { level: 'igcse' },
    { level: 'gcse' },
    { level: 'a-level' },
    { level: 'ib' }
  ];
}

export default function BoardSelection({ params }: BoardPageProps) {
  const { level } = params;

  // Validate level
  const validLevels = ['igcse', 'gcse', 'a-level', 'ib'];
  if (!validLevels.includes(level)) {
    notFound();
  }

  const levelTitles = {
    'igcse': 'iGCSE',
    'gcse': 'GCSE',
    'a-level': 'A-Level',
    'ib': 'IB'
  };

  // Define boards based on level
  const getBoardsForLevel = (level: string) => {
    switch (level) {
      case 'igcse':
        return [
          {
            id: 'aqa',
            title: 'AQA',
            description: 'Assessment and Qualifications Alliance',
            icon: <Globe className="h-12 w-12 text-purple-600" />,
            color: 'from-purple-500 to-purple-600'
          },
          {
            id: 'edexcel',
            title: 'Edexcel',
            description: 'Pearson Edexcel International',
            icon: <School className="h-12 w-12 text-green-600" />,
            color: 'from-green-500 to-green-600'
          },
          {
            id: 'cambridge',
            title: 'Cambridge (CIE)',
            description: 'Cambridge Assessment International Education',
            icon: <Building className="h-12 w-12 text-blue-600" />,
            color: 'from-blue-500 to-blue-600'
          }
        ];
      case 'gcse':
        return [
          {
            id: 'aqa',
            title: 'AQA',
            description: 'Assessment and Qualifications Alliance',
            icon: <Globe className="h-12 w-12 text-purple-600" />,
            color: 'from-purple-500 to-purple-600'
          },
          {
            id: 'edexcel',
            title: 'Edexcel',
            description: 'Pearson Edexcel',
            icon: <School className="h-12 w-12 text-green-600" />,
            color: 'from-green-500 to-green-600'
          },
          {
            id: 'ocr',
            title: 'OCR',
            description: 'Oxford Cambridge and RSA Examinations',
            icon: <BookOpen className="h-12 w-12 text-orange-600" />,
            color: 'from-orange-500 to-orange-600'
          },
          {
            id: 'wjec',
            title: 'WJEC',
            description: 'Welsh Joint Education Committee',
            icon: <Users className="h-12 w-12 text-red-600" />,
            color: 'from-red-500 to-red-600'
          }
        ];
      case 'a-level':
        return [
          {
            id: 'aqa',
            title: 'AQA',
            description: 'Assessment and Qualifications Alliance',
            icon: <Globe className="h-12 w-12 text-purple-600" />,
            color: 'from-purple-500 to-purple-600'
          },
          {
            id: 'edexcel',
            title: 'Edexcel',
            description: 'Pearson Edexcel',
            icon: <School className="h-12 w-12 text-green-600" />,
            color: 'from-green-500 to-green-600'
          },
          {
            id: 'cambridge',
            title: 'Cambridge (CIE)',
            description: 'Cambridge Assessment International Education',
            icon: <Building className="h-12 w-12 text-blue-600" />,
            color: 'from-blue-500 to-blue-600'
          },
          {
            id: 'ocr',
            title: 'OCR',
            description: 'Oxford Cambridge and RSA Examinations',
            icon: <BookOpen className="h-12 w-12 text-orange-600" />,
            color: 'from-orange-500 to-orange-600'
          }
        ];
      case 'ib':
        return [
          {
            id: 'sl',
            title: 'SL (Standard Level)',
            description: 'Standard Level International Baccalaureate',
            icon: <BookOpen className="h-12 w-12 text-blue-600" />,
            color: 'from-blue-500 to-blue-600'
          },
          {
            id: 'hl',
            title: 'HL (Higher Level)',
            description: 'Higher Level International Baccalaureate',
            icon: <Users className="h-12 w-12 text-purple-600" />,
            color: 'from-purple-500 to-purple-600'
          }
        ];
      default:
        return [];
    }
  };

  const boards = getBoardsForLevel(level);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <Link href="/learn" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Level Selection
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your {levelTitles[level as keyof typeof levelTitles]} Board
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your examination board to access content specifically tailored 
            to your curriculum and assessment requirements.
          </p>
        </div>

        {/* Board Selection */}
        <div className={`grid grid-cols-1 ${boards.length === 2 ? 'md:grid-cols-2' : boards.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'} gap-8 mb-16`}>
          {boards.map((board) => (
            <div key={board.id} className="text-center">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${board.color} flex items-center justify-center hover:scale-110 transition-transform duration-300`}>
                {board.icon}
              </div>
              <Link href={`/learn/${level}/${board.id}`}>
                <button className={`inline-block px-8 py-4 bg-gradient-to-r ${board.color} text-white font-bold text-2xl rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg mb-4`}>
                  {board.title}
                </button>
              </Link>
              <p className="text-gray-600 font-medium">
                {board.description}
              </p>
            </div>
          ))}
        </div>

        {/* Board Information */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Board Selection Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Different examination boards have unique approaches to curriculum delivery and assessment. 
              Choosing the right board ensures you receive content that perfectly matches your learning requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tailored Content</h3>
              <p className="text-gray-600">
                Content specifically designed to match your board's curriculum structure and requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Exam Preparation</h3>
              <p className="text-gray-600">
                Practice questions and assessments that mirror your board's examination style and format.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Standards</h3>
              <p className="text-gray-600">
                All boards maintain internationally recognized standards for academic excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}