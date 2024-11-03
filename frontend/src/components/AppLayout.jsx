import NavBar from "./NavBar";
import Dashboard from "./DashBoard";

const AppLayout = () => {
  return (
    <div className="d-flex w-100 h-100 flex-column gap-5">
      <NavBar />
      <div className="d-flex justify-content-center">
      <Dashboard />
      </div>
    </div>
  );
};

export default AppLayout;
