import React, { useState, useEffect } from 'react';
import {
  useDisclosure,  Box,  Image,  Table,  Thead,  Tbody,  Tr,
  Th,  Td,  TableContainer,  Checkbox,  Button,  Switch,
} from '@chakra-ui/react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import ModalUpdateCategory from '../modal/updateCategory';

const BodyManageCategory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectAll, setSelectAll] = useState(false);
  const [category, setCategory] = useState([]);
  const [categoryById, setCategoryById] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [categoryDelete, setCategoryDelete] = useState(null);
  const toast = useToast();

  const getCategoryAll = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/category`);
      setCategory(res?.data?.data);
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

  const deleteCategory = async (categoryId) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/category/category/${categoryId}`
      );
      setCategoryDelete(res?.data?.data);
      toast({
        title: res?.data?.message,
        status: 'success',
        position: 'top',
        duration: 2000,
        isClosable: true,
      });
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

  useEffect(() => {
    getCategoryAll();
  }, [categoryDelete]);

  const handleModalClose = () => {
    onClose();
    getCategoryAll();
  };

  return (
    <Box>
      <TableContainer>
        <Table size='sm' variant='striped' bgColor='#FFF6F3'>
          <Thead bgColor='#132043' h='40px'>
            <Tr>
              <Th>
                {/* <Checkbox
                  isChecked={selectAll}
                  onChange={() => setSelectAll(!selectAll)}
                /> */}
              </Th>
              <Th color='#ffffff'>Category Icon</Th>
              <Th color='#ffffff'>Category Name</Th>
              <Th color='#ffffff' textAlign='center'>
                
              </Th>
            </Tr>
          </Thead>
          <Tbody
            color='#1E1E1E'
            fontFamily='Poppins'
            fontWeight='400'
            fontSize='12px'
          >
            {category.map((item, index) => (
              <Tr key={index}>
                <Td>
                  {/* <Checkbox isChecked={selectAll} /> */}
                </Td>
                <Td>
                  <Image
                    w='80px'
                    h='60px'
                    src={`${process.env.REACT_APP_IMAGE_URL}/category/${item.image}`}
                  />
                </Td>
                <Td>{item.categoryName}</Td>
                <Td textAlign='center'>
                  <Box display='flex' justifyContent='center' gap='10px'>
                    <Button
                      size='sm'
                      w='50px'
                      bgColor='#132043'
                      color='#ffffff'
                      onClick={() => {
                        setCategoryId(item?.id);
                        setCategoryById(item);
                        onOpen();
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size='sm'
                      w='50px'
                      variant='outline'
                      color='#132043'
                      border='1px solid #132043'
                      onClick={() => deleteCategory(item.id)}
                    >
                      Delete
                    </Button>
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {isOpen && (
        <ModalUpdateCategory
          isOpen={isOpen}
          onClose={handleModalClose}
          categoryId={categoryId}
          categoryById={categoryById}
        />
      )}
    </Box>
  );
};

export default BodyManageCategory;
