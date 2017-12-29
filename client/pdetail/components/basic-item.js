import React from 'react'
import {FormControl} from 'react-bootstrap'

const App = ({value,change,dataItem,readonly = false}) => (
    <FormControl
        type="text"
        placeholder={value || ''}
        data-item={dataItem}
        value={value || ''}
        onChange={change}
        readOnly = {readonly}
    />
)

export default App
