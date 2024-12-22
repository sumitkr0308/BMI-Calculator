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

})