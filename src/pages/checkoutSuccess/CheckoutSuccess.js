import React, { Component } from 'react'
import mapSearchURL from './utils/mapSearchURL'
import jumpTo from '../../modules/Navigation'
import Header from '../../components/header/headerContainer'
import checkMark from '../../assets/images/checkmark.svg'
import styles from './stylesheet/checkoutSuccess.module.sass'
export default class CheckoutSuccess extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    const UrlQuery = this.props.location.search
    const queryPair = mapSearchURL(UrlQuery)
    if (queryPair.has("paymentId") && queryPair.has("PayerID")) {
      this.props.getPayment(queryPair.get("paymentId"), queryPair.get("PayerID"))
    }
  }

  render() {
    const payment = this.props.payment
    return (
      <div className={styles.outbox}>
        <Header />
        {payment &&
          <div className={styles.box}>
            <div className={styles.checkMark}>
              <div className={styles.pic}>
                <img src={checkMark} alt="" />
              </div>
                <div className={styles.text}>
                  Order Successful!
                </div>
              <div style={{fontSize: "1.2em"}}>
                Thank you for your order.
              </div>
            </div>
              <div className={styles.btn}>
                <button onClick={() => jumpTo('/dashboard')}>
                  <FontAwesomeIcon icon={ faStepBackward }/>
                  Back to Home</button>
              </div>
            </div>
        }
      </div>
    );
  }
}

