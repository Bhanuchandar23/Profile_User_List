import UserProfile from './index.jsx'
import {Component} from 'react'

  const initialUserDetails  = [
  {
  u_id:1,
  ImageUrl:"https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  name:'Pavan',
  role:"Software Developer",
  company:"CGI",

},
{
  u_id:2,
  ImageUrl:"https://up.yimg.com/ib/th?id=OIP.Cf3rSUAqoBhMkJ-HTHq2aAHaLH&pid=Api&rs=1&c=1&qlt=95&w=67&h=100",
  name:'Sampath Kumar',
  role:"Software Developer",
  company:"CGI",

},
{
  u_id:3,
  ImageUrl:"https://up.yimg.com/ib/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&pid=Api&rs=1&c=1&qlt=95&w=107&h=107",
  name:'Balu',
  role:"Software Developer",
  company:"CGI",

},
{
  u_id:4,
  ImageUrl:"https://sp.yimg.com/ib/th?id=OIP.3tclsNaYPAe0JFVNbPqW4AHaGo&pid=Api&w=148&h=148&c=7&rs=1",
  name:' Zakir Sharif',
  role:"Software Developer",
  company:"CGI",

},
{
  u_id:5,
  ImageUrl:"https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  name:'Kamal',
  role:"Software Developer",
  company:"CGI",

},
];
 class App extends Component {
  state = {
          searchInput:"" ,
          userDetailList : initialUserDetails,

   } 
   onChangeSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  }
  deleteUser =(u_id) => {
    const {userDetailList}= this.state;
    const updatedList = userDetailList.filter((item) => item.u_id!== u_id);
    this.setState({ userDetailList: updatedList });
 

  }
  

  render() { 
      const { searchInput, userDetailList } = this.state;
       
       const searchResults = this.state.userDetailList.filter((item) => item.name.includes(this.state.searchInput));
    return (
      <div className="list-container">
         <h1 className='title'>UserList</h1>
         <input  type="text" placeholder=' Search with Capital letter' value ={searchInput} onChange ={ this.onChangeSearchInput}  />
         <ul >
            {
               searchResults.map((item)=>(
                 <UserProfile key ={item.u_id} userDetails ={item} deleteUser={this.deleteUser} />
               ))
            }
           
 
         </ul>
      
      
      </div>

    );
  }
 }
  
 export default App;

 

  




