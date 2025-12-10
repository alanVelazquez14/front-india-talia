"use client";
import React, { useState } from "react";
import {
  BarChart4,
  ArrowLeft,
  DollarSign,
  Package,
  Folder,
  Tags,
  Wallet,
  FileText,
  Truck,
  ShoppingCart,
  TrendingUp,
  Clock,
  Users,
  Menu,
  X,
  User,
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  Icon: React.ElementType;
  path: string;
}

const menuItems: MenuItem[] = [
  { id: "dashboard", name: "Dashboard", Icon: BarChart4, path: "/dashboard" },
  { id: "caja", name: "Caja", Icon: DollarSign, path: "/caja" },
  { id: "stock", name: "Stock", Icon: Package, path: "/stock" },
  { id: "productos", name: "Productos", Icon: Folder, path: "/productos" },
  { id: "categorias", name: "Categorías", Icon: Tags, path: "/categorias" },
  { id: "marcas", name: "Marcas", Icon: Wallet, path: "/marcas" },
  {
    id: "precios",
    name: "Reglas de Precios",
    Icon: TrendingUp,
    path: "/precios",
  },
  { id: "pedidos", name: "Pedidos", Icon: FileText, path: "/pedidos" },
  { id: "proveedores", name: "Proveedores", Icon: Truck, path: "/proveedores" },
  { id: "compras", name: "Compras", Icon: ShoppingCart, path: "/compras" },
  { id: "reportes", name: "Reportes", Icon: BarChart4, path: "/reportes" },
  {
    id: "historial",
    name: "Historial Precios",
    Icon: Clock,
    path: "/historial-precios",
  },
  {
    id: "administracion",
    name: "Administración",
    Icon: Users,
    path: "/administracion",
  },
];

interface SidebarProps {
  activeItem?: string;
  onLogout?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeItem: initialActiveItem = "dashboard",
  onLogout,
}) => {
  const [activeItem, setActiveItem] = useState(initialActiveItem);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const baseClasses =
    "flex items-center p-3 rounded-lg text-sm font-medium transition duration-150 cursor-pointer";
  const activeClasses = "bg-[#c7003f] text-white shadow-md hover:bg-[#a5002f]";
  const inactiveClasses = "text-gray-400 hover:bg-gray-700 hover:text-white";

  return (
    <>
      {!isSidebarOpen && (
        <button
          className="fixed top-4 left-4 z-40 lg:hidden p-2 rounded-full bg-gray-800 text-white shadow-lg"
          onClick={toggleSidebar}
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </button>
      )}

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`
          flex flex-col h-screen w-64 bg-gray-800 text-white shadow-xl 
          fixed top-0 left-0 z-30 transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:h-auto 
        `}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold text-white ml-2">Menú</h1>

          <X
            className="h-6 w-6 text-white cursor-pointer hover:text-red-500 lg:hidden"
            onClick={toggleSidebar}
          />
        </div>

        <nav className="overflow-y-auto">
          <ul className="space-y-1 p-2">
            {menuItems.map(({ id, name, Icon, path }) => {
              const isActive = id === activeItem;
              const itemClasses = isActive ? activeClasses : inactiveClasses;
              const iconColor = isActive ? "text-white" : "text-red-400";

              return (
                <li
                  key={id}
                  onClick={() => {
                    setActiveItem(id);
                    if (isSidebarOpen) toggleSidebar();
                  }}
                >
                  <a
                    href={path}
                    className={`${baseClasses} ${itemClasses} w-full`}
                  >
                    <Icon
                      className={`h-6 w-6 mr-3 ${iconColor}`}
                      style={
                        id === "dashboard"
                          ? { color: "white", fill: "pink" }
                          : undefined
                      }
                    />
                    <span>{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={onLogout}
            className="w-full flex items-center p-3 rounded-lg text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 transition duration-150 cursor-pointer"
          >
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-800 mr-3">
              <User className="h-5 w-5 text-red-500" />
            </div>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;