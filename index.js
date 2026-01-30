document.addEventListener('DOMContentLoaded', () => {
  const firstContainer = document.getElementById('first-container');
  const secondContainer = document.getElementById('second-container');

  firstContainer.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(firstContainer);

    const cardTag = document.getElementById('card-tag');
    if (cardTag) {
      const message = `You selected ${formData.get('stars')} out of 5`;
      cardTag.innerText = message;
    }

    firstContainer.classList.add('is-hidden');
    secondContainer.classList.remove('is-hidden');
  });
});
