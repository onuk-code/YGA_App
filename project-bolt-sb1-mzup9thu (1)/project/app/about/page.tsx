import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Star, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "We strive for the highest standards in educational content and learning experiences."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Passion",
      description: "Our dedication to education drives everything we do, inspiring students to reach their potential."
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-600" />,
      title: "Innovation",
      description: "We embrace cutting-edge technology and methodologies to enhance the learning process."
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Accessibility",
      description: "Quality education should be available to all students, regardless of their background."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Young Genius Academy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded on the belief that every student has untapped potential, 
            Young Genius Academy is dedicated to transforming education through 
            innovative learning approaches and personalized educational experiences.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Students learning together" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We believe that education should be engaging, accessible, and tailored to each 
                student's unique learning style. Our mission is to provide high-quality 
                educational resources that inspire curiosity, foster critical thinking, 
                and prepare students for success in an ever-evolving world.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Through our innovative platform, we combine traditional educational principles 
                with modern technology to create an environment where learning is not just 
                effective, but also enjoyable and meaningful.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8364067/pexels-photo-8364067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1" 
                alt="Educational innovation" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at Young Genius Academy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Young Genius Academy is powered by a dedicated team of educators, 
            technologists, and learning specialists who are passionate about 
            transforming education. Our diverse backgrounds in pedagogy, 
            curriculum development, and educational technology allow us to 
            create comprehensive learning solutions that truly make a difference.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Together, we work tirelessly to ensure that every student who 
            joins our academy has access to the tools, resources, and support 
            they need to achieve their academic goals and unlock their full potential.
          </p>
        </div>
      </section>
    </div>
  );
}