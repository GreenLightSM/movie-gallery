import React from 'react'
import { Controller } from 'react-hook-form'
import { Error, InputStyled } from './style'

const Input = ({
  type,
  control,
  name,
  rules,
  placeholder,
  error,
  handleBlur,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <InputStyled
            type={type}
            onChange={onChange}
            onBlur={(e) => handleBlur && handleBlur(e.target.value)}
            placeholder={placeholder}
            error={error}
            value={value || ''}
          />
        )}
      />
      <Error>{error}</Error>
    </>
  )
}

export default Input
