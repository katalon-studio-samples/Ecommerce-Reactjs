import Signin from './Signin'
import { connect } from 'react-redux'
import { postToken } from '../../redux/action/tokenAction'

const mapDispatchToProps = {
  postToken
}

const mapStoreToProps = state => ({
  signin_loading:state.token.token_loading,
  signin_error:state.token.error
})

export default connect(mapStoreToProps, mapDispatchToProps)(Signin)