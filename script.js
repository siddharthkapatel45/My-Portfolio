console.log('sddharth');
let work_expirence=Array.from(document.getElementsByClassName('info'));
let next=Array.from(document.getElementsByClassName('next'));
let duration=Array.from(document.getElementsByClassName('duration'));
let post=Array.from(document.getElementsByClassName('Post'));
let  dis=Array.from(document.getElementsByClassName('discriptive'));


console.log(next);
next.forEach((value,index)=>{
value.addEventListener('click',()=>{
if(index!=2)
work_expirence[index+1].style.display='block';

 
})


})
let experience=[
{year:"2005-2010",post:"SoftWare Engineer",exp:" Employees thrive in workplaces that prioritize clear communication, foster a positive work environment, and invest in professional development, creating a holistic and fulfilling experience."
},
{year:"2010-2020",post:"Android Devloper",exp:" Employees thrive in workplaces that prioritize clear communication, foster a positive work environment, and invest in professional development, creating a holistic and fulfilling experience."
},
{year:"2020-2023",post:"Web Devloper",exp:" Employees thrive in workplaces that prioritize clear communication, foster a positive work environment, and invest in professional development, creating a holistic and fulfilling experience."
}



];
experience.forEach((value,index)=>{
console.log(value.post);

    duration[index].innerText=value.year;
    post[index].innerText=value.post;
    dis[index].innerText=value.exp;
    
})
let text=document.getElementById('extra_text').innerText;
let text1=document.getElementById('information').innerText;

let i=0;
let j=0;
let sample=" ";
let sample1=" ";
let k=0;
let strings=["I am proud to present my Sudoku solver project, implemented in C++ using a backtracking algorithm. Sudoku is a classic puzzle that requires logic and problem-solving skills to fill a 9x9 grid with numbers from 1 to 9, ensuring that each row, column, and 3x3 sub grid contains unique numbers.",
"Create a fun snack-catching game using JavaScript, where players move a character to catch falling snacks. Use event listeners to control the character's movement and update the score dynamically. Add a timer for an extra challenge!",
"Design a stylish Tic Tac Toe game using CSS, featuring a sleek grid layout with subtle animations for X and O placements. Implement logic in JavaScript to handle player turns and determine the winner. Customize the board with transitions and hover effects to enhance the gaming experience."];

 let interval= setInterval( myfunction=()=>{

    if(i===text.length)
    {
        sample="";
        i=0;
    }
    sample=sample+text[i++];
document.getElementById('extra_text').innerHTML=`${sample}`;
if(j===text1.length)
{
    sample1="";
    j=0;
}
sample1=sample1+text1[j++];




},150)

let projects=[{title:"Sudoku Solver",link:"https://github.com/siddharthkapatel45/Sudoku_Solver" },
{title:"Snack Game",link:"https://github.com/siddharthkapatel45/snack-game" },
{title:"Tic Tac Toe",link:"https://github.com/siddharthkapatel45/tic_tac_toe" }
                

];
let index=0;

document.getElementsByClassName('left_button')[0].addEventListener('click',()=>{


console.log("dsds");

})

document.getElementsByClassName('right_button')[0].addEventListener('click',()=>{
    if(index===2)
        index=-1;
document.getElementById('title').innerText=`${projects[index+1].title}`;
document.getElementById('mylink').href=`${projects[index+1].link}`;
document.getElementById('mylink').innerText=`${projects[index+1].link}`;
document.getElementById('information').innerText=`${strings[index+1]}`;
document.getElementById('information').innerHTML=`${strings[index+1]}`;





index++;


})
// document.getElementById('night_mode').addEventListener('click',()=>{
//     document.body.style.backgroundColor='white';
//     document.body.style.color='black';
//     document.querySelector('.navbar')

//     document.querySelector('.left')
//     document.querySelectorAll('.right ul li a')
// })

document.getElementById('project').addEventListener('click', (event) => {
    // Prevent the default behavior of anchor links (page reload)
    event.preventDefault();

    // Scroll smoothly to the projects section
    document.getElementById('information').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('About').addEventListener('click', (event) => {
    // Prevent the default behavior of anchor links (page reload)
    event.preventDefault();

    // Scroll smoothly to the projects section
    document.getElementById('work').scrollIntoView({
        behavior: 'smooth'
    });
});
document.getElementById('Contact').addEventListener('click', (event) => {
    // Prevent the default behavior of anchor links (page reload)
 document.getElementById('sym').style.borderBottom=`solid white 2px`;
 document.getElementById('sym').style.transform = 'rotate(10deg)';
 
  



});
// var tl = gsap.timeline({ repeat: -1 });

// Function to update the text shadow and create the snooze effect
