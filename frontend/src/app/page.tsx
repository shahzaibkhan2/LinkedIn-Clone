import {
  AddFeed,
  Footer,
  LeftProfile,
  Post,
  Recent,
  Status,
} from "@/components";
import HomeContextProvider from "@/context/HomeContext";

const Home = () => {
  return (
    <HomeContextProvider>
      <main className="grid grid-cols-12 w-ful mx-auto px-[5%] lg:px-[10%] gap-6 mt-20">
        <section className="hidden sm:block sm:col-span-4 lg-1:col-span-3 rounded-lg">
          <LeftProfile />
          <Recent />
        </section>
        <section className="col-span-12 sm:col-span-8 lg-1:col-span-6 rounded-lg w-full">
          <Status />
          <Post />
        </section>
        <section className="col-span-3 rounded-lg min-h-screen hidden lg-1:block">
          <AddFeed />
          <Footer />
        </section>
      </main>
    </HomeContextProvider>
  );
};

export default Home;
