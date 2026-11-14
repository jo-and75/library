const myLib = [];
const tbl = document.getElementsByTagName("table")[0]; 
const form = document.getElementById("form");
const dialog= document.getElementById("dialog");

function Book(title, author, pages, status){   
    if (!new.target){ 
        throw Error ("You should use 'new' when invoking this function ");
    }
    this.id = crypto.randomUUID();
    this.title = title; 
    this.author = author;
    this.pages = pages;  
    this.status = status;
   
    this.info = function(){ 
        return title + " by " + author +  ", " + pages + " pages is " + status;
    }
}// constructor  

function addBookToLib(title, author, pages, status){ 
    const bookTemplate = new Book(title, author, pages, status); 
    myLib.push(bookTemplate); 
    displayBooks();
}// add books 

function displayBooks(){ 
    tbl.innerHTML = ""; //clear table
    for (let i = 0; i < myLib.length; i++){   
        const row = document.createElement("tr");
        const col1 = document.createElement("td") ; 
        col1.textContent = myLib[i].title;  

        const col2 = document.createElement("td"); 
        col2.textContent = myLib[i].author; 
         
        const col3 = document.createElement("td"); 
        col3.textContent = myLib[i].pages; 

        const col4 = document.createElement("td"); 
        col4.textContent = myLib[i].status; 

        const remove = document.createElement("button"); 
        remove.textContent = "REMOVE";   

        remove.addEventListener('click', () => removeBook(i));
        row.append(col1);
        row.append(col2);
        row.append(col3);
        row.append(col4); 
        row.append(remove);
        tbl.append(row);      
    } 

}// displays catalogue  

form.addEventListener('submit', function(event){ 
        event.preventDefault();
        const author = document.getElementById("author"); 
        const title = document.getElementById("title"); 
        const pages = document.getElementById("pages"); 
        const status = document.getElementById("status");   
        const selIdx = status.selectedIndex;   
        const statusVal = status.options[selIdx].value;  
        alert(statusVal);


        if(author.value == "" || title.value == "" || pages.value == ""){
            alert("Please ensure all fields are filled in correctly"); 
            return;
        }
        addBookToLib(title.value, author.value, pages.value,statusVal);
        hideForm();
    }
) 

function displayForm(){ 
    dialog.style.display = "grid";
} 

function hideForm(){ 
    dialog.style.display = "none";
} 

function removeBook(index){   
    myLib.splice(index,1); 
    displayBooks();

}

addBookToLib("Animal Farm", "George Orwell", 300, "read"); 
addBookToLib("Never Let Me Go", "Kazui Ishiguro", 400, "not read"); 
addBookToLib("Persepolis", "Marjane Satrapi", 300, "read"); 
addBookToLib("The Handmaids Tale", "Margaret Atwood", 350, "not read"); 
// addBookToLib("Oliver Twist", "Charles Dickens", 450); 
// addBookToLib("1984", "George Orwell", 500); 
// addBookToLib("Darkness At Noon", "Arthur Koesteller", 800);  

displayBooks()
