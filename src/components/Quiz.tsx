import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUESTIONS } from '../data/quizQuestions';
import { Check, X, ArrowRight, RotateCcw, Award, CheckCircle2, AlertTriangle, Lightbulb, Sparkles, BookOpen, Brain, Clock, Target, List, Grid, Hash } from 'lucide-react';

export default function Quiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = QUESTIONS[currentIdx];

  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedIdx(optionIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedIdx === null || isAnswered) return;

    const isCorrect = selectedIdx === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setUserAnswers((prev) => [...prev, isCorrect]);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedIdx(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIdx(0);
    setSelectedIdx(null);
    setIsAnswered(false);
    setScore(0);
    setUserAnswers([]);
    setQuizFinished(false);
  };

  const getPercentageScore = () => {
    return Math.round((score / QUESTIONS.length) * 100);
  };

  const getPerformanceFeedback = () => {
    const percent = getPercentageScore();
    if (percent === 100) {
      return {
        title: 'NCK Board Champion!',
        message: 'Perfect score! Your clinical science knowledge is stellar. You are fully prepared to excel in continuous practice and your school examinations.',
        color: 'text-emerald-600 dark:text-emerald-400',
        badge: 'Elite Practitioner',
        icon: <Award className="w-8 h-8" />
      };
    } else if (percent >= 75) {
      return {
        title: 'Clinical Care Specialist',
        message: 'Excellent job! You demonstrated strong clinical judgment and critical thinking across basic nursing categories.',
        color: 'text-blue-600 dark:text-blue-400',
        badge: 'Advanced Nurse',
        icon: <Brain className="w-8 h-8" />
      };
    } else if (percent >= 50) {
      return {
        title: 'Growing Practitioner',
        message: 'Good attempt. You have a solid base of medical concepts, but revising clinical guidelines will maximize your NCK board readiness.',
        color: 'text-amber-600 dark:text-amber-400',
        badge: 'Regular Student',
        icon: <Target className="w-8 h-8" />
      };
    } else {
      return {
        title: 'Ready for Development',
        message: 'A great learning opportunity! Medicine requires continuous study. Joining Medrae App will unlock guided micro-courses to boost your score.',
        color: 'text-rose-500 dark:text-rose-400',
        badge: 'Knowledge Seeker',
        icon: <BookOpen className="w-8 h-8" />
      };
    }
  };

  const progressPercent = ((currentIdx + (isAnswered ? 1 : 0)) / QUESTIONS.length) * 100;
  const feedback = getPerformanceFeedback();

  // Navigate to specific question
  const jumpToQuestion = (index: number) => {
    setCurrentIdx(index);
    setSelectedIdx(null);
    setIsAnswered(false);
  };

  return (
    <section id="quiz" className="py-8 sm:py-16 lg:py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-400/5 dark:bg-red-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-6 relative z-10">
        {/* Section Header - Edge to edge on mobile */}
        <div className="px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-6 sm:mb-10">

          <h2 className=" font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white">
            <span className="text-red-600 dark:text-red-500">Medrae</span> Mini Nursing Challenge
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Test your split-second clinical judgment. See real-time diagnostic rationales instantly with no login or setup.
          </p>
        </div>

        {/* Quiz Container - Two columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-6">

          {/* Left Column - Questions (3/4 on desktop) */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 min-h-[500px] relative">
              {/* Card Inner Padding - Edge to edge on mobile */}
              <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">

                <AnimatePresence mode="wait">
                  {!quizFinished ? (
                    <motion.div
                      key={currentIdx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="w-full flex-1 flex flex-col"
                    >
                      {/* Progress Header - No borders */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <span className=" text-xs  text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5">
                            Q{currentIdx + 1}/{QUESTIONS.length}
                          </span>
                          <span className={` text-[10px]  px-2.5 py-1 ${currentQuestion.difficulty === 'Easy'
                            ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : currentQuestion.difficulty === 'Medium'
                              ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400'
                              : 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400'
                            }`}>
                            {currentQuestion.difficulty}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="font-mono">30s avg</span>
                        </div>
                      </div>

                      {/* Progress Bar - No border */}
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 overflow-hidden mb-6">
                        <motion.div
                          className="h-full bg-gradient-to-r from-red-600 to-blue-600"
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPercent}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Question Topic & Text */}
                      <div className="space-y-3 mb-6">
                        <div className=" text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-2">
                          <BookOpen className="w-3.5 h-3.5" />
                          TOPIC: {currentQuestion.topic}
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl text-slate-800 dark:text-white">
                          {currentQuestion.question}
                        </h3>
                      </div>

                      {/* Options List - No borders on buttons */}
                      <div className="space-y-3 mb-8 flex-1">
                        {currentQuestion.options.map((option, idx) => {
                          let cardStyle = 'bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-700/50';
                          let iconIndicator = <div className="w-5 h-5 border-2 border-slate-300 group-hover:border-red-400 shrink-0" />;

                          if (isAnswered) {
                            if (idx === currentQuestion.correctIndex) {
                              cardStyle = 'bg-emerald-50 dark:bg-emerald-500/15';
                              iconIndicator = (
                                <div className="w-6 h-6 bg-emerald-500 text-white flex items-center justify-center shrink-0">
                                  <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                                </div>
                              );
                            } else if (idx === selectedIdx) {
                              cardStyle = 'bg-rose-50 dark:bg-rose-500/15';
                              iconIndicator = (
                                <div className="w-6 h-6 bg-rose-500 text-white flex items-center justify-center shrink-0">
                                  <X className="w-3.5 h-3.5 stroke-[3.5]" />
                                </div>
                              );
                            } else {
                              cardStyle = 'opacity-50 bg-slate-50 dark:bg-slate-800/50';
                            }
                          } else if (idx === selectedIdx) {
                            cardStyle = 'bg-red-50 dark:bg-red-500/10';
                            iconIndicator = <div className="w-5 h-5 border-4 border-red-600 dark:border-red-400 bg-white dark:bg-slate-900 shrink-0" />;
                          }

                          return (
                            <button
                              key={idx}
                              role="radio"
                              aria-checked={idx === selectedIdx}
                              onClick={() => handleOptionSelect(idx)}
                              disabled={isAnswered}
                              className={`w-full flex items-center justify-between gap-3 p-4 text-left font-sans text-sm sm:text-base font-medium transition-all duration-150 cursor-pointer group ${cardStyle}`}
                            >
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                <span className="font-mono text-xs font-bold bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 p-1 px-2.5 shrink-0">
                                  {String.fromCharCode(65 + idx)}
                                </span>
                                <span className="break-words">{option}</span>
                              </div>
                              {iconIndicator}
                            </button>
                          );
                        })}
                      </div>

                      {/* Question Footer & Rationales - No border */}
                      <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                        <AnimatePresence>
                          {isAnswered && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="mb-6 p-4 bg-amber-50 dark:bg-amber-500/5 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed"
                            >
                              <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-400 mb-1">
                                <Lightbulb className="w-4 h-4 text-amber-500" />
                                <span>Educational Rationale</span>
                              </div>
                              <p>{currentQuestion.explanation}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Actions buttons - No borders */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="text-xs text-slate-400 font-sans text-center sm:text-left">
                            {isAnswered ? 'Click next to continue' : 'Pick the best answer, then submit'}
                          </div>

                          {!isAnswered ? (
                            <button
                              onClick={handleSubmitAnswer}
                              disabled={selectedIdx === null}
                              className={`w-full sm:w-auto px-8 py-3.5 font-sans font-bold text-sm uppercase tracking-wider transition-all cursor-pointer ${selectedIdx === null
                                ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                                : 'bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white'
                                }`}
                            >
                              Submit Answer
                            </button>
                          ) : (
                            <button
                              onClick={handleNext}
                              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white font-sans font-bold text-sm uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                            >
                              <span>{currentIdx < QUESTIONS.length - 1 ? 'Next Question' : 'View Results'}</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    /* Scorecard Render */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6 relative"
                    >
                      {/* Confetti effect for high scores */}
                      {score >= 5 && (
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                          {Array.from({ length: 30 }).map((_, i) => {
                            const randX = Math.random() * 100;
                            const randScale = Math.random() * 0.8 + 0.4;
                            const delay = Math.random() * 2;
                            const colors = [
                              'bg-red-500', 'bg-blue-500', 'bg-emerald-500',
                              'bg-yellow-400', 'bg-violet-500', 'bg-amber-500'
                            ];
                            const randColor = colors[Math.floor(Math.random() * colors.length)];
                            return (
                              <div
                                key={i}
                                className={`absolute ${randColor} animate-bounce`}
                                style={{
                                  left: `${randX}%`,
                                  width: `${8 * randScale}px`,
                                  height: `${8 * randScale}px`,
                                  top: `${Math.random() * 60}%`,
                                  animationDelay: `${delay}s`,
                                  animationDuration: `${2 + Math.random() * 4}s`
                                }}
                              />
                            );
                          })}
                        </div>
                      )}

                      <div className="space-y-2 relative z-10">
                        {/* Status Circle Gauge */}
                        <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                          <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle
                              cx="64"
                              cy="64"
                              r="52"
                              className="stroke-slate-200 dark:stroke-slate-700"
                              strokeWidth="8"
                              fill="transparent"
                            />
                            <motion.circle
                              cx="64"
                              cy="64"
                              r="52"
                              className="stroke-gradient-to-r from-red-600 to-blue-600"
                              strokeWidth="8"
                              strokeDasharray={2 * Math.PI * 52}
                              initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                              animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - score / QUESTIONS.length) }}
                              transition={{ duration: 1.2, ease: 'easeOut' }}
                              fill="transparent"
                              strokeLinecap="round"
                              stroke="url(#scoreGradient)"
                            />
                          </svg>
                          <svg className="absolute inset-0 w-full h-full">
                            <defs>
                              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ef4444" />
                                <stop offset="100%" stopColor="#3b82f6" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="text-center font-display">
                            <div className="text-3xl font-black text-slate-900 dark:text-white leading-none">{getPercentageScore()}%</div>
                            <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-widest leading-none">
                              Correct
                            </div>
                          </div>
                        </div>

                        {/* Level Badge - No border */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                          {feedback.icon}
                          <span>{feedback.badge}</span>
                        </div>

                        {/* Explanations */}
                        <div className="space-y-2 max-w-xl mx-auto">
                          <h3 className={`font-display font-extrabold text-2xl sm:text-3xl ${feedback.color}`}>
                            {feedback.title}
                          </h3>
                          <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                            {feedback.message}
                          </p>
                        </div>

                        {/* Statistics board - No border */}
                        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto p-4 bg-slate-50 dark:bg-slate-800/50">
                          <div className="text-center">
                            <div className="text-xl font-display font-black text-slate-900 dark:text-white">
                              {score} / {QUESTIONS.length}
                            </div>
                            <div className="font-sans text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                              Total Solved
                            </div>
                          </div>
                          <div className="text-center border-l border-slate-200 dark:border-slate-700">
                            <div className="text-xl font-display font-black text-emerald-500 dark:text-emerald-400 flex items-center justify-center gap-1">
                              <span>{score >= 5 ? '🏆' : '📖'}</span>
                            </div>
                            <div className="font-sans text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                              Performance Level
                            </div>
                          </div>
                        </div>

                        {/* Action buttons - No borders */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                          <button
                            onClick={restartQuiz}
                            className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Retake Challenge</span>
                          </button>

                          <a
                            href="https://medrae.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                          >
                            <span>Join Full Medrae App</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column - Question Navigation Panel (Desktop only) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 sticky top-24 max-h-[600px] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                  Questions
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {QUESTIONS.length} total
                </span>
              </div>

              {/* Progress indicator */}
              <div className="mb-4">
                <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-blue-600 transition-all duration-300"
                    style={{ width: `${((currentIdx + (isAnswered ? 1 : 0)) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question grid */}
              <div className="grid grid-cols-4 gap-2">
                {QUESTIONS.map((_, index) => {
                  let bgColor = 'bg-slate-200 dark:bg-slate-700';
                  let textColor = 'text-slate-600 dark:text-slate-400';

                  if (index < userAnswers.length) {
                    bgColor = userAnswers[index]
                      ? 'bg-emerald-500 dark:bg-emerald-500'
                      : 'bg-rose-500 dark:bg-rose-500';
                    textColor = 'text-white';
                  } else if (index === currentIdx) {
                    bgColor = 'bg-red-600 dark:bg-red-600';
                    textColor = 'text-white';
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => jumpToQuestion(index)}
                      className={`w-full aspect-square flex items-center justify-center font-mono text-xs font-bold transition-colors hover:opacity-80 ${bgColor} ${textColor}`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-4 space-y-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500" />
                  <span>Correct</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-rose-500" />
                  <span>Incorrect</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-600" />
                  <span>Current</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-200 dark:bg-slate-700" />
                  <span>Unanswered</span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="text-xs font-mono text-slate-600 dark:text-slate-300">
                  Score: <span className="font-bold">{score}/{QUESTIONS.length}</span>
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1">
                  {userAnswers.length} of {QUESTIONS.length} answered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}