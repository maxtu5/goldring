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
    return images && images.length > 0;
}

const ImageGallery = ({place}: Props) => {
    const {setAppMode} = useContext(GRingContext)

    const itemData = hasImages(place.pics) ? place.pics.map(i => {
            return {img: url_imageprefix + i, title: url_imageprefix + i} }) :
        [{
            img: '',
            title: '',
        }];

    const handleClose = () => {
        console.log('clickedddd');
        setAppMode('map');
    };

    // @ts-ignore
    return (
        <Stack direction={"column"} spacing={0} justifyContent={"stretch"}>
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
            <Carousel autoPlay={false}
                      navButtonsAlwaysVisible={true}
                // navButtonsProps={}
                      indicatorContainerProps={{
                          style: {
                              marginTop: "-60px",
                              zIndex: 1,
                              position: "relative"
                          }
                      }}
            >

                {itemData.map((item, i) =>
                    <Card sx={{
                        width: 'auto', height: "80vh"
                        // margin: '0'
                        , backgroundColor: 'black'
                    }}>
                        <CardMedia
                            component="img"
                            alt={item.title}
                            height='100%'
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
        </Stack>
    )
};

export default ImageGallery;