export interface Question {
  id: number;
  topic: 'Medical-Surgical Nursing' | 'Community Health Nursing' | 'Midwifery' | 'Mental Health Nursing' | 'Pharmacology' | 'Anatomy and Physiology' | 'Fundamentals of Nursing';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedOptionIndex: number | null;
  isAnswered: boolean;
  score: number;
  showResults: boolean;
  userAnswers: {
    questionId: number;
    selectedOption: number;
    isCorrect: boolean;
  }[];
}
