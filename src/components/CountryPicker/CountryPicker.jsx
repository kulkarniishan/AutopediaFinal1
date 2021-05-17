import React from 'react'
import{NativeSelect, FormControl} from '@material-ui/core'

const CountryPicker = (input)=> {
    return (
        <div>
        <FormControl>
          <NativeSelect defaultValue="" onChange={(e)=>input.handleCountryChange(e.target.value)}>
          <option value="Global">Global</option>
          { Object.entries(input.data).map(([country,values])=>
          <option key= {country} value={country}>{country}</option>
          )}
          </NativeSelect>
        </FormControl>
      </div>
    )
}

export default CountryPicker;