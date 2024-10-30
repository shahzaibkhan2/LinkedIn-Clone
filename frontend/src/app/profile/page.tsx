import ProfilePicture from "../components/profile/ProfilePicture";
import ProfileTitles from "../components/profile/ProfileTitles";
import ProfileWork from "../components/profile/ProfileWork";
import { ImPencil } from "react-icons/im";

const Profile = () => {
  return (
    <main className="grid grid-cols-12 w-ful mx-auto px-[5%] lg:px-[10%] gap-6 mt-20">
      <section className="col-span-9 rounded-lg bg-white border border-gray-300">
        <ProfilePicture />
        <ProfileTitles />
        <ProfileWork />
      </section>

      <section className="col-span-3 rounded-lg min-h-screen">
        <div className="bg-white border border-gray-300 rounded-lg">
          <div className="p-3 flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg text-gray-600">
                  Profile language
                </h2>

                <ImPencil className="size-4 transition duration-300" />
              </div>
              <p className="text-gray-500">English</p>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg text-gray-600">
                  Public profile & URL
                </h2>
                <ImPencil className="size-4 transition duration-300" />
              </div>
              <p className="text-gray-500">
                www.linkedin.com/in/engr-shahzaib-khan1
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
