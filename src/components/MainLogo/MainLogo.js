import { Link } from "react-router-dom";

export default function MainLogo({ className }) {
  return (
    <div className={`logo ${className || ""}`}>
      <Link to="/">
        <img src="./assets/images/Logo.png" alt="" />
      </Link>
    </div>
  );
}
