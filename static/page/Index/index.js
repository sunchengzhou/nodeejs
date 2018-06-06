import './css/root.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>123</div>
    )
  }
}


ReactDOM.render(
  <App />,
document.getElementById('root')
);