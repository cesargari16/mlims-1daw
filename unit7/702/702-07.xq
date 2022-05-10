for $x in collection (Bookstore)/bookstore/book
order by $x/author ascending
return 
<result>

  <book> 
    {$x/title} 
    {$x/author} 
  </book>
  
</result>