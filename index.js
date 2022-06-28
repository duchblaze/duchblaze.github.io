let listItems = document.getElementsByClassName("navbar")[0];
let mobileMenu = document.getElementsByClassName("mobile-menu")[0];

let openMobileMenu = () => {
    listItems.classList.toggle("active");
    mobileMenu.classList.toggle("is-active");
  };
  
mobileMenu.addEventListener("click", openMobileMenu);
  
// let hero = document.querySelector('.hero')

// hero.addEventListener('click', () => {
//   removeClass()
//    hero.classList.add('enlarge')
// })

// function removeClass() {
//     hero.addEventListener('click', () =>
//         hero.classList.remove('enlarge'))
// }

// for (i = 0; i < hero.length; i++) {
//             hero[i].addEventListener('click', () =>
//             hero.classList.remove('enlarge'))
    
// }

// let ul = document.querySelector('ul')
// let li = document.createElement('li')
// ul.append(li)

let hero = document.querySelector('.hero')

hero.addEventListener('click', () => {
    removeClass()
    hero.classList.add('enlarge')
})

function removeClass() {
    hero.addEventListener('click', () => {
        hero.classList.remove('enlarge')
    })
}
