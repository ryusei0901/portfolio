function updateTime() {
    const timeElem = document.getElementById("time");
    if (!timeElem) return;
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const d = now.getDate();
    const h = now.getHours().toString().padStart(2, "0");
    const min = now.getMinutes().toString().padStart(2, "0");
    const s = now.getSeconds().toString().padStart(2, "0");
    timeElem.textContent = `${y}年${m}月${d}日 ${h}:${min}:${s}`;
  }
  setInterval(updateTime, 1000);
  updateTime();
  
  function changeBackground() {
    const colors = ["#f9f9f9", "#dff9fb", "#f6e58d", "#ffbe76", "#fab1a0"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
    
  function scrollFade() {
    const elems = document.querySelectorAll(".fade-on-scroll");
    elems.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }
  
  window.addEventListener("scroll", scrollFade);
  window.addEventListener("load", scrollFade);
  
