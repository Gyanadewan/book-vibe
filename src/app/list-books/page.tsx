"use client";

import Image from "next/image";
import BookCard from "@/components/shared/BookCard";
import { booksContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import { useContext } from "react";

function ListBookPage() {
  const { readBooks, wishlist } = useContext(booksContext);

  return (
    <div className="container mx-auto">
      <div className="text-center bg-amber-200 rounded-2xl p-[50px] my-5">
        <h2 className="font-bold text-2xl">List Books</h2>
      </div>

      <div className="tabs tabs-border">
        {/* Read Books */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {readBooks.length > 0 ? (
            <div className="flex flex-col gap-5">
              {readBooks.map((book: IBook) => (
                <div
                  key={book.bookId}
                  className="flex gap-5 border rounded-xl p-5 shadow-md bg-base-100"
                >
                  {/* Left Image */}
                  <div className="w-40 h-52 shrink-0">
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      width={160}
                      height={208}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold">
                      {book.bookName}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      By {book.author}
                    </p>

                    <p className="mt-3">{book.review}</p>

                    <div className="flex gap-3 mt-4">
                      <span className="badge badge-primary">
                        {book.category}
                      </span>

                      <span className="badge">
                        ⭐ {book.rating}
                      </span>

                      <span className="badge">
                        {book.totalPages} Pages
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-2xl font-bold">Not Found</p>
          )}
        </div>

        {/* Wishlist Books */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {wishlist.length > 0 ? (
            wishlist.map((book: IBook) => (
                <div
                  key={book.bookId}
                  className="flex gap-5 border rounded-xl p-5 shadow-md bg-base-100"
                >
                  {/* Left Image */}
                  <div className="w-40 h-52 shrink-0">
                    <Image
                      src={book.image}
                      alt={book.bookName}
                      width={160}
                      height={208}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold">
                      {book.bookName}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      By {book.author}
                    </p>

                    <p className="mt-3">{book.review}</p>

                    <div className="flex gap-3 mt-4">
                      <span className="badge badge-primary">
                        {book.category}
                      </span>

                      <span className="badge">
                        ⭐ {book.rating}
                      </span>

                      <span className="badge">
                        {book.totalPages} Pages
                      </span>
                    </div>
                  </div>
                </div>
            ))
          ) : (
            <p className="text-2xl font-bold">Not Found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListBookPage;