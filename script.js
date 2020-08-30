const btn = document.getElementById('btn')
const image_1 = document.getElementById('image_1')
// const image_2 = document.getElementById('image_2')

const data = [
    {
        picture: 'images/image-tanya.jpg',
        comment: `I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future.`,
        name: 'Tanya Sinclair',
        position: 'UX Engineer'
    },
    {
        picture: 'images/image-john.jpg',
        comment: `If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer.`,
        name: 'John Tarkpor',
        position: 'Junior Front-end Developer'
    }
]

btn.addEventListener('click', (e)=> {
    if (e.target.id === 'back') {
        // console.log('Se encontró un boton izquierdo')
        
    } else if (e.target.id === 'next') {
        // console.log('Se encontró un boton derecho')
    } else {
        console.log('No se encontó boton')
    } 
})

