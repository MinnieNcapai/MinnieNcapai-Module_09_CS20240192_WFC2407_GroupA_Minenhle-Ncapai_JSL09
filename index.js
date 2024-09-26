fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json()) // Fetch and parse random nature photo from Unsplash API
    .then(data => {
        // Set the background image of the body element to the fetched image
        document.body.style.backgroundImage = `url(${data.urls.full})` 
          // Display the image author's name in the element with ID "author"
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })

