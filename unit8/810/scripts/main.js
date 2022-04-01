let harryPotter = {
    title: 'Harry Potter 1',
    author: 'JK Rowling',
    publishedIn: 1997,
    alreadyRead: true,
    cover: 'harrypotter1.jpg'
};

let json = JSON.stringify(harryPotter);


let harryPotter2 = {
    title: 'Harry Potter 2',
    author: 'JK Rowling',
    publishedIn: 1998,
    alreadyRead: false,
};

let json = JSON.stringify(harryPotter2);

let harryPotter3 = {
    title: 'Harry Potter 3',
    author: 'JK Rowling',
    publishedIn: 1999,
    alreadyRead: false,
};

let json = JSON.stringify(harryPotter3);

let harryPotter4 = {
    title: 'Harry Potter 4',
    author: 'JK Rowling',
    publishedIn: 2001,
    alreadyRead: false,
};

let json = JSON.stringify(harryPotter4);


let books = [harryPotter, harryPotter2, harryPotter3];
books.push(harryPotter4);