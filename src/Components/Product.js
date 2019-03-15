import React, { Component } from 'react';
import './Product.css';

class Product extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.onClickDetail2 = this.onClickDetail2.bind(this);
  }

  onClick() {
    alert(111)
  }

  onClickDetail(a) {
    alert(a)
  }

    onClickDetail2() {
    alert(this.props.price)
  }

    onClickDetail3 = () => {
    alert(this.props.price)
  }


  render() {
    return (
      <div>
      		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="thumbnail">
              <img className="product-image" src="https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/129251/7/129251759_1GG.png" alt="123"/>
              <div className="caption">
                <h3>{this.props.name}</h3>
                <p> 
                  {this.props.price}VND
                </p>
               <button type="button" className="btn btn-success" onClick={this.onClick}>Mua hàng</button>
               <button type="button" className="btn btn-success" onClick={ () => {this.onClickDetail(this.props.price)}}>Chi tiết</button>
                <button type="button" className="btn btn-success" onClick={ this.onClickDetail2}>Chi tiết 2</button>
                <button type="button" className="btn btn-success" onClick={ this.onClickDetail3}>Chi tiết 3</button>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default Product;
