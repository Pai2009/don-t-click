const timeSpan = document.getElementById("time");

// อัพเดทเวลาในหน้าเว็บทุกๆ 1 วิ ด้วยเวลาปัจจุบัน
setInterval(() => {
  timeSpan.textContent = new Date().toLocaleString();
}, 1000);

// โหลดเสียงเอฟเฟกต์ windows xp error เล่นทันที (ถ้าเล่นไม่ได้ก็ไม่แสดง error)
const audio = new Audio("https://pai2009.github.io/don-t-click/music/windows-xp-error.mp3");
audio.play().catch(() => {});

// ถามชื่อเหยื่อผ่าน prompt เอาไปแสดงในข้อความในเกม hackingMessages
const victimName = prompt("กรอกชื่อจริงเพื่อเข้าสู่ระบบ:");

// ข้อความล้อเลียนที่จะแสดงทีละบรรทัด เหมือนกำลัง hack
const hackingMessages = [
  `[+] ยินดีต้อนรับคุณ ${victimName}`,  // แสดงชื่อเหยื่อ
  "[+] เชื่อมต่อกับ NSA...",            
  "[+] ดึง GPS ตำแหน่ง...",
  "[+] เจาะเข้าระบบ Router...",
  "[+] กำลังทำลายฮาร์ดดิสก์...",
  "[+] Upload สลิปค่าเทอมให้พ่อ...",  
  "[+] เชื่อมต่อกล้องหน้า...",
  "[!] พบผู้ใช้งานหน้าเหมือนพ่อ",    
  "[!] พ่อมึงตาย"                     
];

// Function hackingMessages จะแสดงข้อความ hack ทีละบรรทัด
function startHack() {
  const output = document.getElementById("hacking"); // เอาพื้นที่แสดงผลมาเก็บไว้
  output.textContent = ""; // เคลียร์ข้อความเก่า

  let i = 0;
  // ตั้ง interval ให้แสดงข้อความทีละบรรทัดทุกๆ 0.8 วินาที
  const interval = setInterval(() => {
    output.textContent += hackingMessages[i] + "\n"; // ต่อข้อความเพิ่มทีละบรรทัด
    i++;

    // ถ้าแสดงครบทุกข้อความแล้ว ให้หยุด interval และเริ่มสั่น
    if (i >= hackingMessages.length) {
      clearInterval(interval);
      setTimeout(() => {
        startEarthquake();
      }, 1000); // รอ 1 วิ ก่อนจะสั่น
    }
  }, 800);
}

// Function ทำสั่น โดยสุ่มเขย่าเว็บไปมา สั่นๆ
function startEarthquake() {
  let quake = 0;
  const quakeInterval = setInterval(() => {
    // สุ่มแปลกตำแหน่งของหน้าเว็บ และหมุนแบบสุ่ม
    document.body.style.transform = `translate(${Math.random()*40-20}px, ${Math.random()*40-20}px) rotate(${Math.random()*10-5}deg)`;
    quake++;

    // สั่น 10 ครั้งแล้วหยุดคืนค่า style ให้เหมือนเดิมแล้วโชว์ Rickroll
    if (quake > 10) {
      clearInterval(quakeInterval);
      document.body.style.transform = "none";
      showRickroll();
    }
  }, 50);
}

// Function เปลี่ยนหน้าเว็บเป็นภาพและคลิป Rickroll พร้อมเสียงหัวเราะ
function showRickroll() {
  document.title = "แม่กูไม่อยู่บ้าน"; // เปลี่ยนชื่อแท็บเว็บ

  // เปลี่ยนพื้นหลังเป็นรูป Meme
  document.body.style.backgroundImage = "url('')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  // แทนที่เนื้อหาทั้งหมดใน body ด้วย audio + vdo Rickroll
  document.body.innerHTML = `
    <audio autoplay>
      <source src="https://pai2009.github.io/don-t-click/music/troll-laugh.mp3" type="audio/mpeg">
    </audio>
    <video autoplay controls>
      <source src="https://pai2009.github.io/don-t-click/music/rickroll.mp4" type="video/mp4">
      คลิปไม่โหลดเว้ยเพื่อน ลองใหม่ดิ
    </video>
  `;

  // ทุก 0.3 วิ สุ่มสร้าง emoji ตกลงมาจากบนจอ แล้วหายไปหลัง 9 วิ
  setInterval(() => {
    const emojis = ["🤣", "😂", "🫠", "😈", "💀", "🤡", "🎵", "🎶"];
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${Math.random() * 100}vw`; // กระจายซ้ายขวาเต็มจอ
    emoji.style.fontSize = `${Math.random() * 2 + 2}rem`; // ขนาดสุ่ม
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 9000); // ลบ emoji หลัง 9 วิ
  }, 300);
}

// เวลา user คลิกหน้าเว็บ จะมีเสียง Windows XP error ดังทุกครั้ง
document.addEventListener("click", () => {
  const audio = new Audio("/music/windows-xp-error.mp3");
  audio.play().catch(() => {});
});
