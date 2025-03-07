import React, {useContext} from 'react';
import {
    Stack,
    Box,
    Rating, IconButton, Button
} from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import CloseIcon from "@mui/icons-material/Close";
import {GRingContext} from "../../utils/context";
import zIndex from "@mui/material/styles/zIndex";
import {FullPlace} from "../../utils/types";

interface Props {
    place: FullPlace
}

const ImageGallery = ({place}: Props) => {
    const {setAppMode} = useContext(GRingContext)

    const itemData = [
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Bradbury_building_Los_Angeles_c2005_01383u_crop.jpg/640px-Bradbury_building_Los_Angeles_c2005_01383u_crop.jpg',
            title: 'Изба зажиточного крестьянина',
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXJya2SXL2NMhrHkJmY66iMCUUwI11jmY2g&s',
            title: 'Изба зажиточного крестьянина'
        },
        {
            img: 'https://www.visitchurches.org.uk/static/derivatives/gallery_7e1461bbf7a7fc106abfce2c1960f526/458ead4c-1fa0-404e-b813446b226e2897.jpg',
            title: 'Изба зажиточного крестьянина'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Eagle_Warehouse.jpg/1200px-Eagle_Warehouse.jpg',
            title: 'Изба зажиточного крестьянина'
        }
    ];

    const handleClose = () => {
        console.log('clickedddd');
        setAppMode('map');
    };

    // @ts-ignore
    return (
        <Stack width={'600'} direction={"column"} spacing={2} justifyContent={"stretch"}>
            <Carousel autoPlay={false}
                      navButtonsAlwaysVisible={true}

                      indicatorContainerProps={{
                          style: {
                              marginTop: "-60px",
                              zIndex:1,
                              position: "relative"
                          }
                      }}
            >

                {
                    itemData.map((item, i) =>
                        <Box
                            sx={{
                                // backgroundImage: `url(${item.img})`,
                                // backgroundSize: "cover",
                                // width: "100%",
                                maxHeight: '800',
                                // p:'0'
                                // paddingBottom: '0'
                            }}
                        >
                            <img
                                src={item.img} alt={item.title}
                                width={"100%"}
                                height={"auto"}
                                // z-index={10000}
                            ></img>

                            <Rating sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                margin: 0
                            }} value={place.appeal} precision={0.1}/>

                            <Button
                                aria-label="close"
                                onClick={handleClose}
                                sx={(theme) => ({
                                    // backgroundColor: 'red',
                                    zIndex:1,
                                    position: "absolute",
                                    right: 8,
                                    top: 8,
                                    color: theme.palette.grey[500],
                                })}>
                                {/*<CloseIcon/>*/}
                                закрыть
                            </Button>
                        </Box>
                    )
                }
            </Carousel>
        </Stack>
    );
};

export default ImageGallery;