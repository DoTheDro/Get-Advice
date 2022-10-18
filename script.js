const container = document.querySelector('.custom-con');
const anotherAdvice = document.querySelector('.advice-btn');
const modeBtn = document.querySelector('#viewmode-btn');
const h1 = document.createElement('h1');
const randomAPI = "https://api.adviceslip.com/advice";

anotherAdvice.addEventListener('click', (e) => {
    getRandomAdvice();
});

modeBtn.addEventListener('click', (e) => {
    if (modeBtn.getAttribute('class') == "light-mode") {
        modeBtn.setAttribute('class', 'dark-mode');
        modeBtn.textContent = "Light Mode";
        document.body.style.backgroundColor = "#000";
        document.body.style.transition = "0.5s";
        h1.style.color = "#FFF";
        anotherAdvice.style.backgroundColor = "#00FFFF";
    } else {
        modeBtn.setAttribute('class', 'light-mode');
        modeBtn.textContent = "Dark Mode";
        document.body.style.backgroundColor = "#FFF";
        h1.style.color = "#000";
        anotherAdvice.style.backgroundColor = "#93FFFF";
    }
});

const getRandomAdvice = () => {
    fetch(randomAPI)
    .then(res => {
        return res.json();
    }).then(data => {
        h1.textContent = data.slip.advice;
        container.append(h1);
    })
};

getRandomAdvice();