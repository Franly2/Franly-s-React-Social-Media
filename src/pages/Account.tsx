import { provider, auth } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import accountIllustration from "/account.png";
import googleLogo from "/google.svg";
import logoutLogo from "/logout.svg";
import { useAuthState } from "react-firebase-hooks/auth";

export const Account = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  async function signInWithGoogle() {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  }

  async function logOut() {
    await signOut(auth);
  }

  return (
    <div className="mt-10">
      <p className="text-center font-poppins text-6xl text-black font-extrabold">
        Sign In
      </p>
      <div className=" md:flex md:items-center">
        <div className=" md:w-1/2">
          <img
            src={accountIllustration}
            alt="account illustration"
            className=" mx-auto md:1/3"
          />
        </div>
        <div className="flex flex-col gap-5 w-3/4 mt-5 md:mt-0  md:w-60 lg:w-80 mx-auto">
          {user ? (
            ""
          ) : (
            <button
              className="border-2  border-black p-3 flex justify-center gap-3"
              onClick={signInWithGoogle}
            >
              <img src={googleLogo} className="w-6" />
              <p className="text-center">Sign In with Google</p>
            </button>
          )}

          <button
            className="border-2  border-red-700 p-3 flex justify-center gap-3"
            onClick={logOut}
          >
            <img src={logoutLogo} className="w-6" />
            <p className="text-center">Log Out</p>
          </button>
        </div>
      </div>
    </div>
  );
};
