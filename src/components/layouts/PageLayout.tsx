import React, { FC, ReactNode } from 'react';
import Header from '../Header/Header';
import { Flex, Stack } from '@chakra-ui/react';
import { NAVBAR_HEIGHT } from '@/lib/constants';
import Footer from '../footer/Footer';

type PageLayoutProps = {
	children?: ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />

			{children && children}
			<Footer />
		</>
	);
};

export default PageLayout;
