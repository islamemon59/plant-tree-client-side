import { Link } from "react-router";
import { FaLeaf } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-xl">
        <div className="text-9xl font-bold text-green-600 mb-4">404</div>
        <FaLeaf className="text-5xl text-green-500 animate-bounce mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Lost in the Forest?</h1>
        <p className="text-lg text-base-content/70 mb-6">
          The page you’re looking for has vanished like morning mist in a rainforest.
        </p>
        <Link to="/" className="btn btn-success btn-wide">
          🌿 Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
