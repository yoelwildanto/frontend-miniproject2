import { useDisclosure, Box, Image } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Switch, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import ModalUpdateProduct from "../modal/updateProduct";

const BodyManageProduct = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectAll, setSelectAll] = useState(false);
  const [product, setProduct] = useState([]);
  const [productById, setProductById] = useState(null);
  const [productId, setProductId] = useState(null);
  const [productStatus, setProductStatus] = useState(null);
  const [productDelete, setProductDelete] = useState(null);
  const toast = useToast();

  const getProductAll = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/product`);
      setProduct(res?.data?.data);
      console.log(res?.data?.data)
    } catch (err) {
      toast({
        title: err?.response?.data,
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const updateProductStatus = async (productId, newStatus) => {
    try {
      const res = await axios.patch(
        `http://localhost:8080/product/update/${productId}`,
        {
          statusId: newStatus,
        }
      );
      setProductStatus(res?.data?.data);
      toast({
        title: res?.data?.message,
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: err?.response?.data,
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/product/product/${productId}`
      );
      setProductDelete(res?.data?.data);
      toast({
        title: res?.data?.message,
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: err?.response?.data,
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getProductAll();
  }, [productStatus, productDelete]);

  const handleModalClose = () => {
    onClose();
    getProductAll();
  };

  return (
    <Box>
      <TableContainer>
        <Table size="sm" variant="striped" bgColor="#FFF6F3">
          <Thead bgColor="#132043" h="40px">
            <Tr>
              <Th>
                {/* <Checkbox
                  isChecked={selectAll}
                  onChange={() => setSelectAll(!selectAll)}
                /> */}
              </Th>
              <Th fontSize="16px" color="#8FB381">
                Product Image
              </Th>
              <Th fontSize="16px" color="#8FB381">
                Product Name
              </Th>
              <Th fontSize="16px" color="#8FB381">
                Price
              </Th>
              <Th fontSize="16px" color="#8FB381">
                Stock
              </Th>
              <Th fontSize="16px" color="#8FB381">
                Category
              </Th>
              <Th fontSize="16px" color="#8FB381">
                Description
              </Th>
              {/* <Th fontSize="16px" color="#8FB381" textAlign="center">
                Status
              </Th> */}
              <Th fontSize="16px" color="#8FB381" textAlign="center">
                
              </Th>
            </Tr>
          </Thead>
          <Tbody
            color="#1E1E1E"
            fontFamily="Poppins"
            fontWeight="500"
            fontSize="20px"
          >
            {product?.map((item,index) => (
              <Tr>
                <Td>
                  {/* <Checkbox isChecked={selectAll} /> */}
                </Td>
                <Td key={index}>
                  <Image
                  objectFit={"contain"}
                    w="100px"
                    h="150px"
                    src={`${process.env.REACT_APP_IMAGE_URL}/product/${
                      item?.image
                    }`}
                  />
                </Td>
                <Td fontSize="16px">{item?.productName}</Td>
                <Td fontSize="16px">Rp {item?.price}</Td>
                <Td fontSize="16px">{item?.stock}</Td>
                <Td fontSize="16px">{item?.category?.categoryName}</Td>
                <Td fontSize="16px">
                  <Box
                    w="160px"
                    h="110px"
                    py={"auto"}
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="normal"
                    textAlign={"center"}
                  >
                    {item?.description}
                  </Box>
                </Td>
                {/* <Td textAlign="center">
                  <Switch
                    colorScheme="green"
                    isChecked={item.statusId === 2}
                    onChange={() =>
                      updateProductStatus(item.id, item.statusId === 2 ? 1 : 2)
                    }
                  />
                </Td> */}
                <Td textAlign="center">
                  <Box display="flex" justifyContent="center" gap="10px">
                    <Button
                      size="sm"
                      w="50px"
                      bgColor="#132043"
                      color="#ffffff"
                      onClick={() => {
                        setProductById(item);
                        setProductId(item?.id);
                        onOpen();
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      w="50px"
                      variant="outline"
                      color="#132043"
                      border="1px solid #132043"
                      onClick={() => deleteProduct(item.id)}
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
        <ModalUpdateProduct
          isOpen={isOpen}
          onClose={handleModalClose}
          productId={productId}
          productById={productById}
        />
      )}
    </Box>
  );
};

export default BodyManageProduct;
