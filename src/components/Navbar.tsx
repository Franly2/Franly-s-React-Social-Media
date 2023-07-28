import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="shadow-sm flex justify-between gap-16 p-3 md:p-5 ">
      <div className="flex gap-6 ">
        <Link
          to="/"
          className=" text-slate-800 md:text-lg font-semibold hover:text-black ease-linear duration-200 underline underline-offset-4"
        >
          Home
        </Link>
        <Link
          to="/login"
          className=" text-slate-800 md:text-lg font-semibold hover:text-black ease-linear duration-200 underline underline-offset-4"
        >
          Account
        </Link>
        {user ? (
          <Link
            to="/post"
            className=" text-slate-800 md:text-lg font-semibold hover:text-black ease-linear duration-200 underline underline-offset-4"
          >
            Post
          </Link>
        ) : null}
      </div>
      <div className="flex gap-3">
        <p className=" text-slate-400 hidden md:inline">{user?.displayName}</p>
        <img src={user?.photoURL || ""} className="rounded-full h-9 -mt-1" />
      </div>
    </div>
  );
};
