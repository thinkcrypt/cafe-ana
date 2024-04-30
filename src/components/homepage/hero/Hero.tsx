import MainContainer from '@/components/containers/MainContainer';
import { NAVBAR_HEIGHT, NAVBAR_HEIGHT_MOBILE } from '@/lib/constants';
import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
	return (
		<main>
			<MainContainer
				w='full'
				h={{
					base: `calc(100vh - ${NAVBAR_HEIGHT_MOBILE})`,
					md: `calc(100vh - ${NAVBAR_HEIGHT})`,
				}}
				position={'relative'}
			>
				<Flex
					zIndex={10}
					flexDir={'column'}
					color={'white'}
					fontWeight={300}
					fontSize={'2rem'}
					pt={4}
				>
					<Text>BRASSERIE</Text>
					<Text>& BAR</Text>
				</Flex>
				<Image
					src='/assets/noodles.jpg'
					alt='noodles'
					w='full'
					h='full'
					objectFit={'cover'}
					position={'absolute'}
					top={0}
					left={0}
				/>
			</MainContainer>
		</main>
	);
};

export default Hero;
