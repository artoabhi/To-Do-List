document.addEventListener('DOMContentLoaded', ()=>{
    const today = new Date();
    // console.log(today);
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
 const submit = document.getElementById('submit');
    addNextNote.addEventListener('click',(e)=>{
    cardheadercontent.style.display ="flex";
    });
    function addNewNote(){
        // sticky list
    // to create a note
     let stickyList = document.querySelector('.sticky-list');
     const newNotes = document.createElement('div');
     newNotes.classList.add('newNotes');
     newNotes.style.backgroundColor = getRandomColor();
     stickyList.prepend(newNotes);
     
//   to create the heading of note
     let cardHeader = document.createElement('h3');
     cardHeader.classList.add('cardHeader');
     cardHeader.innerText = titleInput.value;
     titleInput.value ="";
     newNotes.append(cardHeader);
//  to create the paragraph of note
     let cardBody =document.createElement("p");
     cardBody.innerHTML =bodyInput.value;
     bodyInput.value = "";
     newNotes.appendChild(cardBody); 
// button section
     let buttons = document.createElement('div');
     newNotes.appendChild(buttons);
     buttons.classList.add("card-btn");
//  to create the complete task button of note
     let completed =document.createElement("button");
     completed.innerText ="Task Completed";
     completed.style.backgroundColor = "forestgreen";
     completed.style.width = "40%";
     buttons.prepend(completed);
// to create the delete task button of note
     let remove = document.createElement("button");
     remove.innerText ="Delete Task";
     remove.style.backgroundColor = "red";
     remove.style.width = "40%";
     buttons.appendChild(remove);

// working of the buttons 
     completed.addEventListener('click', ()=>{
        cardBody.classList.toggle('task-complete');
        newNotes.classList.toggle('task-completed-card');
     });
     remove.addEventListener('click', ()=>{
        newNotes.style.display ="none";
     });

    }
// submit to create the new note and call of function 
submit.addEventListener('click', (e)=>{
    addNewNote();
    cardheadercontent.style.display ="none";

});
// this section is made to generate random bg-colors of the note
    let colorOptions ={
     colors:['#93bd9a','#fc8e5b', '#ce938b','#9ed1b7','#beed80','#8ab8a8','#92a68a','#c6cca5']
    };
    function getRandomColor(){
     const colors = colorOptions.colors;
     const randomIndex = Math.floor(Math.random()*colors.length);
     return colors[randomIndex];
    }
 
    
 });