import React from "react";
import {Nav, Navbar, Carousel, Dropdown, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import greenly from "../greenlylogo.png";
import { FaUserAlt,FaPhoneAlt,FaShoppingCart,FaBackward } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
// import '../App.css'
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import {useHistory} from "react-router"


const NavbarPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const userSign = useSelector(state => state.userSignin)
    const userLog = useSelector(state => state.userLogin);
   // const {userLInfo} = userLogin;
    var {userInfo} = userSign;
    
    var {userLInfo} = userLog;
    console.log(userLInfo);
    //const {userLoginInfo} = userLogin



    const logouthandler = () => {
        dispatch(logout())
        history.push("/");
    }

    const RenderMenu = () => {
        if(userInfo ){
            return(
                <>
                <NavDropdown className="" title={userInfo.name} >
                   
                   <NavDropdown.Item><NavLink to ="/profile"><FaUserAlt className="mr-3" />Profile</NavLink></NavDropdown.Item>
                   <NavDropdown.Item onClick={logouthandler}><GrLogout className="mr-3"/>Logout</NavDropdown.Item>
                    
                </NavDropdown>
               </>
            )
        }else if(userLInfo ){
            return(
                <>
                <NavDropdown className="" title={userLInfo.name} >
                   
                   <NavDropdown.Item><NavLink to ="/profile"><FaUserAlt className="mr-3" />Profile</NavLink></NavDropdown.Item>
                   <NavDropdown.Item onClick={logouthandler}><GrLogout className="mr-3"/>Logout</NavDropdown.Item>
                    
                </NavDropdown>
               </>
            )
        }else{
            return(
                <Nav>
                        <Nav.Link><NavLink style={{color:"black"}} className="mr-3" to="/login">LogIn</NavLink></Nav.Link>
                        <Nav.Link><NavLink style={{color:"black"}} className="" to="/signup">SignUp</NavLink></Nav.Link>
                </Nav>
            )
        }
    }


    return (
        <>
           <Navbar id="mainbar" bg="light" expand="lg" className ="shadow pl-3 pr-3" id="mainnav">
               <Navbar.Brand><img src={greenly} width="160" height="80" className="d-inline-block align-top"  /></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className = "ml-auto mr-4 p-4">
                    
                    <Nav.Link><NavLink style={{color:"black"}} className="mr-4" to="/">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink style={{color:"black"}} className="mr-4" to="/store">Store</NavLink></Nav.Link>
                    <Nav.Link><NavLink style={{color:"black"}} className="mr-4" to="/about">About</NavLink></Nav.Link>
                    <Nav.Link><NavLink style={{color:"black"}} className="mr-4" to="/contact">Contact</NavLink></Nav.Link>
                   
                    <RenderMenu />
                    
                    {/* { userInfo.hasOwnProperty("name") || userInfoL.hasOwnProperty("name") ? (
                        <>
                         <NavDropdown className="" title={userInfo.name} >
                            
                            <NavDropdown.Item><NavLink to ="/profile"><FaUserAlt className="mr-3" />Profile</NavLink></NavDropdown.Item>
                            <NavDropdown.Item onClick={logouthandler}><GrLogout className="mr-3"/>Logout</NavDropdown.Item>
                             
                         </NavDropdown>
                        </>
                    ) : (
                    <Nav>
                        <Nav.Link><NavLink style={{color:"black"}} className="mr-3" to="/login">LogIn</NavLink></Nav.Link>
                        <Nav.Link><NavLink style={{color:"black"}} className="" to="/signup">SignUp</NavLink></Nav.Link>
                    </Nav>
                    )} */}
                    

                    <NavLink to="/cart" ><button className="btn btn-outline-success ml-5 mt-1" ><FaShoppingCart className="mr-2"/>Cart</button></NavLink>
                   
                  </Nav>
               </Navbar.Collapse>
           </Navbar> 
 
          
          
        </>
    )
}

export default NavbarPage
