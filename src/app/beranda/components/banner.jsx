const Banner = () => {
    return (
      <div
        className="relative max-w-7xl mx-auto mt-8 bg-cover bg-center h-[500px] rounded-3xl overflow-hidden"
        style={{ backgroundImage: "url('https://res.cloudinary.com/df6nytit6/image/upload/v1728486592/maxyproject/pexels-marcelo-moreira-988124-2108730_jhvze9.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold">Desa Leuwimalang</h1>
          <div className="mt-6 w-full max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Ingin Mencari Apa ?"
                className="w-full py-3 pl-4 pr-16 rounded-full text-black"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary hover:bg-secondary text-white px-10 py-2 rounded-full">
                Cari
              </button>
            </div>
          </div>
          <div className="mt-4 space-x-4">
            <button className="bg-secondary text-white px-4 py-2 rounded-full">
              Air Terjun
            </button>
            <button className="bg-secondary text-white px-4 py-2 rounded-full">
              Kebun
            </button>
            <button className="bg-secondary text-white px-4 py-2 rounded-full">
              Sungai
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  