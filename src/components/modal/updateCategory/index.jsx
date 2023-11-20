import React, { useState } from 'react';
import {
  useDisclosure,  Box,  FormControl,  FormLabel,  Input,  Button,  Modal,
  ModalOverlay,  ModalContent,  ModalHeader,  ModalFooter,  ModalBody,  ModalCloseButton,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { useFormik } from "formik";
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

const ModalUpdateCategory = ({ isOpen, onClose, categoryId, categoryById }) => {
  const [image, setImage] = useState(null);
  const toast = useToast();
  console.log('category', categoryById?.categoryName);
  console.log('id', categoryId);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ['image/*'],
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const imageURL = URL.createObjectURL(acceptedFiles[0]);
        setImage(imageURL);
      }
    },
  });

  const updateCategory = async (categoryName) => {
    try {
      let formData = new FormData();
      formData.append('categoryName', categoryName);
      acceptedFiles.forEach((file) => {
        formData.append('image', file ? file : categoryById?.image);
      });
      const res = await axios.patch(
        `http://localhost:8080/category/update/${categoryId}`,
        formData
      );
      toast({
        title: res?.data?.message,
        status: 'success',
        position: 'top',
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (err) {
      toast({
        title: err?.response?.data,
        status: 'error',
        position: 'top',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      categoryName: categoryById?.categoryName,
      image: categoryById?.image,
    },
    onSubmit: (values) => {
      updateCategory(values.categoryName);
    },
  });

  const handleResetForm = () => {
    formik.resetForm();
    setImage(null);
  };

  return (
    <Box w="900px">
      <Modal onClose={onClose} isOpen={isOpen} size="custom" isCentered>
        <ModalOverlay />
        <form onSubmit={formik.handleSubmit}>
          <ModalContent w="490px" h="450px" bgColor={"#132043"}>
            <ModalHeader color={"#8FB381"}>Update Category</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                w="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap="20px"
              >
                <Box
                  display="flex"
                  w="100%"
                  gap="20px"
                  alignItems="center"
                >
                  <FormControl
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <FormLabel color="#8FB381">Category Icon</FormLabel>
                    <Box
                      bgColor="#EEEDED"
                      w="174px"
                      h="174px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="10px"
                    >
                      <Box
                        {...getRootProps()}
                        className="dropzone"
                        color="#ffffff"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Input
                          {...getInputProps()}
                          size="lg"
                          // type='file' w='100%' h='100%' position='absolute' opacity='0'
                        />
                        <Box hidden={image ? true : false}>
                          {/* <IconPhoto  color='#838383' width='130px' height='80px'/> */}
                          <img
                            src={`${process.env.REACT_APP_IMAGE_URL}/category/${formik.values.image}`}
                          />
                        </Box>
                      </Box>
                      {image && <img src={image} />}
                    </Box>
                  </FormControl>
                </Box>
                <FormControl>
                  <FormLabel color="#8FB381">Category Name</FormLabel>
                  <Input
                    bgColor="#EEEDED"
                    name="categoryName"
                    value={formik.values.categoryName}
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </Box>
            </ModalBody>
            <ModalFooter display="flex" gap="20px">
              <Button
                w="80px"
                variant="outline"
                color="#8FB381"
                border="1px solid #132043"
                type="submit"
              >
                Save
              </Button>
              <Button
                w="80px"
                bgColor="#8FB381"
                color="#ffffff"
                onClick={handleResetForm}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </Box>
  );
};
export default ModalUpdateCategory;
