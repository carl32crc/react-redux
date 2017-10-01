import React, { PropTypes, Component } from 'react'

class ComboLanguage extends Component {
    
  render () {
    const data = this.props.data;
    let switchLanguage = this.props.switchLanguage;

    return (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" data-target="#" onClick={switchLanguage.bind(this,'en')}>EN</a></li>
        <li><a href="#" data-target="#" onClick={switchLanguage.bind(this,'lt')}>LT</a></li>
        <li><a href="#" data-target="#" onClick={switchLanguage.bind(this,'ru')}>RU</a></li>
    </ul>
    )
  }
}

export default ComboLanguage;