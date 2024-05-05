import { Select, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { timeData } from '../timeData';

const SelectTimeSlot = () => {
	return (
		<Stack w='full' spacing={0}>
			<Text fontSize={'.875rem'} color={'black'}>
				Time
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
				{timeData.map((time: string, idx: number) => {
					return (
						<option key={idx} value={time}>
							{time}
						</option>
					);
				})}
			</Select>
		</Stack>
	);
};

export default SelectTimeSlot;
