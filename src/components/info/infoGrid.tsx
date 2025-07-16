function InfoCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group">
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 shadow-sm bg-gradient-to-br from-yellow-400 to-yellow-500">
            {icon}
          </div>
          <h3 className="text-lg font-medium text-black">{title}</h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function InfoGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <InfoCard
        title="Respuestas Inteligentes"
        description="Procesamiento avanzado para respuestas precisas y contextualmente relevantes en cada conversación."
        icon={
          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        }
      />
      <InfoCard
        title="Evaluación Continua"
        description="Análisis constante de interacciones para optimizar y personalizar la experiencia del usuario."
        icon={
          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        }
      />
    </div>
  );
}
