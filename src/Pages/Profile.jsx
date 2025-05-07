import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MyContext } from "../ContextAndAuth/Context";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
    useEffect(() => {
          document.title = "Profile | EventLy";
        }, []);
  const { user, logOut, updateUser, setUser } = useContext(MyContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [updating, setUpdating] = useState(false);

  const handleLogout = () => {
    logOut().then(() => {
      toast.warn("Logout Success");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    });
  };

  const handleUpdate = async () => {
    setUpdating(true);
    try {
      await updateUser({
        displayName: name,
        photoURL: photo,
      });
      setUser({ ...user, displayName: name, photoURL: photo });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(`Failed to update profile! : ${error}`);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white flex items-center justify-center p-5">
      <ToastContainer />
      <div className="bg-pink-100 shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <img
          src={user?.photoURL}
          alt="User Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-500"
        />
        <h2 className="text-2xl font-bold text-gray-800">{user?.displayName}</h2>
        <p className="text-gray-600">{user?.email}</p>

        <div className="mt-6 text-left">
          <label className="block text-sm mb-1 font-semibold text-pink-700">Update Name:</label>
          <input
            type="text"
            className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-pink-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="block text-sm mb-1 font-semibold text-pink-700">Update Photo URL:</label>
          <input
            type="text"
            className="w-full mb-4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-pink-400"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />

          <button
            onClick={handleUpdate}
            disabled={updating}
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition disabled:opacity-50"
          >
            {updating ? "Updating..." : "Update Profile"}
          </button>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 px-5 py-2 bg-pink-400 text-white font-medium rounded-full hover:bg-pink-600 transition hover:scale-110 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
