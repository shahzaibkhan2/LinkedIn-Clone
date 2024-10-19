const Home = () => {
  return (
    <main className="grid grid-cols-12 w-ful mx-auto px-[5%] lg:px-[10%] mt-6 gap-6">
      <section className="hidden sm:block sm:col-span-4 lg-1:col-span-3 rounded-lg">
        <p>Hello</p>
      </section>
      <section className="col-span-12 sm:col-span-8 lg-1:col-span-6 rounded-lg w-full">
        <h1>Hello</h1>
      </section>
      <section className="col-span-3 rounded-lg min-h-screen hidden lg-1:block">
        <h2>Wow</h2>
      </section>
    </main>
  );
};

export default Home;
