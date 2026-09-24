import ReadButton from "@/components/readbutton/read-button";
import WishListButton from "@/components/wishlistbutton/wishlist-button";
import { IBook } from "@/types/books.type";
import Image from "next/image";

interface BookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch("http://localhost:3000/booksdata.json");
  const data = await res.json();

  return data;
};

async function BookDetailsPage({
  params,
}: BookDetailsPageProps) {
  const books = await getBooks();

  const { id } = await params;

  const book = books.find(
    (book) => book.bookId === Number(id)
  );

  if (!book) {
    return <h2>Book Not Found</h2>;
  }

  return (
    <div className="container mx-auto px-4 py-10">

      {/* Book Details Card */}
      <div className="card lg:card-side max-w-3xl mx-auto bg-base-100 shadow-xl border border-base-300 overflow-hidden">

        {/* Left - Book Image */}
        <figure className="lg:w-2/5 bg-base-200 p-5">
          <Image
            src={book.image}
            alt={book.bookName}
            width={160}
            height={220}
            className="h-64 w-auto object-contain rounded-lg"
          />
        </figure>

        {/* Right - Book Details */}
        <div className="card-body lg:w-3/5 p-5">

          {/* Category + Rating */}
          <div className="flex items-center gap-3">
            <span className="badge badge-primary">
              {book.category}
            </span>

            <span className="text-sm">
              ⭐ {book.rating}
            </span>
          </div>

          {/* Book Name */}
          <h1 className="text-2xl font-bold">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="text-base text-base-content/70">
            By{" "}
            <span className="font-semibold">
              {book.author}
            </span>
          </p>

          <div className="divider my-2"></div>

          {/* Review */}
          <div>
            <h2 className="text-lg font-semibold mb-2">
              About This Book
            </h2>

            <p className="text-sm text-base-content/70 leading-6 line-clamp-4">
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-outline badge-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="divider my-2"></div>

          {/* Book Information */}
          <div className="grid grid-cols-2 gap-3 text-sm">

            <div>
              <p className="text-base-content/60">
                Total Pages
              </p>
              <p className="font-semibold">
                {book.totalPages}
              </p>
            </div>

            <div>
              <p className="text-base-content/60">
                Published
              </p>
              <p className="font-semibold">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-base-content/60">
                Publisher
              </p>
              <p className="font-semibold">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-base-content/60">
                Rating
              </p>
              <p className="font-semibold">
                ⭐ {book.rating}
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="card-actions mt-4">
             <ReadButton book={ book }></ReadButton>

            <WishListButton book={book}></WishListButton>

          </div>

        </div>
      </div>
    </div>
  );
}

export default BookDetailsPage;