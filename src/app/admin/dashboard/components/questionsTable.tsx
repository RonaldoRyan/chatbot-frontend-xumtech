"use client";

import { useQuestions } from "@/features/chatbot/hooks/useQuestions";
import { QuestionsTableProps } from "@/features/chatbot/types/questionsTable";
import { formatDate } from "@/features/chatbot/utils/dateUtils";
import { deleteUnanswered } from "@/features/chatbot/services/unansweredService";
import QuestionsTableLoading from "./questionsTableEmpty";
import QuestionsTableError from "./questionsTableError";
import QuestionsTableEmpty from "./questionsTableEmpty";


export default function QuestionsTable({ onSelect }: QuestionsTableProps) {
  const { questions, isLoading, error, refetch } = useQuestions();

  const handleDelete = async (id: number) => {
    if (!confirm("¿Seguro que deseas eliminar esta pregunta?")) return;
    const result = await deleteUnanswered(id);
    if (!result.success) {
      alert(`Error al eliminar: ${result.message}`);
      return;
    }
    refetch();
  };

  if (isLoading) {
    return <QuestionsTableLoading />;
  }

  if (error) {
    return <QuestionsTableError error={error} onRetry={refetch} />;
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100">
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-black">
          Preguntas Sin Responder
        </h2>
        <button
          onClick={refetch}
          className="text-sm bg-gray-200 hover:bg-gray-300 text-black px-3 py-1 rounded-lg"
        >
          🔄 Refrescar
        </button>
      </div>
      <div className="overflow-x-auto">
        {questions.length === 0 ? (
          <QuestionsTableEmpty />
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Pregunta
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Respuesta
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {questions.map((q) => (
                <tr key={q.id} className="text-black">
                  <td className="px-6 py-4">#{q.id}</td>
                  <td className="px-6 py-4">{q.question}</td>
                  <td className="px-6 py-4">{q.aiAnswer || "Anónimo"}</td>
                  <td className="px-6 py-4">{formatDate(q.createdAt)}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      onClick={() => onSelect(q)}
                      className="bg-gradient-to-r from-yellow-400 to-sky-400 text-black px-4 py-2 rounded-lg"
                    >
                      Responder
                    </button>
                    <button
                      onClick={() => handleDelete(q.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
