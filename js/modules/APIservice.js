const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '630397c7f3e2de7ff6bd8ec91c5ee5bb';

export const fetchWeather = async (city) => {
   try {
      const response =  await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=en`);
      if(!response.ok) {
         throw new Error('request error')
      }
      const data = await response.json();

      return {success: true, data};

   } catch {
      return {success: false, data};
   }
}