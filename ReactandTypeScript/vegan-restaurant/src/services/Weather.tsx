// Importa React y sus hooks useState y useEffect
import React, { useEffect, useState } from 'react';

// Importa una función de servicio que obtiene los datos del clima
import { getWeatherByCity } from '../services/weatherservice';

// Importa los estilos de Weather.module.css usando CSS modules para scoped styling
import styles from '../styles/Weather.module.css';

// Definición de la estructura de los datos del clima mediante TypeScript interfaces
interface WeatherData {
  main: { 
    temp: number;  // Temperatura principal
    humidity: number;  // Humedad
  };
  weather: [
    { 
      description: string;  // Descripción del clima, por ejemplo, "clear sky"
      icon: string;  // Icono representativo del estado del clima
    }
  ];
  name: string;  // Nombre de la ciudad
}

// Definición del componente principal `Weather` como una función de React
const Weather: React.FC = () => {
  // Declaración de estados usando useState:
  // - weather: Almacena los datos del clima
  // - loading: Indicador de si los datos están cargando
  // - error: Maneja errores en caso de que falle la llamada a la API
  // - showWeather: Controla si se debe mostrar u ocultar el contenedor del clima
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showWeather, setShowWeather] = useState(true); // Controla el toggle para mostrar u ocultar

  // Definición de la ciudad para la cual se busca el clima
  const city = 'Santiago';

  // Hook useEffect: Se ejecuta cuando el componente se monta (o cuando la ciudad cambia)
  // Aquí se hace la llamada a la API para obtener los datos del clima
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Llama al servicio que obtiene los datos de la API y actualiza el estado `weather`
        const data = await getWeatherByCity(city);
        setWeather(data);  // Si la llamada es exitosa, se actualiza el estado del clima
        setLoading(false);  // Se indica que ya no está cargando
      } catch (error) {
        // En caso de error, se captura el error y se actualiza el estado para mostrar un mensaje
        setError('No se pudo obtener el clima');
        setLoading(false);  // También se indica que ya no está cargando aunque haya fallado
      }
    };

    // Se invoca la función para obtener los datos del clima
    fetchWeather();
  }, [city]); // Dependencia: Solo se ejecuta si `city` cambia

  // Condicional que muestra un mensaje de carga mientras los datos no están listos
  if (loading) return <div>Cargando clima...</div>;

  // Si hay un error, se muestra el mensaje de error
  if (error) return <div>{error}</div>;

  // Retorna el contenido del componente:
  return (
    <div className={styles.weatherContainer}>
      {/* Botón que permite alternar entre mostrar y ocultar el contenedor del clima */}
      <button
        className={styles.weatherToggleButton}
        onClick={() => setShowWeather(!showWeather)}
      >
        {/* Texto del botón: muestra "-" si el contenedor está visible, "+" si está oculto */}
        {showWeather ? '-' : '+'}
      </button>

      {/* Renderiza los detalles del clima solo si `showWeather` es verdadero */}
      {showWeather && (
        <div className={styles.weatherDetails}>
          {/* Título con el nombre de la ciudad */}
          <h2 className={styles.weatherTitle}>Clima en {weather?.name}</h2>

          {/* Detalles del clima: temperatura, humedad y descripción */}
          <p>Temperatura: {weather?.main.temp}°C</p>
          <p>Humedad: {weather?.main.humidity}%</p>
          <p>Condiciones: {weather?.weather[0].description}</p>

          {/* Icono representativo del clima obtenido de OpenWeatherMap */}
          <img
            className={styles.weatherIcon}
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
            alt="Icono del clima"
          />
        </div>
      )}
    </div>
  );
};

// Exporta el componente para ser usado en otros archivos
export default Weather;


