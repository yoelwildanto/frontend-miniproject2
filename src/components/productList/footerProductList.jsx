import { Box, Text, Button } from '@chakra-ui/react';

const FooterProductList = ({ currentPage, onPageChange }) => {
    return (
        <Box display='flex' alignItems='center' justifyContent='center'>
           {/* <Box>
            <Text color='#707070' fontFamily='Poppins' fontWeight='400' fontSize='14px'>Showing 7 of 90 products</Text>
           </Box> */}
           <Box display='flex' gap='10px' alignItems='center'>
            <Button size='sm' bgColor='#132043' color='#ffffff' onClick={() => onPageChange(currentPage === 1? 1 :  currentPage - 1)} disabled={currentPage === 1}>Prev</Button>
            <Box display='flex' justifyContent='center' w='30px'><Text fontFamily='Poppins' fontSize='16px'>{currentPage}</Text></Box>
            <Button size='sm' bgColor='#132043' color='#ffffff' onClick={() => onPageChange(currentPage + 1)}>Next</Button>
           </Box>
        </Box>
    );
};

export default FooterProductList;
