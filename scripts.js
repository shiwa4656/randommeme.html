// Function to fetch a random meme from the Imgflip API
async function getMeme() {
    try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        const memes = data.data.memes;
        
        // Get a random meme from the list
        const randomIndex = Math.floor(Math.random() * memes.length);
        const randomMeme = memes[randomIndex];

        // Update the src attribute of the image with the meme URL
        const memeImage = document.getElementById('meme');
        memeImage.src = randomMeme.url;
        memeImage.alt = randomMeme.name;
    } catch (error) {
        console.error('Error fetching meme:', error);
    }
}


setInterval(getMeme, 5000);
function white(){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black'; 
    document.querySelector('h1').style.color = 'black';
}
function black(){
    document.body.style.backgroundColor = "black";
    document.querySelector('h1').style.color = 'white';
   
}
function blue(){
    document.body.style.backgroundColor = "blue";
    document.querySelector('h1').style.color = 'white';
}

