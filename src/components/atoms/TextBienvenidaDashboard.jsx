import React from "react";

const TextBienvenidaDashboard = () => {
  return (
    <a
      href="#"
      className="block p-6 max-w-sm bg-PrimarioColor2 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl text-center font-Roboto tracking-tight text-gray-900 dark:text-white">
        Bienvenido/a a Okhlos
      </h5>
      <p className="font-GilroyLight text-center text-gray-700 dark:text-gray-400">
        Para conseguir tus objetivos profesionales y personales en el mundo
        tech.
      </p>
      <p className="font-GilroyLight text-xs text-center text-gray-700 dark:text-gray-400">
        Aqui podras tener control de las mentorias y tener acceso a informes
        detallados de mentores y estudiantes.
      </p>
    </a>
  );
};

export default TextBienvenidaDashboard;
