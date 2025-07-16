// Sends a message to the chatbot and returns the response messages.
// Envía un mensaje al chatbot y devuelve los mensajes de respuesta.
import { ChatMessage } from '@/features/chatbot/types';

export async function sendMessageToBot(message: string): Promise<ChatMessage[]> {
    const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) throw new Error("Failed to send message");

    return response.json();
}
