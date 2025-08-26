import { Question } from "@/interfaces/Questions";

export interface QuestionsTableProps {
  onSelect: (q: Question) => void;
}
