import React, { useState, useRef} from 'react';
import axios from 'axios';
import styles from "./../styles/addUser.module.css"
import { Link } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';

const EditForm = () => {

  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState('');
  const [stars, setStars] = useState('');
  const [mapsLink, setMapsLink] = useState('');
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };
  /*In this case, the files are stored in the files state array. When the user selects multiple files using the file input, the handleFileChange function is called, and it sets the selected files in the files state using the setFiles function.

In the handleSubmit function, the files are accessed from the files state array. The FormData object is created, and each file is appended to the form data using a loop. The index is used to differentiate between the files in the form data.

When you make the API request with axios.post('/api/upload', formData, ...), the form data containing the files is sent to the server for processing. The server can then handle the files and save them to the desired location or perform any other necessary operations.

Remember to implement the server-side logic to handle the uploaded files and process them according to your requirements.*/

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStarsChange = (e) => {
    setStars(e.target.value);
  };

  const handleMapsLinkChange = (e) => {
    setMapsLink(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length > 0 && description) {
      const formData = new FormData();
  
      files.forEach((file, index) => {
        formData.append(`images[${index}]`, file);
        formData.append(`descriptions[${index}]`, description);
        formData.append(`stars[${index}]`, stars)
        formData.append(`mapsLink[${index}]`, mapsLink)
      });
  
      try {
        await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        // Reset the form
        setFiles([]);
        setDescription('');
        setStars('');
        setMapsLink('');
        alert('Files uploaded successfully!');
        
      } catch (error) {
        console.error(error);
        alert('Error uploading files.');
      }
    } else {
      alert('Please select at least one of each information');
    }
  };


  return (
    <>
     <div className={styles.nav_container}> 
      <div>  
         <h1 className={styles.title} >ADMIN AREA</h1> 
         <div>
         <button onClick={goBack} className={styles.btn2}> Back </button>
          <button className={styles.btn}> Sign out </button>
          </div>
        
      </div>
      </div>
    <div className={styles.container}>
      <div className={styles.row}>
        <form onSubmit={handleSubmit} className={styles.uploadForm}>
          <div className={styles.uploadFileTitle}><p>Edit entity</p></div>
          

          <div className={styles.formGroup}>
            <textarea className={styles.textarea}
              placeholder="Enter a description"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>

          <div className={styles.placeHolder}>
          <input type='stars' placeholder='Stars'
                value={stars}
                onChange={handleStarsChange}
                className={styles.input}
              />

              <input type='mapsLink' placeholder='Maps Link' 
                value={mapsLink}
                onChange={handleMapsLinkChange}
                className={styles.input}
              />
          </div>

          <div className={styles.formGroup}>
          <input 
          type="file" 
          accept="image/*, .jpg, .jpeg, .png, .gif" 
          multiple onChange={handleFileChange} 
          ref={fileInputRef}
          className={styles.inputFile}
           />  
           <button type="button" className={styles.customButton} onClick={handleChooseFile}>
            Choose File
          </button>
           </div>
          <div className={styles.formGroup}>
            <button type="submit" className={styles.saveBtn}>Save</button>
          </div>
        </form>
       
      </div>
      <div className={styles.uploadedFilesContainer}>
      <div className={styles.uploadedFilesBox}>
        <p className={styles.uploadFileTitle}>Uploaded Files</p>
        {files.map((file, index) => (
          <p key={index} className={styles.uploadedFile}>{file.name}</p>
        ))}
      </div>
    </div>
    </div>

    </>
  );
};

export default EditForm;

/*Make sure that the name attribute of the file input element in your React code matches the field name expected by the Multer configuration on the server side. In the provided React code, the field name is set to 'image' in the formData.append('image', file) line. You may need to adjust it to match the field name expected by your Multer configuration.

Additionally, ensure that the server-side code is configured to handle multiple files in an array format, as mentioned in the previous response.*/



/* <div className={styles.uploadedFilesContainer}>
      <div className={styles.uploadedFilesBox}>
        <p className={styles.uploadFileTitle}>Uploaded Files:</p>
        {files.map((file, index) => (
          <p key={index} className={styles.uploadedFile}>{file.name}</p>
        ))}
      </div>
    </div>*/ 