"use client";
import React, { useState } from "react";

interface RegisterPageProps {}

const inputs = [
  {
    id: "nombre",
    label: "Nombre",
    type: "text",
    placeholder: "Tu nombre",
  },
  {
    id: "apellido",
    label: "Apellido",
    type: "text",
    placeholder: "Tu apellido",
  },
  { id: "email", label: "Email", type: "email", placeholder: "tu@email.com" },
  {
    id: "password",
    label: "Contraseña",
    type: "password",
    placeholder: "Ingresa tu contraseña",
  },
  {
    id: "confirmPassword",
    label: "Confirmar Contraseña",
    type: "password",
    placeholder: "Confirma tu contraseña",
  },
];

const RegisterPage: React.FC<RegisterPageProps> = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const stateSetters: Record<string, React.Dispatch<React.SetStateAction<string>>> = {
    nombre: setNombre,
    email: setEmail,
    password: setPassword,
    confirmPassword: setConfirmPassword,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    stateSetters[id](value);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    console.log("Intentando registrar:", { nombre, email, password });
    alert(
      `Registro exitoso (simulado) para:\nNombre: ${nombre}\nEmail: ${email}`
    );
  };

  const stateValues: Record<string, string> = {
    nombre,
    email,
    password,
    confirmPassword,
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-1">
          Registrar Superadmin
        </h1>
      </div>

      <div
        className="bg-white p-8 sm:p-10 rounded-xl shadow-lg w-full max-w-md"
        style={{ maxWidth: "500px" }}
      >
        <form onSubmit={handleRegister} className="space-y-6">
          {inputs.map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 text-left mb-1"
              >
                {label}
              </label>
              <input
                id={id}
                type={type}
                value={stateValues[id]}
                onChange={handleChange} 
                placeholder={placeholder}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 transition duration-150"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-[#c7003f] hover:bg-[#a5002f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition duration-150 ease-in-out cursor-pointer"
          >
            Crear Cuenta
          </button>
        </form>

        <div className="mt-6 text-sm text-center">
          <p className="text-gray-600 font-bold">
            ¿Ya tienes cuenta?{" "}
            <a
              href="/login"
              className="font-bold text-[#c7003f] hover:text-[#a5002f]"
            >
              Iniciar sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;