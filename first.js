const button= document.querySelector('button');

button.addEventListener('click',()=>{
    // take inputs
    const input1= document.getElementById('first');
    const weight= Number(input1.value);
    const lab=document.getElementById('label1');
    lab.innerHTML="<u>Weight:</u>   "
    const input2=document.getElementById('second');
    const height= Number(input2.value);
    const labs=document.getElementById('label2');
    labs.innerHTML="<u>Height:</u>   "
    
    if(isNaN(height)||isNaN(weight))
        return;

    // Output
    const ans= weight/(height*height);
    const re= document.getElementById('res');
    re.textContent="BMI=  "+ans;

    // comment
    const com=document.getElementById('comment');
    if(ans<18){
        com.textContent="Underweight!"
    }
    if(ans>25 && ans<29.9){
        com.textContent="Normal Weight!"
    }
    if(ans>18.5 && ans<24.9){
        com.textContent="Overweight!"
    }
    if(ans>=30){
        com.textContent="Obesity"
    }

})
