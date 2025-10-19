// --- Lấy các phần tử HTML ---
const button = document.getElementById('dontClick');
const countdownEl = document.getElementById('countdown');
const heartsContainer = document.getElementById('hearts');
const letter = document.getElementById('letter');
const message = document.getElementById('message');
const nextLetterBtn = document.getElementById('nextLetterBtn');
const secondLetter = document.getElementById('secondLetter');

// 📝 Viết nội dung thư đầu ở đây
message.innerText = "Nhớ học bài đấy nhé 💖\nYêu em nhiều lắm 💕";

// --- Khi bấm vào nút "Đừng bấm vào" ---
letter.classList.add('show-next');
button.addEventListener('click', () => {
  button.classList.add('hidden');
  countdownEl.classList.remove('hidden');

  let timeLeft = 5;
  countdownEl.textContent = timeLeft;

  const countdown = setInterval(() => {
    timeLeft--;
    countdownEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      countdownEl.classList.add('hidden');
      showHeartsAndLetter();
    }
  }, 1000);
});

// --- Hàm hiện hiệu ứng tim và thư đầu ---
function showHeartsAndLetter() {
  heartsContainer.classList.remove('hidden');

  // tạo 40 trái tim bay lên
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = 2 + Math.random() * 3 + 's';
    heartsContainer.appendChild(heart);
  }

  // sau 4 giây thì ẩn tim và hiện thư
  setTimeout(() => {
    heartsContainer.classList.add('hidden');
    letter.classList.remove('hidden');
    nextLetterBtn.classList.remove('hidden'); // hiện nút mở thư tiếp theo
  }, 4000);
}

// --- Khi bấm "Mở thêm thư nữa 💌" ---
nextLetterBtn.addEventListener('click', () => {
  letter.classList.add('hidden');
  showSecondLetter();
});

// --- Hiện lá thư thứ hai với hiệu ứng tim quay quanh ---
function showSecondLetter() {
  secondLetter.classList.remove('hidden');

  const heartContainer = document.querySelector('.heart-container');

  // xóa tim cũ (nếu có, tránh chồng thêm khi bấm lại)
  heartContainer.querySelectorAll('.small-heart').forEach(h => h.remove());

  // tạo 10 trái tim nhỏ quay quanh trái tim lớn
  for (let i = 0; i < 10; i++) {
    const smallHeart = document.createElement('div');
    smallHeart.classList.add('small-heart');
    smallHeart.innerHTML = '💖';
    smallHeart.style.animationDuration = 3 + Math.random() * 2 + 's';
    smallHeart.style.transform = `rotate(${i * 36}deg) translateX(80px)`;
    heartContainer.appendChild(smallHeart);
  }
}
