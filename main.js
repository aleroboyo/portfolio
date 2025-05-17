document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth > 600) {
    let wand = document.querySelector('.wand_cursor')

    if (wand) {
      document.addEventListener('mousemove', (e) => {
        let x = e.clientX
        let y = e.clientY

        wand.style.left = `${x}px`
        wand.style.top = `${y}px`
      })
    }
  }
})

document.addEventListener("click", (e) => {
  const sparkle = document.createElement("div")
  sparkle.className = "sparkle"
  sparkle.style.left = `${e.pageX}px`
  sparkle.style.top = `${e.pageY}px`
  document.body.appendChild(sparkle)

  setTimeout(() => sparkle.remove(), 600)
})

document.addEventListener('DOMContentLoaded', () => {
  const flickerSound = document.getElementById('magical-sound')

  function playFlickerSound() {
    if (flickerSound) {
      flickerSound.currentTime = 1
      flickerSound.volume = 0.01
      flickerSound.play()
    }
  }

  const clickableElements = document.querySelectorAll('a, button')

  clickableElements.forEach(el => {
    el.addEventListener('click', playFlickerSound())
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const hpTheme = document.getElementById('hp-theme')
  const musicState = localStorage.getItem('hp-music')
  const savedTime = localStorage.getItem('hp-time')

  if (hpTheme && musicState === 'on') {
    hpTheme.volume = 0
    hpTheme.loop = true

    if (savedTime) {
      hpTheme.currentTime = parseFloat(savedTime);
    }

    const playPromise = hpTheme.play()
    if (playPromise !== undefined) {
      playPromise.then(() => {
        let vol = 0
        const fade = setInterval(() => {
          if (vol < 0.3) {
            vol += 0.001
            hpTheme.volume = vol
          } else {
            clearInterval(fade);
          }
        }, 60)
      }).catch(err => {
        console.warn('Autoplay failed:', err)
      });
    }

    setInterval(() => {
      localStorage.setItem('hp-time', hpTheme.currentTime)
    }, 1000)
  }
})

window.addEventListener('blur', () => {
  hpTheme.pause()
})

window.addEventListener('focus', () => {
  hpTheme.play()
})

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function setMoodBackground() {
    const hour = new Date().getHours()
    const body = document.body;

    if (hour >= 6 && hour < 12) {
        body.classList.add('morning')
    } else if (hour >= 12 && hour < 18) {
        body.classList.add('afternoon')
    } else {
        body.classList.add('night')
    }
}

window.onload = setMoodBackground;

function generateWalkingFootprint() {
    const foot = document.createElement("img");
    foot.src = "./styles/images/shoes-boot-simple-shoes-printing-sports-shoes-hiking-boot-footprint-blackandwhite-png-clipart-removebg-preview.png";
    foot.className = "footprint"
  

    const startX = Math.random() * window.innerWidth
    const startY = Math.random() * window.innerHeight
  
    foot.style.left = `${startX}px`;
    foot.style.top = `${startY}px`;

    const angle = Math.random() * 360;
    foot.style.setProperty("--angle", `${angle}deg`)
  
    document.body.appendChild(foot);

    requestAnimationFrame(() => {
      foot.style.left = `${startX + 30}px`;
      foot.style.top = `${startY + 30}px`;
    });
  

    setTimeout(() => {
      foot.remove();
    }, 3000);
  }
  
  setInterval(generateWalkingFootprint, 1000)

  const text = "I solemnly swear that I am up to no good..."
  const container = document.getElementById("fade-text")
  
  text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.opacity = 0;
    span.style.animation = `fadeInChar 0.05s ease ${i * 0.09}s forwards`;
    container.appendChild(span);
  })
  
  setTimeout(() => {
    document.getElementById("marauders-intro").id = "roll-away"
  
    setTimeout(() => {
      document.getElementById("main-site").style.display = "block"
    }, 1000)
  }, text.length * 90 + 1000);

  document.querySelector('#explore_bt').addEventListener('click', () => {
    const music = document.getElementById('hp-theme')
    if (music) {
      music.play().catch((e) => {
        console.warn('Music autoplay failed:', e)
      })
    }
  })

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

