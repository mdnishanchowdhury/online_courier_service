const Hero = () => (
  <section className="relative bg-gradient-to-r from-amber-400 to-amber-500 text-black rounded-2xl">
    <div className="container mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-12">

      <div className="lg:w-1/2 space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Fast & Reliable <span className="text-blue-300">Courier</span> Service
        </h1>
        <p className="text-xl text-black">
          Experience fast, safe, and reliable courier services with real-time tracking and secure delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-medium shadow-lg transition-all hover:scale-[1.02]">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all hover:scale-[1.02]">
            Learn More
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 mt-12 lg:mt-0">
        <img
          src="https://i.ibb.co.com/pjxQwsLc/offline-courier-service.png"
          alt="Courier service"
          className="rounded-xl shadow-2xl w-full"/>
      </div>
    </div>
  </section>
);

export default Hero;
