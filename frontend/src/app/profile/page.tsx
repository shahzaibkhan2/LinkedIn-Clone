import ProfilePicture from "../components/profile/ProfilePicture";
import ProfileTitles from "../components/profile/ProfileTitles";

const Profile = () => {
  return (
    <main className="grid grid-cols-12 w-ful mx-auto px-[5%] lg:px-[10%] gap-6 mt-20">
      <section className="col-span-9 rounded-lg bg-white border border-gray-300">
        <ProfilePicture />
        <ProfileTitles />
      </section>

      <section className="col-span-3 rounded-lg min-h-screen bg-blue-200">
        <div className="p-3 space-y-3">
          <div>
            <h2>Profile</h2>
            <p>Text</p>
          </div>
          <hr />
          <div>
            <h2>Profile</h2>
            <p>Text</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
