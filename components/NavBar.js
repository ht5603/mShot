import React, { Component } from 'react'
import TextDisplay from './TextDisplay';
import FbLoginBtn from './FbLoginBtn.js';
import axios from 'axios';

class NavBarCompt extends Component {

  constructor(props){
    super(props);
     this.state = {
      account : '',
      pwd : '',
      loginState : false
    };

     
    
  }

  //   componentWillMount() {
//     axios.get('http://localhost:8000/testAjax')
//     .then((res) => {
//       console.log(res.data);
//       this.setState({data: res.data});
//     })
//   }

  login() {
    console.log('account:' + this.state.account);
    var context = this;
    axios.post('/login', {
        account: this.state.account,
        pwd: this.state.pwd
      })
    .then(function (response) {
        console.log('login response is:' + response.data.result);
        if(response.data.result === 'success') {
          alert('登入成功');
          context.setState({loginState:true, pwd:''});
        }else {
          throw 'fail';
        }
     })
    .catch(function (error) {
        console.log(error);
        context.setState({ pwd:'', account:''});
        alert('登入錯誤');

    });
    
  }

  accountHandleChange(e) {
    console.log(e.target);
    console.log('handle account:' +  e.target.value);
    this.setState({account: e.target.value});
  }

  pwdHandleChange(e) {
    console.log('handle pwd:' +  e.target.value);
    this.setState({pwd: e.target.value});
  }


  render() {
     return (
       <div className="">
       {
        this.state.loginState
        ?
        <span> {this.state.account} </span>
        :
        <table width="100%">
        <tbody>
        <tr>
            <td width="6%"><lable className="navbar_text_size navbar_text_color">帳號</lable></td>
            <td width="3%" />
            <td width="6%"><lable className="navbar_text_size navbar_text_color">密碼</lable></td>
          </tr>
          <tr>
            <td width="6%"> 
                <input type="text" className="navbar_text_size" size={20} defaultValue={this.state.account} onChange={(e) => this.accountHandleChange(e)} /> 
            </td>
            <td width="3%">&nbsp;</td>
            <td width="6%">
                <input type="password" className="navbar_pwd_size" size={20} defaultValue={this.state.pwd} onChange={(e) => this.pwdHandleChange(e)}  />
            </td>
            <td width="9%">&nbsp;&nbsp;&nbsp;</td>
            <td width="30%" >
                <input type="button" className="button" defaultValue="登入" onClick={()=>this.login()} />  
                 
            </td> 
            <td>&nbsp;</td>
            <td width=""><a href="/regeister"> <input type="button" className="button" defaultValue="註冊" /> </a></td>  
            <td>&nbsp;</td>
            <td width=""> <FbLoginBtn/> </td>      
            
          </tr>
        </tbody>  
        </table>
       } 


       
       </div>
    )
  }
}


export default NavBarCompt

