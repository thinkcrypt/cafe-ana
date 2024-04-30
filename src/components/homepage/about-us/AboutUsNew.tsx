import SectionHeader from '@/components/headings/SectionHeader';
import { Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import Paragraph from '../texts/Paragraph';
import MainLink from '../links/MainLink';
import { MOBILE_GLOBAL_PADDING_X, NAVBAR_HEIGHT } from '@/lib/constants';

const AboutUsNew = () => {
	return (
		<Flex
			w='full'
			bgColor={'aboutSection'}
			minH={{ base: 'fit-content', md: `calc(100vh - ${NAVBAR_HEIGHT})` }}
			py={{ base: 10, md: 20 }}
			align={'center'}
		>
			<Flex
				w='full'
				gap={6}
				flexDir={{ base: 'column', md: 'row' }}
				px={{ base: MOBILE_GLOBAL_PADDING_X, md: 0 }}
			>
				<Flex flex={1} justify={{ base: 'flex-start', md: 'flex-end' }}>
					<SectionHeader
						maxW={'600px'}
						textAlign={{ base: 'left', md: 'right' }}
						fontWeight={600}
						color={'black'}
						letterSpacing={'2px'}
					>{`IT'S ALWAYS MORE THAN GOOD FOOD`}</SectionHeader>
				</Flex>
				<Stack
					flex={1}
					justify={'space-between'}
					py={{ base: 0, md: 5 }}
					pl={{ base: 0, md: 5 }}
				>
					<Paragraph maxW='400px' color={'black'}>
						{`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.`}
					</Paragraph>
					<MainLink href='/about-us'>ABOUT US</MainLink>
				</Stack>
			</Flex>
		</Flex>
	);
};

export default AboutUsNew;
