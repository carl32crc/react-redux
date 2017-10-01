import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './header';
import CartItem from './cart_item';

class Cart extends Component {
  constructor(props){
    super(props);
    this.handleBack = this.handleBack.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }


  // navegar de vuelta al catálogo
  handleBack(e){
    this.props.onNavigate('catalog');
  }

  // ir al checkout
  handleCheckout(e){
    this.props.onNavigate('checkout');
  }

  


  render(){

    console.log('cart', this.props.content.content.page.about.header)

    const cartItems = this.props.products.map(p =>
      <CartItem
        key={ p.id }
        product={ p }
        onChangeQuantity={ this.props.onChangeQuantity }/>);

    const total = this.props.products.reduce((acc, p) => {
      return acc + (p.price * p.qty);
    }, 0).toFixed(2);

    return (
      <div className="cart">
        <Header text='Tu compra' />
        <div className="cart-contents">
          <table cellSpacing="0">
            <thead>
              <tr>
                <th className="qty">{this.props.content.content.page.about.header}</th>
                <th className="description">Producto</th>
                <th className="unit-price">Precio</th>
                <th className="subtotal">Total</th>
                <th className="actions"></th>
              </tr>
            </thead>
            <tbody>
              { cartItems }
              <tr className="summary">
                <td colSpan="4" className="total">
                  { total } &euro;
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="footer">
            <a className="button" onClick={ this.handleBack }>Seguir comprando</a>
            { this.props.products.length ?
              <a className="button" onClick={ this.handleCheckout }>Finalizar compra</a> :
                null
            }
          </div>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  onChangeQuantity: PropTypes.func,
  onNavigate: PropTypes.func
}


const mapStateToProps = state => ({
  route: state.route,
  content: state.language
})


export default connect(mapStateToProps)(Cart);
