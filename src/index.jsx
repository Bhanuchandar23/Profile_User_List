import "./index.css";

const UserProfile = (props) => {
  
  const { userDetails } = props;
  
  const {ImageUrl, name,role,company } = userDetails;

  return (
    <li className="User_card_Container">
        <img src={ImageUrl} className="avatar" alt ="avatar"/>
        <div className="User_info_Container">
            <h1 className="User_Name">{name}</h1>
            <p className="User_Designation">{role}</p>
            <p className="User_Company">{company} </p>
    
            
        </div>
      
    </li>
  );
};

export default UserProfile;

