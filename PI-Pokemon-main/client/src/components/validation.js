const name = document.getElementById('nombre')
const life = document.getElementById('vida')
const strength = document.getElementById('fuerza')
const defense = document.getElementById('defensa')
const speed = document.getElementById('velocidad')
const height = document.getElementById('altura')
const weight = document.getElementById('peso')

const form = document.getElementById('form')



form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!nombre.value.length){
        alert('Falta el nombre')
    }
    else if(life.value >100){
        alert('Elige entre 1-100')
    }
    else if(strength.value > 100){
        alert('Elige entre 1-100')
    }
    else if(defense.value > 100){
        alert('Elige entre 1-100')
    }
    else if(speed.value > 100){
        alert('Elige entre 1-100')
    }
    else if(height.value > 100){
        alert('Elige entre 1-100')
    }
    else if(weight.value > 100){
        alert('Elige entre 1-100')
    }
    else{
        console.log('enviado')
    }
})