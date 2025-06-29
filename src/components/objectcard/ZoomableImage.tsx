import {Box, Button} from "@mui/material";
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
            x: position.x-deltaX<0 ? 0 : (position.x-deltaX>100 ? 100 : position.x-deltaX),
            y: position.y-deltaY<0 ? 0 : (position.y-deltaY>100 ? 100 : position.y-deltaY)
        })
    }

    useEffect(() => {
        if (imageRef.current === null) return
        const image = imageRef.current
        let isDragging = false
        let prevPosition = {x: 0, y: 0}

        const handleMouseDown = (e: MouseEvent) => {
            e.preventDefault()
            isDragging = true
            prevPosition = {x: e.clientX, y: e.clientY}
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return
            console.log("Mouse-move")
            const deltaX = e.clientX - prevPosition.x
            const deltaY = e.clientY - prevPosition.y
            prevPosition = {x: e.clientX, y: e.clientY}
            handleDrag(deltaX / Math.pow(zoom/100, 3) , deltaY / Math.pow(zoom/100, 3))
        }

        const handleMouseUp = (e: MouseEvent) => {
            isDragging = false
        }

        const handleMouseWheel = (e: WheelEvent) => {
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

    return (
        <Box ref={imageRef} sx={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'black',
            backgroundImage: `url("${props.src}")`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `${zoom}%`
        }}>
            {`${zoom}, ${position.x}, ${position.y}`}
            <Button onClick={() => props.setImageView('')}
                    sx={{
                        backgroundColor: 'white',
                        position: "absolute",
                        right: 8,
                        top: 8
                    }}>закрыть</Button>
        </Box>
    )
}