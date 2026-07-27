const panels = {
  room: {
    title: "은자월드",
    body: `
      <p>좋아하는 영화와 공연, 그림과 일상을 모아둔 작은 미니홈피입니다. 💗</p>
      <p class="hint">방 안의 포스터와 소품을 하나씩 눌러보세요.</p>
    `
  },
  blog: {
    title: "은자의 블로그",
    body: `
      <p>영화, 공연, 전시와 평범한 하루까지 천천히 기록하고 있어요.</p>
      <a class="go-link" href="https://blog.naver.com/eum_ja" target="_blank" rel="noopener noreferrer">
        네이버 블로그 놀러가기
      </a>
    `
  },
  concert: {
    title: "공연 기록",
    body: `
      <p>노래와 무대가 남긴 기분을 공연 후기 안에 담았습니다. 🎤</p>
      <a class="go-link" href="https://blog.naver.com/eum_ja/224359110552" target="_blank" rel="noopener noreferrer">
        공연 후기 보러가기
      </a>
    `
  },
  movie: {
    title: "영화 기록",
    body: `
      <p>영화를 보고 난 뒤의 감상과 극장 이야기를 기록합니다. 🎬</p>
      <a class="go-link" href="https://blog.naver.com/eum_ja/224355093855" target="_blank" rel="noopener noreferrer">
        영화 후기 보러가기
      </a>
    `
  },
  design: {
    title: "디자인 작업실",
    body: `
      <p>포토샵과 디자인을 하나씩 배우고 기록하는 공간입니다. ✏️</p>
      <a class="go-link" href="https://blog.naver.com/eum_ja/224355698326" target="_blank" rel="noopener noreferrer">
        디자인 기록 보러가기
      </a>
    `
  },
  dooboo: {
    title: "두부의 일상",
    body: `
      <p>말티즈 두부의 귀여운 일상을 구경하러 오세요. 🐶</p>
      <a class="go-link" href="https://www.instagram.com/dooboo_5959/" target="_blank" rel="noopener noreferrer">
        두부 인스타 놀러가기
      </a>
    `
  },
  drawing: {
    title: "천천히 그리는 기록",
    body: `
      <p>그리고 싶은 것을 천천히 그립니다. 🎨</p>
      <a class="go-link" href="https://www.instagram.com/eum___j/" target="_blank" rel="noopener noreferrer">
        그림 인스타 놀러가기
      </a>
    `
  },
  clip: {
    title: "은자의 네이버 클립",
    body: `
      <p>짧게 담아온 공연, 영화와 일상 영상을 모아두었어요. 📱</p>
      <a class="go-link" href="https://clip.naver.com/@eum_ja?tab=all&filter=all&dtm_source=clip&dtm_medium=share" target="_blank" rel="noopener noreferrer">
        네이버 클립 보러가기
      </a>
    `
  },
  ticket: {
    title: "관람 티켓",
    body: `
      <p>영화와 공연 티켓을 모아둘 작은 기록함입니다. 🎫</p>
      <p class="coming">아직 정리 중이에요. 조금만 기다려주세요. 😊</p>
    `
  }
};

const modal = document.getElementById("modal");
const title = document.getElementById("modalTitle");
const body = document.getElementById("modalBody");
const toast = document.getElementById("toast");
const closeButton = document.getElementById("closeModal");

document.querySelectorAll("[data-panel]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = panels[button.dataset.panel];
    if (!panel) return;

    title.textContent = panel.title;
    body.innerHTML = panel.body;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    closeButton.focus();
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

closeButton.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

document.getElementById("musicToggle").addEventListener("click", () => {
  toast.textContent = "BGM은 다음 업데이트에서 만나요. 🎵";
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
});
