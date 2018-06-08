import './css/weui.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import CheckBox from './components/CheckBox.js';
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="weui-article">
        <h1 className="page__title">平安寿险产品</h1>
        <CheckBox />
        <CheckBox />
        <a href="javascript:;" className="weui-btn weui-btn_primary">确认提交</a>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);