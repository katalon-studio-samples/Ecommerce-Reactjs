import React from 'react'
import styles from '../stylesheets/search.module.sass'
import AutoComplete from '../../autoComplete/AutoCompleteContainer'
import jumpTo from '../../../modules/Navigation'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search({
  search,
  onChange,
  handleSuggest,
  input_value
}) {
  function handleEnterPress(event) {
    if (event.key === 'Enter') {
        search(input_value).then(res => jumpTo('/dashboard'));
    }
  };

  return (
    <div className={styles.outbox} onKeyPress={handleEnterPress}>
      {/* search icon */}
      <div className={styles.icon}>
        <FontAwesomeIcon  icon={ faSearch }/>
      </div>

      {/* search input */}
      <div className={styles.auto}>
        <AutoComplete onChange={onChange} suggest_value={handleSuggest}
        />
      </div>
    </div>
  )
}
