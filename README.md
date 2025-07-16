# 🤖 Chatbot Evaluativo - Frontend

Frontend del proyecto **Chatbot Evaluativo** desarrollado como parte de una prueba técnica para **XUMTECH**. Esta aplicación permite al usuario interactuar con un chatbot que responde de manera inteligente y contextualizada a preguntas evaluativas.

---

## 🌐 Tecnologías utilizadas

- **[Next.js](https://nextjs.org/)** – Framework de React para renderizado híbrido y rutas
- **[React](https://reactjs.org/)** – Librería de interfaces declarativas
- **[Tailwind CSS](https://tailwindcss.com/)** – Estilado moderno y utilitario
- **[TypeScript](https://www.typescriptlang.org/)** – Tipado estático robusto
- **[React Hooks](https://reactjs.org/docs/hooks-intro.html)** – Manejo de estado y lógica
- **[Prisma (Backend)](https://www.prisma.io/)** – ORM utilizado en el backend
- **API propia (local o remota)** – Conectado al backend del chatbot vía HTTP

---

## 📁 Estructura del proyecto

src/
├── app/ # Estructura principal de páginas y layout
├── components/ # Componentes reutilizables UI
│ ├── chat/ # ChatInput, ChatWindow, ChatSeccion
│ ├── info/ # InfoGrid con tarjetas informativas
│ └── layout/ # Header y Footer de la app
├── features/chatbot/ # Lógica del dominio chatbot
│ ├── hooks/ # Hook personalizado: useChat
│ └── services/ # Servicios para consumir API del backend
├── types/ # Tipados globales
├── lib/ # Constantes y helpers
└── styles/ # Estilos globales



---

## 🚀 Instalación y ejecución local

### 1. Clona el repositorio

```bash
git clone https://github.com/RonaldoRyan/chatbot-frontend.git
cd chatbot-frontend


Instala las dependencias

npm install

Crea un archivo .env.local si necesitas variables de entorno
Ejemplo:


NEXT_PUBLIC_API_URL=http://localhost:3001/api


Ejecuta la app

npm run dev

🧠 Funcionalidades clave
✅ UI modularizada y responsiva con Tailwind

✅ Componentes desacoplados para mantenimiento escalable

✅ Layout consistente en toda la app

✅ Conexión dinámica al backend del chatbot

✅ Evaluación continua y respuestas contextualizadas

📝 Notas técnicas
Este frontend consume el backend desarrollado en Node.js + Express + Prisma.

Se recomienda tener el backend corriendo localmente o publicar la API.

📦 Scripts útiles
Comando	Descripción
npm run dev	Inicia la app en modo desarrollo
npm run build	Compila para producción
npm run start	Ejecuta la app compilada
npm run lint	Ejecuta el linter

🧑‍💻 Autor
Ronaldo Ryan – Fullstack Developer


📄 Licencia
Este proyecto fue desarrollado como parte de una prueba técnica para XUMTECH. Uso personal, evaluativo o demostrativo solamente.