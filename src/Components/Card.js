
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';
import { CardActionArea } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import "../Components/Cardcss.css"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { FetchProducts } from './Redux/productSlice';
import { setRemove } from './Redux/productSlice';
import { STATUSES } from "../Components/Redux/productSlice"
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


function FunCard() {
    // const time = moment().format("DD-MM-YYYY")
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.product)
    const [color, setColor] = useState("white")

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [address, setAddress] = useState("")
    const [cuntry, setCuntry] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const fielddata = { name, lastname, address, cuntry, email, phone }
    console.log("dgdsdsds")
    const handleSubmit = () => {
        alert(JSON.stringify(fielddata))
        setOpen(false);
    }

    useEffect(() => {
        dispatch(FetchProducts())
    }, [])

    const handleRemove = (dataid) => {
        alert("Delete")
        dispatch(setRemove(dataid))
    }


    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 6
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex)
    // console.log({ records });
    const npage = Math.ceil(data.length / recordsPerPage)

    const numbers = [...Array(npage + 1).keys()].slice(1)

    const perPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }


    const Nextpage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }

    const changeCPage = (id) => {
        setCurrentPage(id)
    }
    const date = moment().format("dddd, MMMM Do YYYY, h:mm")

    if (status === STATUSES.LOADING) {
        return <h2 style={{ display: "flex", justifyContent: "center", marginTop: "300px" }}>Loading.....</h2>
    }

    return (

        <div >
            <div class="row" style={{ backgroundColor: "#DFE4EB" }}>
                <div class="col s3" >
                    {/* / Grey navigation panel */}
                    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }} >
                        <div style={{ backgroundColor: "white", width: "35%", border: "1px solid white", borderRadius: 15 }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", }}>
                                Hy! Reader.

                            </div>
                            <img src='https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'
                                style={{ borderRadius: "35%", width: 60, marginTop: -20 }}
                            />
                            <text style={{ marginLeft: 12 }}>Here's is Yours New's</text>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                        <h1>View Toggle</h1>
                        {/* krna hai yee task */}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: 60, }}>
                        <div style={{ border: "1px solid white", width: "50%", backgroundColor: "white", borderRadius: 12 }}>
                            <h3 style={{ marginLeft: 30 }}> Have you feedback ?</h3>
                            <div style={{ border: "1px solid green", borderRadius: 10, width: 150, height: 50, fontSize: 15, marginLeft: "80px", backgroundColor: "#E09EA2", cursor: "pointer" }}
                                onClick={handleOpen}
                            ><p style={{ marginLeft: 25, marginTop: 10, color: "black" }}>We're Listening</p></div>

                            {/* krna hai yee task */}
                        </div>
                    </div>



                </div>

                <div class="col s10">
                    <Container maxWidth='lg' style={{ backgroundColor: "#DFE4EB", }} >
                        <Grid container spacing={5} style={{ marginTop: "5px", display: "flex" }}>
                            {records.map((e, index) => {
                                return (
                                    <Grid item xs={12} sm={4} ms={4} key={index} >
                                        <Card sx={{ maxWidth: 250 }}>
                                            <text style={{ display: "flex", justifyContent: "flex-end", marginRight: 12, cursor: "pointer", fontSize: 18, color: "red" }} onClick={() => handleRemove(e.id)}>X</text>

                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="div" style={{ width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontWeight: "bolder" }}>
                                                        {e.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="black" style={{ width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                                        {e.body}
                                                    </Typography>
                                                    <Typography gutterBottom component="div">
                                                        <p style={{ fontSize: 13, color: "#E0E8EE", fontWeight: "bolder" }}>
                                                            {date}
                                                        </p>
                                                    </Typography>
                                                </CardContent>
                                                <CardMedia
                                                    component="img"
                                                    height="150"
                                                    image="https://source.unsplash.com/random/200x200?sig=3"
                                                    alt="green iguana"
                                                />
                                            </CardActionArea>
                                        </Card>

                                    </Grid>
                                )
                            })}
                        </Grid>


                        <nav style={{ margin: 20, display: "flex", justifyContent: "center" }}>
                            <ul className='pagination'>
                                <li className='page=item'>
                                    <a href='#' className='page-link' onClick={perPage}>Pre</a>
                                </li>
                                {numbers.map((n, i) => (
                                    <li className={`page-item ${currentPage === n ? 'active' : ''}`}>
                                        <a href='#' className='page-link' onClick={() => changeCPage(n)}>{n}</a>

                                    </li>
                                ))}
                                <li className='page=item'>
                                    <a href='#' className='page-link' onClick={() => Nextpage}>Next</a>

                                </li>
                            </ul>

                        </nav>
                    </Container>
                </div>

            </div>


            <div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box component="form"
                        sx={{
                            '& > :not(style)': { m: 0.5, width: '25ch' },

                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 600,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4,
                        }}
                        noValidate
                        autoComplete="off">
                        <Typography id="modal-modal-title" variant="h7" component="h7">
                            Thankyou so much your taking time.
                            please Provide belwo detials.

                        </Typography>

                        <TextField
                            id="outlined-controlled"
                            label="Name"

                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                        <TextField
                            id="outlined-uncontrolled"
                            label="Last Name"
                            onChange={(event) => {
                                setLastname(event.target.value);
                            }}

                        />

                        <TextField
                            id="outlined-multiline-static"
                            label="Address"
                            multiline
                            rows={3}
                            onChange={(event) => {
                                setAddress(event.target.value);
                            }}

                        />

                        <TextField
                            id="outlined-uncontrolled"
                            label="Country"
                            onChange={(event) => {
                                setCuntry(event.target.value);
                            }}

                        />


                        <TextField
                            id="outlined-uncontrolled"
                            label="Email"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}

                        />

                        <TextField
                            id="outlined-uncontrolled"
                            label="Phone no"
                            onChange={(event) => {
                                setPhone(event.target.value);
                            }}

                        />
                        <Button variant="contained" style={{ color: "white", backgroundColor: "green" }} onClick={() => handleSubmit()}>
                            Success
                        </Button>
                    </Box>
                </Modal>
            </div>



        </div>




    );
}
export default FunCard;
