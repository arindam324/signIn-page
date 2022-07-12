import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen ">
      <Head>
        <title>Sign In page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex min-h-screen">
        {/* login section */}
        <div className="w-1/2 h-full p-10">
          <h1 className="text-2xl font-semibold">Untitled Ui</h1>
          <div className="flex items-center max-w-xl mx-auto flex-col h-full justify-center">
            <h1 className="text-3xl font-semibold">Welcome back , Arindam</h1>
            <p className="text-gray-600 my-2 text-lg">
              welcome back , please enter your details
            </p>
            <button className="flex items-center w-[60%] justify-center border-gray-600 py-2 rounded-md my-2 space-x-4 border ">
              <Image src="/google.svg" width={30} height={30} />
              <p>sign in with Google</p>
            </button>

            <div className="flex w-full justify-center items-center">
              <div className="h-[2px] w-[30%] bg-gray-300 mx-2" />
              <p className="font-semibold text-gray-600">Or</p>
              <div className="h-[2px] bg-gray-300 w-[30%] mx-2" />
            </div>

            <form className="w-[65%] space-y-4 mx-auto my-4">
              <input
                placeholder="Email"
                className="focus:outline-none font-semibold border-b w-full py-2 focus:border-gray-900"
              />
              <input
                placeholder="Password"
                className="focus:outline-none font-semibold border-b w-full py-2 focus:border-gray-900"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type={"checkbox"} />
                  <p className="text-sm">Remember for 30 days</p>
                </div>
                <a href="#" className="font-semibold underline">
                  Forget Password{" "}
                </a>
              </div>
              <input
                type="submit"
                value={"log in"}
                className="w-full bg-gray-900 text-white font-semibold rounded-lg cursor-pointer my-2 py-2"
              />
              <div className="flex items-center relative  space-x-1 justify-center">
                <p className="text-sm text-gray-700">Don't have an account?</p>
                <a href="#" className="text-md underline font-semibold">
                  Sign Up for free
                </a>

                <svg
                  width="159"
                  height="38"
                  viewBox="0 0 159 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-10 right-4 "
                >
                  <path
                    d="M1 34.6973C16.8143 36.5547 28.4719 36.9972 43.1509 31.4189C51.2774 28.3306 60.0855 23.2889 65.6853 16.4946C66.4969 15.5098 76.1839 3.10366 72.6156 1.31962C68.8476 -0.564293 64.3641 6.40024 62.5534 8.63801C56.5556 16.0506 46.1268 35.1814 63.214 36.1775C75.0659 36.8684 86.6706 30.7515 97.5049 26.7581C117.164 19.5121 136.732 15.0372 157.456 12.0724"
                    stroke="#000000 "
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
            </form>
          </div>
        </div>
        {/* carousel */}
        <div className="w-1/2 h-full relative">
          <Image
            objectFit="cover"
            layout="fill"
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
