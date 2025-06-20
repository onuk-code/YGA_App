'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export default function Quiz() {
  const questions: Question[] = [
    {
      id: 1,
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "CH4"],
      correctAnswer: 0,
      explanation: "Water is composed of two hydrogen atoms and one oxygen atom, giving it the chemical formula H2O."
    },
    {
      id: 2,
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Jupiter", "Mars", "Saturn"],
      correctAnswer: 2,
      explanation: "Mars is called the 'Red Planet' because of its reddish appearance, which comes from iron oxide (rust) on its surface."
    },
    {
      id: 3,
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      correctAnswer: 1,
      explanation: "Mitochondria are known as the powerhouse of the cell because they produce ATP, the energy currency of cells."
    },
    {
      id: 4,
      question: "How many sides does a hexagon have?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1,
      explanation: "A hexagon is a polygon with six sides and six angles. The prefix 'hex-' means six."
    },
    {
      id: 5,
      question: "What gas do plants absorb from the atmosphere during photosynthesis?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: 2,
      explanation: "During photosynthesis, plants absorb carbon dioxide from the atmosphere and use it, along with water and sunlight, to produce glucose and oxygen."
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newUserAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newUserAnswers);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return { message: "Excellent work! You're a genius!", color: "text-green-700" };
    if (percentage >= 70) return { message: "Great job! Keep up the good work!", color: "text-blue-700" };
    if (percentage >= 50) return { message: "Good effort! Review and try again!", color: "text-yellow-700" };
    return { message: "Keep studying and you'll improve!", color: "text-red-700" };
  };

  if (quizCompleted) {
    const scoreInfo = getScoreMessage();
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Trophy className="h-16 w-16 text-yellow-500" />
              </div>
              <CardTitle className="text-3xl">Quiz Completed!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-6xl font-bold text-blue-600">
                {score}/{questions.length}
              </div>
              <div className="text-2xl text-gray-600">
                {Math.round((score / questions.length) * 100)}% Correct
              </div>
              <p className={`text-xl font-semibold ${scoreInfo.color}`}>
                {scoreInfo.message}
              </p>
              
              {/* Detailed Results */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Review Your Answers</h3>
                {questions.map((question, index) => (
                  <div key={question.id} className="text-left bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-gray-900 mb-2">
                      {index + 1}. {question.question}
                    </p>
                    <div className="flex items-center space-x-2">
                      {userAnswers[index] === question.correctAnswer ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                      <span className="text-gray-700">
                        Your answer: {question.options[userAnswers[index]]}
                      </span>
                    </div>
                    {userAnswers[index] !== question.correctAnswer && (
                      <p className="text-green-700 mt-1">
                        Correct answer: {question.options[question.correctAnswer]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <Button onClick={resetQuiz} className="mt-6">
                <RotateCcw className="mr-2 h-4 w-4" />
                Take Quiz Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Science Quiz</h1>
          <p className="text-lg text-gray-600">
            Test your knowledge with our interactive quiz
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>Score: {score}/{currentQuestion + (showResult ? 1 : 0)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    showResult
                      ? index === questions[currentQuestion].correctAnswer
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : index === selectedAnswer && index !== questions[currentQuestion].correctAnswer
                        ? 'border-red-500 bg-red-50 text-red-800'
                        : 'border-gray-200 bg-gray-50 text-gray-500'
                      : selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50 text-blue-800'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span>{option}</span>
                    {showResult && index === questions[currentQuestion].correctAnswer && (
                      <CheckCircle className="ml-auto h-5 w-5 text-green-600" />
                    )}
                    {showResult && index === selectedAnswer && index !== questions[currentQuestion].correctAnswer && (
                      <XCircle className="ml-auto h-5 w-5 text-red-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {showResult && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Explanation:</h4>
                <p className="text-blue-800">{questions[currentQuestion].explanation}</p>
              </div>
            )}

            {!showResult && (
              <Button 
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="w-full mt-6"
              >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}