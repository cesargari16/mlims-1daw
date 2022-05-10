for $x in collection (Bookstore)/bookstore/book
order by $x/author ascending
let $count := count($x/book)
return 
<book> 
  {$x/title}
  {$x/author}
</book>
