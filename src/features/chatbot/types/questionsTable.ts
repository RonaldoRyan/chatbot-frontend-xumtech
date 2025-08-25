import { Question } from "@/features/chatbot/hooks/useQuestions";

export interface QuestionsTableProps {
  onSelect: (q: Question) => void;
}
