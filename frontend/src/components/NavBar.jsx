import { useNavigate } from "react-router-dom";
import { useAuth } from "../authentication/AuthProvider";

const NavBar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  return (
    <nav
      role="navigation"
      className="navbar border border-dark w-100 text-bg-info"
    >
      <div className="container-fluid d-flex justify-content-end position-sticky gap-1">
        <div>
          <span
            onClick={() => navigate("/profile", { state: user })}
            className="text-dark-emphasis link"
          >
            Profile
          </span>
        </div>
        <div>
          <span onClick={() => logout()} className="text-dark-emphasis link">
            Signout
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
