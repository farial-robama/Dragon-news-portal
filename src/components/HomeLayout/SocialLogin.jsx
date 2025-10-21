import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import app from '../../Firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const SocialLogin = () => {
    const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("✅ Google Login Success:", result.user);
        toast.success(`Welcome ${result.user.displayName || "User"} 🎉`);
      })
      .catch((error) => {
        console.error("❌ Google Login Error:", error.message);
        toast.error(`Google login failed: ${error.message}`);
      });
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log("✅ GitHub Login Success:", result.user);
        toast.success(`Welcome ${result.user.displayName || "User"} 🎉`);
      })
      .catch((error) => {
        console.error("❌ GitHub Login Error:", error.message);
        toast.error(`GitHub login failed: ${error.message}`);
      });
  };
    return (
        <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={handleGoogleLogin} className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button onClick={handleGithubLogin} className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
    );
};

export default SocialLogin;