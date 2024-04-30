import MainContainer from '@/components/containers/MainContainer';
import SectionHeader from '@/components/headings/SectionHeader';
import { Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import Paragraph from '../texts/Paragraph';
import MainLink from '../links/MainLink';

const OurMenu = () => {
	return (
		<MainContainer
			flex={1}
			h='300px'
			gap={{ base: 0, md: 12 }}
			flexDir={{ base: 'column', md: 'row' }}
		>
			<Flex>
				<SectionHeader>OUR MENU</SectionHeader>
			</Flex>
			<Stack flex={1} pt={{ base: 0, md: 5 }} spacing={6}>
				<Paragraph maxW='400px'>
					{`I'm a paragraph. Click here to add your own text and edit me. It’s
					easy. Just click “Edit Text” or double click me to add your own
					content and make changes to the font. I’m a great place for you to
					tell a story and let your users know a little more about you.`}
				</Paragraph>
				<MainLink href='/'>Explore Menu</MainLink>
			</Stack>
		</MainContainer>
	);
};

export default OurMenu;
