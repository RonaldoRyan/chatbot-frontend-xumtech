"use client";
import { Question } from '@/features/chatbot/hooks/useQuestions';


interface Props {
  question: Question | null;
  onClose: () => void;
  onSubmit: (id: number, answer: string) => void;
}

export default function AnswerModal({ question, onClose, onSubmit }: Props) {
  if (!question) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6">
        <h3 className="text-xl font-semibold mb-4 text-black">Responder #{question.id}</h3>
        <p className="mb-4 text-black">{question.question}</p>
        <textarea className="w-full border p-3 rounded-lg mb-4 text-black" rows={5} /> 
        <div className="flex space-x-3">
          <button
            onClick={() => onSubmit(question.id, "Mi respuesta")}
            className="flex-1 bg-gradient-to-r from-yellow-400 to-sky-400 text-black font-semibold py-2 rounded-lg"
          >
            Enviar
          </button>
          <button onClick={onClose} className="px-6 py-2 border rounded-lg text-black">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}