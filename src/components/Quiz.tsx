import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUESTIONS } from '../data/quizQuestions';
import { Check, X, ArrowRight, RotateCcw, Award, CheckCircle2, AlertTriangle, Lightbulb, Sparkles, BookOpen } from 'lucide-react';

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
        badge: 'Elite Practitioner'
      };
    } else if (percent >= 75) {
      return {
        title: 'Clinical Care Specialist',
        message: 'Excellent job! You demonstrated strong clinical judgment and critical thinking across basic nursing categories.',
        color: 'text-emerald-650 dark:text-emerald-400',
        badge: 'Advanced Nurse'
      };
    } else if (percent >= 50) {
      return {
        title: 'Growing Practitioner',
        message: 'Good attempt. You have a solid base of medical concepts, but revising clinical guidelines will maximize your NCK board readiness.',
        color: 'text-amber-600 dark:text-amber-400',
        badge: 'Regular Student'
      };
    } else {
      return {
        title: 'Ready for Development',
        message: 'A great learning opportunity! Medicine requires continuous study. Joining Medrae App will unlock guided micro-courses to boost your score.',
        color: 'text-rose-500 dark:text-rose-400',
        badge: 'Knowledge Seeker'
      };
    }
  };

  const progressPercent = ((currentIdx + (isAnswered ? 1 : 0)) / QUESTIONS.length) * 100;
  const feedback = getPerformanceFeedback();

  // Self-contained high quality confetti particles
  const confettiArray = Array.from({ length: 45 });

  return (
    <section id="quiz" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-t border-b border-slate-100 dark:border-slate-900">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-400/5 dark:bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/5 dark:bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-emerald-500/10 border border-indigo-100/60 dark:border-emerald-500/20 text-indigo-700 dark:text-emerald-400 font-sans font-bold text-xs uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Interactive Demo</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            <span className="text-red-600 dark:text-red-500">Medrae</span> Mini Nursing Challenge
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Test your split-second clinical judgment. See real-time diagnostic rationales instantly with no login or setup.
          </p>
        </div>

        {/* Dynamic Quiz Card */}
        <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-[40px] border border-slate-200/60 dark:border-slate-800/80 p-6 sm:p-10 shadow-2xl relative min-h-[460px] flex flex-col justify-between">

          {/* Floating Element - Accuracy Status Badge */}
          <div className="absolute -top-7 -right-4 sm:-right-6 bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-3xl shadow-xl flex items-center gap-3 border border-slate-150 dark:border-slate-800 z-20">
            <div className="w-9 h-9 sm:w-10 h-10 bg-emerald-500 dark:bg-emerald-600 rounded-xl flex items-center justify-center text-white shrink-0">
              <Check className="w-5.5 h-5.5 stroke-[3]" />
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
                className="w-full flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Progress Header */}
                  <div className="flex items-center justify-between gap-4 mb-4 pr-16 sm:pr-0">
                    <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-200/50 dark:bg-slate-800 p-1.5 px-3 rounded-lg">
                      Question {currentIdx + 1} of {QUESTIONS.length}
                    </span>

                    <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full ${currentQuestion.difficulty === 'Easy'
                        ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : currentQuestion.difficulty === 'Medium'
                          ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400'
                          : 'bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400'
                      }`}>
                      {currentQuestion.difficulty}
                    </span>
                  </div>

                  {/* Real-time fluid Progress Bar */}
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden mb-8">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-500 dark:to-teal-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Question Topic & Text */}
                  <div className="space-y-3 mb-6">
                    <div className="font-sans text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      TOPIC: {currentQuestion.topic}
                    </div>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-800 dark:text-white leading-tight">
                      {currentQuestion.question}
                    </h3>
                  </div>

                  {/* Options List */}
                  <div className="space-y-3 mb-8">
                    {currentQuestion.options.map((option, idx) => {
                      /* Style states:
                         - Answered & correct item: green background
                         - Answered & selected but incorrect: red background
                         - Unanswered & selected: emerald outline
                         - Hover states
                      */
                      let cardStyle = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-emerald-200 hover:bg-emerald-50/10 dark:hover:bg-slate-800/80';
                      let iconIndicator = <div className="w-5 h-5 rounded-full border-2 border-slate-300 group-hover:border-emerald-400 shrink-0" />;

                      if (isAnswered) {
                        if (idx === currentQuestion.correctIndex) {
                          cardStyle = 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-500/15 text-emerald-950 dark:text-emerald-250';
                          iconIndicator = (
                            <div className="w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0">
                              <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                            </div>
                          );
                        } else if (idx === selectedIdx) {
                          cardStyle = 'border-rose-500 bg-rose-50/50 dark:bg-rose-500/15 text-rose-950 dark:text-rose-250';
                          iconIndicator = (
                            <div className="w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center shrink-0">
                              <X className="w-3.5 h-3.5 stroke-[3.5]" />
                            </div>
                          );
                        } else {
                          cardStyle = 'opacity-60 border-slate-200 dark:border-slate-800';
                        }
                      } else if (idx === selectedIdx) {
                        cardStyle = 'border-emerald-500 dark:border-emerald-400 ring-2 ring-emerald-500/10 dark:ring-emerald-500/10 bg-emerald-50/5 dark:bg-slate-900';
                        iconIndicator = <div className="w-5 h-5 rounded-full border-4 border-emerald-600 dark:border-emerald-400 bg-white dark:bg-slate-950 shrink-0" />;
                      }

                      return (
                        <button
                          key={idx}
                          role="radio"
                          aria-checked={idx === selectedIdx}
                          onClick={() => handleOptionSelect(idx)}
                          disabled={isAnswered}
                          className={`w-full flex items-center justify-between gap-4 p-4 rounded-2xl border-2 text-left font-sans text-sm sm:text-base font-medium transition-all duration-150 cursor-pointer group ${cardStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 p-1 px-2.5 rounded-md">
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span>{option}</span>
                          </div>
                          {iconIndicator}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question Footer & Rationales */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                  <AnimatePresence>
                    {isAnswered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mb-6 p-4 rounded-xl bg-orange-50/40 dark:bg-slate-950/40 border border-amber-500/15 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed"
                      >
                        <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-emerald-400 mb-1">
                          <Lightbulb className="w-4 h-4 text-amber-500" />
                          <span>Educational Rationale</span>
                        </div>
                        <p>{currentQuestion.explanation}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Actions buttons */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-xs text-slate-400 font-sans">
                      {isAnswered ? 'Select next to continue' : 'Pick the best path, then submit'}
                    </div>

                    {!isAnswered ? (
                      <button
                        onClick={handleSubmitAnswer}
                        disabled={selectedIdx === null}
                        className={`px-8 py-3.5 rounded-2xl font-sans font-bold text-sm uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-slate-200/80 dark:shadow-none ${selectedIdx === null
                            ? 'bg-slate-200 dark:bg-slate-850 text-slate-400 dark:text-slate-550 cursor-not-allowed shadow-none'
                            : 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-600'
                          }`}
                      >
                        Submit Answer
                      </button>
                    ) : (
                      <button
                        onClick={handleNext}
                        className="px-8 py-3.5 bg-slate-900 border border-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:border-emerald-500 dark:hover:bg-emerald-600 text-white font-sans font-bold text-sm uppercase tracking-wider rounded-2xl shadow-xl hover:shadow-2xl hover:translate-y-[-1px] active:translate-y-0 transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <span>{currentIdx < QUESTIONS.length - 1 ? 'Next Question' : 'View Results'}</span>
                        <ArrowRight className="w-4 h-4 text-white" />
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
                {/* SVG Confetti trigger (rendered for high accuracy score) */}
                {score >= 5 && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden h-72">
                    {confettiArray.map((_, i) => {
                      const randX = Math.random() * 100;
                      const randScale = Math.random() * 0.8 + 0.4;
                      const delay = Math.random() * 2;
                      const colors = [
                        'bg-blue-500', 'bg-emerald-500', 'bg-yellow-400', 'bg-rose-500', 'bg-indigo-500', 'bg-amber-500'
                      ];
                      const randColor = colors[Math.floor(Math.random() * colors.length)];
                      return (
                        <div
                          key={i}
                          className={`absolute ${randColor} rounded-full opacity-60 animate-bounce`}
                          style={{
                            left: `${randX}%`,
                            width: `${10 * randScale}px`,
                            height: `${10 * randScale}px`,
                            top: `${Math.random() * 30}%`,
                            animationDelay: `${delay}s`,
                            animationDuration: `${2 + Math.random() * 4}s`
                          }}
                        />
                      );
                    })}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Status Circle Gauge */}
                  <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="52"
                        className="stroke-slate-200 dark:stroke-slate-800"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="52"
                        className="stroke-emerald-600 dark:stroke-emerald-500"
                        strokeWidth="8"
                        strokeDasharray={2 * Math.PI * 52}
                        initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - score / QUESTIONS.length) }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        fill="transparent"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="text-center font-display">
                      <div className="text-3xl font-black text-slate-900 dark:text-white leading-none">{getPercentageScore()}%</div>
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-widest leading-none">
                        Correct
                      </div>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 rounded-full text-emerald-800 dark:text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{feedback.badge}</span>
                  </div>

                  {/* Explanations */}
                  <div className="space-y-2 max-w-xl mx-auto">
                    <h3 className={`font-display font-extrabold text-2xl ${feedback.color}`}>
                      {feedback.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feedback.message}
                    </p>
                  </div>

                  {/* Statistics board */}
                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                    <div className="text-center">
                      <div className="text-xl font-display font-black text-slate-900 dark:text-white">
                        {score} / {QUESTIONS.length}
                      </div>
                      <div className="font-sans text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Total Solved
                      </div>
                    </div>
                    <div className="text-center border-l border-slate-100 dark:border-slate-800">
                      <div className="text-xl font-display font-black text-emerald-500 dark:text-emerald-400 flex items-center justify-center gap-1">
                        <span>{score >= 5 ? 'High 🎉' : 'Review 📖'}</span>
                      </div>
                      <div className="font-sans text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        Performance Level
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button
                      onClick={restartQuiz}
                      className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-xl font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake Challenge</span>
                    </button>

                    <a
                      href="https://medrae.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-600 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-1px] active:translate-y-0 transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Join Full Medrae App Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
