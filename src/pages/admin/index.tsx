import { Link } from "react-router-dom";
import Menu from "../../components/Menu";
import Footer from "../../components/footer";


const Admin = () => {
  return (
    <div>
      <Menu />
      <h1 className="">Admin</h1>
      <Link to='/'>Home</Link>

      <Footer />
    </div>
  );
}

export default Admin;
