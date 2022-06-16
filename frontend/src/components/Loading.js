import React from 'react'
import {Spinner} from "react-bootstrap"
import "../App.css"

const Loading = () => {
    return (
        <>
            <div className="align-items-center"><br /><br /><br /><br /><br /><br /><br /><br />
            {/* <h3>Loading...</h3> */}
            <center>
            <Spinner variant="danger" style={{width:"15rem",height:"15rem"}} animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
            
            
            </center><br /><br /><br /><br />

            </div> 
        </>
    )
}

export default Loading
