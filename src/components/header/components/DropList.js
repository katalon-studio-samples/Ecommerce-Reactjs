import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import jumpTo from '../../../modules/Navigation'
import styles from '../stylesheets/dropList.sass'

export default function DropList({ department, categories,clickCategory }) {
  return (
    <NavDropdown title={department}  >
      {categories && categories.map(c =>
        <NavDropdown.Item className={styles.category_item}
        onClick={()=>{
          clickCategory(c)
          jumpTo('/dashboard')
        }}  
        key={c}>{c}
        </NavDropdown.Item>
      )}
    </NavDropdown>
  )
}


