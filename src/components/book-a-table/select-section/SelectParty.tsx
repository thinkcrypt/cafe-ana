import { Input, Select, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { partyData } from '../partyData';

const SelectParty = () => {
	return (
		<Stack w='full' spacing={0}>
			<Text fontSize={'.875rem'} color={'black'}>
				Party
			</Text>
			<Select
				borderTop={'hidden'}
				borderLeft={'hidden'}
				borderRight={'hidden'}
				borderBottom={'1px solid black'}
				borderRadius={0}
				_focusVisible={{ border: 'hidden' }}
				px={0}
				py={0}
			>
				{partyData?.map((party: string, idx: number) => (
					<option key={idx} value={party}>
						{party}
					</option>
				))}
			</Select>
		</Stack>
	);
};

export default SelectParty;
