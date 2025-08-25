"use client";
import { useState, useEffect, useCallback } from "react";

export interface Question {
  id: number;
  question: string;
  aiAnswer: string;
  createdAt: string;

}

export const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchUnansweredQuestions = useCallback(async () => {
    setIsLoading(true);
    setError(""); // limpio errores previos

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found");
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/unanswered`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Error al cargar las preguntas");
      }

      const data: Question[] = await response.json();
      setQuestions(data);
    } catch (err: any) {
      setError(err.message || "Error de conexión");
      console.error("Error en fetchUnansweredQuestions:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 🔄 carga inicial al montar
  useEffect(() => {
    fetchUnansweredQuestions();
  }, [fetchUnansweredQuestions]);

  return { questions, isLoading, error, refetch: fetchUnansweredQuestions };
};
