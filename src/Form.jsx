import { Button, Container, createTheme, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deposite,withdraw,nameUpdate,mobileUpdate,reset } from './actionCreater';

const Form = () => {

    const [amount,setAmount]=useState('')
    const [mobile,setMobile]=useState("");
    const [name,setName]=useState('')
    const [transactionID,setTransactionID]=useState(0)

  const data=useSelector((state)=>{
         return state
  })
  console.log(" Data :",data);
  
 let dispatch=useDispatch()

 const handleDeposite=()=>{
    dispatch(deposite(amount))
    setTransactionID(transactionID+1)
    dispatch({type:"addTransaction",
      payload:{
        id:transactionID,
        amount:amount,
        date:new Date(),
        type:"Credit"
      }
    })
    
    setAmount("")
 }
  const handleWithdraw=()=>{
    dispatch(withdraw(amount))
    setTransactionID(transactionID+1)
    dispatch({type:'addTransaction',
      payload:{
        id:transactionID,
        amount:amount,
        date:new Date(),
        type:"Debit"
      }
    })
    
    setAmount("")
  }
  const handleMobile=()=>{
    dispatch(mobileUpdate(mobile))
    setMobile("")
  }
  const handleName=()=>{
    dispatch(nameUpdate(name))
    setName('')
  }
  const handleReset=()=>{
    dispatch(reset())
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
    <TextField label="Deposite" style={{width:'30%'}} value={amount} onChange={(e)=>{setAmount(e.target.value)}}></TextField>  <span> </span>
    <Button variant='contained' onClick={handleDeposite}>Deposite</Button> <span> </span>
    <Button variant='contained' onClick={handleWithdraw} color='danger' style={{color:"white"}}>Withdraw</Button><br /><br />
    <TextField label="Name" style={{width:'30%'}} value={name} onChange={(e)=>{setName(e.target.value)}}></TextField>  <span> </span>
    <Button variant='contained' onClick={handleName} >Name Update</Button>  <br /><br />
    <TextField label="Mobile" style={{width:'30%'}} value={mobile} onChange={(e)=>{setMobile(e.target.value)}}></TextField>  <span> </span>
    <Button variant='contained' onClick={handleMobile} >Mobile Update</Button> <br /><br />
    <Button variant='contained' onClick={handleReset} color='danger' style={{color:"white"}}>Reset</Button>
    <TableContainer component={Paper} style={{ maxWidth: 500, marginTop: 20 }} >
        <Typography variant='h4' color='primary' fontWeight={"bold"} gutterBottom>Account Details</Typography>
      <Table>
        {/* Table Header */}
        <TableHead style={{backgroundColor:'primary'}}>
          <TableRow>
            <TableCell style={{ color: '#1976d2', fontWeight: 'bold' }}>Amount</TableCell>
            <TableCell style={{ color: '#1976d2', fontWeight: 'bold' }}>FullName</TableCell>
            <TableCell style={{ color: '#1976d2', fontWeight: 'bold' }}>Mobile</TableCell>
           
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
            <TableRow>
              <TableCell>{data.account.balance}</TableCell>
              <TableCell>{data.account.fullName}</TableCell>
              <TableCell>{data.account.mobileNumber}</TableCell>
             

            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>

    
    <TableContainer component={Paper} style={{ maxWidth: 700, marginTop: 20 }}>
    <Typography variant='h4' color='primary' fontWeight={"bold"} gutterBottom >Transaction Details</Typography>
      <Table aria-label="customized table">
        <TableHead>
          <TableCell style={{ color: '#1976d2', fontWeight: 'bold' }}>SNo.</TableCell>
          <TableCell style={{ color: '#1976d2', fontWeight: 'bold' }}>Amount</TableCell>
          <TableCell style={{ color: '#1976d2', fontWeight: 'bold' }}>Type</TableCell>
          <TableCell style={{ color: '#1976d2', fontWeight: 'bold' }}>Date</TableCell>
        </TableHead>
        <TableBody>
        {
          data.transaction.map((transaction,index)=>{
            return (
              <TableRow key={index}>
                
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.date.toString()}</TableCell>
              </TableRow>
            )
          })
        }

        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </ThemeProvider>

    </div>
  )
}

export default Form