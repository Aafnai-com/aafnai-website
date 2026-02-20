import { Link } from "react-router-dom";
import "../styles/pages/404.css";
import Spline from "@splinetool/react-spline";

export default function NotFound() {
  return (
    <div className="notfound-container">
        <Spline scene="https://prod.spline.design/QoHigjIvHFCVHJx2/scene.splinecode" 
        style={{ width: "400px", height: "300px"}}/>
      <h1 className="notfound-404">404</h1>
      <p className="notfound-text">
        Oops! The page you're looking for doesn't exist.
      </p>
      <div className="notfound-divider"></div>
      <Link to="/" className="notfound-button">
        Go back home
      </Link>
    </div>
  );
}
