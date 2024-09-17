import UserProfile from './index.jsx'

const userDetails  = [
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

  

  

const App  = () =>(
  <div className="list-container">
    <h1 className='title'>UserList</h1>
  <ul>
    {
      userDetails.map((item)=>(
        <UserProfile key ={item.u_id} userDetails ={item}/>
      ))
    }
  </ul>
  
    
  </div>
) 

export default App;
