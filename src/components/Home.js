// import { Grid } from "@mui/material"
// import { motion } from "framer-motion"
import { Card, CardMedia } from '@mui/material';


// const list = { hidden: { opacity: 0 } }
// const item = { hidden: { x: -10, opacity: 0 } }

export default function Home() {
    return (
        <>
        <h1>Long Live Dolph</h1>
        <Card sx={{ minWidth: "100%" }}>
            <CardMedia 
             component="iframe"
             src='https://www.youtube.com/embed/LN66A9bCF_U'
             sx={{minHeight: "80vh"}}/>
        </Card>
        </>
    )
}