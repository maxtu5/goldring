import React, {useContext, useEffect, useRef} from 'react';
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
    const [zoom, setZoom] = React.useState(1)
    const [position, setPosition] = React.useState({x: 0, y: 0})
    const imageRef = React.useRef<HTMLImageElement>(null)
    const {setAppMode} = useContext(GRingContext)

    useEffect(() => {
        // @ts-ignore

        if (imageRef.current===null) return
        const image = imageRef.current
        console.log(image)

        let isDragging = false
        let prevPosition = {x: 0, y: 0}
// @ts-ignore
        const handleMouseDown = (e) => {
            console.log("handleMouseDown", e)
            isDragging = true
            prevPosition = {x: e.clientX, y: e.clientY}
        }
// @ts-ignore
        const handleMouseMove = (e) => {
            if (!isDragging) return
            const deltaX = e.clientX - prevPosition.x
            const deltaY = e.clientY - prevPosition.y
            prevPosition = {x: e.clientX, y: e.clientY}
            setPosition({x: position.x + deltaX, y: position.y + deltaY})
        }

        const handleMouseUp = () => {
            isDragging = false
        }
        image.addEventListener("mousedown", handleMouseDown)
        image.addEventListener("mousemove", handleMouseMove)
        image.addEventListener("mouseup", handleMouseUp)

        console.log(image)

        return () => {
            image.removeEventListener("mousedown", handleMouseDown)
            image.removeEventListener("mousemove", handleMouseMove)
            image.removeEventListener("mouseup", handleMouseUp)
        }
    }, [imageRef, zoom]);

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
                    aria-label="plus"
                    onClick={() => setZoom(zoom + 0.1)}
                >
                    +++
                </Button>

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
                              onChange={() => setZoom(1)}
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
                                    ref={imageRef}
                                    component="img"
                                    loading="lazy"
                                    alt={item.title}
                                    width='auto'
                                    src={item.img}
                                    sx={{
                                        objectFit: "contain",
                                        height: {sm: '80%', xl: '85%'},
                                        transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`
                                    }}
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