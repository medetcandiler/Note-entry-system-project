const SMILE=`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
const SAD=`<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`

let form1=document.querySelector('#form1')
let form2=document.querySelector('#form2')
let midDOM=document.querySelector('#mid-note')
let finalDOM=document.querySelector('#final-note')
let infoDOM=document.querySelector('#info')
let errorDOM=document.querySelector('#error')

midDOM.addEventListener('change', ()=>{
    midDOM.setAttribute('value', midDOM.value)
})
finalDOM.addEventListener('change', ()=>{
    finalDOM.setAttribute('value', finalDOM.value)
})

form1.addEventListener('submit', submitFnc)
form2.addEventListener('submit', submitFnc)
midDOM.addEventListener('change', handleChange)
finalDOM.addEventListener('change', handleChange)

let midNote;
let finalNote;
let average;
const myDataArr=localStorage.getItem('NoteData') ? JSON.parse(localStorage.getItem('NoteData')) : [];

function handleChange(e){
    if(e.target.name=='mid-note'){
        midNote=e.target.value
    }else if(e.target.name='final-note'){
        finalNote=e.target.value
    }
}

function submitFnc(e){
    e.preventDefault()
    average=Math.round(midNote*0.3 + finalNote*0.7);
    myDataArr.push(average)
    localStorage.setItem('NoteData', JSON.stringify(myDataArr))
    if (average >= 0 && average <= 100 && average!=''){
        infoDOM.classList.replace('danger', 'success')
        switch(true){
            case (average>=90):{
                infoDOM.innerHTML= `
                <h2>Mid Term Note: ${midDOM.value}</h2>
                <h2>Final Note: ${finalDOM.value}</h2>  <br>
                <h1> ${SMILE} AA Average note: ${average} </h1>
                `
            }
                break;
            case(average>=85):{
                infoDOM.innerHTML= `
                <h2>Mid Term Note: ${midDOM.value}</h2>
                <h2>Final Note: ${finalDOM.value}</h2>  <br>
                <h1> ${SMILE} BA Average note: ${average} </h1>
                `
            }
                break;
            case(average>=80):{
                infoDOM.innerHTML=`
                <h2>Mid Term Note: ${midDOM.value}</h2>
                <h2>Final Note: ${finalDOM.value}</h2>  <br>
                <h1> ${SMILE} BB Average note: ${average} </h1>
                `
            }
                break;
            case(average>=75):{
                infoDOM.innerHTML=`
                <h2>Mid Term Note: ${midDOM.value}</h2>
                <h2>Final Note: ${finalDOM.value}</h2>  <br>
                <h1> ${SMILE} CB Average note: ${average} </h1>
                `
            }
                break;
            case(average>=70):{
                infoDOM.innerHTML=`
                <h2>Mid Term Note: ${midDOM.value}</h2>
                <h2>Final Note: ${finalDOM.value}</h2>  <br>
                <h1> ${SMILE} CC Average note: ${average} </h1>
                `
            }
                break;
            case(average>=65):{
                infoDOM.innerHTML=`
                <h2>Mid Term Note: ${midDOM.value}</h2>
                <h2>Final Note: ${finalDOM.value}</h2>  <br>
                <h1> ${SMILE} DC Average note: ${average} </h1>
                `
            }
                break;
            case(average>=60):{
                infoDOM.innerHTML=`
                <h2>Mid Term Note: ${midDOM.value}</h2>
                <h2>Final Note: ${finalDOM.value}</h2>  <br>
                <h1> ${SMILE} DD Average note: ${average} </h1>
                `
            }
                break;
            case(average>=50):{
                infoDOM.innerHTML=`
                <h2>Mid Term Note: ${midDOM.value}</h2>
                <h2>Final Note: ${finalDOM.value}</h2>  <br>
                <h1> ${SAD} FD Average note: ${average} </h1>
                `
                infoDOM.classList.replace('success','danger')
            }
                break;
            case(average<50):{
                infoDOM.innerHTML=`
                <h2>Mid Term Note: ${midDOM.value}</h2>
                <h2>Final Note: ${finalDOM.value}</h2>  <br>
                <h1> ${SAD} FF Average note: ${average} </h1>
                `
                infoDOM.classList.replace('success','danger')
            }
                break;
        }
    }else{
        errorDOM.innerHTML=`
        <h3 style="color: red;">Please enter the notes information as a number between 0 and 100</h3>
        `;
        setTimeout( () => errorDOM.innerHTML='', 1400 )
        midDOM.value=''
        finalDOM.value=''
    }
}





