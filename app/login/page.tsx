"use client";
import React, { useState } from "react";

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Intentando iniciar sesión con:", { email, password });
    alert(
      `Intentando iniciar sesión:\nEmail: ${email}\nContraseña: ${password}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        Ingresar al Sistema Administrativo
      </h1>

      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg w-full max-w-md">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 text-left mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-left mb-1"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-[#c7003f] hover:bg-[#a5002f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition duration-150 ease-in-out cursor-pointer"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 text-sm text-center">
          <p className="text-gray-600 font-bold">
            ¿No tienes cuenta?{" "}
            <a
              href="/registro"
              className="font-bold text-[#c7003f] hover:text-[#a5002f]"
            >
              Solicitar registro
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
