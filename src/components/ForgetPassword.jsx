import { Container, VStack, Heading, Text, Input, Button} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <Container>
        <form>
            <VStack 
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}>

                <Heading textAlign={'center'}>Forget Password</Heading>

                <Text textAlign={'center'}>Please enter the information below carefully and click the Reset button to reset it.</Text>

                <Input type='email' placeholder='Email' focusBorderColor='purple.600'
                required>
                </Input>

                <Button bgColor={'purple.600'} color={'white'}>Reset</Button>

                <Button variant={'link'} colorScheme='purple'> 
                    <Link to={'/login'}>{'←'} Back to Login</Link>
                </Button>

            </VStack>
        </form>
    </Container>
  )
}

export default ForgetPassword
