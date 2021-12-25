

let addbtn = document.getElementById('addbtn');
shownotes();
addbtn.addEventListener('click',function(e){
    let addtxt = document.getElementById('addtxt');
    let titletxt = document.getElementById('titletext');
    if(addtxt.value==""){
        let alerthtml = `<div class="alert alert-primary" role="alert">Add some text in the textarea
        </div>`;
        let alertdiv = document.getElementById('ac');
        alertdiv.innerHTML = alerthtml;
      
    }
    else if(addtxt.value!=""){
        let notes = localStorage.getItem('notes');
        if(notes==null){
            notesobj = [];
        }
        else{
            notesobj = JSON.parse(notes);
        }
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        newdate = year + "/" + month + "/" + day;

        let myobj = {
            title: titletxt.value,
            text: addtxt.value,
            dt: newdate
        }
        notesobj.push(myobj);
        localStorage.setItem('notes',JSON.stringify(notesobj));
        addtxt.value = "";
        titletxt.value="";
        let alertdiv = document.getElementById('ac');
        alertdiv.innerHTML = "";
        // console.log(notesobj);
        shownotes();
    }
    
})

function shownotes(){
    let notes = localStorage.getItem('notes');
    if(notes==null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    let html="";
    notesobj.forEach(function(element,index){
        html += `
            <div class="noteCard my-3 mx-3 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <small style="font-size:12px; float:right;padding-left:20px;">${element.dt}</small><br>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
    });
    let noteselem = document.getElementById('notes');
    if(notesobj.length!=0){
        noteselem.innerHTML = html;
    }
    else{
        noteselem.innerHTML = `Nothing to show! Use "Add Note" section above to add notes`;
    }

}

function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if(notes==null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesobj));
    shownotes();
}

let search = document.getElementById('searchtxt');
search.addEventListener('input',function(){
    let inputval = search.value.toLowerCase();
    let notecards = document.getElementsByClassName('noteCard');
    Array.from(notecards).forEach(function(element){
        let cardtext = element.getElementsByTagName('p')[0].innerText;
        // console.log(cardtext);
        if(cardtext.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
    
})