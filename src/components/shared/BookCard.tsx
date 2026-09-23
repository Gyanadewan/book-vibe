import { IBook } from "@/types/books.type";
import Image from "next/image";
import Link from "next/link";

interface iBookBardProps {
  book : IBook
}

function BookCard({ book }:iBookBardProps) {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="card bg-base-100 shadow-md border border-base-300">
      
      {/* Book Image */}
      <figure className="bg-base-200 p-4">
        <Image
          src={image}
          alt={bookName}
          width={150}
          height={200}
          className="h-48 w-auto object-cover rounded-lg"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">

        <div className="flex items-center justify-between">
          <div className="badge badge-primary badge-sm">
            {category}
          </div>

          <div className="flex items-center gap-1 text-sm">
            ⭐ {rating}
          </div>
        </div>

        <h2 className="card-title text-lg">
          {bookName}
        </h2>

        <p className="text-sm text-base-content/70">
          By {author}
        </p>

        <p className="text-sm line-clamp-2">
          {review}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span key={tag} className="badge badge-outline badge-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Information */}
        <div className="text-xs space-y-1 mt-1">
          <p>
            <span className="font-semibold">Pages:</span> {totalPages}
          </p>

          <p>
            <span className="font-semibold">Published:</span>{" "}
            {yearOfPublishing}
          </p>

          <p>
            <span className="font-semibold">Publisher:</span>{" "}
            {publisher}
          </p>
        </div>

        {/* Button */}
        <div className="card-actions mt-2">
          <Link href={`/books/${book.bookId}`}>
            <button className="btn btn-primary btn-sm w-full">
            View Details
          </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default BookCard;