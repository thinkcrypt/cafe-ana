'use client';
import MainContainer from '@/components/containers/MainContainer';
import SectionHeader from '@/components/headings/SectionHeader';
import MainLink from '@/components/homepage/links/MainLink';
import Paragraph from '@/components/homepage/texts/Paragraph';
import PageLayout from '@/components/layouts/PageLayout';
import { Flex, Icon, Stack } from '@chakra-ui/react';
import React from 'react';
import { PiBowlFoodFill } from 'react-icons/pi';

const AboutPage = () => {
	return (
		<PageLayout>
			<MainContainer
				flexDir='column'
				bgColor={'aboutSection'}
				w='full'
				gap={'160px'}
				py={{ base: 6, md: 24 }}
			>
				<Flex w='full' gap={6} flexDir={{ base: 'column', md: 'row' }}>
					<Flex
						flex={1}
						justify={'space-between'}
						flexDir={'column'}
						align={{ base: 'flex-start', md: 'flex-end' }}
					>
						<SectionHeader
							color={'black'}
							letterSpacing={'1px'}
							order={{ base: 2, md: 1 }}
						>
							ABOUT
						</SectionHeader>
						<Icon
							as={PiBowlFoodFill}
							order={{ base: 1, md: 2 }}
							fontSize={'4rem'}
							color='black'
						/>
					</Flex>
					<Flex flex={1} flexDir={'column'} gap={3} color={'black'}>
						<Paragraph maxW={'500px'} pt={5}>
							{`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.`}
						</Paragraph>
						<Paragraph maxW={'500px'} pt={5}>
							{`This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are. `}
						</Paragraph>
						<Paragraph maxW={'500px'} pt={5}>
							{`Let visitors to your website know that they'll find what they're looking for right here. Present your company as the solution to a specific problem and highlight the ways your services can make life better for people. In a few words, explain the impact your company has had, or hopes to have, on its community and the world. Tell readers how your company puts its users first. Emphasize how it looks out for them, finding solutions to meet their needs and keep them satisfied. Reassure potential customers that they won't regret choosing your services.`}
						</Paragraph>
					</Flex>
				</Flex>
				<Flex w='full' gap={6} flexDir={{ base: 'column', md: 'row' }}>
					<Flex
						flex={1}
						justify={'space-between'}
						flexDir={'column'}
						align={{ base: 'flex-start', md: 'flex-end' }}
					>
						<SectionHeader color={'black'} letterSpacing={'1px'} id={'contact'}>
							CONTACT
						</SectionHeader>
					</Flex>
					<Flex
						flex={1}
						pt={5}
						gap={12}
						flexDir={{ base: 'column', md: 'row' }}
					>
						<Stack spacing={6}>
							<Stack>
								<Paragraph>88, Block E, Road 17/A</Paragraph>
								<Paragraph>Banani, Dhaka-1213</Paragraph>
							</Stack>
							<Paragraph>01102355663</Paragraph>
							<Stack>
								<MainLink href='www.instagram.com' fontSize={'1rem'}>
									Instagram
								</MainLink>
								<MainLink href='www.facebook.com' fontSize={'1rem'}>
									Facebook
								</MainLink>
							</Stack>
						</Stack>
						<Stack spacing={6}>
							<Stack>
								<Paragraph>MON - FRI: 5PM - 12AM</Paragraph>
								<Paragraph>SAT - SUN: 4PM - 1AM</Paragraph>
							</Stack>
							<Paragraph>info@mysite.com</Paragraph>
							<Stack>
								<MainLink href='/book-a-table'>BOOK A TABLE</MainLink>
							</Stack>
						</Stack>
					</Flex>
				</Flex>
			</MainContainer>
		</PageLayout>
	);
};

export default AboutPage;
