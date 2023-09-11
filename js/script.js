// Menu toggle
const hamburger = document.querySelector("#hamburger");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  nav.classList.toggle("slide");
});

// Articles
const getArticles = async () => {
  try {
    const res = await fetch("../articles.json");
    if (!res.ok) {
      throw new Error(`Failed to fetch JSON: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const showCards = (a) => {
  return `<div
          class="hover:shadow-darkBlue rounded-3xl bg-white p-5 transition duration-300 ease-in-out hover:-translate-y-5"
        >
          <div
            class="h-40 rounded-2xl bg-cover bg-center bg-no-repeat shadow-md"
            style="background-image: url(${a.image})"
          ></div>
          <div class="mt-6 flex flex-col gap-3">
            <h3 class="text-lg font-bold">
              ${a.title}
            </h3>
            <p>
              ${a.description}
            </p>
          </div>
          <div class="mt-4 flex items-center gap-4">
            <p>${a.date}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="3"
              viewBox="0 0 4 3"
              fill="none"
            >
              <ellipse
                cx="1.72566"
                cy="1.5"
                rx="1.72566"
                ry="1.5"
                fill="#0F1217"
              />
            </svg>
            <p>${a.category}</p>
          </div>
        </div>`;
};

const updateUi = async () => {
  let cards = "";
  const articles = await getArticles();
  articles.forEach((a) => (cards += showCards(a)));
  const articleContainer = document.querySelector("#articles");
  articleContainer.innerHTML = cards;
};

updateUi();
