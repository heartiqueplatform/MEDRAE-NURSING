import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUESTIONS } from '../data/quizQuestions';
import { Check, X, ArrowRight, RotateCcw, Award, CheckCircle2, AlertTriangle, Lightbulb, Sparkles, BookOpen, Brain, Clock, Target } from 'lucide-react';

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

  return (
    <section id="quiz" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-400/5 dark:bg-red-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-400/3 dark:bg-violet-500/3 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-200/60 dark:border-red-500/20 text-red-700 dark:text-red-400 font-sans font-bold text-xs uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5" />
            <span>Interactive Demo</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white">
            <span className="text-red-600 dark:text-red-500">Medrae</span> Mini Nursing Challenge
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Test your split-second clinical judgment. See real-time diagnostic rationales instantly with no login or setup.
          </p>
        </div>

        {/* Dynamic Quiz Card */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl sm:rounded-[40px] border border-slate-200/60 dark:border-slate-800/80 shadow-2xl shadow-slate-200/20 dark:shadow-slate-800/20 relative min-h-[480px] flex flex-col">

          {/* Card Inner Padding - Full width on mobile */}
          <div className="p-5 sm:p-8 lg:p-10 flex-1 flex flex-col">

            {/* Floating Status Badge */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-200/60 dark:border-slate-800 z-20">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-red-600 to-blue-600 rounded-xl flex items-center justify-center text-white shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pass Rate</div>
                <div className="text-sm sm:text-base font-extrabold text-slate-800 dark:text-white leading-none">98.4%</div>
              </div>
            </div>

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
                  {/* Progress Header */}
                  <div className="flex items-center justify-between gap-3 mb-4 pr-16 sm:pr-0">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                        Q{currentIdx + 1}/{QUESTIONS.length}
                      </span>
                      <span className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-full ${currentQuestion.difficulty === 'Easy'
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

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-8">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-600 to-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Question Topic & Text */}
                  <div className="space-y-3 mb-6">
                    <div className="font-sans text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5" />
                      TOPIC: {currentQuestion.topic}
                    </div>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl lg:text-2xl text-slate-800 dark:text-white leading-tight">
                      {currentQuestion.question}
                    </h3>
                  </div>

                  {/* Options List - Full width on mobile */}
                  <div className="space-y-3 mb-8 flex-1">
                    {currentQuestion.options.map((option, idx) => {
                      let cardStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-red-300 hover:bg-red-50/10 dark:hover:bg-slate-700/50';
                      let iconIndicator = <div className="w-5 h-5 rounded-full border-2 border-slate-300 group-hover:border-red-400 shrink-0" />;

                      if (isAnswered) {
                        if (idx === currentQuestion.correctIndex) {
                          cardStyle = 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-500/15 ring-2 ring-emerald-500/20 dark:ring-emerald-500/20';
                          iconIndicator = (
                            <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
                              <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                            </div>
                          );
                        } else if (idx === selectedIdx) {
                          cardStyle = 'border-rose-500 bg-rose-50/50 dark:bg-rose-500/15 ring-2 ring-rose-500/20 dark:ring-rose-500/20';
                          iconIndicator = (
                            <div className="w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-rose-500/30">
                              <X className="w-3.5 h-3.5 stroke-[3.5]" />
                            </div>
                          );
                        } else {
                          cardStyle = 'opacity-50 border-slate-200 dark:border-slate-700';
                        }
                      } else if (idx === selectedIdx) {
                        cardStyle = 'border-red-600 dark:border-red-400 ring-2 ring-red-500/20 dark:ring-red-500/20 bg-red-50/10 dark:bg-red-500/5';
                        iconIndicator = <div className="w-5 h-5 rounded-full border-4 border-red-600 dark:border-red-400 bg-white dark:bg-slate-900 shrink-0 shadow-lg shadow-red-500/30" />;
                      }

                      return (
                        <button
                          key={idx}
                          role="radio"
                          aria-checked={idx === selectedIdx}
                          onClick={() => handleOptionSelect(idx)}
                          disabled={isAnswered}
                          className={`w-full flex items-center justify-between gap-3 p-4 rounded-2xl border-2 text-left font-sans text-sm sm:text-base font-medium transition-all duration-150 cursor-pointer group ${cardStyle}`}
                        >
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            <span className="font-mono text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 p-1 px-2.5 rounded-md shrink-0">
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="break-words">{option}</span>
                          </div>
                          {iconIndicator}
                        </button>
                      );
                    })}
                  </div>

                  {/* Question Footer & Rationales */}
                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                    <AnimatePresence>
                      {isAnswered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mb-6 p-4 rounded-xl bg-amber-50/60 dark:bg-amber-500/5 border border-amber-200/50 dark:border-amber-500/20 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed"
                        >
                          <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-400 mb-1">
                            <Lightbulb className="w-4 h-4 text-amber-500" />
                            <span>Educational Rationale</span>
                          </div>
                          <p>{currentQuestion.explanation}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Actions buttons - Stack on mobile */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-xs text-slate-400 font-sans text-center sm:text-left">
                        {isAnswered ? 'Click next to continue' : 'Pick the best answer, then submit'}
                      </div>

                      {!isAnswered ? (
                        <button
                          onClick={handleSubmitAnswer}
                          disabled={selectedIdx === null}
                          className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-sans font-bold text-sm uppercase tracking-wider transition-all cursor-pointer ${selectedIdx === null
                              ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                              : 'bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white shadow-lg shadow-red-500/20 hover:shadow-xl'
                            }`}
                        >
                          Submit Answer
                        </button>
                      ) : (
                        <button
                          onClick={handleNext}
                          className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white font-sans font-bold text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-red-500/20 hover:shadow-xl hover:translate-y-[-1px] active:translate-y-0 transition-all cursor-pointer flex items-center justify-center gap-2"
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
                            className={`absolute ${randColor} rounded-full animate-bounce`}
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

                  <div className="space-y-6 relative z-10">
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

                    {/* Level Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-500/10 rounded-full text-red-700 dark:text-red-400 font-mono text-xs font-bold uppercase tracking-wider border border-red-200/60 dark:border-red-500/20">
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

                    {/* Statistics board */}
                    <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
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

                    {/* Action buttons - Stack on mobile */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                      <button
                        onClick={restartQuiz}
                        className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-xl font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer border border-slate-200 dark:border-slate-700"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Retake Challenge</span>
                      </button>

                      <a
                        href="https://medrae.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-500/20 hover:shadow-xl hover:translate-y-[-1px] active:translate-y-0 transition-all flex items-center justify-center gap-2"
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
    </section>
  );
}