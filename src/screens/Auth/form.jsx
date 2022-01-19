import bcrypt from 'bcryptjs'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/button'
import Input from '../../components/Input/input'
import { FormWrap, Row, TabButton } from './style'

const inputs_sign_in = [
  {
    key: 0,
    type: 'email',
    name: 'email',
    placeholder: 'Enter Email',
    rules: {
      required: { value: true, message: 'This field is required' },
    },
  },
  {
    key: 2,
    type: 'password',
    name: 'password',
    placeholder: 'Enter Password',
    rules: {
      required: { value: true, message: 'This field is required' },
      minLength: { value: 6, message: 'Minimum length - 6' },
      pattern: {
        value: /[A-Z]+[0-9]+[@#_*$@%&]+/,
        message:
          'Must be at least one upper case letter, number and specia character',
      },
    },
  },
]

const inputs_sign_up = [
  {
    key: 1,
    type: 'text',
    name: 'name',
    placeholder: 'Enter Your Name',
    rules: {
      required: { value: true, message: 'This field is required' },
    },
  },
  ...inputs_sign_in,
]

const tabs = [
  {
    text: 'Sign In',
    type: 'sign_in',
    to: '/sign-in',
  },
  {
    text: 'Sign Up',
    type: 'sign_up',
    to: '/sign-up',
  },
]

const Form = ({ type }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ reValidateMode: 'onChange' })
  const navigate = useNavigate()

  const inputs = type === 'sign_in' ? inputs_sign_in : inputs_sign_up

  const getUser = (email) => {
    const users = JSON.parse(localStorage.getItem('users')) || []

    const isUserExist = users?.find((item) => item.email === email)

    return isUserExist
  }

  const register = async (values) => {
    if (getUser(values.email)) {
      alert('User with such email already exist')
      return
    }

    const hashedPassword = bcrypt.hashSync(values.password, 8)

    const users = JSON.parse(localStorage.getItem('users')) || []

    const newUsers = [...users, { ...values, password: hashedPassword }]

    localStorage.removeItem('register_data')
    localStorage.setItem('users', JSON.stringify(newUsers))
    localStorage.setItem(
      'currentUser',
      JSON.stringify({ ...values, password: hashedPassword })
    )

    navigate('/home')

    reset({ email: null, password: null, name: null })
  }

  const logIn = (values) => {
    const user = getUser(values.email)

    if (!user) {
      alert('No such user with this email')
      return
    }

    const isPassCorrect = bcrypt.compareSync(values.password, user.password)

    if (!isPassCorrect) {
      alert('Wrong credentials')
      return
    }
    localStorage.setItem('currentUser', JSON.stringify(user))
    localStorage.removeItem('register_data')
    navigate('/home')
  }

  const onSubmit = (values) => {
    if (type === 'sign_up') {
      register(values)
    } else {
      logIn(values)
    }
  }

  const onBlur = (name, value) => {
    if (name === 'password' || !value) return null
    const currentData = JSON.parse(localStorage.getItem('register_data'))

    const newValues = { ...currentData, [name]: value }

    localStorage.setItem('register_data', JSON.stringify(newValues))
  }

  useEffect(() => {
    if (type === 'sign_up') {
      if (localStorage.getItem('register_data')) {
        reset(JSON.parse(localStorage.getItem('register_data')))
      }
    } else {
      reset({ email: null, password: null })
    }
  }, [type])

  return (
    <FormWrap onSubmit={handleSubmit(onSubmit)}>
      <Row>
        {tabs.map(({ text, to, type: buttonType }) => (
          <TabButton active={buttonType === type} key={to}>
            <Link to={to}>{text}</Link>
          </TabButton>
        ))}
      </Row>
      {inputs.map(({ key, type, name, placeholder, rules }) => (
        <Input
          type={type}
          control={control}
          name={name}
          placeholder={placeholder}
          key={key}
          rules={rules}
          error={errors?.[name]?.message}
          handleBlur={(value) => onBlur(name, value)}
        />
      ))}
      <Button text={'Submit'} />
    </FormWrap>
  )
}

export default Form
