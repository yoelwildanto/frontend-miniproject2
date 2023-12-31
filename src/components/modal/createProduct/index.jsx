import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { Box, Button, Input, InputGroup, InputLeftAddon, Textarea, Select } from '@chakra-ui/react'
import { FormControl, FormLabel} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { IconPhotoDown } from '@tabler/icons-react';
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

const ModalCreateProduct = ({ isOpen, onClose }) => {
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState([]);
    const [status, setStatus] = useState([]);
    const toast = useToast();

    const getCategoryAll = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/category`);
            setCategory(res?.data?.data);
        } catch (err) {
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true });
        }
    };

    const getStatusAll = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/status`);
            setStatus(res?.data?.data);
        } catch (err) {
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true });
        }
    };

    useEffect(() => {
        getCategoryAll();
        getStatusAll();
    }, []);

    const handleResetForm = () => {
        formik.resetForm();
        setImage(null);
    };

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: ['image/*'],
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length > 0) {
                const imageURL = URL.createObjectURL(acceptedFiles[0]);
                setImage(imageURL);
            }
        },
    });

    const createProduct = async (productName, categoryId, price, stock, description, statusId) => {
        try {
            let formData = new FormData();
            formData.append("productName", productName);
            formData.append("categoryId", categoryId);
            formData.append("price", price);
            formData.append("stock", stock);
            formData.append("description", description);
            formData.append("statusId", statusId);
            acceptedFiles.forEach((file) => {
                formData.append("image", file);
            });
            const res = await axios.post("http://localhost:8080/product", formData);
            toast({ title: res?.data?.message, status: 'success', position: 'top', duration: 4000, isClosable: true });
            setTimeout(() => { onClose(); window.location.reload(); }, 1000);
        } catch (err) {
            toast({ title: err?.response?.data, status: 'error', position: 'top', duration: 2000, isClosable: true });
        }
    };

    const formik = useFormik({
        initialValues: {
            productName: "",
            categoryId: "",
            price: "",
            stock: "",
            description: "",
            statusId: "",
        },

        onSubmit: (values) => {
            createProduct(values.productName, values.categoryId, values.price, values.stock, values.description, values.statusId);
        },
    });

    return (
        <Box w="900px">
            <Modal onClose={() => { onClose(); window.location.reload(); }} isOpen={isOpen} size='custom' isCentered>
                <ModalOverlay />
                <form onSubmit={formik.handleSubmit} >
                    <ModalContent w="1050px" h="700px" bg={"#132043"}>
                        <ModalHeader color={'white'}>Create Product</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box display='flex' justifyContent='center' flexDirection='column' gap='20px'>
                                <Box display='flex' w='100%' gap='20px'>
                                    <Box w='50%' display='flex' flexDirection='column' gap='20px'>
                                        <FormControl>
                                            <FormLabel color='#8FB381'>Product Image</FormLabel>
                                            <Box mb={"25px"} objectFit={"contain"} bgColor='#EEEDED' h='265px' display='flex' alignItems='center' justifyContent='center' borderRadius='10px'>
                                                <Box {...getRootProps()} className="dropzone" objectFit={"contain"} color="#ffffff" display="flex" alignItems="center" justifyContent="center">
                                                    <Input {...getInputProps()} size="xl" type='file' w='100%' h='100%' position='absolute' opacity='0' />
                                                    <Box hidden={image ? true : false}>
                                                        <IconPhotoDown color='#132043' width='130px' height='80px' />
                                                    </Box>
                                                </Box>
                                                {/* {image && <img src={image}/>} */}
                                                {/* {image && <img src={image} style={{ maxWidth: '60%' }} />} */}
                                                {image && <img src={image} style={{ maxWidth: '60%', maxHeight: '250px' }} />}


                                            </Box>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel color='#8FB381'>Status</FormLabel>
                                            <Select bgColor='#EEEDED' placeholder='Select Status' name="statusId" value={formik.values.statusId} onChange={formik.handleChange}>
                                                {status?.map((item, index) => (
                                                    <option key={index} value={item.id}>{item.statusName}</option>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box w='50%' display='flex' flexDirection='column' gap='41px'>
                                        <FormControl>
                                            <FormLabel color='#8FB381'>Product Name</FormLabel>
                                            <Input bgColor='#EEEDED' placeholder='Product name here...' name="productName" value={formik.values.productName} onChange={formik.handleChange} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel color='#8FB381'>Price</FormLabel>
                                            <InputGroup>
                                                <InputLeftAddon bgColor='#EEEDED' children='Rp' />
                                                <Input type='tel' bgColor='#EEEDED' placeholder='Price' name="price" value={formik.values.price} onChange={formik.handleChange} />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel color='#8FB381'>Stock</FormLabel>
                                            <Input bgColor='#EEEDED' placeholder='Total Stock' name="stock" value={formik.values.stock} onChange={formik.handleChange} />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel color='#8FB381'>Product Category</FormLabel>
                                            <Select bgColor='#EEEDED' placeholder='Select Category' name="categoryId" value={formik.values.categoryId} onChange={formik.handleChange}>
                                                {category?.map((item, index) => (
                                                    <option key={index} value={item.id}>{item.categoryName}</option>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Box>

                                </Box>
                                <FormControl>
                                    <FormLabel color='#8FB381'>Description</FormLabel>
                                    <Textarea bgColor='#EEEDED' placeholder='Tell the description of the product here...' name="description" value={formik.values.description} onChange={formik.handleChange} />
                                </FormControl>
                            </Box>
                        </ModalBody>
                        <ModalFooter display='flex' gap='20px'>
                            <Button w='80px' variant='outline' color='#8FB381' border='1px solid #132043' type='submit'>Save</Button>
                            <Button w='80px' bgColor='#ffffff' color='#132043' onClick={handleResetForm}>Reset</Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </Box>
    );
}

export default ModalCreateProduct;