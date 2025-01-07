import { useParams } from "react-router-dom";


const Profile = () => {
  const { id } = useParams()
  return (
    <div className="p-8">
      <h1 className="text-center text-3xl">Profile com o id :{id}</h1>
    </div>
  );
}

export default Profile;
