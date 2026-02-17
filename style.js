const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
function scrollCarousel(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  const container = carousel.parentElement;
  const cardWidth = 320; // w-80 = 320px
  const gap = 16; // gap-4 = 16px
  const scrollAmount = cardWidth + gap;
  const currentTransform = carousel.style.transform;
  let currentX = 0;

  if (currentTransform) {
    const match = currentTransform.match(/translateX\(([-\d.]+)px\)/);
    if (match) currentX = parseFloat(match[1]);
  }
  const totalWidth = carousel.scrollWidth;
  const containerWidth = container.clientWidth;
  const maxScroll = -(totalWidth - containerWidth);
  let newX = currentX - direction * scrollAmount;
  if (newX > 0) newX = 0;
  if (newX < maxScroll) newX = maxScroll;
  carousel.style.transform = `translateX(${newX}px)`;
  updateDots(carouselId, newX, scrollAmount, maxScroll);
}
function updateDots(carouselId, currentX, scrollAmount, maxScroll) {
  const dots = document.querySelectorAll(
    `[data-carousel="${carouselId}"] .dot`,
  );
  if (!dots.length) return;

  const totalDots = dots.length;
  const totalSlides = Math.abs(maxScroll) / scrollAmount + 1;
  const currentIndex = Math.round(Math.abs(currentX) / scrollAmount);

  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("bg-indigo-600");
      dot.classList.remove("bg-neutral-300");
    } else {
      dot.classList.remove("bg-indigo-600");
      dot.classList.add("bg-neutral-300");
    }
  });
}