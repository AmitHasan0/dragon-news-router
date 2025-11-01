import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn, user } = use(AuthContext);
  // console.log(user);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        //user signed in
        // console.log(res);
      })
      .catch((error) => {
        // error message here
        // console.log(error);
      });
  };
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        {user ? (
          ""
        ) : (
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-secondary btn-outline w-full"
          >
            <FcGoogle size={24} /> Login with Google
          </button>
        )}
        <button className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
