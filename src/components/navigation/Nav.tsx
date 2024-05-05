import { Stack, StackProps, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
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

type NavProps = StackProps & {};
const Nav: React.FC<NavProps> = ({ ...props }) => {
	return (
		<Stack spacing={0} textAlign={'right'} {...props}>
			{navList.map((navItem) => (
				<Link key={navItem?.name} href={navItem?.path}>
					<Text fontSize={'.875rem'} textTransform={'uppercase'}>
						{navItem?.name}
					</Text>
				</Link>
			))}
		</Stack>
	);
};

export default Nav;
