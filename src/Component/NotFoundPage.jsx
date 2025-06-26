import { Link } from "react-router";
import { FaLeaf } from "react-icons/fa";
import Lottie from "lottie-react";
import pageNotFound from "../404.json";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center px-6">
      <Lottie animationData={pageNotFound} />
      <Link to="/">
        <button className="btn btn-success">Back To Homepage</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
