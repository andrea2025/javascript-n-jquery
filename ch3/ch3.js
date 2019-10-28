function Book (title,author,chapter,pages) {
    this.title =title.toUpperCase();
    this.author = author;
    this.chapter = chapter;
    this.bookRead = function(){
        return(author + "wrote" + title + "with" + chapter);
    };
}
var book1 = new Book('Alice in the wonderland','jenny strong',34);

var details1 = book1.author + ' wrote  ' + '' + book1.title +'  with  ' + book1.chapter + 'pages';
var det1 = document.getElementById('book');
det1.innerHTML = details1;

Book.pages = '4pages';
console.log(Book.pages);


var dateTime = new Date();
var months = dateTime.getFullYear();
console.log(months);
var timehr = document.getElementById('time');
timehr.innerHTML = months;

let checkSpam = (str) => {
    let x = str.toLowerCase();
   y = x.includes('viagra') || x.includes('free') || x.includes('xxx');
   return (y);
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));
