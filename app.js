const addingForm =  document.add
const subForm = document.sub
const mulForm = document.mul

// const addFunction = ()=>{
//      //this will grab the value of the data entered 
//     //into the input 
//     //you do not need an html value tag to get the value
//     const input1 = addingForm.firstNumAdd.value
//     const input2 = addingForm.secondNumAdd.value
//     // adding the + infront of the input1 string turns it 
//     //into a number as well as using the parseInt method
//      const addIt = +input1 + +input2
//     // const addIt = parseInt(input1) + parseInt(input2)
//     const addElement = document.createElement("h1")
//     addElement.textContent = addIt
//     document.body.appendChild(addElement)
//     // console.log(addElement)
//     // console.log(addIt)
// }
// addingForm.addEventListener("submit", e =>{
//     e.preventDefault()
//     addFunction()
// })
// //////////////////////////////////////
// const mulFunction = ()=>{
//     const input1 = mulForm.firstNumMul.value
//     const input2 = mulForm.secondNumMul.value
//     const timesIt = input1 * input2
//     const mulElement = document.createElement("h1")
//     mulElement.textContent = timesIt
//     document.body.appendChild(mulElement)
// }
// mulForm.addEventListener("submit", e =>{
//     e.preventDefault()
//     mulFunction()
// })
////////////////////////////////////////
const subFunction = () =>{
    
    
    const input1 = subForm.firstNumSub.value
    const input2 = subForm.secondNumSub.value
    const subIt = parseInt(input1) - parseInt(input2)
    const subElement = document.createElement("h1")
    subElement.textContent = subIt
    document.body.appendChild(subElement)
}

subForm.addEventListener("submit", e =>{
    e.preventDefault()
    subFunction()
})
