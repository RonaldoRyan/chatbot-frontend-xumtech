import { useState } from "react";
import { API_BASE_URL, API_KEY } from "@/lib/constants";

// Interface for chat messages (user or bot) /  Interfaz para los mensajes del chat (usuario o bot)

interface Message {
    sender: "user" | "bot";
    content: string;
}

// Custom hook to manage chat functionality / Hook personalizado para manejar la funcionalidad del chat
export function useChat() {
    const [messages, setMessages] = useState<Message[]>([]);

    // Function to send a message and handle bot response / Función para enviar un mensaje y manejar la respuesta del bot
    const sendMessage = async (text: string) => {
        if (!text.trim()) return;

        const newMessage: Message = { sender: "user", content: text };
        setMessages(prev => [...prev, newMessage]);

        try {
            const res = await fetch(`${API_BASE_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": API_KEY,
                },
                body: JSON.stringify({ message: text }),
            });

            const data = await res.json();
            setMessages(prev => [...prev, { sender: "bot", content: data.response }]);
        } catch (error) {
            setMessages(prev => [...prev, { sender: "bot", content: "Error del servidor." }]);
        }
    };

    // Return chat messages and sendMessage function / Retorna los mensajes del chat y la función sendMessage
    return { messages, sendMessage };
}
