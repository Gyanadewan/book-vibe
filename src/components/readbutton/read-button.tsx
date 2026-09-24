
"use client"

import BooksProvider, { booksContext } from "@/context/BookContext"
import { IBook } from "@/types/books.type"
import { useContext } from "react"
import { toast } from "react-toastify"

function ReadButton({book}:{book:IBook}) {
    const {readBooks, setReadBooks} = useContext(booksContext)

    const handleReadBook = () => {
        console.log("hello",book)
        setReadBooks([...readBooks,book])
         toast.success (`you have read ${book.bookName} `)
    }
  return (
    <div>
      <button onClick={handleReadBook} className="btn btn-primary btn-sm">
       Read Button
      </button>
    </div>
  )
}

export default ReadButton
