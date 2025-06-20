import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Settings, Award, BookOpen, Clock, Bell } from 'lucide-react';

export default function Account() {
  const upcomingFeatures = [
    {
      icon: <User className="h-8 w-8 text-blue-600" />,
      title: "Personal Profiles",
      description: "Create and customize your learning profile with avatar, preferences, and learning goals."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Achievement System",
      description: "Earn badges and certificates as you complete lessons and master new skills."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "Learning History",
      description: "Track your progress with detailed analytics and personalized learning insights."
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Study Schedules",
      description: "Set up personalized study schedules and receive reminders to stay on track."
    },
    {
      icon: <Settings className="h-8 w-8 text-gray-600" />,
      title: "Account Settings",
      description: "Manage your account preferences, privacy settings, and notification preferences."
    },
    {
      icon: <Bell className="h-8 w-8 text-red-600" />,
      title: "Smart Notifications",
      description: "Receive intelligent notifications about new content, reminders, and achievements."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Account Management
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your personalized learning dashboard and account features are coming soon!
          </p>
        </div>

        {/* Main Notice */}
        <Card className="mb-12">
          <CardContent className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Coming Soon: Full Account Management
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We're working hard to bring you comprehensive account management features 
                that will enhance your learning experience. Soon you'll be able to track 
                your progress, customize your profile, and access advanced learning tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Notified When Ready
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Learn More About Features
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Upcoming Account Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    {feature.icon}
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Development Timeline</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 w-4 h-4 rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phase 1: Core Platform (Completed)</h3>
                    <p className="text-gray-600">Basic quiz and flashcard functionality with responsive design</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-500 w-4 h-4 rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phase 2: User Accounts (In Progress)</h3>
                    <p className="text-gray-600">User registration, profiles, and progress tracking</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-300 w-4 h-4 rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phase 3: Advanced Features (Coming Soon)</h3>
                    <p className="text-gray-600">Achievement system, detailed analytics, and personalized recommendations</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-300 w-4 h-4 rounded-full flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phase 4: Community Features (Planned)</h3>
                    <p className="text-gray-600">Social learning, leaderboards, and collaborative study tools</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}