import { Box, Button, Text, Image, Heading, Stack, Divider, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { IconPlus } from '@tabler/icons-react';
import { IconCurrencyDollar, IconBox, IconUser, } from '@tabler/icons-react';
import { IconTrendingUp } from '@tabler/icons-react';
import { AreaChart } from '../Chart';


const BodyStatistic = () => {
    return (
        <Box mt='50px'>
            <Box display='flex' gap='30px' mb='30px'>
                <Card w='400px' h='230px' padding='5' borderRadius='16px' background= "linear-gradient(102.57deg, #FF7940 19.4%, #FF40B3 95.09%)">
                        <CardBody padding='10px' paddingTop='100px'>
                            <Stack spacing='1.5' alignItems='center' gap='14px'>
                                <Box w='126px' h='126px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='18%' left='86%' transform='translate(-50%, -50%)' borderRadius='4px'>
                                    <Image src='../../../../public/images/ellipse1-1.png' />
                                 </Box>
                                 <Box w='126px' h='126px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='30%' left='90%' transform='translate(-50%, -50%)' borderRadius='4px'>
                                    <Image src='../../../../public/images/ellipse1-2.png' />
                                 </Box>
                                <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='25%' left='13%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.5)' borderRadius='50%'>
                                    <IconCurrencyDollar color='#ffffff'/>
                                 </Box>
                                <Box paddingTop='30px' w='full' display='flex' flexDirection='column'>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Text  color='#FFFFFF' fontSize='16px'>
                                            Total Ammount
                                        </Text>
                                    </Box>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Text  color='#FFFFFF'  fontSize='24px' fontWeight='600'>
                                            Rp 5.000.000
                                        </Text>
                                        <Box display='flex' alignItems='center' gap='10px'>
                                            <IconTrendingUp color='#FFFFFF'/>
                                            <Text color='#FFFFFF' fontSize='18px' fontWeight='600'>62%</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card w='400px' h='230px' padding='5' borderRadius='16px' background= "linear-gradient(102.57deg, #508EBB 19.4%, #AB40FF 95.09%)">
                        <CardBody padding='10px' paddingTop='100px'>
                            <Stack spacing='1.5' alignItems='center' gap='14px'>
                                <Box w='126px' h='126px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='18%' left='86%' transform='translate(-50%, -50%)'  borderRadius='4px'>
                                    <Image src='../../../../public/images/ellipse2-1.png' />
                                 </Box>
                                 <Box w='126px' h='126px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='30%' left='90%' transform='translate(-50%, -50%)' borderRadius='4px'>
                                    <Image src='../../../../public/images/ellipse2-2.png' />
                                 </Box>
                                <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='25%' left='13%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.5)'borderRadius='50%'>
                                    <IconBox color='#ffffff'/>
                                 </Box>
                                <Box paddingTop='30px' w='full' display='flex' flexDirection='column'>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Text  color='#FFFFFF' fontSize='16px'>
                                            Total Orders
                                        </Text>
                                    </Box>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Text  color='#FFFFFF'  fontSize='24px' fontWeight='600'>
                                            100 products
                                        </Text>
                                        <Box display='flex' alignItems='center' gap='10px'>
                                            <IconTrendingUp color='#FFFFFF'/>
                                            <Text color='#FFFFFF' fontSize='18px' fontWeight='600'>62%</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card w='400px' h='230px' padding='5' borderRadius='16px' background= "linear-gradient(102.57deg, #56A798 19.4%, #347478 95.09%)">
                        <CardBody padding='10px' paddingTop='100px'>
                            <Stack spacing='1.5' alignItems='center' gap='14px'>
                                <Box w='126px' h='126px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='18%' left='86%' transform='translate(-50%, -50%)' borderRadius='4px'>
                                    <Image src='../../../../public/images/ellipse3-1.png' />
                                 </Box>
                                 <Box w='126px' h='126px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='30%' left='90%' transform='translate(-50%, -50%)' borderRadius='4px'>
                                    <Image src='../../../../public/images/ellipse3-2.png' />
                                 </Box>
                                <Box w='35px' h='35px' display='flex' alignItems='center' justifyContent='center' position='absolute' top='25%' left='13%' transform='translate(-50%, -50%)' bgColor='rgba(148, 148, 148, 0.5)' borderRadius='50%'>
                                    <IconUser color='#ffffff'/>
                                 </Box>
                                <Box paddingTop='30px' w='full' display='flex' flexDirection='column'>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Text  color='#FFFFFF' fontSize='16px'>
                                            Total Visitors
                                        </Text>
                                    </Box>
                                    <Box display='flex' justifyContent='space-between'>
                                        <Text  color='#FFFFFF'  fontSize='24px' fontWeight='600'>
                                            100 people
                                        </Text>
                                        <Box display='flex' alignItems='center' gap='10px'>
                                            <IconTrendingUp color='#FFFFFF'/>
                                            <Text color='#FFFFFF' fontSize='18px' fontWeight='600'>62%</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>                           
            </Box>
            <Box>
                <Text color='#000000' fontFamily="Nunito" fontWeight='700' fontSize='18px'>Earnings</Text>
                <Box bgColor='#ffffff' padding='10px' mt='20px' borderRadius='20px'>
                    <AreaChart/>
                </Box>
            </Box>
        </Box>
    )
}
export default BodyStatistic;