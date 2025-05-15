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


  const text = "I solemnly swear that I am up to no good...";
  const container = document.getElementById("fade-text");
  
  text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.opacity = 0;
    span.style.animation = `fadeInChar 0.05s ease ${i * 0.09}s forwards`;
    container.appendChild(span);
  });
  
  setTimeout(() => {
    document.getElementById("marauders-intro").id = "roll-away";
  
    setTimeout(() => {
      document.getElementById("roll-away").style.display = "none";
      document.getElementById("main-site").style.display = "block";
    }, 1000); // wait for roll animation to finish
  }, text.length * 90 + 1000);
