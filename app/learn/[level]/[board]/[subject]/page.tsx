import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, FileText, Zap, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

interface ContentPageProps {
  params: {
    level: string;
    board: string;
    subject: string;
  };
}

// Generate static params for all valid combinations
export async function generateStaticParams() {
  const validCombinations = [
    // iGCSE combinations
    { level: 'igcse', board: 'aqa' },
    { level: 'igcse', board: 'edexcel' },
    { level: 'igcse', board: 'cambridge' },
    // GCSE combinations
    { level: 'gcse', board: 'aqa' },
    { level: 'gcse', board: 'edexcel' },
    { level: 'gcse', board: 'ocr' },
    { level: 'gcse', board: 'wjec' },
    // A-Level combinations
    { level: 'a-level', board: 'aqa' },
    { level: 'a-level', board: 'edexcel' },
    { level: 'a-level', board: 'cambridge' },
    { level: 'a-level', board: 'ocr' },
    // IB combinations
    { level: 'ib', board: 'sl' },
    { level: 'ib', board: 'hl' }
  ];
  
  const validSubjects = ['biology', 'chemistry', 'physics', 'maths'];
  
  const params = [];
  
  for (const combination of validCombinations) {
    for (const subject of validSubjects) {
      params.push({
        level: combination.level,
        board: combination.board,
        subject: subject
      });
    }
  }
  
  return params;
}

export default function SubjectContent({ params }: ContentPageProps) {
  const { level, board, subject } = params;

  // Check if subject parameter is missing
  if (!subject) {
    notFound();
  }

  // Validate parameters with the new structure
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

  const validSubjects = ['biology', 'chemistry', 'physics', 'maths'];
  
  const levelConfig = validCombinations.find(config => config.level === level);
  if (!levelConfig || !levelConfig.boards.includes(board) || !validSubjects.includes(subject)) {
    notFound();
  }

  // Special redirect for iGCSE Edexcel Biology to the new topic selection page
  if (level === 'igcse' && board === 'edexcel' && subject === 'biology') {
    redirect('/biology');
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

  const subjectTitles = {
    'biology': 'Biology',
    'chemistry': 'Chemistry',
    'physics': 'Physics',
    'maths': 'Mathematics'
  };

  const subjectContent = {
    biology: {
      description: 'Explore the fascinating world of living organisms, from molecular biology to ecosystems.',
      topics: [
        'Cell Structure and Function',
        'Genetics and Heredity',
        'Evolution and Natural Selection',
        'Human Biology and Health',
        'Ecology and Environment',
        'Plant Biology and Photosynthesis'
      ],
      color: 'green',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    chemistry: {
      description: 'Discover the science of matter, chemical reactions, and molecular interactions.',
      topics: [
        'Atomic Structure and Bonding',
        'Chemical Reactions and Equations',
        'Organic Chemistry',
        'Physical Chemistry',
        'Analytical Chemistry',
        'Industrial Chemistry'
      ],
      color: 'blue',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    physics: {
      description: 'Understand the fundamental laws governing matter, energy, and the universe.',
      topics: [
        'Mechanics and Motion',
        'Electricity and Magnetism',
        'Waves and Optics',
        'Thermodynamics',
        'Modern Physics',
        'Astrophysics'
      ],
      color: 'purple',
      image: 'https://images.pexels.com/photos/8197563/pexels-photo-8197563.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    },
    maths: {
      description: 'Master mathematical concepts, problem-solving techniques, and analytical thinking.',
      topics: [
        'Algebra and Functions',
        'Calculus and Analysis',
        'Statistics and Probability',
        'Geometry and Trigonometry',
        'Number Theory',
        'Applied Mathematics'
      ],
      color: 'red',
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    }
  };

  const currentSubject = subjectContent[subject as keyof typeof subjectContent];
  const colorClasses = {
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', button: 'bg-green-600 hover:bg-green-700' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', button: 'bg-red-600 hover:bg-red-700' }
  };

  const colors = colorClasses[currentSubject.color as keyof typeof colorClasses];

  const learningResources = [
    {
      title: 'Interactive Lessons',
      description: 'Comprehensive lessons with multimedia content and interactive elements',
      icon: <BookOpen className="h-8 w-8" />,
      href: '/content'
    },
    {
      title: 'Practice Quizzes',
      description: 'Test your knowledge with subject-specific quizzes and instant feedback',
      icon: <Brain className="h-8 w-8" />,
      href: '/quiz'
    },
    {
      title: 'Study Notes',
      description: 'Detailed notes and summaries for quick revision and reference',
      icon: <FileText className="h-8 w-8" />,
      href: '/content'
    },
    {
      title: 'Flashcards',
      description: 'Interactive flashcards for memorizing key concepts and definitions',
      icon: <Zap className="h-8 w-8" />,
      href: '/flashcards'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <Link href={`/learn/${level}/${board}`} className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Subject Selection
            </Link>
          </div>
          
          {/* Breadcrumb */}
          <div className="bg-white rounded-lg shadow-sm p-4 inline-block mb-6">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">{levelTitles[level as keyof typeof levelTitles]}</span>
              {' • '}
              <span className="font-semibold text-gray-800">{boardTitles[board as keyof typeof boardTitles]}</span>
              {' • '}
              <span className={`font-semibold ${colors.text}`}>{subjectTitles[subject as keyof typeof subjectTitles]}</span>
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {subjectTitles[subject as keyof typeof subjectTitles]} Learning Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {currentSubject.description}
          </p>
        </div>

        {/* Hero Section with Image */}
        <div className="mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src={currentSubject.image}
              alt={`${subjectTitles[subject as keyof typeof subjectTitles]} learning materials`}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Master {subjectTitles[subject as keyof typeof subjectTitles]}
                </h2>
                <p className="text-xl opacity-90">
                  Comprehensive resources for {levelTitles[level as keyof typeof levelTitles]} success
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Learning Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningResources.map((resource, index) => (
              <Link key={index} href={resource.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className={colors.text}>
                        {resource.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">
                      {resource.description}
                    </p>
                    <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      Access Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Topics Covered */}
        <div className="mb-16">
          <Card className={`${colors.bg} ${colors.border} border-2`}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Topics Covered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentSubject.topics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                    <CheckCircle className={`h-5 w-5 ${colors.text} flex-shrink-0`} />
                    <span className="text-gray-800 font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Begin your {subjectTitles[subject as keyof typeof subjectTitles]} journey with our comprehensive 
                learning materials designed specifically for {levelTitles[level as keyof typeof levelTitles]} {boardTitles[board as keyof typeof boardTitles]} students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/content">
                  <Button className={`${colors.button} text-white px-8 py-3 text-lg`}>
                    Start with Lessons
                    <BookOpen className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/quiz">
                  <Button variant="outline" className={`border-2 ${colors.border} ${colors.text} hover:${colors.bg} px-8 py-3 text-lg`}>
                    Take a Quiz
                    <Brain className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}