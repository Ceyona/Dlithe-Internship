import React from "react";
import user from "../images/images.png";
 const ContactCard = (props) => { 
     const { id, Name, Email} = props.contact;

     return(
        
        <div className = "item">
          <img className =" ui avatar image" src={user} alt="user" />
                      <div className = "content">
              <div className = "header">{Name}</div>
              <div>{Email}</div>
            </div>
            <i className = "trash alternate outline icon"
            style={{color:"red", marginTop: "7px"}} ></i>
            
          
        </div>
         
     );

 };
  export default ContactCard;