import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-40 mt-10 bg-white w-full">
        <div className="z-10 w-full max-w-5xl items-center justify-between text-sm ">
          <div className=" bottom-0 left-0 flex h-30 md:h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none">
              <div className="flex flex-col text-center">
                <h1 className="text-2xl lgtext-4xl text-sky-400/100 font-semibold	">
                  Square Root{" "}
                </h1>
              </div>
          </div>
        </div>

        <div className="flex flex-col place-items-center ">
          <h2 className="text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Coming Soon
            </span>
            <span className="">⏳</span>
          </h2>
          <p
            className="text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin"
            dangerouslySetInnerHTML={{
              __html:
                "We&apos;re currently working 👨‍💻 hard to bring you something great, and we can&apos;t wait to share it with you 📅. Our team is putting the finishing touches on a new project 🚀 that we think you&apos;ll love 😍.",
            }}
          ></p>
        </div>
      </main>
  );
}
