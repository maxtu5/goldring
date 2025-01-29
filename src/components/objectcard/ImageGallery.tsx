import React from 'react';
import {
    Paper,
    ImageList,
    ImageListItem,
    Stack,
    Box,
    Typography,
    Card,
    CardMedia,
    CardActions,
    Rating
} from "@mui/material";

const ImageGallery = () => {
    const itemData = [
        {
            img: 'https://cs13.pikabu.ru/post_img/big/2023/06/15/6/1686816849210348318.jpg',
            title: 'Изба зажиточного крестьянина',
        },
        {
            img: 'https://cs13.pikabu.ru/post_img/big/2023/06/15/6/1686816849239074970.jpg',
            title: 'Изба зажиточного крестьянина',
        },
        {
            img: 'https://kino-bank.com/upload/iblock/9de/9ded020fadc9b51e274d7f57975b8453.jpg',
            title: 'Изба зажиточного крестьянина',
        },
        {
            img: 'https://cs14.pikabu.ru/post_img/big/2023/06/15/6/1686816848213375531.jpg',
            title: 'Изба зажиточного крестьянина',
        }
    ];

    return (
        <Box marginTop={1}>
            <Stack direction={{xs: "column", sm: "row"}} spacing={2} justifyContent={"stretch"}>

                <Box flex={3} display="flex"
                     sx={{
                         display: "inline-block",
                         position: "relative"
                     }}>
                    <img src={'https://cs13.pikabu.ru/post_img/big/2023/06/15/6/1686816849210348318.jpg'}
                         width={"100%"}></img>
                    <Rating sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        margin: 1
                    }} defaultValue={3.8} precision={0.1}/>

                </Box>


                <Box flex={1}>
                    <Typography variant={"h5"}>
                        Другие фото
                    </Typography>
                    <ImageList sx={{width: "100%", height: "auto"}} cols={2} variant="masonry">
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}`}
                                    src={`${item.img}`}
                                    alt={item.title}
                                    loading="lazy"
                                    // width={"100%"}
                                    // height={"auto"}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Stack>
        </Box>
    );
};

export default ImageGallery;