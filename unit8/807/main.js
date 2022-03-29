"use strict";

    let book = {
        title: "The Hobbit",
        author: "J.R.R. Tolkie",
        publishedIn: 1937,
        alreadyRead: false
    };

    let book2 = {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkie",
        publishedIn: 1954,
        alreadyRead: false
    };

    let book3 = {
        title: "Bleach",
        author: "Tite Kubo",
        publishedIn: "2001",
        alreadyRead: true
    };



let books = [book, book2, book3];


function title() {
    for (let i in books) {
        let div = document.querySelector("div");
        let p = document.createElement("p");
        div.append(p);
        if (books[i].alreadyRead === true)
            p.innerHTML = `You already read "${books[i].title}" by ${books[i].author}`;
        else
            p.innerHTML = `You still need to read "${books[i].title}" by ${books[i].author}`;
    }
}

document.addEventListener('DOMContentLoaded', title);