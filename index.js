// Fetch nature image, set as background, use default on error
try{ 
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
const data = await res.json()
        // Set the background image of the body element to the fetched image
        document.body.style.backgroundImage = `url(${data.urls.full})` 
          // Display the image author's name in the element with ID "author"
        document.getElementById("author").textContent = `By: ${data.user.name}` 
}
  catch(err) { 
        //Add default background image 
   document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
         // Set fallback author name
   document.getElementById("author").textContent = `By: Dodi Achmad`

 }
      
    /**
 * Challenge: Update the code below and in the 
 * getCurrentLocation callback to use try...catch
 */  
 
  
  try{   const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin")  
        //Check if response is ok, throw error if not
          if (!res.ok) {
              throw Error("Something went wrong")
          }
          const data = await res.json() // Parse/convert response to JSON
        // Display the fetched data in the element with ID "price".  
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
   
        `
     // Assuming an exchange rate of 1 USD = 18 ZAR
     const usdToZar = 18;
// Update crypto section with current, high, and low prices in Zar
        document.getElementById("crypto").innerHTML += ` 
        <p>🎯:     R${data.market_data.current_price.usd * usdToZar}</p>
        <p>👆: R${data.market_data.high_24h.usd *usdToZar}</p>
        <p>👇: R${data.market_data.low_24h.usd *usdToZar}</p>
    `
    }
    catch(err) {console.error(err)} // Log any errors

    function getCurrentTime() { 
        // Get current date and time
        const date = new Date()
         // Update time element with formatted time
        document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "medium"})
    }
    
    // Update the time every second
    setInterval(getCurrentTime, 1000)

    // Fetch weather data by location, handle error
    navigator.geolocation.getCurrentPosition(async position => {
        try {
            const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`) // 'metric' for Celsius
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            const data = await res.json()
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}ºC</p>
                <p class="weather-city">${data.name}</p>
            `
        } catch (err) {
            console.error(err)
        }
    });


