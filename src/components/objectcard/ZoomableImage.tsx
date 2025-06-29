import {Box, Button, CardMedia} from "@mui/material";
import React, {useEffect} from "react";

export function ZoomableImage(props: {
    alt: string,
    src: string,
    setImageView: (s: string) => void
}) {
    const [position, setPosition] = React.useState({x: 50, y: 50})
    const [zoom, setZoom] = React.useState(100)
    const imageRef = React.useRef<HTMLImageElement>(null)

    function zoomPlus(delta: number) {
        setZoom(zoom => zoom < 30 && delta < 0 ? zoom : zoom + (delta > 0 ? 10 : -10))
    }

    function handleDrag(deltaX: number, deltaY: number) {
        setPosition(position => position = {
            x: position.x - deltaX, //position.x<=0 && deltaX>0 || position.x>100 && deltaX<0 ? position.x : position.x-deltaX,
            y: position.y - deltaY
        })
    }

    useEffect(() => {
        console.log('draw')
        if (imageRef.current === null) return
        // @ts-ignore
        const image = imageRef.current
        let isDragging = false
        let prevPosition = {x: 0, y: 0}
// @ts-ignore
        const handleMouseDown = (e) => {
            e.preventDefault()
            console.log("Mouse-Down")
            isDragging = true
            prevPosition = {x: e.clientX, y: e.clientY}
        }
// @ts-ignore
        const handleMouseMove = (e) => {
            if (!isDragging) return
            console.log("Mouse-move")
            const deltaX = e.clientX - prevPosition.x
            const deltaY = e.clientY - prevPosition.y
            prevPosition = {x: e.clientX, y: e.clientY}
            handleDrag(deltaX / 2, deltaY / 2)
            // setPosition(position=>{x: position.x + deltaX, y: position.y + deltaY})
        }
// @ts-ignore

        const handleMouseUp = (e) => {
            console.log("Mouse-Up")
            isDragging = false
        }
// @ts-ignore

        const handleMouseWheel = (e) => {
            zoomPlus(e.deltaY)
        }

        image.addEventListener("mousedown", handleMouseDown)
        image.addEventListener("mousemove", handleMouseMove)
        image.addEventListener("mouseup", handleMouseUp)
        image.addEventListener("wheel", handleMouseWheel)

        return () => {
            image.removeEventListener("mousedown", handleMouseDown)
            image.removeEventListener("mousemove", handleMouseMove)
            image.removeEventListener("mouseup", handleMouseUp)
            image.removeEventListener("wheel", handleMouseWheel)

        }
    }, [imageRef]);

    return (<Box ref={imageRef} sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
        backgroundImage: `url("${props.src}")`,
        backgroundPosition: `${position.x}% ${position.y}%`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${zoom}%`
    }}>
        <Button onClick={() => props.setImageView('')}
                sx={{
                    position: "absolute",
                    right: 8,
                    top: 8
                }}>закрыть</Button>
    </Box>)

}