import { FONTS } from "../constants/styles";
import ping from "../assets/images/ping.png";
import service1 from "../assets/images/service1.png";
import star from "../assets/images/star.png";

function BookPage() {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-[#F7E5C1] h-40 flex items-center justify-center">
        <h1
          className="text-4xl font-bold text-[#422A3C]"
          style={{ fontFamily: FONTS.titleFont }}
        >
          Book Your Appointment
        </h1>
      </div>

      {/* Main Content */}
      <section className="py-16 px-8 lg:px-16">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={service1}
              alt="Hair Dye Service"
              className="w-[80%] lg:w-[90%] rounded-md shadow-lg"
            />
          </div>

          {/* Information Section */}
          <div className="flex flex-col gap-8">
            {/* Ratings and Reviews */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={star} alt="Star Icon" className="w-6 h-6" />
                <p className="text-lg font-semibold text-[#422A3C]">4.5</p>
              </div>
              <p className="text-sm text-gray-600">104 reviews</p>
            </div>

            {/* Service Title */}
            <h2 className="text-3xl font-bold text-[#422A3C]">Hair Dye</h2>

            {/* Location */}
            <div className="flex items-center gap-3 text-gray-700">
              <img
                className="w-6 h-6"
                src={ping}
                alt="Location Ping Icon"
              />
              <p className="text-base">234 Marietta Hwy, GA 30245</p>
            </div>

            {/* Book Now Button */}
            <button
              style={{ fontFamily: FONTS.titleFont }}
              className="font-medium text-white bg-[#BA7894] transition duration-300 hover:bg-[#ECBFD3] w-full h-[53px] rounded-md shadow-md"
            >
              BOOK NOW
            </button>
          </div>
        </div>

        {/* Leave a Review Section */}
        <div className="mt-16">
          <div className="flex flex-col items-center gap-8">
            {/* Review Button */}
            <button
              style={{ fontFamily: FONTS.titleFont }}
              className="font-medium text-white bg-[#BA7894] transition duration-300 hover:bg-[#ECBFD3] w-[200px] h-[53px] rounded-md shadow-md"
            >
              Leave A Review
            </button>

            {/* Review Form */}
            <div className="w-full lg:w-2/3">
              <textarea
                rows={5}
                placeholder="Write your review here..."
                className="w-full border border-gray-300 rounded-md p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#BA7894] resize-none"
              ></textarea>
              <button
                style={{ fontFamily: FONTS.titleFont }}
                className="mt-4 font-medium text-white bg-[#BA7894] transition duration-300 hover:bg-[#ECBFD3] w-full h-[53px] rounded-md shadow-md"
              >
                Submit Review
              </button>
            </div>

            {/* Sample Comments */}
            <div className="w-full lg:w-2/3 mt-8">
              <h3 className="text-2xl font-bold text-[#422A3C] mb-4">
                Customer Reviews
              </h3>
              <div className="space-y-6">
                <div className="bg-[#F7E5C1] p-4 rounded-md shadow-md">
                  <p className="text-gray-800">
                    "Amazing service! My hair looks fantastic, and the staff was
                    incredibly friendly."
                  </p>
                  <p className="text-right text-sm text-gray-600">- Jane Doe</p>
                </div>
                <div className="bg-[#F7E5C1] p-4 rounded-md shadow-md">
                  <p className="text-gray-800">
                    "Great experience! I’ll definitely be coming back."
                  </p>
                  <p className="text-right text-sm text-gray-600">- John Smith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookPage;
