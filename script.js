document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const movieList = document.getElementById('movieList');
    const promptText = document.querySelector('.container h1');
    const cuteImage = document.querySelector('.cute-image');
    const showImageButton = document.getElementById('showImageButton'); // Add this line


    function goToIloveyouPage() {
        window.location.href = 'pressme.html';
    }

    yesBtn.addEventListener('click', function() {
        // Hide the 'Yes' and 'No' buttons
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
    
        // Hide the prompt and cute image when 'Yes' is clicked
        promptText.style.display = 'none';
        cuteImage.style.display = 'none';
    
        // Change the prompt text to 'Choose a movie'
        promptText.textContent = 'Choose a movie';
    
        // Show the list of movies
        movieList.style.display = 'block';
    
        // Show IEEE container
        const ieeeContainer = document.getElementById('ieeeContainer');
        ieeeContainer.style.display = 'block';
    
        // Create snowflakes
        createSnowfall();
    });
    

    noBtn.addEventListener('mouseover', function() {
        // Move the 'No' button randomly on mouseover
        const randomX = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const randomY = Math.random() * (window.innerHeight - noBtn.clientHeight);

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });

    function createSnowfall() {
        const body = document.body;

        for (let i = 0; i < 30; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
            body.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, 6000); // Increase the duration to keep snowflakes continuously visible
        }
    }

    const iloveyouButton = document.getElementById('iloveyouBtn');
    iloveyouButton.addEventListener('click', goToIloveyouPage);

    showImageButton.addEventListener('click', function() {
        console.log('Button clicked');
        // Show the hidden image when the "Show Image" button is clicked
        const hiddenImage = document.getElementById('hiddenImage');
        hiddenImage.style.display = 'block';
    });
});
