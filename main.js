function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function setMoodBackground() {
    const hour = new Date().getHours();
    const body = document.body;

    if (hour >= 6 && hour < 12) {
        body.classList.add('morning');
    } else if (hour >= 12 && hour < 18) {
        body.classList.add('afternoon');
    } else {
        body.classList.add('night');
    }
}

window.onload = setMoodBackground;

const wand = document.getElementById("wand").addEventListener("mousemove", (e) => {
  wand.style.left = `${e.clientX}px`;
  wand.style.top = `${e.clientY}px`;
});

function generateWalkingFootprint() {
    const foot = document.createElement("img");
    foot.src = "./styles/images/shoes-boot-simple-shoes-printing-sports-shoes-hiking-boot-footprint-blackandwhite-png-clipart-removebg-preview.png";
    foot.className = "footprint";
  

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
  
    foot.style.left = `${startX}px`;
    foot.style.top = `${startY}px`;

    const angle = Math.random() * 360;
    foot.style.setProperty("--angle", `${angle}deg`);
  
    document.body.appendChild(foot);

    requestAnimationFrame(() => {
      foot.style.left = `${startX + 30}px`;
      foot.style.top = `${startY + 30}px`;
    });
  

    setTimeout(() => {
      foot.remove();
    }, 3000);
  }
  
  
  setInterval(generateWalkingFootprint, 1000);