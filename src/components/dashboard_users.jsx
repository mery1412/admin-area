import React, { useEffect, useState } from "react";
import styles from "./../styles/dashboard.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {AiOutlineSetting} from "react-icons/ai";
import { Link } from 'react-router-dom';


const Dashboard_user=() => {
const [Userr,setUserr]=useState([]);
useEffect(()=>{
  axios
  .get('http://localhost:4000')
  .then((res)=>{
    console.log(res.data);
    setUserr(res.data);})
    .catch((err)=>{
      console.log(err);
    })
  })


  const users = [
    { id: 1, name: 'John', email: 'john@example.com', role: 'Guide' },
    { id: 2, name: 'Jane', email: 'jane@example.com', role: 'Translator' },
    { id: 3, name: 'Bob', email: 'bob@example.com', role: '' },
    { id: 4, name: 'Bob', email: 'bob@example.com', role: '' },
    { id: 5, name: 'Bob', email: 'bob@example.com', role: '' },
    { id: 6, name: 'Bob', email: 'bob@example.com', role: '' },
    { id: 7, name: 'Bob', email: 'bob@example.com', role: '' },
    { id: 8, name: 'Bob', email: 'bob@example.com', role: '' },
    { id: 9, name: 'Bob', email: 'bob@example.com', role: '' }, 
  ];

  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th> {/* Add a new column for the buttons */}
        </tr>
      </thead>
    );
  };

  const renderTableData = () => {
 
    return users.map(user => {
      const { id, name, email, role } = user;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{role}</td>
          
          <td>
          <div className={styles.buttonGroup}>

            <Link to='/adminEdit' ><button className={styles.button}>Edit</button> {/* Add your button(s) here */}</Link>
            <button className={styles.button} >Delete</button>
            </div>
          </td>

        </tr>
      );
    });
  };  

    return(
    <>
   
    <div className={styles.view}>
    <div className={styles.nav_container}> 
    <div className={styles.di}>
              <Container className={styles.navcon}>
              
                  <Nav className={styles.navv}>  
                  <h3 className={styles.title2} >ADMIN AREA</h3> 
                    <Link className={styles.link}  to='/usersDashboard'   > Users </Link>
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
        {renderTableData()}
      </tbody>
      </table>
      </div>
      <div>  <Link to='/adminUpload'><button className={styles.addButton}>Add</button> </Link> </div>
   
    </div>
    </>


    )

}


export default Dashboard_user;
