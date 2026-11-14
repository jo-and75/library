const myLib = [];
const tbl = document.getElementsByTagName("table")[0];  
const headers = document.getElementById("headers");
const form = document.getElementById("form");
const dialog = document.getElementById("dialog");


function Book(title, author, pages, read){   
    if (!new.target){ 
        throw Error ("You should use 'new' when invoking this function ");
    }
    this.id = crypto.randomUUID();
    this.title = title; 
    this.author = author;
    this.pages = pages;  
    this.read = read;
   
    this.info = function(){ 
        return title + " by " + author +  ", " + pages + " pages is " + read;
    }
}// constructor   

Book.prototype.toggleRead = function(idx){ 
    if (this.read == "TRUE"){ 
        this.read = "FALSE";
    } else if (this.read == "FALSE"){
        this.read = "TRUE"; 
    }
}

function addBookToLib(title, author, pages, read){ 
    const bookTemplate = new Book(title, author, pages, read); 
    myLib.push(bookTemplate); 
    displayBooks();
}// add books  


function displayBooks(){ 
    tbl.innerHTML = ""; //clear table  

    tbl.append(headers); 

    for (let i = 0; i < myLib.length; i++){   
        const row = document.createElement("tr");
        const col1 = document.createElement("td") ; 
        col1.textContent = myLib[i].title;  

        const col2 = document.createElement("td"); 
        col2.textContent = myLib[i].author; 
         
        const col3 = document.createElement("td"); 
        col3.textContent = myLib[i].pages; 

        const col4 = document.createElement("td");   
        const btn = document.createElement("button");  
        
    
        if(myLib[i].read == "TRUE"){ 
            btn.textContent = "Read";
        } else{ 
            btn.textContent = "Not Read";
        } 

        col4.append(btn);
        
        const remove = document.createElement("button"); 
        remove.textContent = "Remove";   

        btn.addEventListener('click', function(){ 
            myLib[i].toggleRead(i); 
            displayBooks();
        })

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
        const read = document.getElementById("read");    
        const selIdx = read.selectedIndex;   
        const readVal = read.options[selIdx].value;  
        if(author.value == "" || title.value == "" ){
            alert("Please ensure all fields are filled in correctly"); 
            return;
        }
        addBookToLib(title.value, author.value, pages.value,readVal);
        hideForm();
    }
) 

function displayForm(){ 
    dialog.style.display = "grid";
} //display form

function hideForm(){ 
    dialog.style.display = "none";
} // hide form

function removeBook(index){   
    myLib.splice(index,1); 
    displayBooks();

} // remove book

addBookToLib("Animal Farm", "George Orwell", 300, "TRUE"); 
addBookToLib("Never Let Me Go", "Kazui Ishiguro", 400, "FALSE"); 
addBookToLib("Persepolis", "Marjane Satrapi", 300, "TRUE"); 
addBookToLib("The Handmaids Tale", "Margaret Atwood", 350, "FALSE"); 
  
displayBooks()
