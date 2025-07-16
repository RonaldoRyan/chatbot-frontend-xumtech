"use client"; 
import { useChat } from "@/features/chatbot/hooks/useChat"; // Custom hook for chat functionality / Hook personalizado para la funcionalidad de chat
import ChatInput from "@/components/chat/chatInput"; // Component for input field / Componente para el campo de entrada

export default function ChatWindow() {
    const { messages, sendMessage } = useChat(); // Extracts messages and sendMessage function / Extrae los mensajes y la función sendMessage

    return (
        <div className="max-w-md mx-auto mt-6 border border-gray-300 rounded-lg shadow h-[500px] flex flex-col bg-white">
            {/* Chat messages container / Contenedor de mensajes de chat */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {messages.map((msg, index) => (
                    <div
                        key={index} // Unique key for each message / Clave única para cada mensaje
                        className={`text-sm p-2 rounded-md max-w-[75%] break-words ${
                            msg.sender === "user"
                                ? "bg-blue-100 text-blue-900 self-end" // User message styling / Estilo de mensaje del usuario
                                : "bg-gray-200 text-gray-800 self-start" // Bot message styling / Estilo de mensaje del bot
                        }`}
                    >
                        {msg.content} {/* Message content / Contenido del mensaje */}
                    </div>
                ))}
            </div>
            <ChatInput onSend={sendMessage} /> {/* Input component for sending messages / Componente de entrada para enviar mensajes */}
        </div>
    );
}
