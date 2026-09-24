"use client"
import { createContext, ReactNode, useState } from "react"

 export const booksContext = createContext({})
function  BooksProvider({children}:{children:ReactNode}) {
    const [readBooks, setReadBooks] = useState([])
    const [wishlist, setWishlist] = useState([])
    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }
  return (
     <booksContext.Provider value={ sharedData}>
           {children}
       </booksContext.Provider>
  )
}

export default BooksProvider
