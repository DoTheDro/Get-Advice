const container = document.querySelector('.custom-con');
const anotherAdvice = document.querySelector('button');
const h1 = document.createElement('h1');
const randomAPI = "https://api.adviceslip.com/advice";

anotherAdvice.addEventListener('click', (e) => {
    getRandomAdvice();
})

const getRandomAdvice = () => {
    fetch(randomAPI)
    .then(res => {
        return res.json();
    }).then(data => {
        h1.textContent = data.slip.advice;
        container.append(h1);
    })
}

getRandomAdvice();

//#00FFFF