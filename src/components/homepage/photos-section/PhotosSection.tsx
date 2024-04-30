import { Grid, Image } from '@chakra-ui/react';
import React from 'react';

const PhotosSection = () => {
	return (
		<>
			<Grid
				templateColumns={{ base: '1fr', md: '1fr 1fr' }}
				gap={4}
				py={4}
			>
				<Image
					src={'/assets/soup.webp'}
					w='full'
					h='full'
					alt='soup'
					objectFit={'cover'}
				/>
				<Image
					src={'/assets/soup2.webp'}
					w='full'
					h='full'
					alt='soup2'
					objectFit={'cover'}
				/>
			</Grid>
		</>
	);
};

export default PhotosSection;
