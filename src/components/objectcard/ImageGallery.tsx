import React, {useContext, useEffect} from 'react';
import {Box, Button, Card, CardContent, CardMedia, Rating, Stack} from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import {GRingContext} from "../../utils/context";
import {FullPlace} from "../../utils/types";
import {url_imageprefix} from "../../utils/constants";
import {ZoomableImage} from "./ZoomableImage";

interface Props {
    place: FullPlace,
    setImageView: (value: string) => void
}

function hasImages(images: string[]) {
    return images && images.length > 0;
}

const ImageGallery = ({place, setImageView}: Props) => {
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
                                <CardMedia
                                    component="img"
                                    loading="lazy"
                                    alt={item.title}
                                    width='auto'
                                    src={item.img}
                                    sx={{
                                        objectFit: "contain",
                                        height:{ sm: '80%', xl: '85%'}
                                    }}
                                />
                                <CardContent>
                                    <Rating sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        margin: 0
                                    }} value={place.appeal} precision={0.1}/>
                                    <Button sx={{
                                        position: "relative",
                                        bottom: "10vh",
                                        left: 0,
                                        margin: 0,
                                        // zIndex: 10000
                                    }}
                                        onClick={()=>setImageView(item.img)}>
                                        увеличить
                                    </Button>
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