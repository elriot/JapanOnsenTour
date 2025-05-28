function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        
        {/* Left Column - Title & Description */}
        <div>
          <h2 className="text-xl font-bold">Japan Onsen Tour Guide</h2>
          <p className="mt-2 text-sm text-gray-600">A Journey Through Japan’s Hot Springs</p>
          <p className="mt-2 text-sm text-gray-500">© 2025 Kawaii Onigiri. All Rights Reserved.</p>
        </div>
        
        {/* Right Column - Context Description */}
        <div>
          <p className="text-sm text-gray-500">
            This document was produced for the Technical Writing - COMM 1009 at British Columbia Institute of Technology.
            It serves as an educational resource for students and tourists interested in Japan's rich onsen culture.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;