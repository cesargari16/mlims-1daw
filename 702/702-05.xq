for $x in collection (Bookstore)/bookstore/book
where $x/year>2004
where $x/title/@lang="en"
return <book> {$x/title} </book>