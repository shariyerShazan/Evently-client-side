import { useLocation, } from "react-router";
import { useEffect, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../Firebase/firebase.init";
import { toast } from "react-toastify";

const auth = getAuth(app);

const ForgotPassword = () => {
    useEffect(() => {
          document.title = "ForgotPassword | EventLy";
        }, []);
  const location = useLocation();
  const emailFromLogin = location.state?.email || "";
  const [email, setEmail] = useState(emailFromLogin);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Redirecting to Gmail...");
      setTimeout(() => {
        window.location.href = "https://mail.google.com";
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-white px-4">
      <form
        onSubmit={handlePasswordReset}
        className="bg-pink-100 p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">Forgot Password</h2>

        <label className="block text-gray-700 mb-2">Enter your email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          placeholder="example@email.com"
        />

        <button
          type="submit"
          className="w-full cursor-pointer hover:scale-105 bg-pink-500 text-white font-semibold py-2 rounded-md hover:bg-pink-600 transition"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
