// import React, { Component } from 'react'
// import Proptest from './Proptest.js';
// import axios from 'axios';

// class TextDisplay extends Component {

//   constructor() {
//     super()
//     this.state = {
//       data: ''
//     }
//   }
//   componentWillMount() {
//     axios.get('http://localhost:8000/testAjax')
//     .then((res) => {
//       console.log(res.data);
//       this.setState({data: res.data});
//     })
//   }

//   render() {
//     return (
//       <div>
//         {this.state.data}
//       </div>
//     )
//   }
// }

// export default TextDisplay


import React, { Component } from 'react'

const TextDisplay = () => (
  <div>TextDisplay</div>
);

export default TextDisplay

