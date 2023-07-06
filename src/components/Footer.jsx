import React from 'react'
import { Box, Button, CloseButton, HStack, Heading, Input, Stack, VStack, Text} from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']} >

            <VStack
            alignItems={'stretch'}
            w={'full'}
            px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                   Get Updates
                </Heading>

                <HStack 
                borderBottom={'1px solid white'}>
                    <Input placeholder='Enter Email'
                        border={'none'}
                        borderRadius={'none'}
                        outline={'none'}
                        focusBorderColor='none'
                        // width={'250px'}
                    />
                    <Button p={'0'} 
                        colorScheme={'purple'}
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={'20'}/>
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            >
            <Heading size={'md'}
            textTransform={'uppercase'}
            textAlign={'center'}>
                Video Hub
            </Heading>
            <Text>@All Rights Reserved</Text>
            </VStack>

            <VStack w={'full'}>
                <Heading
                size={'md'}
                textTransform={'uppercase'}>Connect With Me</Heading>

                <Button variant={'link'}
                colorScheme={'whiteAlpha.100'}
                >
                    <a href='https://www.instagram.com/pushpaj_kanwade'
                    target='blank'
                    >Instagram</a>
                </Button>

                <Button variant={'link'}
                colorScheme={'whiteAlpha.100'}
                >
                    <a href='https://github.com/Pushpaj99'
                    target='blank'
                    >Github</a>
                </Button>

                <Button variant={'link'}
                colorScheme={'whiteAlpha.100'}
                >
                    <a href='https://www.linkedin.com/in/pushpaj-kanwade-346240228/'
                    target='blank'
                    >Linkedin</a>
                </Button>
            </VStack>

        </Stack>

    </Box>
  )
}

export default Footer
