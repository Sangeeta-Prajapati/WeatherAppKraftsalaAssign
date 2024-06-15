const apiKey = "f255f01aabf4b3d5760fccfa86b98159";

const getWeather = async (city) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export default getWeather;
