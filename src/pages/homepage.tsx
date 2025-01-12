import React from 'react';
import { JSX } from "@emotion/react/jsx-runtime";
import { Box, Button, Grid2, Typography } from '@mui/material';
import { MenuBar } from '../components/MenuBar';
import { blue, red } from '@mui/material/colors';
import { WidthFull } from '@mui/icons-material';

export const HomePage = (): JSX.Element => {
    return (
        <Box>
            <MenuBar />
            <Box>
                <Grid2 container spacing={0}>
                    <Grid2 size={7}>
                        <Box bgcolor={blue[500]} width="100%" height="100vh" >
                            <Typography variant="h3" padding={2} align='center'>
                                Welcome to my page!
                            </Typography>
                            <Typography variant="h6" padding={5} align='justify'>
                            Hello! I’m Shitiz Goel, a passionate developer with a strong background in working with deep learning, 
                            computer vision, and data analysis. I specialize in developing and optimizing machine 
                            learning models, particularly for hyperspectral imaging and 3D convolutional networks. 
                            <br/> <br/>
                            My expertise lies in leveraging Python, PyTorch, and libraries like Material-UI to create scalable and efficient solutions. 
                            In my projects, I enjoy exploring new techniques such as band selection, image classification, and network modifications 
                            tailored to specific requirements.
                             
                            <br/> <br/>
                            When I'm not coding, I enjoy exploring new technologies and 
                            collaborating on innovative projects.
                            </Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={5}>
                        <Box bgcolor={red[500]} width="100%" height="100vh">
                            <img
                                src="images/main.jpg"
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    )
}