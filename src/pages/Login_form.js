import React from 'react';

// import './Pages/Login_form.css';

const handleChange = (key) => {
  // return (handleChange)
  return(console.log(handleChange))
}
const handleChange2 = (key) => {
  // return (handleChange)
  return(console.log(handleChange2))
}
function Login_form(props) {

  const [Login, Password] = React.useState(false);
  
  return (   
    <form>
      <div className="Lable Login">
          <lable Login>Введите логин</lable>   
      </div> 
      <div className="Usert"> <input onChange={handleChange('name')}/>

      </div> 
          <div className="Lable Login">
            <lable Password>Введите пароль</lable>
          </div>
      <div className="password"> <input onChange={handleChange2('password')}   />    
      </div> 
      <div className="button">
            <button onClick={(User_reg) => Login(true) }>Продолжить</button>          
      </div>   
    </form>   
    );    
}





  export default Login_form;
