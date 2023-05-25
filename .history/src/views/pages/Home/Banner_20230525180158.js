import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import AccountBoxSharpIcon from "@material-ui/icons/AccountBoxSharp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useStyles = makeStyles((theme) => ({
  mainSection: {
    backgroundColor: "#3c4cad",
    backgroundImage:
      "linear-gradient(180deg,#3c4cad,#c24ca2,#ff6d7d,#ffb05d,#f9f871)",
    backgroundImage: "url(./images/inline.jpeg)",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%", 
    paddingTop:"200px"
  },
  mainContentBox: {
    paddingTop: "5rem",
    transition: "0.5s",
    marginTop: "30px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    visibility: "visible",
    animationDuration: "1500ms",
    animationDelay: "400ms",
    animationName: "fadeInUp",
  },
  childBox: {
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(167,17,98,0.8099614845938375) 1%, rgba(0,212,255,1) 100%)",
    height: "300px",
    boxShadow: "0px 30px 60px #3333330d",
    paddingBottom: "5rem",
    position: "relative",
    display: "block",
    padding: "40px 20px 45px 30px",
    overflow: "hidden",
    borderRadius: "10px",
  },
  btnSection: {
    "& button": {
      marginTop: "2rem",
      background: "gray",
      color: "#fff",
      marginBottom: "3rem",
      "&:hover": {
        background: "gray",
      },
    },
  },
  heading: {
    "& h1": {
      marginTop: "1rem",
      fontFamily: "'Red Rose', cursive",
      color: "#FFF",
    },
  },
  formSection: {
    backgroundImage: {
      backgroundColor: "#3c4cad",
      backgroundImage:
        "linear-gradient(180deg,#3c4cad,#c24ca2,#ff6d7d,#ffb05d,#f9f871)",
    },
    "& h1": {
      paddingTop: "4rem",
      paddingBottom: "3rem",

      color: "#fff",
    },
    "& input": {
      height: "30px",
      width: "100%",

      border: "none",
      outline: "none",
      background: "none",
    },
    "& button": {
      background: "transparent",
      marginBottom: "2rem",
      color: "#fff",

      transition: ".8s ease-in-out",
      width: "10%",
      marginLeft: "2rem",

      borderRadius: "10px",
      border: "1px solid #fff",
      "&:hover": {
        background: "orange",
      },
    },
    "& ::placeholder": {
      paddingLeft: "10px",
      color: "#fff",
    },
  },
  inputSection: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #fff",
    borderRadius: "10px",
    alignItems: "center",
    width: "300px",
    color: "#fff",
  },
}));
export default function Apidummy() {
  const diffToast = () => {
    toast("Form Submitted");
  };
  const deleteddiffToast = () => {
    toast("Item Deleted Successfully");
  };
  const updatediffToast = () => {
    toast("Update Successfully");
  };
  const classes = useStyles();
  const [set, setImage] = useState([]);
  const loadImages = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setImage(res.data);
  };
  useEffect(() => {
    loadImages();
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  // const [userId, setUserId] = useState(null);
  // const loadName = async () => {
  //   const res = await axios.post("https://jsonplaceholder.typicode.com/posts");
  //   setName(res.data);
  // };
  // useEffect(() => {
  //   loadName();
  // }, []);
  // function saveUser() {
  //   console.warn({ name, email, number });
  //   let data = { name, email, number };
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((result) => {
  //     console.warn("result", result);
  //     result.json().then((res) => {
  //       console.warn("res", res);
  //     });
  //   });
  //   diffToast();
  // }
  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
      });
      deleteddiffToast();
    });
  }
  function upadateData() {
    console.warn({ name, email, number });
    let data = { name, email, number };
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        // 'Accept': 'application/json, text/plain, */*',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, id: number }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
    updatediffToast();
  }
  // function selectUser(id) {
  //   console.warn("function called", users[id - 1]);
  //   let item = users[id - 1];
  //   setName(item.name);
  //   setEmail(item.email);
  //   setNumber(item.number);
  // }

  return (
    <Box className={classes.mainSection}>
      {/* <Container>
        <Box className={classes.heading}>
          <Typography variant="h1">Dummy Api Post</Typography>
        </Box>
        <Grid container spacing={1}>
          {set.map((item) => (
            <>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box className={classes.mainContentBox}>
                  <Box className={classes.childBox}>
                    <Container>
                      <Typography variant="h6">{item.userId}</Typography>
                      <Typography variant="body1">{item.id}</Typography>
                      <Typography variant="h5">{item.title}</Typography>
                      <Typography>{item.body}</Typography>
                    </Container>
                    <Box className={classes.btnSection}>
                      <Button>Info</Button>&nbsp;&nbsp;&nbsp;
                      <Button onClick={() => deleteUser(item.id)}>
                        Delete
                      </Button>
                      {/* <ToastContainer /> */}
                    </Box>
                  </Box>
                </Box>
              </Grid> */}
            </>
          ))}
        </Grid>
        {/* <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <form action="" className={classes.formSection}>
              <Typography variant="h1">POST API EXAMPLE</Typography>
              <Box>
                <Container></Container>

                <Box className={classes.inputSection}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    name="name"
                    placeholder="Enter Your Name"
                  />
                  <PersonIcon />
                </Box>
              </Box>
              <br /> <br />
              <Box className={classes.inputSection}>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  placeholder="Enter Your Email"
                />
                <EmailIcon />
              </Box>
              <br />
              <br />
              <Box className={classes.inputSection}>
                <input
                  type="text"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  name="number"
                  placeholder="Enter Your Mobile Number"
                />
                <AccountBoxSharpIcon />
              </Box>
              <br />
              <br />
              <Box style={{ justifyContent: "center", alignItems: "center" }}>
                <Button type="button" onClick={saveUser}>
                  ADD USER
                </Button>
                <Button type="button" onClick={upadateData}>
                  update
                </Button>
              </Box>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </form>
          </Grid>
        </Grid> */}
        
      </Container>
    </Box>
  );
}
