import { useDisclosure, Box, Text, Input, Button } from '@chakra-ui/react';
// import { IconSearch, IconPlus } from '@tabler/icons-react';


const HeaderStatistic  = () => {
    return (
        <Box mb='40px'>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Text color='#000000' fontFamily="Poppins" fontWeight='700' fontSize='20px'>Statistic</Text>
                <Box display='flex' alignItems='center' gap='18px'>
                <Input bgColor='#FFFFFF' w='230px' placeholder="Select Date and Time" size="md" type="datetime-local"/>
                </Box>
                
            </Box>

        </Box>
    )
}

export default HeaderStatistic;