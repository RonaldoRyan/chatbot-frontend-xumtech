"use client"; 
import { useState } from "react"; // Import React's useState hook / Importa el hook useState de React

interface Props {
    onSend: (text: string) => void; // Function to handle sending messages / Función para manejar el envío de mensajes
}

export default function ChatInput({ onSend }: Props) {
    const [text, setText] = useState(""); // State to store the input text / Estado para almacenar el texto ingresado

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevents default form submission behavior / Previene el comportamiento predeterminado del formulario
        onSend(text); // Calls the onSend function with the input text / Llama a la función onSend con el texto ingresado
        setText(""); // Clears the input field / Limpia el campo de entrada
    };

    return (
        <form onSubmit={handleSubmit} className="flex p-2 border-t">
            <input
                value={text} // Binds the input value to the state / Vincula el valor del input al estado
                onChange={e => setText(e.target.value)} // Updates the state on input change /Actualiza el estado al cambiar el input
                placeholder="Escribe tu mensaje..." // Placeholder text for the input / Texto de marcador para el input
                className="flex-1 border p-2 rounded mr-2 text-black"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Enviar
            </button>
        </form>
    );
}
