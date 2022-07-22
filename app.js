const addingForm =  document.add

function addFunction(){
    //this will grab the value of the data entered 
    //into the input 
    //you do not need an html value tag to get the value
    const input1 = addingForm.firstNumAdd.value
    const input2 = addingForm.secondNumAdd.value
    // adding the + infront of the input1 string turns it 
    //into a number as well as using the parseInt method
     const addIt = +input1 + +input2
    // const addIt = parseInt(input1) + parseInt(input2)
    return addIt
}


addingForm.addEventListener("submit", e =>{
    e.preventDefault()
    addFunction()
    console.log(addFunction())
})