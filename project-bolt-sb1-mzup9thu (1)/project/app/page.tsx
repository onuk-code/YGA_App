import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Brain, Users, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Interactive Learning",
      description: "Engage with dynamic content and interactive lessons designed for young minds."
    },
    {
      icon: <Brain className="h-8 w-8 text-green-600" />,
      title: "Critical Thinking",
      description: "Develop problem-solving skills through quizzes and challenging activities."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Community Learning",
      description: "Join a community of learners and educators passionate about growth."
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-600" />,
      title: "Achievement Tracking",
      description: "Monitor progress and celebrate milestones in your learning journey."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to 
            <span className="text-blue-600 block">Young Genius Academy</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering young minds through innovative learning experiences, 
            interactive content, and personalized educational journeys that 
            inspire curiosity and foster academic excellence.
          </p>
          <div className="flex justify-center">
            <Link href="/learn">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Young Genius Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge educational technology with 
              proven learning methodologies to create an unparalleled learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who are already discovering their potential 
            through our innovative educational platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Take a Quiz
              </Button>
            </Link>
            <Link href="/flashcards">
              <Button variant="outline" className="border-white text-white hover:bg-blue-700 px-8 py-3 text-lg">
                Try Flashcards
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}