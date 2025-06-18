import {CardMedia} from "@mui/material";
import React, {useEffect} from "react";

export function ZoomableImage(props: {
    alt: string,
    src: string
}) {
    const [position, setPosition] = React.useState({x: 0, y: 0})
    const [zoom, setZoom] = React.useState(1)
    const imageRef = React.useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (imageRef.current===null) return
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
            setPosition({x: position.x + deltaX, y: position.y + deltaY})
        }
// @ts-ignore

        const handleMouseUp = (e) => {
            console.log("Mouse-Up")
            isDragging = false
        }
// @ts-ignore

        const handleMouseWheel = (e) => {
            setZoom(zoom + e.deltaY*0.01)
        }

        image.addEventListener("mousedown", handleMouseDown)
        image.addEventListener("mousemove", handleMouseMove)
        image.addEventListener("mouseup", handleMouseUp)
        image.addEventListener("wheel", handleMouseWheel)

        return () => {
            image.removeEventListener("mousedown", handleMouseDown)
            image.removeEventListener("mousemove", handleMouseMove)
            image.removeEventListener("mouseup", handleMouseUp)
        }
    }, [imageRef]);

    return (
        <CardMedia
            ref={imageRef}
            component='img'
            loading="lazy"
            alt={props.alt}
            width='auto'
            src={props.src}
            sx={{
                objectFit: "contain",
                height: {sm: '80%', xl: '85%'},
                transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
                zIndex: 10000
            }}
        />
    );
}