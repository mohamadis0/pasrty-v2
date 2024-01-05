function contactUs() {
  return (
    <div className="flex justify-center items-center py-10 sm:py-12 md:py-20 lg:py-24 lg:px-12 px-10">
      <div className="md:w-2/3 w-full border-2 border-[#a7bdad] shadow-xl">
        <div className="md:mx-36 md:my-8 lg:mx-44 lg:my-10">
          <div className="flex justify-start">
            <div className="grid gap-2">
              <p className="font-serif text-xl">Talk To Our</p>
              <p className="font-serif text-5xl">Family</p>
            </div>
          </div>
          <div className="grid gap-6 mt-12">
          <div className="grid gap-3">
            <p className="font-medium">User Name</p>
            <input
              type="text"
              placeholder="User Name"
              className="  font-serif border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-pink-400 p-3 placeholder:text-sm"
            />
          </div>
          <div className="grid gap-3">
            <p className="font-medium">Email</p>
            <input
              type="text"
              placeholder="demo@gmail.com"
              className="  font-serif border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-pink-400 p-3 placeholder:text-sm"
            />
          </div>
          <div className="grid gap-3">
            <p className="font-medium">Contact Number</p>
            <input
              type="text"
              placeholder="Contact Number"
              className="  font-serif border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-pink-400 p-3 placeholder:text-sm"
            />
          </div>
          <div className="grid gap-3">
            <p className="font-medium">Message</p>
            <input
              type="text"
              placeholder="Type your Message..."
              className="  font-serif border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-pink-400 p-3 placeholder:text-sm"
            />
          </div>
          </div>
          <div className="border-2 border-[#a7bdad] rounded flex justify-center text-pink-500 mt-8  ">
              <button className="w-full py-2 lg:py-3 hover:bg-slate-200">
                Send
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default contactUs;
