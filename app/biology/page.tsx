'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ArrowRight, Users, Microscope, Dna, Leaf, Recycle, CheckCircle, Play, Brain, Zap } from 'lucide-react';
import Link from 'next/link';
import { biologyContent } from '@/src/data/biologyContent';

type ContentType = 'notes' | 'questions' | 'flashcards';

export default function BiologyTopicSelection() {
  const [selectedContentType, setSelectedContentType] = useState<ContentType>('notes');

  // Map chapter IDs to appropriate icons and colors
  const getChapterIcon = (chapterId: string) => {
    switch (chapterId) {
      case 'chapter-1':
        return <Users className="h-6 w-6 text-blue-600" />;
      case 'chapter-2':
        return <Microscope className="h-6 w-6 text-green-600" />;
      case 'chapter-3':
        return <Dna className="h-6 w-6 text-purple-600" />;
      case 'chapter-4':
        return <Leaf className="h-6 w-6 text-emerald-600" />;
      case 'chapter-5':
        return <Recycle className="h-6 w-6 text-orange-600" />;
      default:
        return <BookOpen className="h-6 w-6 text-gray-600" />;
    }
  };

  const getChapterColor = (chapterId: string) => {
    switch (chapterId) {
      case 'chapter-1':
        return 'bg-blue-500';
      case 'chapter-2':
        return 'bg-green-500';
      case 'chapter-3':
        return 'bg-purple-500';
      case 'chapter-4':
        return 'bg-emerald-500';
      case 'chapter-5':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Mock progress data - in a real app this would come from user data
  const getTopicProgress = (chapterId: string, topicId: string) => {
    // Simulate some completed topics
    const completedTopics = [
      'chapter-1-characteristics-living-organisms',
      'chapter-1-variety-living-organisms',
      'chapter-2-level-organisation'
    ];
    return completedTopics.includes(`${chapterId}-${topicId}`);
  };

  const getChapterProgress = (chapterId: string) => {
    const chapter = biologyContent.find(c => c.id === chapterId);
    if (!chapter) return 0;
    
    const completedCount = chapter.topics.filter(topic => 
      getTopicProgress(chapterId, topic.id)
    ).length;
    
    return Math.round((completedCount / chapter.topics.length) * 100);
  };

  // Generate the appropriate link based on selected content type
  const getTopicLink = (chapterId: string, topicId: string) => {
    switch (selectedContentType) {
      case 'notes':
        return `/biology/${chapterId}/${topicId}`;
      case 'questions':
        return `/quiz?topic=${chapterId}-${topicId}`;
      case 'flashcards':
        return `/flashcards?topic=${chapterId}-${topicId}`;
      default:
        return `/biology/${chapterId}/${topicId}`;
    }
  };

  // Content type configurations
  const contentTypes = [
    {
      id: 'notes' as ContentType,
      label: 'Notes',
      icon: <BookOpen className="h-5 w-5" />,
      description: 'Read comprehensive notes and explanations',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'questions' as ContentType,
      label: 'Questions',
      icon: <Brain className="h-5 w-5" />,
      description: 'Practice with interactive quizzes',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'flashcards' as ContentType,
      label: 'Flashcards',
      icon: <Zap className="h-5 w-5" />,
      description: 'Quick review with flashcards',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <Link href="/learn/igcse/edexcel" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Subject Selection
            </Link>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Microscope className="h-8 w-8 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Biology Topics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Select a topic to start learning. Track your progress as you master each concept in biology.
          </p>

          {/* Content Type Toggle */}
          <div className="bg-white rounded-lg shadow-sm p-6 max-w-4xl mx-auto mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose your learning method:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedContentType(type.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    selectedContentType === type.id
                      ? `${type.bgColor} ${type.borderColor} ${type.color}`
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center mb-2">
                    {type.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{type.label}</h3>
                  <p className="text-sm opacity-80">{type.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Topics by Chapter */}
        <div className="space-y-8">
          {biologyContent.map((chapter, chapterIndex) => {
            const chapterProgress = getChapterProgress(chapter.id);
            
            return (
              <div key={chapter.id} className="bg-white rounded-lg shadow-sm p-6">
                {/* Chapter Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full ${getChapterColor(chapter.id)} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{chapterIndex + 1}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{chapter.title}</h2>
                      <p className="text-gray-600">{chapter.description}</p>
                    </div>
                  </div>
                  
                  {/* Chapter Progress */}
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Progress</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getChapterColor(chapter.id)}`}
                          style={{ width: `${chapterProgress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{chapterProgress}%</span>
                    </div>
                  </div>
                </div>

                {/* Topics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {chapter.topics.map((topic, topicIndex) => {
                    const isCompleted = getTopicProgress(chapter.id, topic.id);
                    const selectedType = contentTypes.find(t => t.id === selectedContentType);
                    
                    return (
                      <Link 
                        key={topic.id}
                        href={getTopicLink(chapter.id, topic.id)}
                        className="group"
                      >
                        <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-2 hover:border-blue-300">
                          <CardContent className="p-4">
                            {/* Topic Header */}
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-2">
                                {getChapterIcon(chapter.id)}
                                <span className="text-sm font-medium text-gray-600">
                                  Topic {topicIndex + 1}
                                </span>
                              </div>
                              
                              {/* Status Indicator */}
                              <div className="flex items-center space-x-1">
                                {isCompleted ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : (
                                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
                                    <Play className="h-3 w-3 text-gray-400" />
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Topic Title */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                              {topic.title}
                            </h3>

                            {/* Content Type Indicator */}
                            <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${selectedType?.bgColor} ${selectedType?.color}`}>
                              {selectedType?.icon}
                              <span>{selectedType?.label}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Course Overview */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Course Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete biology curriculum covering all essential topics from basic cellular processes 
              to complex ecological relationships.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-sm text-gray-600">Chapters</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {biologyContent.reduce((total, chapter) => total + chapter.topics.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Topics</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">Lessons</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
              <div className="text-sm text-gray-600">Practice</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}