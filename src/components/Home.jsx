import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/colorful-beautiful-flowers-background-blossom-floral-bouquet-decoration-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1105.jpg?w=900&t=st=1682230786~exp=1682231386~hmac=7c493cb2fafe04873d9ae5edc764c2e3944ad7553310c85d86ccedbd747fe4c4")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h3 className="mb-5 text-4xl font-bold">
            Good evening,{" "}
            {user && <span className="text-5xl">{user.displayName}</span>}
          </h3>

          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="">
            <Link to="/register">
              <button className="btn btn-primary mr-2">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-primary ml-2">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
