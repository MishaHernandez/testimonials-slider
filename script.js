const button = document.getElementById('btn')
const image = document.getElementById('image')
const comment = document.getElementById('comment')
const name = document.getElementById('name')
const position = document.getElementById('position')

const data = [
    {
        picture: 'images/image-tanya.jpg',
        comment: `" I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. "`,
        name: 'Tanya Sinclair',
        position: 'UX Engineer'
    },
    {
        picture: 'images/image-john.jpg',
        comment: `" If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. "`,
        name: 'John Tarkpor',
        position: 'Junior Front-end Developer'
    }
]

showData = (index)=> {
    image.setAttribute('src', data[index].picture)
    comment.textContent = data[index].comment
    name.textContent = data[index].name
    position.textContent = data[index].position
}

let index = 0

btn.addEventListener('click', (e)=> {    
    if (e.target.id === 'back') {
        if (index > 0) index--
        else index = data.length - 1
        
        showData(index)
        
    } else { // if (e.target.id === 'next')
        if (index < data.length - 1) index++
        else index = 0
        
        showData(index)
    }
})

