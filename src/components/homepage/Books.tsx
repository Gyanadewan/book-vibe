
import { IBook } from '@/types/books.type'
import BookCard from '../shared/BookCard'

const getBooks = async () => {
    const res = await fetch ("http://localhost:3000/booksdata.json")
    const data = res.json()
    return data
}
 async function Books() {
    const books  =  await getBooks()
    console.log(books)
  return (
    <div>
       <h2 className='text-center text-3xl p-5 font-bold'> All Books</h2>
       <div className='grid grid-cols-3 gap-3 container mx-auto'>
         {
         books.map((book:IBook, index:number)=> <BookCard key={index} book={book}></BookCard> )
         }
       </div>
    </div>
  )
}

export default Books
