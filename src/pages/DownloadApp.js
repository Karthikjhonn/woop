import React from "react";
import { saveAs } from "file-saver";
import "./button.css";
function DownloadApp() {
  const handleDownload = () => {
    const fileUrl =
      "https://kwoop.netlify.app/asset/apk/application-074e5eb2-02c6-48e7-adee-7f4b92500428.zip";
    saveAs(fileUrl, "Caffino-application.zip");
  };

  return (
    <div className="w-full h-dvh max-h-dvh bg-image flex justify-center items-center relative">
      {/* <div className="bg-black/25 absolute top-0 left-0 w-full h-full "></div> */}
      <div className="absolute  -0 right-0 bottom-0 h-fit  backdrop-blur-[4px] lg:backdrop-blur-2xl lg:bg-yellow-300  flex flex-col justify-center rounded-tl-xl p-6 max-w-sm text-center font-poppins text-base z-10">
        <p className="mb-3">
          "Note that the APK app is only compatible with Android devices;
          download it below.{" "}
        </p>
        <button
          class="cursor-pointer font-medium font-poppins overflow-hidden relative z-100 border border-green-500 group px-8 py-2 flex gap-x-2 items-center mx-auto"
          onClick={handleDownload}
        >
          <p class="relative z-10 text-green-500 group-hover:text-white text-lg duration-500">
            Download Android APK
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-green-500 group-hover:text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span class="absolute w-full h-full bg-green-500 -left-52 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
          <span class="absolute w-full h-full bg-green-500 -right-52 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
        </button>
        <small className="text-[10px] text-red-400">
          {" "}
          Some devices might consider the app to be risky.
        </small>
      </div>
    </div>
  );
}

export default DownloadApp;
