import React from "react";
import styles from "./../styles/dashboard.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {AiOutlineSetting} from "react-icons/ai";
import { Link } from 'react-router-dom';


const Dashboard_rest=() => {

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
          <th>Maps</th>
          <th>Actions</th> 
        </tr>
      </thead>
    );
  };

  const renderTableData = () => {
    return rests.map(rest => {
      const { id, name, description,  city, type, maps_link } = rest;   
      return (
        <tr key={id}>
       <td>{id}</td>
          <td>{name}</td>
          <td>{description}</td>
          <td>{city}</td>
          <td>{type}</td>
          <td>{maps_link}</td>

          <td>
          <div className={styles.buttonGroup}>
          <Link to='/adminEdit' ><button className={styles.button}>Edit</button> {/* Add your button(s) here */}</Link>
            <button className={styles.button}>Delete</button>
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
        {renderTableData()}
      </tbody>
      </table>
      </div>
      <div>  <Link to='/adminUpload'><button className={styles.addButton}>Add</button> </Link> </div>
   
    </div>
    </>


    )

}


export default Dashboard_rest;
