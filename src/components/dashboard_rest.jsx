import React, {  useEffect,useState } from "react";
import styles from "./../styles/dashboard.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {AiOutlineSetting} from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from "axios";

const Dashboard_rest=() => {
  const [Rest,setRest]=useState([]);
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhYTIzNTE2LTNmOGMtNDMzOS1hMzFiLWNlZWM1MTY0OTU1YiIsImlhdCI6MTY4NTg4MjU2OCwiZXhwIjoxNjg4NDc0NTY4fQ.WwfEsYfj8Ty6i8iCryFG2LMvRpEe_0tRfjVNaLV5JXc"

  useEffect(()=>{
    axios.get('http://localhost:4000/restaurant/fetch', {
  headers: {
    'Authorization': ` Bearer ${token}`
  }
})

.then((res)=>{
    console.log(res.data);

    setRest((res.data.restaurants));
 // console.log(res.data.users)
})
  //console.log(Userrs)
    .catch((err)=>{
      console.log(err);
    })
  },
{
   // Authorization:' Bearer'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhmNTI4NTI3LWI1YTMtNDVjMS04MzAyLTFiMzk4OGVhODJlZCIsImlhdCI6MTY4NTgzMTYzOCwiZXhwIjoxNjg4NDIzNjM4fQ.c6AW_w55X0Eurs9K7m9dhJiJnQ4QQhvbv19VH_UmJoU 
  },[])
 console.log(Rest)
  const rests = [
    { id: 1, name: 'John', description: 'Its a beautiful place where...' ,city: 'oran', type:'', maps_link: '',},
  ];

  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>City</th>
          <th>Type</th>
          <th>Actions</th> 
        </tr>
      </thead>
    );
  };

 
    return(
    <>
    
    <div className={styles.view}>
    <div className={styles.nav_container}> 
    <div className={styles.di}>
              <Container className={styles.navcon}>
              
                  <Nav className={styles.navv}>  
                  <h3 className={styles.title2} >ADMIN AREA</h3> 
                  <Link className={styles.link}  to='/usersDashboard'> Users </Link>
                    <Link className={styles.link} to='/destDashboard'> Destinations </Link>
                    <Link className={styles.link} to='/hotelsDashboard'> Hotels </Link>
                    <Link className={styles.link}  to='/restDashboard'> Restaurents  </Link>   
                    <Link className={styles.link} to='/formsDashboard'> Forms </Link>         
                  </Nav>

              </Container>
              
      </div>
      </div>
      <div className={styles.btnCtn}>
      <button className={styles.btn}> Sign out </button>
      </div>

      <div className={styles.container}>
      <table className={styles.adminDashboardTable}>
      {renderTableHeader()}
      <tbody>
        {Rest.map((rest)=>(
      <tr key={rest.id}>
       <td>{rest.id}</td>
          <td>{rest.name}</td>
          <td>{rest.description}</td>
          <td>{rest.city}</td>
          <td>{rest.type}</td>


          <td>
          <div className={styles.buttonGroup}>
          <Link to='/adminEdit' ><button className={styles.button}>Edit</button> {/* Add your button(s) here */}</Link>
            <button className={styles.button}>Delete</button>
            </div>
          </td>

        </tr>   
        ))}   </tbody>
      </table>
      </div>
      <div>  <Link to='/adminUpload'><button className={styles.addButton}>Add</button> </Link> </div>
   
    </div>
    </>


    )

}


export default Dashboard_rest;
