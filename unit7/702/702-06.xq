for $x in collection (Bookstore)/bookstore/book
order by $x/author ascending
return <book> {$x/author} </book>