import React, { createElement } from 'react'

export const TimePicker = ({value, onChange}:any) => {
  return createElement('input', {
    type: 'time',
    value: value,
    onChange: onChange,
    style:{
      backgroundColor: 'transparent',
      fontSize: '20px',
      color: '#f2f6fa',
      borderWidth: '0px',
      outline: 'none',
    }
  })
}


export const DatePicker = ({value, onChange}:any) => {
  return createElement('input', {
    type: 'date',
    value: value,
    onChange: onChange,
    style:{
      backgroundColor: 'transparent',
      fontSize: '20px',
      color: '#f2f6fa',
      borderWidth: '0px',
      outline: 'none',
    }
  })
}
