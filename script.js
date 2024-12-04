document.addEventListener('DOMContentLoaded', ()=>{
   const today = new Date();
   console.log(today);
   const options ={
    year:'numeric',
    month:'long',
    day:'numeric',
    weekday:'long'
   };
   const formattedDate = today.toLocaleDateString(undefined, options);
   const todayDate = document.getElementById('date');
   todayDate.innerText= formattedDate;

// to add the card
const titleInput = document.getElementById('headingCard');
const bodyInput =document.getElementById('bodyCard');
const addNextNote = document.getElementById('addNextNote');
const cardheadercontent = document.getElementById('cardheadercontent');
   addNextNote.addEventListener('click',(e)=>{
    // sticky list
    let stickyList = document.querySelector('.sticky-list');
    const newNotes = document.createElement('div');
    newNotes.classList.add('newNotes');
    newNotes.style.backgroundColor = getRandomColor();
    stickyList.prepend(newNotes);
    

    let cardHeader = document.createElement('h1');
    cardHeader.classList.add('cardHeader');
    let cardBody =document.createElement("p");

    // heading of the card
    
   cardheadercontent.style.display ="flex";
   
   titleInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const inputValue =titleInput.value;
        console.log(inputValue);
        event.preventDefault();
        cardHeader.innerText= inputValue;
        console.log(cardHeader);
        newNotes.prepend(cardHeader);
        const bodyValue = cardInput.value;
        newNotes.prepend(cardBody);
        cardheadercontent.style.display ="none";
    }
   });


   
   

   });

   let colorOptions ={
    colors:['#93bd9a','#fc8e5b', '#ce938b','#9ed1b7','#beed80','#8ab8a8','#92a68a','#c6cca5']
   };
   function getRandomColor(){
    const colors = colorOptions.colors;
    const randomIndex = Math.floor(Math.random()*colors.length);
    return colors[randomIndex];
   }

   
});