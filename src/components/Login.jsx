import React from 'react'
import { VStack, Text, Button, Container, Heading, Input} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container>
        <form>
            <VStack 
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}>
                <Heading 
                display={'flex'}
                justifyContent={'center'}
                >
                Welcome Back</Heading>

                <Input type='email' placeholder='Email Id' required focusBorderColor='purple.500'/>

                <Input type='password' placeholder='Password' required focusBorderColor='purple.500'/>

                <Button colorScheme={'purple'} type={'submit'}>
                    Log In
                </Button>
                <Text textAlign={'center'}>
                    <Button 
                    variant={'link'} 
                    alignSelf={'flex-end'}>
                        <Link to={'/forgetpassword'}> Forget Password?  </Link>
                    </Button>
                </Text>

                <Text textAlign={'center'}>
                    New User?{' '}
                    <Button variant={'link'} colorScheme={'purple'}>
                    <Link to={'/signup'}>Sign Up</Link>
                    </Button>
                </Text>

            </VStack>
        </form>
    </Container>
  )
}

export default Login
