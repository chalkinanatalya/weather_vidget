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

   } catch (error) {
      return {success: false, error};
   }
}

export const fetchForecast = async (city) => {
   try {
      const response =  await fetch(`${API_URL}forecast?q=${city}&appid=${API_KEY}&lang=en`);
      if(!response.ok) {
         throw new Error('request error')
      }
      const data = await response.json();

      return {success: true, data};

   } catch (error) {
      return {success: false, error};
   }
}

export const getCity = async () => {
   const url = 'https://ipapi.co/city/';

   try {
      const response = await fetch(url);
      if(!response.ok) {
         throw new Error('city request error');
      }

      const city = await response.text();
      return {success: true, city};

   } catch (error) {
      console.error(error);
      return {success: false, error};
   }

}

