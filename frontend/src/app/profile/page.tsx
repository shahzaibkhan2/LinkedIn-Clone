import {
  ProfilePicture,
  ProfileRightUrl,
  ProfileTitles,
  ProfileWork,
  SuggestedProfiles,
} from "../components";

const Profile = () => {
  return (
    <main className="grid grid-cols-12 w-ful mx-auto px-[5%] lg:px-[10%] gap-6 mt-20">
      <section className="col-span-9 rounded-lg bg-white border border-gray-300">
        <ProfilePicture />
        <ProfileTitles />
        <ProfileWork />
      </section>

      <section className="col-span-3 rounded-lg min-h-screen">
        <ProfileRightUrl />
        <SuggestedProfiles suggestTitle="More profiles for you" />
        <SuggestedProfiles suggestTitle="People you may know" />
      </section>
    </main>
  );
};

export default Profile;
