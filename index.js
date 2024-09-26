fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json()) // Fetch and parse random nature photo from Unsplash API
    .then(data => {
        // Set the background image of the body element to the fetched image
        document.body.style.backgroundImage = `url(${data.urls.full})` 
          // Display the image author's name in the element with ID "author"
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })

   .catch(err => { 
        //Add default background image 
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
         // Set fallback author name
        document.getElementById("author").textContent = `By: Dodi Achmad`
      }) 
  
      fetch("https://api.coingecko.com/api/v3/coins/dogecoin")  
      .then(res => {
        //Check if response is ok, throw error if not
          if (!res.ok) {
              throw Error("Something went wrong")
          }
          return res.json() // Parse/convert response to JSON
      })

