import React, { useState } from 'react';
import {
  useDisclosure,  Modal,  ModalOverlay,  ModalContent,  ModalHeader,  ModalFooter, ModalBody,ModalCloseButton,Box, Button,Input,FormControl,FormLabel,
} from '@chakra-ui/react';
import { IconPhotoDown } from '@tabler/icons-react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { useFormik } from 'formik';
import { useToast } from '@chakra-ui/react';

function ModalCreateCategory({ isOpen, onClose }) {
  const [image, setImage] = useState(null);
  const toast = useToast();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: ['image/*'],
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const imageURL = URL.createObjectURL(acceptedFiles[0]);
        setImage(imageURL);
      }
    },
  });

  const createCategory = async (categoryName) => {
    try {
      let formData = new FormData();
      formData.append('categoryName', categoryName);
      acceptedFiles.forEach((file) => {
        formData.append('image', file);
      });
      const res = await axios.post('http://localhost:8080/category', formData);
      toast({
        title: res?.data?.message,
        status: 'success',
        position: 'top',
        duration: 4000,
        isClosable: true,
      });
      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 3000);
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
      categoryName: '',
    },

    onSubmit: (values) => {
      createCategory(values.categoryName);
    },
  });

  return (
    <Box w='900px'>
      <Modal
        onClose={() => {
          onClose();
          window.location.reload();
        }}
        isOpen={isOpen}
        size='custom'
        isCentered
      >
        <ModalOverlay />
        <form onSubmit={formik.handleSubmit}>
          <ModalContent w='490px' h='450px' bg={"#132043"}>
            <ModalHeader>Create Category</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                w='100%'
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                gap='20px'
              >
                <Box
                  display='flex'
                  w='100%'
                  gap='20px'
                  alignItems='center'
                >
                  <FormControl
                    display='flex'
                    justifyContent='center'
                    flexDirection='column'
                    alignItems='center'
                  >
                    <FormLabel color='#8FB381'>Category Icon</FormLabel>
                    <Box
                      bgColor='#EEEDED'
                      w='174px'
                      h='174px'
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                      borderRadius='10px'
                    >
                      <Box
                        {...getRootProps()}
                        className='dropzone'
                        color='#ffffff'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                      >
                        <Input
                          {...getInputProps()}
                          size='lg'
                          // type='file'
                          // w='100%'
                          // h='100%'
                          // position='absolute'
                          // opacity='0'
                        />
                        <Box hidden={image ? true : false}>
                          <IconPhotoDown
                            color='#838383'
                            width='130px'
                            height='80px'
                          />
                        </Box>
                      </Box>
                      {image && <img src={image} />}
                    </Box>
                  </FormControl>
                </Box>
                <FormControl>
                  <FormLabel color='#8FB381'>Category Name</FormLabel>
                  <Input
                    bgColor='#EEEDED'
                    placeholder='Category name here...'
                    name='categoryName'
                    value={formik.values.categoryName}
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </Box>
            </ModalBody>
            <ModalFooter display='flex' gap='20px'>
              <Button
                w='80px'
                variant='outline'
                color='#132043'
                border='1px solid #132043'
                type='submit'
              >
                Save
              </Button>
              <Button
                w='80px'
                bgColor='#132043'
                color='#ffffff'
                onClick={onClose}
              >
                Reset
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </Box>
  );
}

export default ModalCreateCategory;
