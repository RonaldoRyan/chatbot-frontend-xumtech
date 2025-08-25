"use client";
import { StatsProps } from "./interfaces/StatsProps";


export default function Stats({ total, unanswered, answeredToday }: StatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <p className="text-gray-600 text-sm font-medium">Total Preguntas</p>
        <p className="text-3xl font-bold text-black">{total}</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <p className="text-gray-600 text-sm font-medium">Sin Responder</p>
        <p className="text-3xl font-bold text-black">{unanswered}</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <p className="text-gray-600 text-sm font-medium">Respuestas Hoy</p>
        <p className="text-3xl font-bold text-black">{answeredToday}</p>
      </div>
    </div>
  );
}
