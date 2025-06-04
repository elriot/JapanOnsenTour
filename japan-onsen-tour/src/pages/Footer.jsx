function Footer() {
  return (
    <footer className="bg-black text-white/80 pt-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {/* Left Column - Title & Description */}
        <div className="text-left space-y-2">
          <h2 className="text-xl font-bold">Japan Onsen Tour Guide</h2>
          <p className="text-sm">A Journey Through Japan’s Top 3 Hot Springs</p>
          <p className="text-sm">© 2025 Kawaii Onigiri. All Rights Reserved.</p>
        </div>

        {/* Right Column - Context Description */}
        <div className="md:text-right space-y-2 text-sm">
          <p>Copyright Page: © 2025 Kawaii Onigiri. All Rights Reserved</p>
          <p>Revision Date: Last Revised: May 2025</p>
        </div>
      </div>
			<div className="text-sm mx-auto px-4 sm:px-6 md:text-center py-5">
          <p>
            Context: This document was produced for the Technical Writing - COMM
            1009 at British Columbia Institute of Technology. It serves as an
            educational resource for students and tourists interested in Japan's
            rich onsen culture.
          </p>
        </div>
    </footer>
  );
}

export default Footer;
