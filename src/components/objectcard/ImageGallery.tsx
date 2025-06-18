import React, {useContext, useEffect} from 'react';
import {Box, Button, Card, CardContent, CardMedia, Rating, Stack} from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import {GRingContext} from "../../utils/context";
import {FullPlace} from "../../utils/types";
import {url_imageprefix} from "../../utils/constants";
import {ZoomableImage} from "./ZoomableImage";

interface Props {
    place: FullPlace
}

function hasImages(images: string[]) {
    console.log('has images?', images);
    return images && images.length > 0;
}

const ImageGallery = ({place}: Props) => {
    const {setAppMode} = useContext(GRingContext)

    const itemData = hasImages(place.pics) ? place.pics.map(i => {
            return {img: url_imageprefix + i, title: url_imageprefix + i}
        }) :
        [{
            img: '',
            title: '',
        }];

    const handleClose = () => {
        console.log('clickedddd');
        setAppMode('map');
    };
    // console.log(itemData);

    return (
        <Stack direction={"column"} spacing={0}>
            <Stack direction={'row'} spacing={2} sx={(theme) => ({
                // backgroundColor: 'red',
                zIndex: 10000,
                position: "absolute",
                right: 8,
                top: 8,
            })}>
                <Button
                    aria-label="close"
                    onClick={handleClose}>
                    закрыть
                </Button>
            </Stack>
            {itemData[0].img === '' ?
                <Box height={{sm: '80vh', xl: '85vh'}} bgcolor={'black'}/> :
                <Box height={{sm: '80vh', xl: '85vh'}}>
                    <Carousel autoPlay={false}
                              swipe={false}
                              navButtonsAlwaysVisible={true}
                              indicatorContainerProps={{
                                  style: {
                                      marginTop: "-60px",
                                      zIndex: 1,
                                      position: "relative",
                                      // height: '100%'
                                  }
                              }}
                              sx={{height: '100%'}}
                    >

                        {itemData.map((item, i) =>
                            <Card sx={{
                                width: 'auto', height: "100vh",
                                // margin: '0'
                                backgroundColor: 'black'
                            }}>
                                <ZoomableImage alt={item.title} src={item.img}/>

                                <CardContent>
                                    <Rating sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        margin: 0
                                    }} value={place.appeal} precision={0.1}/>
                                </CardContent>
                            </Card>
                        )}
                    </Carousel>
                </Box>
            }
        </Stack>
    )
};

export default ImageGallery;