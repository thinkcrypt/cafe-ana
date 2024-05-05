import { Input, Stack, Text } from '@chakra-ui/react';
import React from 'react';

type SelectDateProps = {
	selectedDate: string;
	setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
};
const SelectDate: React.FC<SelectDateProps> = ({
	selectedDate,
	setSelectedDate,
}) => {
	return (
		<Stack w='full' spacing={0}>
			<Text fontSize={'.875rem'} color={'black'}>
				Date
			</Text>
			<Input
				type='date'
				borderTop={'hidden'}
				borderLeft={'hidden'}
				borderRight={'hidden'}
				borderBottom={'1px solid black'}
				borderRadius={0}
				value={selectedDate}
				onChange={(e) => setSelectedDate(e.target.value)}
				_focusVisible={{ border: 'hidden' }}
				px={0}
				py={0}
			/>
		</Stack>
	);
};

export default SelectDate;
