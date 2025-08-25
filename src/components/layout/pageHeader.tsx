"use client";
import { useState } from 'react';

export default function PageHeader() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setError(''); // Limpiar errores al abrir
  };
  
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    setEmail('');
    setPassword('');
    setError('');
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Por favor completa todos los campos');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Debug: mostrar la URL que se está usando
      const apiUrl = `http://localhost:3001/api/auth/login`;
      console.log('🔗 Intentando conectar a:', apiUrl);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      // Debug: mostrar información de la respuesta
      console.log('📊 Status de respuesta:', response.status);
      console.log('📊 Headers de respuesta:', response.headers);

      // Verificar si la respuesta es JSON válido
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const textResponse = await response.text();
        console.error('❌ Respuesta no es JSON:', textResponse);
        setError(`Error del servidor: respuesta no válida (${response.status})`);
        return;
      }

      const data = await response.json();
      console.log('📥 Datos recibidos:', data);

      if (response.ok) {
        // Login exitoso
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        console.log('✅ Login exitoso');
        closeLoginModal();
        
        // Redirigir al dashboard admin
        window.location.href = '/admin/dashboard';
        
      } else {
        // Error del servidor
        setError(data.message || `Error del servidor (${response.status})`);
      }
    } catch (err) {
      console.error('❌ Error completo:', err);
      
      const error = err as Error;
      
      // Verificar si es un error de red
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setError('No se puede conectar al servidor. Verifica que esté corriendo.');
      } else if (error.name === 'SyntaxError' && error.message.includes('JSON')) {
        setError('El servidor devolvió una respuesta inválida. Revisa la consola para más detalles.');
      } else {
        setError(`Error de conexión: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo y título centrado */}
            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mb-3 shadow-md">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h1 className="text-2xl font-light text-black mb-2 tracking-wide">Chatbot Practica</h1>
              <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-sky-400 mx-auto rounded-full"></div>
            </div>
            
            {/* Botón de login */}
            <button
              onClick={openLoginModal}
              className="bg-gradient-to-r from-sky-400 to-sky-500 text-black font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Modal de Login */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeLoginModal}
          ></div>
          
          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300">
            {/* Header del Modal */}
            <div className="bg-gradient-to-r from-yellow-400 to-sky-400 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-black">Iniciar Sesión</h2>
                <button
                  onClick={closeLoginModal}
                  className="text-black hover:bg-black hover:bg-opacity-10 rounded-full p-2 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Contenido del Modal */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Mostrar error si existe */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-black font-medium"
                    placeholder="tu@email.com"
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-black font-medium"
                    placeholder="••••••••"
                    disabled={isLoading}
                    onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400" />
                    <span className="ml-2 text-sm text-gray-700">Recordarme</span>
                  </div>
                  <button className="text-sm text-sky-500 hover:text-sky-600 transition-colors">
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
                
                <button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-yellow-400 to-sky-400 text-black font-semibold py-3 rounded-lg transition-all duration-300 ${
                    isLoading 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:shadow-lg hover:-translate-y-0.5'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent mr-2"></div>
                      Iniciando...
                    </div>
                  ) : (
                    'Iniciar Sesión'
                  )}
                </button>
                
                <div className="text-center">
                  <span className="text-sm text-gray-600">¿No tienes cuenta? </span>
                  <button className="text-sm text-sky-500 hover:text-sky-600 font-medium transition-colors">
                    Regístrate aquí
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}