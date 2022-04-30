const correctAnswers = ['A','B','B','C','C','C','B','A','C','B']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault()

    let score = 0
    const userAnswers = [form.option1.value, form.option2.value, form.option3.value, form.option4.value, form.option5.value, form.option6.value, form.option7.value, form.option8.value, form.option9.value, form.option10.value]

    // Checking the Answers
    userAnswers.forEach((answer, index) => {
       if(answer === correctAnswers[index]) {
           score += 10
       } 
    }) 
    // show result on page
    scrollTo(0,0)

    result.classList.remove('d-none')
    let output = 0
    const timer = setInterval(() => {
        result.querySelector('.show-score').textContent = `${output}%`
        if(output === score) {
            clearInterval(timer)
        } else {
            output++
        }
    }, 20)
})
// HOW TO SET AND REMOVE INTERVAL(COUNTER ANIMATION)
// let i = 0
// const timer = setInterval(() => {
//     console.log('hello')
//     i++
//     if(i === 0) {
//         clearInterval(timer)
//     }
// }, 1000)


