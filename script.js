const elements = document.querySelectorAll('.hero_text');
const icon = document.querySelector('.icon_banner');

const cards = document.querySelectorAll('.card');
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('activeCard');
      entry.target.classList.remove('exitCard'); // Remove a classe de saída
    } else {
      entry.target.classList.remove('activeCard');
      entry.target.classList.add('exitCard'); // Adiciona a classe de saída
    }
  });
});

const journeyCards = document.querySelectorAll('.journey_card');

const journeyCardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('activeJourneyCard');
      entry.target.classList.remove('exitJourneyCard'); // Remove a classe de saída
    } else {
      entry.target.classList.remove('activeJourneyCard');
      entry.target.classList.add('exitJourneyCard'); // Adiciona a classe de saída
    }
  });
});

journeyCards.forEach((card) => journeyCardObserver.observe(card));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('hero_text')) {
        entry.target.classList.add('animate');
        entry.target.classList.remove('exitAnimate'); // Remove a classe de saída
      }

      if (entry.target.classList.contains('icon_banner')) {
        entry.target.classList.add('animete2');
        entry.target.classList.remove('exitAnimete2'); // Remove a classe de saída
      }
    } else {
      if (entry.target.classList.contains('hero_text')) {
        entry.target.classList.remove('animate');
        entry.target.classList.add('exitAnimate'); // Adiciona a classe de saída
      }

      if (entry.target.classList.contains('icon_banner')) {
        entry.target.classList.remove('animete2');
        entry.target.classList.add('exitAnimete2'); // Adiciona a classe de saída
      }
    }
  });
});

elements.forEach((el) => observer.observe(el));
observer.observe(icon);
cards.forEach((card) => cardObserver.observe(card));






