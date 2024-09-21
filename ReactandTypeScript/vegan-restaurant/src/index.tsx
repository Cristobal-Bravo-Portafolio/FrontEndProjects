// Importa React, la biblioteca principal utilizada para construir la interfaz de usuario
import React from 'react';

// Importa ReactDOM, que es responsable de renderizar la aplicación React en el DOM del navegador
import ReactDOM from 'react-dom/client';

// Importa el archivo de estilos globales (index.css) para aplicar estilos a toda la aplicación
import './index.css';

// Importa el componente App, que es el componente raíz de la aplicación y contiene toda la lógica de las páginas
import App from './App';


// Crea una raíz en el DOM donde la aplicación React será renderizada.
// Utiliza el método createRoot de ReactDOM y selecciona el elemento con id 'root'.
// Se asegura de que el tipo del elemento sea HTMLElement para mayor seguridad con TypeScript.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Aquí se usa TypeScript para asegurar que el elemento existe y es de tipo HTMLElement.
);

// Renderiza el componente App dentro de la raíz creada.
// React.StrictMode es un envoltorio que ayuda a identificar problemas potenciales en el código.
// Solo se activa en modo desarrollo, por lo que no afecta el rendimiento en producción.
root.render(
  <React.StrictMode>
    <App />  // Renderiza el componente principal (App) que contiene toda la estructura de la aplicación
  </React.StrictMode>
);


// Comentario opcional de la plantilla original:
// Si deseas medir el rendimiento de tu aplicación, puedes pasar una función para registrar los resultados
// (por ejemplo: reportWebVitals(console.log)) o enviar los resultados a un endpoint de análisis.
// Para más detalles: https://bit.ly/CRA-vitals
