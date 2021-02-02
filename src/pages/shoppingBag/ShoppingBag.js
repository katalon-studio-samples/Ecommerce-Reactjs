import React from 'react'
import Header from '../../components/header/headerContainer'
import Footer from '../../components/footer/Footer'
import styles from './stylesheets/shoppingBag.module.sass'
import { Button } from '@material-ui/core'
import Table from './components/Table'
import jumpTo from '../../modules/Navigation'
import emptyBag from '../../assets/images/emptyCart.svg'

export default function ShoppingBag(props) {
  const { totalPrice, items } = props.cart
  const { postCart } = props
  if (items === undefined || items.length == 0) {
    return (
    <div>
      <div className={styles.outbox}>
        <Header />
        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.title.concat(" my-2")}>
              Nothing in your bag
            </div>
            <img src={emptyBag} alt="" />
            <div className={styles.process_box}>
                <Button className={styles.btn_checkout} onClick={() => jumpTo('/dashboard')} variant="primary">
                  Shopping more
                </Button>
            </div>
          </div>
        </div>
      </div>
      {/*Footer*/}
      <Footer />
    </div>
    );
  }
  return (
    <div>
    <div className={styles.outbox}>
      <Header />
      <div className={styles.box}>
        <div className={styles.content}>
          <div className={styles.title.concat(" my-2")}>
            Shopping Bag
          </div>
          <div className={styles.table}>
            <Table
              items={items || {}}
              handleClick={(pid, increase, decrease) => postCart(pid, increase, decrease)}
            />
          </div>
          <div className={styles.process_box}>
            <div className={styles.total}>
              Total: ${totalPrice}
            </div>
              <Button className={styles.btn_checkout} onClick={() => jumpTo('/checkout')} variant="primary">
                Checkout
              </Button>
          </div>
        </div>
      </div>
    </div>
    {/*Footer*/}
    <Footer />
    </div>
  )
}
