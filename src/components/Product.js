import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ProductService from '../services/product.service';
import { withAuth } from '../context/auth.context';
import PaymentService from '../services/payment.service';
import { withRouter } from 'react-router';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
    this.productService = new ProductService();
    this.paymentService = new PaymentService();
  }

  reserveOne() {
    console.log(this.props.id);
    this.paymentService
      .postReserve(this.props.id)
      .then((user) => {
        console.log(user);
        this.props.history.push('/userhomepage');
      })
      .catch((err) => console.log(err));
  }

  // componentDidMount() {
  //   stripeHandler = () => {

  //     const purchaseData = {
  //       userId: this.props.user.id,
  //       productId: this.props.id,
  //     };

  //     const stripe =
  //           Stripe('pk_test_51ILnQfDBy12eDdnejsmTTG6GlhwsWh8NSymWIiPC9kezZmgpKu05LoJM2rKINqh4cVFzrjo6XaVEIdmkONj5hy2Q00XkzEB8zA');

  //           fetch('http://localhost:5000/create-checkout-session', {
  //             method: 'POST',
  //             body: JSON.stringify(purchaseData),
  //           })
  //             .then(function (response) {
  //               return response.json();
  //             })
  //             .then(function (session) {
  //               return stripe.redirectToCheckout({ sessionId: session.id });
  //             })
  //             .then(function (result) {
  //               if (result.error) {
  //                 alert(result.error.message);
  //               }
  //             })
  //             .catch(function (error) {
  //               console.error('Error:', error);
  //             })
  //   }
  // }

  render() {
    console.log('PROPS', this.props);
    return (
      <>
        <script src="https://js.stripe.com/v3/"></script>
        <div className="products">
          <div>
            <h2>{this.props.name}</h2>
          </div>
          <div>
            <ReactPlayer url={this.props.video_demo} />
          </div>
          <div>
            <div>
              <p>{this.props.category}</p>
              <p>{this.props.description}</p>
              <div>
                <h4>
                  {this.props.expert.name} {this.props.expert.surname}
                </h4>
                <div>{this.props.expert.img}</div>
                <p>{this.props.expert.description}</p>
              </div>
              <p>{this.props.price}</p>
              {this.props.isLoggedIn ? (
                <React.Fragment>
                  <button onClick={() => this.reserveOne()}>Buy</button>
                </React.Fragment>
              ) : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(withAuth(Product));
