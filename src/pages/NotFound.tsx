
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-simcity-50 to-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-simcity-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! We couldn't find the page you're looking for.
        </p>
        <p className="text-gray-500 mb-8">
          The page might have been moved, deleted, or never existed.
        </p>
        <Button size="lg" className="bg-simcity-600 hover:bg-simcity-700" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
