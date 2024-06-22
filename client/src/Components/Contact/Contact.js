import React from 'react'
import ProfileCard from '../Home/ProfileCard'
import { Text,Flex } from "@chakra-ui/react"

function Contact() {
  return (
    <>
      <Text fontSize="4xl" align="center" justify="center" m={10}>
        Contact Us
      </Text>
      <Flex align="center" justify="center" h="" gap={10} m={0} p={0} wrap="wrap">
          <ProfileCard url="https://i.postimg.cc/h4YFsSCh/sahil.jpg" name="Sahil Shile" description="MERN Developer" year ="Final Year Undergrad 2025" college="Walchand College of Engineering , Sangli" department = "Computer Science and Engineering" linkedin="https://www.linkedin.com/in/sahil-shile-57b39a221/" github="https://github.com/sahil7264" email="mailto:shile.sahil726@gmail.com" />
        {/* <HStack gap={20} 
        </HStack> */}
        {/* <HStack  gap={20}>
        </HStack> */}
      </Flex>
    </>
  )
}

export default Contact