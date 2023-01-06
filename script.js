const SMILE=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
const SAD=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`

let form=document.querySelector('#form')
let midDOM=document.querySelector('#mid')
let finalDOM=document.querySelector('#final')
let infoDOM=document.querySelector('#info')

form.addEventListener('submit', formSubmit)
midDOM.addEventListener('change', handleChange)
finalDOM.addEventListener('change', handleChange)

let midNote;
let finalNote;
let average;

function handleChange(e){
    if(e.target.name==='midnote'){
        midNote=e.target.value
    }else if(e.target.name==='finalnote'){
        finalNote=e.target.value
    }
}
function formSubmit(e){
    e.preventDefault()
    average=Math.round(midNote*0.3 + finalNote*0.7);
    infoDOM.classList.add('text-success');
    var namesArr = []; 
    namesArr.push(average)
    localStorage.setItem('Notes', JSON.stringify(namesArr))
    if (average >= 0 && average <= 100 && average!=''){
        switch(true){
            case (average>=90):{
                infoDOM.innerHTML= `${SMILE} AA average note: ${average}`
                midDOM.value=''
                finalDOM.value=''
            }
                break;
            case(average>=85):{
                infoDOM.innerHTML= `${SMILE} BA average note: ${average}`
                midDOM.value=''
                finalDOM.value=''
            }
                break;
            case(average>=80):{
                infoDOM.innerHTML=`${SMILE} BB Average note: ${average}`
                midDOM.value=''
                finalDOM.value=''
            }
                break;
            case(average>=75):{
                infoDOM.innerHTML=`${SMILE} CB Average note: ${average}`
                midDOM.value=''
                finalDOM.value=''
            }
                break;
            case(average>=70):{
                infoDOM.innerHTML=`${SMILE} CC Average note: ${average}`
                midDOM.value=''
                finalDOM.value=''
            }
                break;
            case(average>=65):{
                infoDOM.innerHTML=`${SMILE} DC Average note: ${average}`
                midDOM.value=''
                finalDOM.value=''
            }
                break;
            case(average>=60):{
                infoDOM.innerHTML=`${SMILE} DD Average note: ${average}`
                midDOM.value=''
                finalDOM.value=''
            }
                break;
            case(average>=50):{
                infoDOM.innerHTML=`${SAD} FD Average note: ${average}`
                midDOM.value=''
                finalDOM.value=''
                infoDOM.classList.replace('text-success','text-danger')
            }
                break;
            case(average<50):{
                infoDOM.innerHTML=`${SAD} FF Average note: ${average}`
                midDOM.value=''
                finalDOM.value=''
                infoDOM.classList.replace('text-success','text-danger')
            }
                break;
        }
    }else{
        alert('Please enter the notes information as a number between 0 and 100');
    }
}




