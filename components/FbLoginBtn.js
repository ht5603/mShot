import React,{Component} from 'react';

class FbLoginBtn extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){

   // (function(d, s, id){
   //   var js, fjs = d.getElementsByTagName(s)[0];
   //   if (d.getElementById(id)) {return;}
   //   js = d.createElement(s); js.id = id;
   //   js.src = "//connect.facebook.net/en_US/sdk.js";
   //   fjs.parentNode.insertBefore(js, fjs);
   // }(document, 'script', 'facebook-jssdk'));

  // 	window.fbAsyncInit = function() {
  //   FB.init({
  //     appId      : '1438931399497252',
  //     cookie     : true,
  //     xfbml      : true,
  //     version    : 'v2.8'
  //   });
  //   FB.AppEvents.logPageView();   
  // };

  }

  fbLogin(){   
    console.log('start FB Login');
  	const context = this;
    FB.getLoginStatus(function(response) {
    	console.log('login status response:' + response);
        context.statusChangeCallback(response);
	});
  }

  statusChangeCallback (response) {
      if (response.status === 'connected'){
      	console.log('fbLogin connected');
      	console.log(response);

      }else if (response.status === 'not_authorized'){
      	console.log('fbLogin not_authorized');
      	FB.login((response)=>{
      		console.log(response);

      	});

      }else{
      	console.log('fbLogin others');
      	FB.login((response)=>{
      		
      	});

      }
     };


  

  testApi(){

  }

  render() {
    return <input type="button" className="button" defaultValue="FB登入" onClick={()=>this.fbLogin()} />;
  }

}

export default FbLoginBtn