import Image from 'next/image';
import styles from './page.module.css';
import { Text } from '@chakra-ui/react';
import PageLayout from '@/components/layouts/PageLayout';
import Hero from '@/components/homepage/hero/Hero';
import OurMenu from '@/components/homepage/our-menu/OurMenu';

export default function Home() {
	return (
		<PageLayout>
			<Hero />
			<OurMenu />
		</PageLayout>
	);
}
