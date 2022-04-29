<books>
{
  for $x in collection(Bookstore)/bookstore/book
  let $years := 2022 - $x/year
  order by $x/year
  return <book>{$x/title}
  <years>{$years}</years></book>
}
</books>