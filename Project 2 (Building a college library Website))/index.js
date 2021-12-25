
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

}
// Display.prototype.add = function(book){
//     let tableBody = document.getElementById('tableBody');
//     let uiString = `<tr>
//                         <td>${book.name}</td>
//                         <td>${book.author}</td>
//                         <td>${book.type}</td>
//                     </tr>`;
//     tableBody.innerHTML += uiString;
// }
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
Display.prototype.validate = function(book){
    if(book.name.length<2 || book.author.length<1){
        return false
    }
    else{
        return true
    }
}
Display.prototype.show = function(type,msg){
    let message = document.getElementById('message');
    if(type==='success'){
        boldText = 'Success!';
    }
    else{
        boldText = 'Error!';
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>${boldText}</strong> ${msg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

    setTimeout(function(){
        message.innerHTML = '';
    }, 2000);
}
showbooks();
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);
    let books = localStorage.getItem('books');
    if(books==null){
        booksobj = []
    }
    else{
        booksobj = JSON.parse(books);
    }

    let display = new Display();
    if(display.validate(book)){
        // display.add(book);
        booksobj.push(book);
        localStorage.setItem('books',JSON.stringify(booksobj));
        display.clear();
        display.show('success','Your book has been successfully added');
        showbooks();
    }
    else{
        display.show('danger','Sorry you can not add this book');
        showbooks();
    }
    e.preventDefault();
}

function showbooks(){
    let books = localStorage.getItem('books');
    if(books==null){
        booksobj = [];
    }
    else{
        booksobj = JSON.parse(books);
    }
    let html="";
    booksobj.forEach(function(element,index){
        html += `
                <tr class='bookrow'>
                    <td id='bookn'>${element.name}</td>
                    <td>${element.author}</td>
                    <td>${element.type}</td>
                    <td><button id="${index}" onclick="deleteBook(this.id)" class="btn btn-primary">Delete Book</button></td>
                </tr>`;
    });
    let tableBody = document.getElementById('tableBody');
    if(booksobj.length!=0){
        tableBody.innerHTML = html;
    }
    else{
        tableBody.innerHTML = `Nothing to show! Use "Add Book" section above to add books`;
    }

}

function deleteBook(index){
    let books = localStorage.getItem('books');
    if(books==null){
        booksobj = [];
    }
    else{
        booksobj = JSON.parse(books);
    }
    booksobj.splice(index,1);
    localStorage.setItem('books',JSON.stringify(booksobj));
    showbooks();
}

let search = document.getElementById('searchtxt');
search.addEventListener('input',function(){
    let inputval = search.value;
    let bookrows = document.getElementsByClassName('bookrow');
    Array.from(bookrows).forEach(function(element){
        let brow = element.getElementsByTagName('td')[0].innerHTML;
        // console.log(cardtext);
        if(brow.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
    
})