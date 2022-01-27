import { Stack, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import InputEmail from './inputEmail/InputEmail'
import InputPassword from './inputPassword/InputPassword'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Login = () => {
  const navigateTo = useNavigate()
  const [loading, setLoading] = useState(false)
  const schema = Yup.object().shape({
    email: Yup.string().email().required('This field is required'),
    password: Yup.string().required('This field is required'),
  })

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={async (values) => {
        setLoading(true)
        try {
          const response = await axios.post(`http://challenge-react.alkemy.org`, values)
          setLoading(false)
          localStorage.setItem('token', response.data.token)
          navigateTo('/home')
        } catch (e) {
          swal('Ups!', 'Please provide a valid email and password', 'error')
          setLoading(false)
        }
      }}
    >
      {(props) => (
        <Stack
          w='fit-content'
          p='5rem'
          m='5rem auto'
          textAlign='center'
          borderRadius='1rem'
        >
          <form onSubmit={props.onSubmit}>
            <Stack mb='3rem'>
              <InputEmail />
              <InputPassword />
            </Stack>
            <Button 
              type='submit' 
              isLoading={loading} 
              onClick={props.handleSubmit}
              border='1px solid'
              borderRadius='.8rem'
              rightIcon={<ArrowForwardIcon _hover={{ color:'primary' }} />}
            >Log In</Button>
          </form>
        </Stack>
      )
      }
    </Formik>
  )
}

export default Login
