import { paths } from "@/config/paths";
import type React from "react";
import { Link } from "react-router";

type LayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="min-h-svh flex flex-col justify-center bg-bg-light py-12 sm:px-6 lg:px-8 relative">
        <div className="absolute top-14 left-14 font-bold text-4xl">
          <Link
            to={paths.home.getHref()}
            className="flex flex-col -space-y-3 text-accent tracking-tighter"
          >
            <span>BEYOND</span>
            <span>ECHO</span>
            <span>LINK</span>
          </Link>
        </div>

        {/* <div className="sm:mx-auto sm:w-full sm:max-w-md hidden"> */}
        {/*   <div className="flex justify-center">ANJAY</div> */}
        {/* </div> */}

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg md:rounded-3xl sm:px-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
