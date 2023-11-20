import { Box, Text, Input, Button } from '@chakra-ui/react';
import { IconSearch } from '@tabler/icons-react';
import { useFormik } from "formik";

const HeaderProductList = ({ inputSearch }) => {

    const formik = useFormik({
        initialValues: {
            productName: "",
        },

        onSubmit: (values) => {
            inputSearch(values.productName)
        },
    });

    return (
        <Box mb='40px'>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Text color='#000000' fontFamily="Poppins" fontWeight='700' fontSize='20px'>Product List</Text>
                <form onSubmit={formik.handleSubmit} >
                    <Box display='flex' alignItems='center' gap='18px'>
                        <Box w='375px' display='flex' alignItems='center' bgColor='#FFFFFF' padding='0 5px 0 5px' borderRadius='5px'>
                            <Input border='none' _focus={{ border: "none", boxShadow: "none", }} placeholder='Search Product here....' name='productName' value={formik.values.productName} onChange={formik.handleChange} />
                            <Button variant='ghost' type='submit'>
                                <IconSearch color='#838383' />
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Box>

        </Box>
    )
}

export default HeaderProductList;
