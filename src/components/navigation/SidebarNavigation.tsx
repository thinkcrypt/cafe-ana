import { Flex, Icon, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { PiBowlFoodFill } from 'react-icons/pi';

const navList = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Menu',
		path: '/menu',
	},
	{
		name: 'About',
		path: '/about-us',
	},
	{
		name: 'Contact Us',
		path: '/about-us#contact',
	},
	{
		name: 'Book A Table',
		path: '/book-a-table',
	},
];

const SidebarNavigation = ({ ...props }) => {
	return (
		<Flex w={'full'} h={'full'} justify={'center'} align={'center'}>
			<Flex gap={10} flexDir={'column'} w='full' align={'center'} {...props}>
				<Flex w='fit-content' pt={{ base: 4, md: 12 }}>
					<Icon
						as={PiBowlFoodFill}
						fontSize={{ base: '3rem', md: '5rem' }}
						color='black'
					/>
				</Flex>
				{navList.map((navItem) => (
					<Link key={navItem?.name} href={navItem?.path}>
						<Text fontSize={'2rem'} textTransform={'uppercase'}>
							{navItem?.name}
						</Text>
					</Link>
				))}
			</Flex>
		</Flex>
	);
};

export default SidebarNavigation;
