function setTime() {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  const dateStringElement = document.querySelector('.todos-head h1');
  const dateNameElement = document.querySelector('.todos-head h2');

  dateStringElement.innerHTML = dateString;
  dateNameElement.innerHTML = dayName;
}

var intervalId = setInterval(() => {
  setTime();
}, 1000);