🤖 Chatbot Evaluativo - Frontend
Frontend del proyecto Chatbot Evaluativo desarrollado para XUMTECH. Permite a los usuarios interactuar con un chatbot que responde preguntas evaluativas usando búsqueda por similitud (embeddings), fallback a LLM (Cohere) y panel admin para gestión de preguntas.

🌐 Tecnologías utilizadas
Next.js – Framework de React para SSR y rutas
React – Librería de interfaces declarativas
Tailwind CSS – Estilado moderno y utilitario
TypeScript – Tipado estático robusto
React Hooks – Manejo de estado y lógica
Prisma (Backend) – ORM utilizado en el backend
API propia (local o remota) – Conexión HTTP al backend
📁 Estructura del proyecto

src/
├── app/                # Páginas y layout principal
├── components/         # Componentes UI reutilizables
│   ├── chat/           # ChatInput, ChatWindow, ChatSection
│   ├── info/           # InfoGrid y tarjetas informativas
│   └── layout/         # Header y Footer
├── features/chatbot/   # Lógica de dominio chatbot
│   ├── hooks/          # useChat personalizado
│   └── services/       # Consumo de API backend
├── types/              # Tipados globales
├── lib/                # Constantes y helpers
└── styles/             # Estilos globales


🚀 Instalación y ejecución local
Clona el repositorio:

Instala las dependencias:

Crea el archivo .env.local con la URL de tu backend:

Ejecuta la app:

🧠 Funcionalidades clave
UI modular y responsiva con Tailwind
Componentes desacoplados y escalables
Layout consistente en toda la app
Conexión dinámica al backend del chatbot
Evaluación y respuestas contextualizadas
Panel admin para gestión de preguntas sin responder (requiere login y rol admin)
📦 Scripts útiles
Comando	Descripción
npm run dev	Inicia la app en desarrollo
npm run build	Compila para producción
npm run start	Ejecuta la app compilada
npm run lint	Ejecuta el linter
🔐 Notas técnicas
El frontend consume el backend Node.js + Express + Prisma.
El backend debe estar corriendo localmente o publicado.
Para endpoints protegidos (admin), inicia sesión y usa el token JWT en las peticiones.
Las preguntas iniciales se insertan por migración y los embeddings se actualizan con un script en el backend.
🧑‍💻 Autor
Ronaldo Ryan – Fullstack Developer

📄 Licencia
 Proyecto de aprendizaje enfocado en integracion de LLMs 

