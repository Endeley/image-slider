const panels = document.querySelectorAll('.panel')


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        remoeActiveClasses()
        panel.classList.add('active')
    })
})


function remoeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
