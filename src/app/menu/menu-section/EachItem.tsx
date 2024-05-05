import { Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import MenuText from './MenuText';

type EachItemProps = {
	item: any;
};
const EachItem: React.FC<EachItemProps> = ({ item }) => {
	if (item?.type) {
		return (
			<Stack w='full' py={2} borderTop={'1px solid #333'} spacing={0}>
				<MenuText textTransform={'uppercase'}>{item?.name}</MenuText>
				<MenuText fontSize={'.875rem'}>{item?.description}</MenuText>
				<Stack spacing={0} w='full'>
					{item?.type?.map((type: any, idx: number) => (
						<Flex w='full' key={idx} justify={'space-between'}>
							<MenuText fontSize={'.875rem'}>{type?.name}</MenuText>
							<MenuText fontSize={'.875rem'}>{type?.price}</MenuText>
						</Flex>
					))}
				</Stack>
			</Stack>
		);
	}
	return (
		<Stack w='full' py={2} borderTop={'1px solid #333'} spacing={1}>
			<Flex w='full' justify={'space-between'}>
				<MenuText textTransform={'uppercase'}>{item?.name}</MenuText>
				<MenuText>{item?.price}</MenuText>
			</Flex>
			<MenuText fontSize={'.875rem'}>{item?.description}</MenuText>
		</Stack>
	);
};

export default EachItem;
