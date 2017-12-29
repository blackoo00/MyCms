import React from 'react'
import {Checkbox} from 'react-bootstrap'

const App = ({is_on_sale,isOnSale}) => (
    <div>
        <Checkbox inline checked={is_on_sale == 1} onChange={isOnSale}>
            是
        </Checkbox>
        <Checkbox inline checked={is_on_sale == 0} onChange={isOnSale}>
            否
        </Checkbox>
    </div>
)

export default App
