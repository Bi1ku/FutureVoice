function PageNotFound() {
  return (
    <main className="grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center mb-[96px]">
        <p className="text-base md:text-3xl font-semibold text-[#457B9D]">
          404
        </p>
        <h1 className="mt-4 md:mt-0 sm:mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
    </main>
  );
}

export default PageNotFound;
