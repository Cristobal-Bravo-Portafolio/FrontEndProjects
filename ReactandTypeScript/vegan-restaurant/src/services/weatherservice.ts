// Importa Axios, una biblioteca que simplifica las solicitudes HTTP (GET, POST, etc.) y el manejo de respuestas.
import axios from 'axios';

// **Constantes que definen las credenciales y la URL de la API:**
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
// La clave API se almacena en variables de entorno para mayor seguridad y evitar exposición pública en el código.
// Uso de variables de entorno es una buena práctica de seguridad.

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
// URL base de la API de OpenWeather. Esta URL es usada en todas las solicitudes para obtener información del clima.

// **Función principal para obtener el clima de una ciudad usando la API de OpenWeather:**
export const getWeatherByCity = async (city: string) => {
  // Función asíncrona que recibe el nombre de una ciudad (ej: "Santiago") como argumento.
  // Exportamos la función para que esté disponible en otros módulos del proyecto.

  try {
    // Hacemos una solicitud GET a la API de OpenWeather usando Axios
    const response = await axios.get(`${BASE_URL}/weather`, {
      // Se utiliza el método `get` de Axios, pasando como argumento la URL completa junto con los parámetros.
      params: {
        q: city,          // Parámetro 'q' representa el nombre de la ciudad para la consulta.
        appid: API_KEY,   // Parámetro 'appid' representa la clave API para autenticación.
        units: 'metric',  // Especifica que las unidades deben estar en sistema métrico (temperaturas en °C).
      },
    });

    // Retorna los datos de la respuesta de la API si la solicitud fue exitosa.
    return response.data; 
    // `response.data` contiene la respuesta JSON de OpenWeather con la información del clima solicitada.
  } catch (error) {
    // Si ocurre un error en la solicitud, lo capturamos aquí:
    console.error('Error fetching weather data:', error);
    // El error se imprime en la consola para depuración, lo cual es útil en desarrollo.
    
    // Re-lanza el error para que el código que llama a esta función también pueda manejarlo si es necesario.
    throw error; 
  }
};


