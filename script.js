const timeSpan = document.getElementById("time");

// อัพเดทเวลาในหน้าเว็บทุกๆ 1 วิ ด้วยเวลาปัจจุบัน
setInterval(() => {
  timeSpan.textContent = new Date().toLocaleString();
}, 1000);

// โหลดเสียงเอฟเฟกต์ windows xp error ทุกครั้งที่คลิก (ใช้ลิงก์เต็ม)
document.addEventListener("click", () => {
  const audio = new Audio("/music/windows-xp-error.mp3");
  audio.play().catch(() => {});
});

// ถามชื่อเหยื่อผ่าน prompt เอาไปแสดงในข้อความในเกม hackingMessages
const victimName = prompt("กรอกชื่อจริงเพื่อเข้าสู่ระบบ:");

// ข้อความล้อเลียนที่จะแสดงทีละบรรทัด เหมือนกำลัง hack
const hackingMessages = [
  `[+] ยินดีต้อนรับคุณ ${victimName}`,  
  "[+] เชื่อมต่อกับ NSA...",            
  "[+] ดึง GPS ตำแหน่ง...",
  "[+] เจาะเข้าระบบ Router...",
  "[+] กำลังทำลายฮาร์ดดิสก์...",
  "[+] Upload สลิปค่าเทอมให้พ่อ...",  
  "[+] เชื่อมต่อกล้องหน้า...",
  "[!] พบผู้ใช้งานหน้าเหมือนพ่อ",    
  "[!] พ่อมึงตาย"                     
];

function startHack() {
  const output = document.getElementById("hacking");
  output.textContent = "";

  let i = 0;
  const interval = setInterval(() => {
    output.textContent += hackingMessages[i] + "\n";
    i++;
    if (i >= hackingMessages.length) {
      clearInterval(interval);
      setTimeout(() => {
        startEarthquake();
      }, 1000);
    }
  }, 800);
}

function startEarthquake() {
  let quake = 0;
  const quakeInterval = setInterval(() => {
    document.body.style.transform = `translate(${Math.random()*40-20}px, ${Math.random()*40-20}px) rotate(${Math.random()*10-5}deg)`;
    quake++;
    if (quake > 10) {
      clearInterval(quakeInterval);
      document.body.style.transform = "none";
      showRickroll();
    }
  }, 50);
}

function showRickroll() {
  document.title = "แม่กูไม่อยู่บ้าน";
  document.body.style.backgroundImage = "";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  document.body.innerHTML = `
     <audio autoplay>
       <source src="/music/troll-laugh.mp3" type="audio/mpeg">
     </audio>
     <video autoplay controls>
       <source src="/music/rickroll.mp4" type="video/mp4">
       คลิปไม่โหลดเว้ยเพื่อน ลองใหม่ดิ
     </video>
   `;

  setInterval(() => {
    const emojis = ["🤣", "😂", "🫠", "😈", "💀", "🤡", "🎵", "🎶"];
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "fixed";
    emoji.style.top = "0";
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.fontSize = `${Math.random() * 2 + 2}rem`;
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 9000);
  }, 300);
}
