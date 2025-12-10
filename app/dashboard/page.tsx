"use client";
import React from 'react';
import { Plus, ShoppingBag, BarChart2, User } from 'lucide-react';

interface DashboardPageProps {}

// Datos simulados para las tarjetas de métricas
const metricCards = [
  { 
    title: "Saldo Total", 
    value: "$0.00", 
    footer: "Actualizado hoy", 
    color: "text-gray-800" 
  },
  { 
    title: "Productos", 
    value: "0", 
    footer: "En inventario", 
    color: "text-gray-800" 
  },
  { 
    title: "Pedidos", 
    value: "0", 
    footer: "Este mes", 
    color: "text-gray-800" 
  },
  { 
    title: "Usuarios Activos", 
    value: "0", 
    footer: "Administradores", 
    color: "text-gray-800" 
  },
];
const quickActions = [
  { 
    name: "Crear Pedido", 
    Icon: Plus, 
    color: "text-purple-600", 
    bgColor: "bg-purple-100", 
    action: () => console.log('Crear Pedido') 
  },
  { 
    name: "Registrar Compra", 
    Icon: ShoppingBag,
    color: "text-yellow-600", 
    bgColor: "bg-yellow-100", 
    action: () => console.log('Registrar Compra') 
  },
  { 
    name: "Ver Reportes", 
    Icon: BarChart2, 
    color: "text-blue-600", 
    bgColor: "bg-blue-100", 
    action: () => console.log('Ver Reportes') 
  },
];

const DashboardPage: React.FC<DashboardPageProps> = () => {
  return (
    <div className="grow p-4 sm:p-8 bg-gray-100 min-h-screen">
      
      <header className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          <p className="text-sm text-gray-500">Bienvenido al sistema administrativo</p>
        </div>
        
        <div className="bg-gray-200 p-2 rounded-lg text-right shadow-sm border border-gray-300">
          <p className="text-sm font-medium text-gray-800">alan@mail.com</p>
          <p className="text-xs text-gray-500">User</p>
        </div>
      </header>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Dashboard Principal</h1>
        <p className="text-gray-500 text-base">Resumen de tu negocio</p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {metricCards.map((card, index) => (
          <div 
            key={index} 
            className="bg-white p-5 rounded-lg shadow-md border border-gray-200"
          >
            <h3 className="text-base font-medium text-gray-500 mb-1">
              {card.title}
            </h3>
            <p className={`text-3xl font-bold ${card.color} mb-2`}>
              {card.value}
            </p>
            <p className="text-xs text-gray-500">
              {card.footer}
            </p>
          </div>
        ))}
      </section>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Acciones Rápidas</h2>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className="flex flex-col items-center justify-center p-8 rounded-lg shadow-sm bg-gray-200 hover:bg-gray-300 transition duration-150 ease-in-out cursor-pointer"
          >
            <action.Icon className={`h-10 w-10 ${action.color} mb-3`} />
                        
            <p className="text-lg font-medium text-gray-800">
              {action.name}
            </p>
          </button>
        ))}
      </section>

    </div>
  );
};

export default DashboardPage;