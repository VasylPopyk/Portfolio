const startText = document.querySelector('.StartText');
let textContent = ['Vasyl Popyk'];

function insertLetter(letter, period){
    setTimeout(()=>{
        startText.insertAdjacentHTML(
            'beforeend', 
            `${letter}`
        )
    }, period)
}


insertLetter('V', 1000)
insertLetter('a', 2000)
insertLetter('s', 3000)
insertLetter('y', 4000)
insertLetter('l ', 5000)
insertLetter('P', 6000)
insertLetter('o', 7000)
insertLetter('p', 8000)
insertLetter('y', 9000)
insertLetter('k', 10000)