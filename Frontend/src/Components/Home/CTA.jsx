const CTA = () => (
  <section className="py-16 sm:py-24 bg-gradient-to-r from-amber-400 to-amber-500 text-black rounded-2xl">

    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Experience Better Delivery?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who trust us with their shipments.</p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-medium shadow-lg transition-all hover:scale-[1.02]">Get Started</button>
        <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all hover:scale-[1.02]">Contact Us</button>
      </div>
    </div>
  </section>
);

export default CTA;
