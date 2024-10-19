import ProfilePicture from "../components/profile/ProfilePicture";

const Profile = () => {
  return (
    <main className="grid grid-cols-12 w-ful mx-auto px-[5%] lg:px-[10%] gap-6 mt-20">
      <section className="col-span-9 rounded-lg">
        <ProfilePicture />
      </section>

      <section className="col-span-3 rounded-lg min-h-screen bg-blue-200">
        <h1>Hello world</h1>
      </section>
    </main>
  );
};

export default Profile;
