export interface Question {
    question: string;
    options?: string[];
    correctAnswer: string;
    type: 'open' | 'multiple';
}