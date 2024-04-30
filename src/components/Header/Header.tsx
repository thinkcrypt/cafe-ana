import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_MOBILE } from '@/lib/constants';
import { Flex, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import MainContainer from '../containers/MainContainer';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
	return (
		<>
			<MainContainer
				bgColor={'navBackground'}
				w='100vw'
				h={NAVBAR_HEIGHT}
				align={'center'}
				justify={'space-between'}
				position={{ base: 'static', md: 'fixed' }}
				top={0}
				left={0}
				zIndex={100}
				display={{ base: 'none', md: 'flex' }}
			>
				<Text fontSize={'5rem'} fontWeight={400}>
					Cafeiana
				</Text>
				<Stack>
					<Text>Home</Text>
					<Text>Menu</Text>
				</Stack>
			</MainContainer>
			<MainContainer
				bgColor={'navBackground'}
				w='100vw'
				h={NAVBAR_HEIGHT_MOBILE}
				align={'center'}
				display={{ base: 'flex', md: 'none' }}
				justify={'space-between'}
			>
				<Text fontSize={'3rem'} fontWeight={400}>
					Cafeiana
				</Text>
				<Icon as={GiHamburgerMenu} name='menu' fontSize={'2rem'} />
			</MainContainer>
			<Flex
				w='full'
				h={NAVBAR_HEIGHT}
				display={{ base: 'none', md: 'flex' }}
			></Flex>
		</>
	);
};

export default Header;
