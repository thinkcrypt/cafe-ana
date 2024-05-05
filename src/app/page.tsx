'use client';

import PageLayout from '@/components/layouts/PageLayout';
import Hero from '@/components/homepage/hero/Hero';
import OurMenu from '@/components/homepage/our-menu/OurMenu';
import PhotosSection from '@/components/homepage/photos-section/PhotosSection';
import AboutUsNew from '@/components/homepage/about-us/AboutUsNew';
import PhotoGalery from '@/components/photo-gallery/PhotoGalery';

export default function Home() {
	return (
		<PageLayout>
			<Hero />
			<OurMenu />
			<PhotosSection />
			<AboutUsNew />
			<PhotoGalery />
		</PageLayout>
	);
}
