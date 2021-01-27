import { connect } from 'react-redux'
import AutoComplete from './AutoComplete'
import { filter } from '../../redux/action/filterAction'
import {search} from '../../redux/action/productAction'

const mapStoreToProps = state => ({
  filter_result: state.filter.filter_result,
  error: state.filter.error,
  loading: state.filter.loading
})

const mapDispatchToProps = dispatch => ({
  search: (t) => dispatch(search(t)),
  filter: (t) => dispatch(filter(t))
})

export default connect(mapStoreToProps, mapDispatchToProps)(AutoComplete)