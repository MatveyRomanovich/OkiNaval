let button_1 = document.querySelector('#id1')
let button_2 = document.querySelector('#id2')
let sites = [
    'https://www.youtube.com/watch?v=9ORkKk8hDkw',
    'https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D1%80%D0%B8%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,_%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%92%D0%BE%D0%BB%D1%8C%D1%84%D0%BE%D0%B2%D0%B8%D1%87',
    'http://mgke.minsk.edu.by/ru/main.aspx',
]

function f_Rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
button_2.addEventListener('click', function() {
    window.location.href = sites[f_Rand(0, 3)]
})
let color = ['Green',
    'Blue',
    'Red',
    'Black',
    'Purple',
    'Yellow',
]
button_1.addEventListener('click', function() {
    document.body.style.backgroundColor = color[f_Rand(0, 3)]
})