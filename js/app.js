console.log('@@@ Conectado')

const titulo = document.getElementsByClassName('titulo')[0]
titulo.style.color='red'

titulo.addEventListener('hover)',()=>{
    titulo.style.color='black'
})
console.log('@@@ titulo', titulo)

const num1=document.getElementById('num1')
const num2=document.getElementById('num2')
const btnSuma=document.getElementById('btmSuma')

btmSuma.addEventListener('click',()=> {
    sumaValores
})
const sumaValores=()=>{
    console.log('@@@ valores', parseInt(nume1.value)), parseInt(num2.value)
    if (!isNaN(parseInt(num1.value))) {
        if (!isNaN(parseInt(num2.value))){
        const res=parseInt(num1.value)+parseInt(num2.value)
        alert('El resultado es: '+ res)
        }
    }
}