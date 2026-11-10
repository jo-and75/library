const myLib = [];
const tbl = document.getElementsByTagName("table")[0];

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
}// add books 

function displayBooks(){ 
   
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

        row.append(col1);
        row.append(col2);
        row.append(col3);
        row.append(col4); 
        tbl.append(row);
    } 

}// displays catalogue

addBookToLib("Animal Farm", "George Orwell", 300, "read"); 
addBookToLib("Never Let Me Go", "Kazui Ishiguro", 400, "not read"); 
addBookToLib("Persepolis", "Marjane Satrapi", 300, "read"); 
addBookToLib("The Handmaids Tale", "Margaret Atwood", 350, "not read"); 
// addBookToLib("Oliver Twist", "Charles Dickens", 450); 
// addBookToLib("1984", "George Orwell", 500); 
// addBookToLib("Darkness At Noon", "Arthur Koesteller", 800);  

displayBooks()
