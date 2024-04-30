import React from 'react';
import MainContainer from '../containers/MainContainer';
import { FOOTER_H } from '@/lib/constants';
import { Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { PiBowlFoodFill } from 'react-icons/pi';
const Footer = () => {
	return (
		<MainContainer minH={{ base: 'auto', md: FOOTER_H }} bgColor={'footer'}>
			<Flex flex={1} flexDir={'column'}>
				<Flex
					flex={1}
					flexDir={'column'}
					gap={2}
					justify={{ base: 'auto', md: 'space-around' }}
				>
					<Flex w='full' pt={{ base: 4, md: 12 }}>
						<Icon as={PiBowlFoodFill} fontSize={'3rem'} color='black' />
					</Flex>
					<Flex w='full' pt={{ base: 4, md: 0 }}>
						<Flex flex={1} flexDir={{ base: 'column', md: 'row' }}>
							<Flex flex={1} flexDir={'column'} color={'black'}>
								<Text fontSize={'1.5rem'} fontWeight={400} color={'black'}>
									BRASSERIE & BAR
								</Text>
								<Text
									fontSize={'5rem'}
									fontWeight={400}
									color={'black'}
									mt={-5}
								>
									Cafeiana
								</Text>
							</Flex>
							<Flex flexDir={'column'} gap={3}>
								{/* address */}
								<Text>88, Block E, Road 17/A</Text>
								<Text>Banani, Dhaka 1213</Text>
								<Text>01102355663</Text>
							</Flex>
						</Flex>
						<Stack
							flex={1}
							textAlign={'right'}
							display={{ base: 'none', md: 'flex' }}
							spacing={2}
						>
							{/* navigation */}
							<Text>Home</Text>
							<Text>About</Text>
							<Text>Menu</Text>
							<Text>Contact Us</Text>
						</Stack>
					</Flex>
					<Flex w='full' flexDir={{ base: 'column', md: 'row' }} gap={2}>
						<Text>© 2024 by Cafeiana.</Text>
						<Text>Powered and secured by Thinkcrypt.io</Text>
					</Flex>
				</Flex>
			</Flex>
		</MainContainer>
	);
};

export default Footer;
