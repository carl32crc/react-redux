import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux';
import ComboLanguage from './combo_language';
import actions from '../../modules/language/actions';

class Header extends Component {
    
  render () {
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;

    return (
      <div className="shop-header">
        <h2>{this.props.text}</h2>
        <ComboLanguage switchLanguage = {switchLanguage} />
      </div>
    )
  }
}

export default connect(
  (state) => ({content: state.language.content}),
  (dispatch) => ({ switchLanguage: (lang) => {
    dispatch(actions.switchLanguage(lang))} })
)(Header);