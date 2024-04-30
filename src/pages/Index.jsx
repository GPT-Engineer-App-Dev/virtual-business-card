import { Box, Flex, Text, Heading, VStack, Input, Button, FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import { FaUser, FaEnvelope, FaPhone, FaHome } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="lg">My Portfolio</Heading>
        <Flex>
          <Button variant="ghost" mr={3}>Home</Button>
          <Button variant="ghost" mr={3}>About</Button>
          <Button variant="ghost">Contact</Button>
        </Flex>
      </Flex>
      <Flex direction="column" align="center" justify="center" h="90vh" bg="gray.100">
        <Heading>Welcome to My Portfolio</Heading>
        <Text fontSize="xl" mt={3}>Discover my world of web development and design.</Text>
      </Flex>
      <VStack spacing={8} p={8} bg="white">
        <Heading size="lg">About Me</Heading>
        <Text fontSize="md">I am a passionate web developer with a knack for creating visually appealing and user-friendly websites. My expertise includes modern web technologies and design principles that ensure a great user experience on any device.</Text>
      </VStack>
      <Box bg="gray.200" p={8}>
        <Heading size="lg" mb={6}>Contact Me</Heading>
        <VStack spacing={5} as="form">
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your Name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your Email" />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your Message" />
          </FormControl>
          <Button colorScheme="blue" type="submit">Send Message</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;