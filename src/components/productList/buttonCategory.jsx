import React, { useState, useEffect } from 'react';
import { Box, Button, Text, Image, useToast } from '@chakra-ui/react';
import {IconCategory} from '@tabler/icons-react'
import axios from 'axios';

function ButtonCategory({ onCategoryChange }) {
  const [category, setCategory] = useState([]);
  const toast = useToast();

  const getCategoryAll = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/category`);
      setCategory(res?.data?.data);
    } catch (err) {
      toast({
        title: err.response.data,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getCategoryAll();
  }, []);

  return (
    <Box mb='30px'>
      <Box display='flex' alignItems='center' gap='36px'>
        <Button
          w='100px'
          h='100px'
          bgColor='#FFFFFF'
          onClick={() => onCategoryChange(null)}
          _hover={{ bgColor: '#FFF7F3' }}
          border='none'
          _focus={{ border: 'none', boxShadow: 'none' }}
        >
          <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            {/* <Image src='\images\category.svg' /> */}
            <IconCategory size={"60px"}/>
            <Text color='#8FB381'>All Menu</Text>
          </Box>
        </Button>
        <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => onCategoryChange(1)} _hover={{bgColor: "#FFF7F3"}} border='none' _focus={{border: "none", boxShadow: "none",}}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${process.env.REACT_APP_IMAGE_URL}/category/${(category[0])?.image}`} />
                        <Text color='#8FB381'>{(category[0])?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => onCategoryChange(5)}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${process.env.REACT_APP_IMAGE_URL}/category/${(category[1]  )?.image}`}/>
                        <Text color='#8FB381'>{(category[1]  )?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => onCategoryChange(6)}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${process.env.REACT_APP_IMAGE_URL}/category/${(category[2]  )?.image}`} />
                        <Text color='#8FB381'>{(category[2]  )?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => onCategoryChange(13)}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${process.env.REACT_APP_IMAGE_URL}/category/${(category[3]  )?.image}`} />
                        <Text color='#8FB381'>{(category[3]  )?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => onCategoryChange(14)}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${process.env.REACT_APP_IMAGE_URL}/category/${(category[4]  )?.image}`} />
                        <Text color='#8FB381'>{(category[4]  )?.categoryName}</Text>
                    </Box> 
                </Button>
                <Button w='100px' h='100px' bgColor='#FFFFFF' onClick={() => onCategoryChange(16)}>
                    <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Image src={`${process.env.REACT_APP_IMAGE_URL}/category/${(category[5]  )?.image}`} />
                        <Text color='#8FB381'>{(category[5])?.categoryName}</Text>
                    </Box> 
                </Button>
      </Box>
    </Box>
  );
}

export default ButtonCategory;
