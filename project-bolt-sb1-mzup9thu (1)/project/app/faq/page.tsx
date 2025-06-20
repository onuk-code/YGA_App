'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What age groups is Young Genius Academy designed for?",
      answer: "Young Genius Academy is designed for students aged 6-18, with content and activities tailored to different learning levels. Our interactive materials are structured to grow with your child's academic development, ensuring age-appropriate challenges and engagement at every stage."
    },
    {
      question: "How do I track my child's progress on the platform?",
      answer: "Our comprehensive progress tracking system allows parents and students to monitor learning achievements through detailed dashboards. You can view quiz scores, completed lessons, time spent on activities, and areas where additional practice might be beneficial. Regular progress reports are also generated to help you understand learning trends."
    },
    {
      question: "Are the quizzes and flashcards aligned with school curricula?",
      answer: "Yes, our educational content is carefully designed to align with common core standards and popular educational curricula. Our team of educators ensures that the quizzes, flashcards, and learning materials complement what students are learning in traditional classroom settings."
    },
    {
      question: "Can multiple children use the same account?",
      answer: "While our current platform supports individual learning profiles, we're working on family account features that will allow parents to manage multiple children's profiles. Each child will have their own personalized learning path and progress tracking while being manageable under one family account."
    },
    {
      question: "What subjects and topics are covered?",
      answer: "Young Genius Academy covers a wide range of subjects including Mathematics, Science, Language Arts, Social Studies, and Critical Thinking skills. Our content spans from basic concepts to advanced topics, with new materials being added regularly based on student needs and curriculum updates."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Currently, Young Genius Academy is optimized as a responsive web application that works seamlessly on all devices including smartphones and tablets. We're actively developing dedicated mobile apps for iOS and Android to provide an even more tailored mobile learning experience."
    },
    {
      question: "What should I do if I encounter technical issues?",
      answer: "If you experience any technical difficulties, please contact our support team through the contact form or email us directly at support@younggenius.edu. Our technical support team typically responds within 24 hours and will work with you to resolve any issues quickly."
    },
    {
      question: "How often is new content added to the platform?",
      answer: "We regularly update our content library with new quizzes, flashcards, and educational materials. New content is typically added monthly, and we also create seasonal and topical content to keep learning fresh and relevant. Users are notified of new additions through our platform announcements."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Young Genius Academy. 
            If you don't see your question here, feel free to contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-lg shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help. Don't hesitate to reach out with any questions or concerns.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}