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
    }, 1000);
  }, text.length * 90 + 1000);

  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.project_content').forEach(container => {
      observer.observe(container);
    });
  });

  document.querySelectorAll('.parch').forEach(container => {
    observer.observe(container);
  });

  let wand = document.querySelector('.wand_cursor')

  document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('mousemove', (e) => {
    let x = e.clientX
    let y = e.clientY

    wand.style.left = `${x}px`
    wand.style.top = `${y}px`

  })
})

  document.addEventListener("click", (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);
  
    setTimeout(() => sparkle.remove(), 600);
  });