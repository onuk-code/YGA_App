import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { biologyContent, getChapterById, getTopicById, getNextTopic, getPreviousTopic } from '@/src/data/biologyContent';

interface TopicPageProps {
  params: {
    chapterId: string;
    topicId: string;
  };
}

export async function generateStaticParams() {
  const params = [];
  
  for (const chapter of biologyContent) {
    for (const topic of chapter.topics) {
      params.push({
        chapterId: chapter.id,
        topicId: topic.id,
      });
    }
  }
  
  return params;
}

export default function TopicPage({ params }: TopicPageProps) {
  const { chapterId, topicId } = params;
  
  const chapter = getChapterById(chapterId);
  const topicData = getTopicById(chapterId, topicId);
  
  if (!chapter || !topicData) {
    notFound();
  }
  
  const { topic } = topicData;
  const nextTopic = getNextTopic(chapterId, topicId);
  const previousTopic = getPreviousTopic(chapterId, topicId);
  
  // Sample content for demonstration - in a real app this would come from a CMS or database
  const getTopicContent = (topicTitle: string) => {
    // Add null check and ensure topicTitle is a string
    if (!topicTitle || typeof topicTitle !== 'string') {
      return {
        introduction: 'This section covers an important concept in biology that helps us understand living organisms and their processes.',
        keyPoints: [
          'Key concepts and principles will be covered',
          'Real-world examples and applications',
          'Important terminology and definitions',
          'Connections to other biological topics'
        ],
        examples: [
          'Practical examples from nature',
          'Laboratory observations',
          'Case studies and research findings'
        ]
      };
    }

    const contentMap: { [key: string]: any } = {
      'Characteristics of living organisms': {
        introduction: 'All living organisms share certain fundamental characteristics that distinguish them from non-living matter. These characteristics are essential for life and are observed across all forms of life on Earth.',
        keyPoints: [
          'Movement - the ability to change position or move parts of the body',
          'Respiration - the chemical process that releases energy from food',
          'Sensitivity - the ability to detect and respond to changes in the environment',
          'Growth - the permanent increase in size and complexity',
          'Reproduction - the ability to produce offspring',
          'Excretion - the removal of waste products from the body',
          'Nutrition - the process of obtaining and using food for energy and growth'
        ],
        examples: [
          'Plants show movement by growing towards light (phototropism)',
          'Animals breathe to obtain oxygen for respiration',
          'Bacteria reproduce by binary fission',
          'Mammals excrete waste through kidneys and lungs'
        ]
      },
      'Variety of living organisms': {
        introduction: 'Life on Earth exists in an incredible variety of forms, from microscopic bacteria to massive whales. This diversity is the result of millions of years of evolution and adaptation to different environments.',
        keyPoints: [
          'Kingdom classification system organizes life into major groups',
          'Bacteria are single-celled prokaryotic organisms',
          'Plants are multicellular organisms that photosynthesize',
          'Animals are multicellular organisms that consume other organisms',
          'Fungi decompose organic matter and absorb nutrients'
        ],
        examples: [
          'Bacteria: E. coli, Streptococcus',
          'Plants: Oak trees, grass, algae',
          'Animals: Humans, insects, fish',
          'Fungi: Mushrooms, yeast, mold'
        ]
      }
    };
    
    return contentMap[topicTitle] || {
      introduction: `This section covers ${topicTitle.toLowerCase()}, an important concept in biology that helps us understand living organisms and their processes.`,
      keyPoints: [
        'Key concepts and principles will be covered',
        'Real-world examples and applications',
        'Important terminology and definitions',
        'Connections to other biological topics'
      ],
      examples: [
        'Practical examples from nature',
        'Laboratory observations',
        'Case studies and research findings'
      ]
    };
  };
  
  const content = getTopicContent(topic.title);
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-8">
      {/* Centered Content Container */}
      <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/biology" className="hover:text-blue-600 transition-colors">
              Biology
            </Link>
            <span>→</span>
            <Link href={`/biology#${chapterId}`} className="hover:text-blue-600 transition-colors">
              {chapter.title}
            </Link>
            <span>→</span>
            <span className="text-gray-900 font-medium">{topic.title}</span>
          </nav>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{topic.title}</h1>
            <p className="text-green-100 text-xl">
              Topic {chapter.topics.findIndex(t => t.id === topicId) + 1} of {chapter.topics.length}
            </p>
          </div>
        </div>

        {/* Main Content - Centered with Good Spacing */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
                <BookOpen className="h-6 w-6 text-green-600" />
                <span>Introduction</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <p className="text-gray-700 leading-relaxed text-lg text-center max-w-3xl mx-auto">
                {content.introduction}
              </p>
            </CardContent>
          </Card>

          {/* Key Points */}
          <Card className="shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-center">Key Learning Points</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                  {content.keyPoints.map((point: string, index: number) => (
                    <li key={index} className="flex items-start space-x-4">
                      <div className="bg-green-100 text-green-600 rounded-full p-2 flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-current rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-center">Examples & Applications</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.examples.map((example: string, index: number) => (
                    <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <p className="text-green-800 font-medium text-lg">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex justify-between items-center">
          <div>
            {previousTopic && (
              <Link href={`/biology/${previousTopic.chapterId}/${previousTopic.topicId}`}>
                <Button variant="outline" className="flex items-center space-x-2 px-6 py-3">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous Topic</span>
                </Button>
              </Link>
            )}
          </div>
          
          <Link href="/biology">
            <Button variant="outline" className="px-6 py-3">
              Back to Biology
            </Button>
          </Link>
          
          <div>
            {nextTopic && (
              <Link href={`/biology/${nextTopic.chapterId}/${nextTopic.topicId}`}>
                <Button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-6 py-3">
                  <span>Next Topic</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}