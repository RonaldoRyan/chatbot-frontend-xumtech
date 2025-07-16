import ChatWindow from "./chatWindow";

export default function ChatSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="h-0.5 bg-gradient-to-r from-yellow-400 via-sky-400 to-yellow-400"></div>
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
            <h2 className="text-lg font-medium text-black">Conversación</h2>
          </div>
          <div className="flex space-x-1.5">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <ChatWindow />
      </div>
    </div>
  );
}
