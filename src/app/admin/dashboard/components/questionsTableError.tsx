import { QuestionsTableErrorProps } from "../../../../interfaces/Props";

export default function QuestionsTableError({ error, onRetry }: QuestionsTableErrorProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
      <p className="text-red-500">⚠ {error}</p>
      <button
        onClick={onRetry}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Reintentar
      </button>
    </div>
  );
}
