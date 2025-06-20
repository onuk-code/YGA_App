'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle } from 'lucide-react';

interface Flashcard {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function Flashcards() {
  const flashcards: Flashcard[] = [
    {
      id: 1,
      question: "What is photosynthesis?",
      answer: "The process by which green plants and some other organisms use sunlight to synthesize nutrients from carbon dioxide and water. It produces glucose and oxygen as byproducts.",
      category: "Biology"
    },
    {
      id: 2,
      question: "What is the Pythagorean theorem?",
      answer: "In a right triangle, the square of the length of the hypotenuse equals the sum of squares of the lengths of the other two sides. Formula: a² + b² = c²",
      category: "Mathematics"
    },
    {
      id: 3,
      question: "What are the three states of matter?",
      answer: "Solid, liquid, and gas. These states differ in how tightly packed the molecules are and how much they move. Plasma is considered a fourth state.",
      category: "Physics"
    },
    {
      id: 4,
      question: "What is the water cycle?",
      answer: "The continuous movement of water on, above, and below Earth's surface through evaporation, condensation, precipitation, and collection processes.",
      category: "Earth Science"
    },
    {
      id: 5,
      question: "What is DNA?",
      answer: "Deoxyribonucleic acid - the hereditary material in humans and almost all other organisms. It carries genetic instructions for development, functioning, and reproduction.",
      category: "Biology"
    },
    {
      id: 6,
      question: "What is gravity?",
      answer: "A fundamental force that attracts objects with mass toward each other. On Earth, it gives weight to physical objects and causes them to fall toward the ground.",
      category: "Physics"
    },
    {
      id: 7,
      question: "What is the periodic table?",
      answer: "A tabular arrangement of chemical elements organized by atomic number, electron configuration, and recurring chemical properties. It shows periodic trends.",
      category: "Chemistry"
    },
    {
      id: 8,
      question: "What is evolution?",
      answer: "The change in heritable traits of biological populations over successive generations. It occurs through natural selection, genetic drift, and other mechanisms.",
      category: "Biology"
    }
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cards, setCards] = useState(flashcards);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
    setIsFlipped(false);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentCard(0);
    setIsFlipped(false);
  };

  const resetCards = () => {
    setCards(flashcards);
    setCurrentCard(0);
    setIsFlipped(false);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Biology': 'bg-green-100 text-green-800',
      'Mathematics': 'bg-blue-100 text-blue-800',
      'Physics': 'bg-purple-100 text-purple-800',
      'Chemistry': 'bg-red-100 text-red-800',
      'Earth Science': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Flashcards</h1>
          <p className="text-lg text-gray-600">
            Click on a card to flip it and reveal the answer
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm text-gray-600">
            Card {currentCard + 1} of {cards.length}
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={shuffleCards}>
              <Shuffle className="h-4 w-4 mr-1" />
              Shuffle
            </Button>
            <Button variant="outline" size="sm" onClick={resetCards}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentCard + 1) / cards.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Flashcard */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-2xl">
            <div 
              className={`flashcard ${isFlipped ? 'flipped' : ''}`}
              onClick={flipCard}
            >
              <div className="flashcard-inner">
                {/* Front of card */}
                <Card className="flashcard-front absolute inset-0 cursor-pointer hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 h-80 flex flex-col justify-center items-center text-center">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(cards[currentCard].category)}`}>
                        {cards[currentCard].category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {cards[currentCard].question}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Click to reveal answer
                    </p>
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card className="flashcard-back absolute inset-0 cursor-pointer hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 h-80 flex flex-col justify-center items-center text-center">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(cards[currentCard].category)}`}>
                        {cards[currentCard].category}
                      </span>
                    </div>
                    <div className="text-lg text-gray-700 leading-relaxed">
                      {cards[currentCard].answer}
                    </div>
                    <p className="text-gray-500 text-sm mt-4">
                      Click to see question
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-4">
          <Button 
            onClick={prevCard}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          
          <Button 
            onClick={flipCard}
            className="px-8"
          >
            {isFlipped ? 'Show Question' : 'Show Answer'}
          </Button>
          
          <Button 
            onClick={nextCard}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Study Tips */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Study Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-600 rounded-full p-1 flex-shrink-0">
                <span className="block w-2 h-2 bg-current rounded-full"></span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Active Recall</h4>
                <p className="text-gray-600 text-sm">Try to answer before flipping the card</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-600 rounded-full p-1 flex-shrink-0">
                <span className="block w-2 h-2 bg-current rounded-full"></span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Spaced Repetition</h4>
                <p className="text-gray-600 text-sm">Review cards at increasing intervals</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 text-purple-600 rounded-full p-1 flex-shrink-0">
                <span className="block w-2 h-2 bg-current rounded-full"></span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Mix Categories</h4>
                <p className="text-gray-600 text-sm">Shuffle cards to improve retention</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-yellow-100 text-yellow-600 rounded-full p-1 flex-shrink-0">
                <span className="block w-2 h-2 bg-current rounded-full"></span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Regular Practice</h4>
                <p className="text-gray-600 text-sm">Consistent daily review is most effective</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flashcard {
          perspective: 1000px;
          height: 320px;
        }
        
        .flashcard-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .flashcard.flipped .flashcard-inner {
          transform: rotateY(180deg);
        }
        
        .flashcard-front,
        .flashcard-back {
          backface-visibility: hidden;
        }
        
        .flashcard-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}