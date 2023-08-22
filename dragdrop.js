function allowDrop(ev) {
    ev.preventDefault(); //Cancels the event if it is cancelable, 
   //meaning that the default action that belongs to the event will not occur (the defualt Drop for div is false)
    // var data = ev.dataTransfer.getData("ItemID");//add
    // var data2=ev.target.id;
    // var original=document.getElementById(data2);
    // var move=document.getElementById(data);//add
    // console.log(move.id);
    // original.id=move.id;
    // original.innerHTML=move.innerHTML;
    // ev.target.style.opacity = '1';
    // move.style.opacity='1';
}


function drag(ev) { //for draggable object (store the id of the dragged element ) 
ev.dataTransfer.setData("ItemID", ev.target.id);
var data=ev.dataTransfer.getData("ItemID");
var move=document.getElementById(data);
move.style.opacity='0.5';

}


// var move=document.getElementById(data);
// var original=document.getElementById(data2);

function drop(ev) { //for drop zone
    ev.preventDefault(); 
    var data = ev.dataTransfer.getData("ItemID");
    // console.log(data);
    var data2=ev.target.id;
    // console.log(data2);
    var move=document.getElementById(data);
    var original=document.getElementById(data2);
    var temp=original.id;
    var temp2=original.innerHTML;
    original.id=move.id;
    original.innerHTML=move.innerHTML;
    move.id=temp;
    move.innerHTML=temp2;
    move.style.opacity = '1';
}


