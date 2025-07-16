/**
 * Represents a chat message exchanged between a user and a bot.
 * 
 * Representa un mensaje de chat intercambiado entre un usuario y un bot.
 * 
 */
export interface ChatMessage {
  sender: "user" | "bot";
  content: string;
  timestamp: string;
}
export interface ChatResponse {
  response: string;
  messages: ChatMessage[];
}
export interface ChatError {
  error: string;
}
