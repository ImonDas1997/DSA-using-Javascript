function navbar() {
  return `<div id="navbar">  
        <h3> <a href="/">Home</a> </h3> 
        
        <div class="options"> 
          <h3><a href="users.html">Users</a></h3> 
          <h3><a href="posts.html">Posts</a></h3>
          <h3><a href="#">Register</a></h3>
          
          <h3><a href="#">Login</a></h3> 

             </div> 
             </div>`;
}
function test() {}
//for multiple export syntax is  -->export (navbar,test)
//export default navbar--> if u use it dont use {}in import

export { navbar };
