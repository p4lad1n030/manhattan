import { Link } from "react-router-dom";
import Menu from "../../components/Menu";


const Admin = () => {
  return (
    <div>
      <Menu />
      <h1 className="">Admin</h1>
      <Link to='/'>Home</Link>
    </div>
  );
}

export default Admin;
