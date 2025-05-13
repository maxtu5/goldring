import React, {useContext} from 'react';
import {
    Stack,
    Box,
    Rating, IconButton, Button, Paper, ImageList, ImageListItem, Card, CardMedia, CardContent
} from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import CloseIcon from "@mui/icons-material/Close";
import {GRingContext} from "../../utils/context";
import zIndex from "@mui/material/styles/zIndex";
import {FullPlace} from "../../utils/types";
import {url_imageprefix} from "../../utils/constants";

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
    console.log(itemData);

    return (
        <Stack direction={"column"} spacing={0} >
            <Button
                // autoFocus
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    // backgroundColor: 'red',
                    zIndex: 10000,
                    position: "absolute",
                    right: 8,
                    top: 8,
                    // color: theme.palette.grey[500],
                })}>
                {/*<CloseIcon/>*/}
                закрыть
            </Button>
            {itemData[0].img === '' ? <Box
                    // height={"75vh"}
                    height={{ sm: '80vh', xl: '85vh'}}
                    bgcolor={'black'}></Box> :
                <Box height={{ sm: '80vh', xl: '85vh'}}
                >
                    <Carousel autoPlay={false}
                              navButtonsAlwaysVisible={true}
                              indicatorContainerProps={{
                                  style: {
                                      marginTop: "-60px",
                                      zIndex: 1,
                                      position: "relative",
                                      // height: '100%'

                                  }
                              }}
                              sx={{height:'100%'}}
                    >

                        {itemData.map((item, i) =>
                            <Card sx={{
                                width: 'auto', height: "100vh",
                                // margin: '0'
                                backgroundColor: 'black'
                            }}>

                                <CardMedia
                                    component="img"
                                    alt={item.title}
                                    height='75%'
                                    width='auto'
                                    src={item.img}
                                    sx={{objectFit: "contain"}}
                                />

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