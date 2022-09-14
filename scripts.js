const light = document.querySelector('.Light-Button')
const dark = document.querySelector('.Dark-Button')
const swap = document.querySelector('.Swap-Button')

light.addEventListener('click', e => {
    document.body.style.backgroundColor = 'white';
})

dark.addEventListener('click', e => {
    console.log('DARK')
    document.body.style.backgroundColor = 'black';
})

swap.addEventListener('click', e => {
    const curColour = document.body.style.backgroundColor
    if (curColour === 'white') {
        document.body.style.backgroundColor = 'black'
    } else {
        document.body.style.backgroundColor = 'white'
    }
})