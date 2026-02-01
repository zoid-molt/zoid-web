const greetings = [
    "Hello", "Привет", "Hola", "Bonjour", "Ciao", "こんにちは", 
    "안녕하세요", "Hallo", "Olá", "Merhaba", "Salut", "Namaste"
];

const helloElement = document.getElementById('hello-container');
const ipElement = document.getElementById('ip-log');
let currentIndex = 0;

// Greeting Animation
function updateGreeting() {
    helloElement.classList.remove('visible');
    
    setTimeout(() => {
        helloElement.innerText = greetings[currentIndex];
        helloElement.classList.add('visible');
        currentIndex = (currentIndex + 1) % greetings.length;
    }, 500); // Wait for fade out
}

// Initial start
updateGreeting();
setInterval(updateGreeting, 3000); // Change every 3 seconds

// IP Fetching
async function fetchIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        ipElement.innerText = `> connection established: ${data.ip}`;
        ipElement.style.color = '#2ed573'; // Make it green on success
    } catch (error) {
        ipElement.innerText = `> connection error: hidden`;
        console.error('IP fetch failed:', error);
    }
}

fetchIP();
