# Weather App

A small client-side weather application that uses the OpenWeatherMap API to display current weather information for a selection of cities.

---

## Features

- Choose from a list of preset cities.
- Shows current temperature (°C), humidity, feels-like temperature, max/min temperatures, wind speed, and atmospheric pressure.
- Automatically loads weather for the default selected city (Kolkata in my case) on page load.

---

## Files

- `index.html` - The main HTML page with the UI.
- `style.css` - Styles for the UI.
- `app.js` - Main JavaScript that populates the city list and fetches weather data from OpenWeatherMap.
- `cities.js` - List of preset city names used to populate the select dropdown.

---

## Setup

This project is a static front-end application and requires no build step. To run locally:

1. Clone or download the repository.
2. Open `index.html` in your browser (or serve the folder with a static file server).

---

## OpenWeatherMap API Key

The app currently includes an API key directly in `app.js` for convenience. For production or public repositories, you should remove the key and replace it with your own API key:

1. Sign up at https://openweathermap.org/ to get a free API key.
2. Replace the `appid` value in `app.js` with your key, or modify the code to read the key from a safer place (server endpoint or environment variable).

In `app.js` the request URL is constructed as:

```
https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={YOUR_API_KEY}&units=metric
```

---

## Notes and improvements

- The current `cities.js` contains lowercase names; you may want to standardize capitalization in the UI.
- Consider storing the API key on a backend or using a serverless function to avoid exposing it in client-side code.
- Add error handling for failed fetch requests or invalid API responses.
- Add capitals and main cities of varius countries to expand the city list option.

## Author

This application is made by Akash Naskar

---
