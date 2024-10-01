import Image from "next/image";

export default function Collaboration() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
      {/* Top Section with Title and Description */}
      <div className="container mx-auto mt-[-40px] lg:mt-[-70px]">
        <h1 className="text-[32px] sm:text-[36px] md:text-[41px] font-black text-center leading-tight sm:leading-normal md:leading-loose lg:leading-relaxed">
          Save time and get more done
        </h1>
        <p className="text-center text-customGray font-medium text-[16px] sm:text-[18px] md:text-[19px] max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mt-2 sm:mt-3">
          Supercharge productivity. Streamline work by doing it, and seeing it, in one place.
        </p>
      </div>

      {/* Main Content Section (Text + Image) */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start mt-6 sm:mt-10 lg:mt-16">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(269deg, #fa12e3 1.83%, #7612fa 53.68%, #12d0fa 106.48%)",
            }}
          >
            Improve collaboration
          </h2>

          <p className="text-base sm:text-lg text-customGray mt-4">
            <strong>Get your teams working together more closely, even if they're far apart.</strong> 
            Centralize project-related communications in one place, brainstorm ideas with Whiteboards, 
            and draft plans together with collaborative Docs.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="bg-white border rounded-full px-4 py-2 text-customGray text-sm sm:text-[16px] shadow-sm hover:shadow-lg">
              Comments
            </button>
            <button className="bg-white border rounded-full px-4 py-2 text-customGray text-sm sm:text-[16px] shadow-sm hover:shadow-lg">
              Docs
            </button>
            <button className="bg-white border rounded-full px-4 py-2 text-customGray text-sm sm:text-[16px] shadow-sm hover:shadow-lg">
              Whiteboards
            </button>
            <button className="bg-white border rounded-full px-4 py-2 text-customGray text-sm sm:text-[16px] shadow-sm hover:shadow-lg">
              Clips
            </button>
          </div>

          {/* Additional Text */}
          <div className="mt-8 sm:mt-12">
            <a
              href="#"
              className="text-xl sm:text-2xl font-extrabold text-[#7F76B399] hover:text-transparent hover:bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(269deg, #fa12e3 1.83%, #7612fa 53.68%, #12d0fa 106.48%)",
                WebkitBackgroundClip: "text",
              }}
            >
              Enhance visibility
            </a>
            <a
              href="#"
              className="text-xl sm:text-2xl font-extrabold text-[#7F76B399] mt-2 sm:mt-4 block hover:text-transparent hover:bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(269deg, #fa12e3 1.83%, #7612fa 53.68%, #12d0fa 106.48%)",
                WebkitBackgroundClip: "text",
              }}
            >
              Automate work
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative lg:w-1/2 lg:ml-12 mt-6 sm:mt-10 lg:mt-0">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 sm:p-10 rounded-lg">
            <Image
              src="/images/collaborate.avif"
              alt="collaborate-image"
              layout="responsive"
              width={1224}
              height={762}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Floating Comment Box */}
          <div className="absolute left-[-20px] sm:left-[-50px] top-10 sm:top-16 w-64 sm:w-72 p-4 bg-white rounded-lg shadow-xl border border-gray-200 hidden lg:block">
            <div className="mb-4">
              <p className="text-sm font-semibold">Zach Villa</p>
              <p className="text-xs text-gray-500">May 11 at 4:00 pm</p>
              <p className="text-sm mt-2">
                Can you share an update on this task?
              </p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold">Jenny Wes</p>
              <p className="text-xs text-gray-500">May 11 at 5:32 pm</p>
              <p className="text-sm mt-2">
                Sure thing, still waiting for vendor.
              </p>
            </div>
            <div className="flex items-center border-t pt-2">
              <input
                type="text"
                className="flex-1 bg-gray-100 rounded-full px-3 py-2 text-sm focus:outline-none"
                placeholder="Add Comment"
              />
              <button className="ml-2 text-blue-500 text-sm">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
