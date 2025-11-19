import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 backdrop-blur">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 lg:py-4">
          <div className="flex-shrink-0">
            <a href="/" title="Rung home" className="flex items-center">
              <img src={logo} alt="Rung logo" className="h-12 w-auto mr-2" />
              <span className="text-xl font-bold sm:text-2xl">Rung Labs</span>
            </a>
          </div>

          <nav className="hidden lg:flex lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10 text-sm">
            <a
              href="/#features"
              className="text-black/80 transition-all duration-200 hover:text-black"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="text-black/80 transition-all duration-200 hover:text-black"
            >
              How it works
            </a>
            <a
              href="/#platforms"
              className="text-black/80 transition-all duration-200 hover:text-black"
            >
              Integrations
            </a>
            <a
              href="/#roi"
              className="text-black/80 transition-all duration-200 hover:text-black"
            >
              ROI
            </a>
            <a
              href="/#faq"
              className="text-black/80 transition-all duration-200 hover:text-black"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/schedule"
              className="hidden lg:inline-flex items-center justify-center rounded-full border-2 border-black px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:bg-black hover:text-white focus:bg-black focus:text-white"
              role="button"
            >
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
