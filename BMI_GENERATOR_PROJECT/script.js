window.addEventListener("DOMContentLoaded", (event) => {
   
    const form = document.querySelector('form');
      
    form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    if (height === "" || height < 0 || isNaN(height))
    {
        results.innerHTML  =`please give a valid height ${height}`
    }
   
    else if (weight === "" || weight < 0 || isNaN(weight))
    {
        results.innerHTML = `please give a valid weight ${weight}`;
    }

    else {
        // formula of BMI:
        // height = in meters and we are taking in cm so we have to change in m so divide by 100;
        // weight;
        // BMI = weight / height * height;    //squae of height: 
    
        const total_height_in_M = height / 100;
        const total_height = total_height_in_M * total_height_in_M;
       
        const BMI =  (weight / total_height).toFixed(2);
         results.innerHTML = `<span>${BMI}</span>`
        }   
    })
});