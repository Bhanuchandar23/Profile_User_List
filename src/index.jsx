import "./index.css";

const UserProfile = (props) => {
  const { userDetails} = props;  
  
  const {ImageUrl, name,role,company ,u_id} = userDetails; 
  const onDelete = () => {
   props. deleteUser(u_id);
  }; 

  return (
    <li className="User_card_Container">
        <img src={ImageUrl} className="avatar" alt ="avatar"/>
        <div className="User_info_Container">
            <h1 className="User_Name">{name}</h1>
            <p className="User_Designation">{role}</p>
            <p className="User_Company">{company} </p>
            <button className="btn" onClick ={onDelete}>
              <img src="https://cdn-icons-png.flaticon.com/128/1828/1828774.png" alt="cross" className="delete-img" />
            </button>

            
          
        </div>
      
    </li>
  );
};

export default UserProfile;

