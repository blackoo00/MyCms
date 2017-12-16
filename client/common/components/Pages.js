import React from 'react'
import {Pagination} from 'react-bootstrap';

const App = ({activePage,handleSelect,items,maxButtons}) => (
    <Pagination
        style={{marginLeft:'50%',transform:'translate(-50%,0)'}}
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={items}
        maxButtons={maxButtons}
        activePage={activePage}
        onSelect={handleSelect} />
)

export default App
