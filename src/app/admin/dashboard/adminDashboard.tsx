"use client";
import { useState } from "react";
import { useQuestions, Question } from "@/features/chatbot/hooks/useQuestions";
import QuestionsTable from "@/app/admin/dashboard/components/questionsTable";
import AnswerModal from "@/app/admin/dashboard/components/answerModal";
import Stats from "@/app/admin/dashboard/components/stats";

export default function AdminDashboard() {
  const { questions, isLoading, error } = useQuestions();
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  // Calcular métricas para Stats
  const total = questions.length;
  const unanswered = questions.filter(q => !q.aiAnswer || q.aiAnswer.trim() === "").length;
  // Suponiendo que answeredToday es la cantidad de preguntas respondidas hoy
  const today = new Date().toISOString().slice(0, 10);
  const answeredToday = questions.filter(q => q.aiAnswer && q.createdAt.slice(0, 10) === today).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-black">Dashboard Admin</h1>
            <p className="text-gray-600">Gestión de preguntas sin responder</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600"
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Stats total={total} unanswered={unanswered} answeredToday={answeredToday} />
        {isLoading ? (
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-yellow-400 border-t-transparent"></div>
            <span className="ml-4 text-black font-medium">Cargando preguntas...</span>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        ) : (
          <QuestionsTable onSelect={setSelectedQuestion} />
        )}
      </main>

      {/* Modal */}
      {selectedQuestion && (
        <AnswerModal
          question={selectedQuestion}
          onClose={() => setSelectedQuestion(null)}
          onSubmit={(id, answer) => {
            console.log(`Answer submitted for question ${id}: ${answer}`);
            setSelectedQuestion(null);
          }}
        />
      )}
    </div>
  );
}
