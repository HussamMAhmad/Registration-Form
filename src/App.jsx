import { useState } from "react";
import "./App.css";
import community from "./assets/community.png";
import { UserRoundPlus, User, Lock, Mail } from "lucide-react";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import UserInfo from "./lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";

function App() {
  const [isSucsse, setIsSucsse] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(UserInfo) });

  function handleSignUp(data) {
    console.log(data);
    setIsSucsse(true);
    setTimeout(() => {
      setIsSucsse(false);
    }, 2000);
    return;
  }

  return (
    <div className="lg:w-screen relative lg:h-screen bg-background flex items-center justify-center antialiased py-10 px-4">
      <div className="w-[60%] max-xl:w-[80%] lg:h-[80vh] max-sm:w-full bg-white rounded-lg shadow-lg flex lg:flex-row flex-col justify-between items-center relative">
        <div className="flex flex-col justify-center items-center h-full flex-1 gap-4 p-8 bg-secondary lg:rounded-l-lg rounded-t-lg w-full text-text font-bold">
          <h1 className="text-3xl text-center">Join to our community!</h1>
          <p className="text-center">Be part of our growing community</p>
          <img src={community} alt="community" className="w-[80%] h-[30%]" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 h-full w-full">
          <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
          <form
            action=""
            className="flex flex-col items-center justify-center gap-6 w-full"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className="w-full">
              <div className="w-full relative">
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Username"
                  className={`w-full p-2 border-secondary outline-0 bg-gray-200 rounded-md border tracking-wide caret-secondary text-[16px]
                    ${errors.name ? "focus:border-red-500" : "border-secondary"}`}
                />
                <User className=" absolute top-[50%] right-4 -translate-1/2 text-slate-400 w-5 h-5" />
              </div>
              <div className="text-red-600 text-[14px]">
                {errors.name && <span>{errors.name.message}</span>}
              </div>
            </div>
            <div className="w-full">
              <div className="w-full relative">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className={`w-full p-2 border-secondary outline-0 bg-gray-200 rounded-md border tracking-wide caret-secondary text-[16px]
                    ${errors.email ? "focus:border-red-500" : "border-secondary"}`}
                />
                <Mail className=" absolute top-[50%] right-4 -translate-1/2 text-slate-400 w-5 h-5" />
              </div>
              <div className="text-red-600 text-[14px]">
                {errors.email && <span>{errors.email.message}</span>}
              </div>
            </div>

            <div className="w-full">
              <div className="w-full relative">
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                  className={`w-full p-2 border-secondary outline-0 bg-gray-200 rounded-md border tracking-wide caret-secondary text-[16px]
                    ${errors.password ? "focus:border-red-500" : "border-secondary"}`}
                />
                <Lock className=" absolute top-[50%] right-4 -translate-1/2 text-slate-400 w-5 h-5" />
              </div>
              <div className="text-red-600 text-[14px]">
                {errors.password && <span>{errors.password.message}</span>}
              </div>
            </div>

            <div className="w-full">
              <div className="w-full relative">
                <input
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="Confirm Password"
                  className={`w-full p-2 border-secondary outline-0 bg-gray-200 rounded-md border tracking-wide caret-secondary text-[16px]
                    ${errors.confirmPassword ? "focus:border-red-500" : "border-secondary"}`}
                />
                <Lock className=" absolute top-[50%] right-4 -translate-1/2 text-slate-400 w-5 h-5" />
              </div>
              <div className="text-red-600 text-[14px]">
                {errors.confirmPassword && (
                  <span>{errors.confirmPassword.message}</span>
                )}
              </div>
            </div>
            <button className="w-full bg-secondary p-2 text-white font-bold rounded-md cursor-pointer hover:bg-primary transition-colors duration-300">
              Sign Up
            </button>
          </form>
          <p className="text-[14px] text-gray-500">
            or login with social platforms
          </p>
          <div className="flex items-center justify-center gap-4">
            <FaGoogle className="w-5 h-5 text-gray-500 cursor-pointer hover:text-primary transition-colors" />
            <FaGithub className="w-5 h-5 text-gray-500 cursor-pointer hover:text-primary transition-colors" />
            <FaFacebookF className="w-5 h-5 text-gray-500 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
        <div className="absolute top-0 left-[50%] bg-white p-4 rounded-full shadow-md -translate-x-1/2 -translate-y-1/2 text-primary">
          <UserRoundPlus />
        </div>
      </div>
      {isSucsse && (
        <div className="absolute bottom-4 right-1 -translate-x-1.5">
          <div className="rounded-2xl bg-green-400 text-xl p-4 text-white transition-all delay-300 shadow-lg">
            Sucssefully sign up
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
