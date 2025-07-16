export default function PageFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        <div className="flex justify-center items-center space-x-2 mb-3">
          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
          <div className="w-6 h-0.5 bg-gradient-to-r from-yellow-400 to-sky-400 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
        </div>
        <p className="text-gray-600 text-sm font-light">
          © 2025 Chatbot — Evaluacion XUM-TECH
        </p>
      </div>
    </footer>
  );
}
