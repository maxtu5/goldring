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

interface Props {
    place: FullPlace
}

function hasImages(images: string[]) {
    console.log(images)
    return images && images.length>0 && images[0].startsWith('moscow/b');
}

const ImageGallery = ({place}: Props) => {
    const {setAppMode} = useContext(GRingContext)
    console.log(place)
    const itemData = hasImages(place.images) ? place.images.map(i=> {
        const prefix = 'http://127.0.0.1:8081/'
        const file = prefix+i
            // .replaceAll('/','\\')
        return {img:file, title:file}}) : [
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
                    <Card sx={{width: 'auto', height: "80vh"
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