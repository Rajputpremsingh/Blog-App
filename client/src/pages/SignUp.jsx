import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl m-auto flex-col gap-5 md:flex-row">
        {/* Left side Div */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Kajal's{" "}
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
            quisquam hic impedit nisi quod veniam maiores fugit qui magnam
            alias?
          </p>
        </div>
        {/* Right side Div */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Username"></Label>
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label value="Email"></Label>
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div className="">
              <Label value="Password"></Label>
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className=" flex gap-2 mt-5">
            <span>Have an Account ? </span>
            <Link to='/sign-in' className="text-blue-500"> Sign-in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
