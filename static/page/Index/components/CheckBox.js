import React from 'react';

class CheckBox extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="checkbox-ui">
        <div className="weui-cells__title">1.您以前是否有购买过平安寿险产品？</div>

        <div className="weui-cells weui-cells_checkbox">
          <label className="weui-cell weui-check__label">
            <div className="weui-cell__hd">
              <input type="checkbox" className="weui-check" name="checkbox1" id="s11"/>
              <i className="weui-icon-checked"></i>
            </div>
            <div className="weui-cell__bd">
              <p>这里可能需要做一个很长很长的测试，看看你的框架是否扛得住喔</p>
            </div>
          </label>
          <label className="weui-cell weui-check__label">
            <div className="weui-cell__hd">
              <input type="checkbox" name="checkbox1" className="weui-check" id="s12" />
              <i className="weui-icon-false"></i>
            </div>
            <div className="weui-cell__bd">
              <p>standard is dealicient for u.</p>
            </div>
          </label>
          <label className="weui-cell weui-check__label">
            <div className="weui-cell__hd">
              <input type="checkbox" className="weui-check" name="checkbox1" id="s11"/>
              <i className="weui-icon-default"></i>
            </div>
            <div className="weui-cell__bd">
              <p>这里可能需要做一个很长很长的测试，看看你的框架是否扛得住喔</p>
            </div>
          </label>
        </div>
      </div>
    )
  }
}

export default CheckBox;