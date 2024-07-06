function Navbar() {
  return (
    <header>
      <nav className="max-w-5xl mx-auto py-8 px-4 flex justify-between">
        <a href="/">
          <h1 className="text-3xl">
            Task<span className="text-[#ff5631]">Flow</span>
          </h1>
        </a>
        <a href="/">
          <img src="/github.svg" alt="github" className="w-10 h-10" />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
