
"use client"


import { booksContext } from "@/context/BookContext"
import { IBook } from "@/types/books.type"
import { useContext } from "react"
import { toast } from "react-toastify"

function  WishListButton ({book}:{book:IBook}) {
    const {wishlist, setWishlist} = useContext(booksContext)

    const handleWishlistBook = () => {
        console.log("hello",book)
        setWishlist([...wishlist,book])
        toast.success (`you have wishlist ${book.bookName} `)
    }

  return (
    <div>
         <button onClick={handleWishlistBook} className="btn btn-outline btn-sm">
              Add to Wishlist
            </button>
    </div>
  )
}

export default WishListButton
