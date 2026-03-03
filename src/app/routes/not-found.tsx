import { paths } from "@/config/paths";
import { Link } from "react-router";

export const NotFoundRoute = () => {
  return (
    <div className="min-h-svh flex flex-col justify-center items-center font-semibold bg-accent-foreground text-white space-y-8">
      <div className="text-center">
        <h1 className="text-4xl">
          <span className="text-red-500">404</span> - Not Found
        </h1>
        <p className="mt-2 text-gray-300">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
      <Link
        to={paths.home.getHref()}
        replace
        className="bg-white text-black px-4 py-2 rounded-sm"
      >
        Go to Home
      </Link>
    </div>
  );
};
