import { Button, Container, createTheme, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


const Form = () => {

    const [deposite,setDeposite]=useState("");
    const [withdraw,setWithdraw]=useState("");
    const [mobile,setMobile]=useState("");

  const data=useSelector((state)=>{
         return state
  })

 let dispatch=useDispatch()

 const handleDeposite=()=>{
    dispatch({type:"diposite",payload:deposite,trans:1})
    setDeposite("")
 }
  const handleWithdraw=()=>{
    dispatch({type:"withdraw",payload:withdraw})
    setWithdraw("")
  }
  const handleMobile=()=>{
    dispatch({type:"mobileNumberUpdate",payload:mobile})
    setMobile("")
  }


    const theme=createTheme({
        palette: {
            primary: {
              main: '#1976d2',
            },
            secondary: {
              main: '#dc004e',
            },
            danger:{
                main:"#f70505"
            }
          },
    })




  return (
    <div>

    <ThemeProvider theme={theme}>
    <Container>
    <Typography variant='h4' color='primary' fontWeight={"bold"} gutterBottom> 
        Form Using Redux
    </Typography>
    <TextField label="Deposite" style={{width:'30%'}} value={deposite} onChange={(e)=>{setDeposite(e.target.value)}}></TextField>  <span> </span>
    <Button variant='contained' onClick={handleDeposite}>Deposite</Button> <br /><br />
    <TextField label="Withdraw" style={{width:'30%'}} value={withdraw} onChange={(e)=>{setWithdraw(e.target.value)}}></TextField>  <span> </span>
    <Button variant='contained' onClick={handleWithdraw} color='danger' style={{color:"white"}}>Withdraw</Button><br /><br />
    <TextField label="Mobile" style={{width:'30%'}} value={mobile} onChange={(e)=>{setMobile(e.target.value)}}></TextField>  <span> </span>
    <Button variant='contained' onClick={handleMobile} >Mobile Update</Button>
    <TableContainer component={Paper} style={{ maxWidth: 500, marginTop: 20 }}>
        <Typography variant='h4' color='primary' fontWeight={"bold"} gutterBottom>Account Details</Typography>
      <Table>
        {/* Table Header */}
        <TableHead style={{backgroundColor:'primary'}}>
          <TableRow>
            <TableCell style={{ color: '#1976d2', fontWeight: 'bold' }}>Amount</TableCell>
            <TableCell style={{ color: '#1976d2', fontWeight: 'bold' }}>FullName</TableCell>
            <TableCell style={{ color: '#1976d2', fontWeight: 'bold' }}>Mobile</TableCell>
            <TableCell style={{ color: '#1976d2', fontWeight: 'bold' }}>Transaction No.</TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
            <TableRow>
              <TableCell>{data.balance}</TableCell>
              <TableCell>{data.fullName}</TableCell>
              <TableCell>{data.mobileNumber}</TableCell>
              <TableCell>{data.transactionNumber}</TableCell>

            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </ThemeProvider>

    </div>
  )
}

export default Form