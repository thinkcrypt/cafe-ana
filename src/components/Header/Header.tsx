import { NAVBAR_HEIGHT } from '@/lib/constants';
import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import MainContainer from '../containers/MainContainer';

const Header = () => {
	return (
		<MainContainer
			bgColor={'navBackground'}
			w='100vw'
			h={NAVBAR_HEIGHT}
			align={'center'}
			justify={'space-between'}
			position={'fixed'}
			top={0}
			left={0}
			zIndex={100}
		>
			<Text fontSize={'4rem'} fontWeight={400}>
				PUREMINT
			</Text>
			<Stack>
				<Text>Home</Text>
				<Text>Menu</Text>
			</Stack>
		</MainContainer>
	);
};

export default Header;
