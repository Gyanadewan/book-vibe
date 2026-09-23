
import BannerImg from "@/assets/hero_img.jpg"
import Image from "next/image"
function Banner() {
  return (
    <div className="container mx-auto p-10 py-10 bg-gray-300 rounded-2xl mt-5">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

    {/* Left Side */}
    <div className="flex-1 text-center lg:text-left">
      <h2 className="mt-5 text-5xl  font-bold  max-w-lg">
        Books to freshen up your Bookshelf
      </h2>

      <button className="btn btn-primary mt-6">
        View The List
      </button>
    </div>

    {/* Right Side */}
    <div className="flex-1 flex justify-center">
      <Image
        src={ BannerImg}
         width={400}
         height={400}
        alt="Books banner"
        className=""
      />
    </div>

  </div>
    </div>
  )
}

export default Banner
