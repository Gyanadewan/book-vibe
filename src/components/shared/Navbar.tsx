import Image from "next/image";
import Navlogo from "@/assets/book.ico";
import Link from "next/link";

function Navbar() {
   const links = <>
    <li>
      <Link href="/books">Books</Link>
    </li>
    <li>
      <Link href="/dashboard">Dashboard</Link>
    </li>
    <li>
      <Link href="/products">Products</Link>
    </li>
  </>
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="container mx-auto">
        <div className="navbar">

          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                   {links}
              </ul>
            </div>

            <div className="flex gap-3">
                 <Image
              src={Navlogo}
              alt="Book Vibe logo"
              width={40}
              height={40}
            />
              <div>
                   <h3 className="text-2xl">Book Vibe</h3>
              </div>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                 {links}

            </ul>
          </div>

         <div className="navbar-end flex gap-2">
        <button className="btn btn-success">Sign In</button>
      <button className="btn btn-warning">Sign Up</button>
      </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;