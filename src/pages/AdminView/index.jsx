import { Box} from "@chakra-ui/react";
import Sidebar from "../../components/sideBar";

const AdminPage = (prop) => {
  return (
    <Box maxW='100vw' minH='100vh'>
      <Box w="99.1vw" display='flex'>
        <Sidebar />
        <Box w="15%" h="100vh"/>
        <Box w="85%"  bgColor="#F1F1F1" padding='48px 32px 48px 32px' display='flex' flexDirection='column' justifyContent='space-between'>
          <Box>
            {prop.viewHeader}
            {prop.viewBody}
          </Box>
          {prop.viewFooter}
        </Box>
      </Box>
    </Box>
  );
};
export default AdminPage;