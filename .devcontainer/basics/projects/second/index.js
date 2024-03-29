const form = document.querySelector('form')

form.addEventListener('submit', (e) =>{
e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

if (height === '' || height <0 || isNaN(height)){
  result.innerHTML =`Enter a valid height ${height}`
}
else if (weight === '' || weight <0 || isNaN(weight)){
  result.innerHTML =`Enter a valid height ${weight}`
}
else{
  const bmi = (weight / ((height *height)/10000)).toFixed(2)
  if (bmi < 18.6){
    result.innerHTML = `<span> ${bmi} </span>  <h3> Under Weight </h3>`
  }
  else if (18.6 < bmi && bmi < 24.9){
    result.innerHTML = `<span> ${bmi} </span>  <h3> Normal Range </h3>`
  }
  else if (bmi > 24.9) {result.innerHTML = `<span> ${bmi} </span>  <h3> Overweight </h3>`

  }
  
}

})