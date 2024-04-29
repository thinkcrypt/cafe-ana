import MainContainer from '@/components/containers/MainContainer';
import SectionHeader from '@/components/headings/SectionHeader';
import { Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import Paragraph from '../texts/Paragraph';
import MainLink from '../links/MainLink';

const OurMenu = () => {
	return (
		<MainContainer flex={1} h='300px' gap={12} >
			<Flex justify={'flex-end'}>
				<SectionHeader>OUR MENU</SectionHeader>
			</Flex>
			<Stack flex={1} pt={5} spacing={6}>
				<Paragraph w='400px'>
					I'm a paragraph. Click here to add your own text and edit me. It’s
					easy. Just click “Edit Text” or double click me to add your own
					content and make changes to the font. I’m a great place for you to
					tell a story and let your users know a little more about you.
				</Paragraph>
				<MainLink href='/'>Explore Menu</MainLink>
			</Stack>
		</MainContainer>
	);
};

export default OurMenu;
