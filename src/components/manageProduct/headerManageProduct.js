import { useDisclosure, Box, Text, Input, Button } from '@chakra-ui/react';
import { IconSearch, IconPlus } from '@tabler/icons-react';
import ModalCreateProduct from '../modal/createProduct';

const HeaderManageProduct  = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box mb='40px'>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Text color='#000000' fontFamily="Poppins" fontWeight='700' fontSize='20px'>Manage Product</Text>
                <Box display='flex' alignItems='center' gap='18px'>
                    {/* <Box w='375px' display='flex' alignItems='center' bgColor='#FFFFFF' padding='0 5px 0 5px' borderRadius='5px'>
                        <Input border='none' _focus={{border: "none", boxShadow: "none",}} placeholder='Search Product here....'/>
                        <IconSearch color='#838383' />
                    </Box> */}
                    
                    <Button bgColor='#132043' color='#ffffff' display='flex' gap='10px' onClick={onOpen}> <IconPlus/> <Text>Create Product</Text> </Button>
                </Box>
                
            </Box>
            <ModalCreateProduct isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}

export default HeaderManageProduct