import { Box, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  IconBox,
  IconLayoutDashboard,
  IconUser,
  IconChartPie,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";

const Sidebar = () => {
  const [activeUser, setActiveUser] = useState("");
  const [activeMenu, setActiveMenu] = useState("dash");
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [activeSubProduct, setActiveSubProduct] = useState("product-list");
  const [showReportDropdown, setShowReportDropdown] = useState(false);
  const [activeSubReport, setActiveSubReport] = useState("analytics");

  const handleUserClick = (user) => {
    setActiveUser(user);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (showProductDropdown === true) {
      setShowProductDropdown(false);
      setActiveSubProduct("product-list");
    } else if (showReportDropdown === true) {
      setShowReportDropdown(false);
      setActiveSubReport("analytics");
    } else if (activeUser === "profile") {
      setActiveUser("");
    }
  };

  const handleProductClick = () => {
    setShowProductDropdown(!showProductDropdown);
  };

  const handleSubProductClick = (menu) => {
    setActiveSubProduct(menu);
  };

  const handleReportClick = () => {
    setShowReportDropdown(!showReportDropdown);
  };

  const handleSubReportClick = (menu) => {
    setActiveSubReport(menu);
  };
  return (
    <Box w="15%" h="100vh" bgColor="#132043" position="fixed">
      <Box
        h="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        paddingBottom="32px"
      >
        <Box display="flex" flexDirection="column" gap="45px">
          <Link to={""}>
            <HStack spacing="0" padding="32px 0 0 24px">
              {/* <Image src="../../public/asset/logo.svg" /> */}
              <Text
                fontFamily="Poppins"
                fontSize="32px"
                color="#8FB381"
                fontWeight="600"
              >
                Web Cafe
              </Text>
            </HStack>
          </Link>
          {/* menu list */}
          <Box display="flex" flexDirection="column" gap="10px">
            {/* dashboard */}
            <Link to={""}>
              <HStack
                style={{
                  color: activeMenu === "dash" ? "#8FB381" : "#707070",
                  backgroundColor:
                    activeMenu === "dash" ? "#FFF7F3" : "transparent",
                }}
                onClick={() => handleMenuClick("dash")}
                w="full"
                h="56px"
                gap="18px"
              >
                <Box
                  w="5px"
                  h="56px"
                  bgColor="#8FB381"
                  borderTopRightRadius="5px"
                  borderBottomRightRadius="5px"
                  style={{
                    visibility: activeMenu === "dash" ? "visible" : "hidden",
                  }}
                />
                <IconLayoutDashboard stroke={1.5} size="24px" />
                <Text fontFamily="Poppins" fontSize="18px" fontWeight="600">
                  Dashboard
                </Text>
              </HStack>
            </Link>
             {/* product */}
             <HStack
              style={{
                color: activeMenu === "product" ? "#8FB381" : "#707070",
                backgroundColor:
                  activeMenu === "product" ? "#FFF7F3" : "transparent",
              }}
              onClick={() => {
                handleMenuClick("product");
                handleProductClick();
              }}
              w="full"
              h="56px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" gap="18px" alignItems="center">
                <Box
                  w="5px"
                  h="56px"
                  bgColor="#8FB381"
                  borderTopRightRadius="5px"
                  borderBottomRightRadius="5px"
                  style={{
                    visibility: activeMenu === "product" ? "visible" : "hidden",
                  }}
                />
                <IconBox stroke={1.3} size="24px" />
                <Text
                  cursor={"pointer"}
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="600"
                >
                  Product
                </Text>
              </Box>
              <Box padding="0 10px 0 0">
                {showProductDropdown ? (
                  <IconChevronUp size="18px" />
                ) : (
                  <IconChevronDown size="18px" />
                )}
              </Box>
            </HStack>
            {showProductDropdown && (
              <Box
                ml="20px"
                mt="5px"
                borderRadius="5px"
                padding="10px"
                color="#707070"
                display="flex"
                flexDirection="column"
                gap="14px"
              >
                <Link to={"/product-list"}>
                  <Box
                    style={{
                      borderBottom:
                        activeSubProduct === "product-list"
                          ? "2px solid #8FB381"
                          : "2px solid #FFFFFF",
                      color:
                        activeSubProduct === "product-list"
                          ? "#8FB381"
                          : "#707070",
                    }}
                    onClick={() => handleSubProductClick("product-list")}
                  >
                    <Text
                      fontFamily="Poppins"
                      fontSize="16px"
                      fontWeight="500"
                      _hover={{ color: "transparant" }}
                    >
                      Product List
                    </Text>
                  </Box>
                </Link>
                <Link to={"/manage-product"}>
                  <Box
                    style={{
                      borderBottom:
                        activeSubProduct === "manage-product"
                          ? "2px solid #8FB381"
                          : "2px solid #FFFFFF",
                      color:
                        activeSubProduct === "manage-product"
                          ? "#8FB381"
                          : "#707070",
                    }}
                    onClick={() => handleSubProductClick("manage-product")}
                  >
                    <Text
                      fontFamily="Poppins"
                      fontSize="16px"
                      fontWeight="500"
                      _hover={{ color: "transparant" }}
                    >
                      Manage Product
                    </Text>
                  </Box>
                </Link>
                <Link to={"/manage-category"}>
                  <Box
                    style={{
                      borderBottom:
                        activeSubProduct === "manage-category"
                          ? "2px solid #8FB381"
                          : "2px solid #FFFFFF",
                      color:
                        activeSubProduct === "manage-category"
                          ? "#8FB381"
                          : "#707070",
                    }}
                    onClick={() => handleSubProductClick("manage-category")}
                  >
                    <Text
                      fontFamily="Poppins"
                      fontSize="16px"
                      fontWeight="500"
                      _hover={{ color: "transparant" }}
                    >
                      Manage Category
                    </Text>
                  </Box>
                </Link>
              </Box>
            )}
            {/* user management */}
            <Link to={"/user-management"}>
              <HStack
                style={{
                  color: activeMenu === "user" ? "#8FB381" : "#707070",
                  backgroundColor:
                    activeMenu === "user" ? "#FFF7F3" : "transparent",
                }}
                onClick={() => handleMenuClick("user")}
                w="full"
                h="56px"
                gap="18px"
              >
                <Box
                  w="5px"
                  h="56px"
                  bgColor="#8FB381"
                  borderTopRightRadius="5px"
                  borderBottomRightRadius="5px"
                  style={{
                    visibility: activeMenu === "user" ? "visible" : "hidden",
                  }}
                />
                <IconUser stroke={2} size="24px" />
                <Text fontFamily="Poppins" fontSize="18px" fontWeight="600">
                  User Management
                </Text>
              </HStack>
            </Link>
           
            {/* report */}
            <HStack
              style={{
                color: activeMenu === "report" ? "#8FB381" : "#707070",
                backgroundColor:
                  activeMenu === "report" ? "#FFF7F3" : "transparent",
              }}
              onClick={() => {
                handleMenuClick("report");
                handleReportClick();
              }}
              w="full"
              h="56px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" gap="18px" alignItems="center">
                <Box
                  w="5px"
                  h="56px"
                  bgColor="#8FB381"
                  borderTopRightRadius="5px"
                  borderBottomRightRadius="5px"
                  style={{
                    visibility: activeMenu === "report" ? "visible" : "hidden",
                  }}
                />
                <IconChartPie stroke={1.5} size="24px" />
                <Text
                  cursor={"pointer"}
                  fontFamily="Poppins"
                  fontSize="18px"
                  fontWeight="600"
                >
                  Report
                </Text>
              </Box>
              <Box padding="0 10px 0 0">
                {showReportDropdown ? (
                  <IconChevronUp size="18px" />
                ) : (
                  <IconChevronDown size="18px" />
                )}
              </Box>
            </HStack>
            {showReportDropdown && (
              <Box
                ml="20px"
                mt="5px"
                borderRadius="5px"
                padding="10px"
                color="#707070"
                display="flex"
                flexDirection="column"
                gap="14px"
              >
                <Link to={"/report-statistic"}>
                  <Box
                    style={{
                      borderBottom:
                        activeSubReport === "analytics"
                          ? "2px solid #8FB381"
                          : "2px solid #FFFFFF",
                      color:
                        activeSubReport === "analytics" ? "#8FB381" : "#707070",
                    }}
                    onClick={() => handleSubReportClick("analytics")}
                  >
                    <Text
                      fontFamily="Poppins"
                      fontSize="16px"
                      fontWeight="500"
                      _hover={{ color: "transparant" }}
                    >
                      Statistic
                    </Text>
                  </Box>
                </Link>
                <Link to={"/report-transaction"}>
                  <Box
                    style={{
                      borderBottom:
                        activeSubReport === "transactions"
                          ? "2px solid #8FB381"
                          : "2px solid #FFFFFF",
                      color:
                        activeSubReport === "transactions"
                          ? "#8FB381"
                          : "#707070",
                    }}
                    onClick={() => handleSubReportClick("transactions")}
                  >
                    <Text
                      fontFamily="Poppins"
                      fontSize="16px"
                      fontWeight="500"
                      _hover={{ color: "transparant" }}
                    >
                      Transactions
                    </Text>
                  </Box>
                </Link>
                <Link to={"/report-cashier"}>
                  <Box
                    style={{
                      borderBottom:
                        activeSubReport === "sales-report"
                          ? "2px solid #8FB381"
                          : "2px solid #FFFFFF",
                      color:
                        activeSubReport === "sales-report"
                          ? "#8FB381"
                          : "#707070",
                    }}
                    onClick={() => handleSubReportClick("sales-report")}
                  >
                    <Text
                      fontFamily="Poppins"
                      fontSize="16px"
                      fontWeight="500"
                      _hover={{ color: "transparant" }}
                    >
                      Sales Report
                    </Text>
                  </Box>
                </Link>
              </Box>
            )}
          </Box>
        </Box>
        <Box>
          <Link to={""}>
            <HStack
              style={{
                color: activeUser === "profile" ? "#8FB381" : "#707070",
                backgroundColor:
                  activeUser === "profile" ? "#FFF7F3" : "transparent",
              }}
              onClick={() => handleUserClick("profile")}
              w="full"
              h="56px"
              gap="18px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" gap="18px" alignItems="center">
                <Box
                  w="5px"
                  h="56px"
                  bgColor="#8FB381"
                  borderTopRightRadius="5px"
                  borderBottomRightRadius="5px"
                  style={{
                    visibility: activeUser === "profile" ? "visible" : "hidden",
                  }}
                />
                <Box
                  w="30px"
                  h="30px"
                  bgColor="#D9D9D9"
                  borderRadius="50%"
                ></Box>
                <Text
                  fontFamily="Poppins"
                  fontSize="16px"
                  fontWeight="600"
                  isTruncated
                >
                  Dodo{" "}
                </Text>
              </Box>
              <Box padding="0 10px 0 0">
                {activeUser === "profile" ? (
                  <IconChevronLeft size="18px" />
                ) : (
                  <IconChevronRight size="18px" />
                )}
              </Box>
            </HStack>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
