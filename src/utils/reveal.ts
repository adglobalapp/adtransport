// Egyszerű scroll reveal: a `.reveal` elemek megkapják az `is-visible` osztályt,
// amikor a viewportba érnek.

export function initReveal(root: ParentNode = document): () => void {
  const elements = root.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  elements.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}
