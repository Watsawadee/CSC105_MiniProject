import React from "react";
import NavBar from "../components/NavBar";
import { Box, Typography } from "@mui/material";

function Aboutpage() {
    return (
        <div>
            <>
                <NavBar />
                <Box sx={Content}>
                    <Typography sx={Head}>
                        “Delicious recipes at your fingertips”
                    </Typography>

                    <Typography sx={Topic}>Who we are?</Typography>
                    <Typography sx={Text}>
                        Lorem ipsum dolor sit amet consectetur. Quam fringilla
                        turpis massa porttitor. In est viverra integer nulla id
                        quam. Ac sit pretium convallis blandit nec quam risus
                        morbi. Accumsan vulputate risus diam eu ultrices proin
                        maecenas ut. Aenean dolor bibendum viverra praesent at.
                        Justo nunc arcu diam eu dolor ornare.
                    </Typography>
                    <Typography sx={Topic}>Our History</Typography>
                    <Typography sx={Text}>
                        Lorem ipsum dolor sit amet consectetur. Quam fringilla
                        turpis massa porttitor. In est viverra integer nulla id
                        quam. Ac sit pretium convallis blandit nec quam risus
                        morbi. Accumsan vulputate risus diam eu ultrices proin
                        maecenas ut. Aenean dolor bibendum viverra praesent at.
                        Justo nunc arcu diam eu dolor ornare.
                    </Typography>
                    <Typography sx={sec_text}>
                    Lorem ipsum dolor sit amet consectetur. Leo facilisi ultrices tellus non pellentesque. Mauris tristique dictum ut diam faucibus pulvinar. Donec volutpat venenatis urna vitae neque odio velit viverra. Volutpat aliquet quisque vitae a amet pretium. Mattis nisl augue condimentum purus vel viverra ut. Orci rhoncus posuere fringilla fames metus auctor lacus turpis. Diam gravida feugiat massa nisi felis. Morbi massa purus eleifend auctor. Rhoncus enim etiam ornare eget et. Risus nisi vestibulum mi massa odio commodo sodales nulla id. Ultricies vitae sollicitudin tortor eleifend sagittis ac integer. Amet dui maecenas mi quam purus vel eu sollicitudin eu. Amet et nunc viverra proin mauris amet dolor quis. Suspendisse sagittis varius gravida euismod ut mauris. Nulla varius nisl nunc elit accumsan malesuada iaculis. Interdum ullamcorper donec facilisi in vulputate. Eu neque iaculis ipsum pulvinar fringilla sed porta lobortis. Viverra pretium imperdiet neque id. Faucibus vel consequat neque rhoncus maecenas nec tristique est nunc. Eget porttitor feugiat facilisis mattis pulvinar. Suspendisse nulla molestie integer auctor commodo vestibulum placerat.

                    </Typography>
                </Box>
            </>
        </div>
    );
}

export default Aboutpage;

const Content = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "100px",
  marginRight: "100px",
  marginTop: "70px"
}

const Head = {
  color: "#F67280",
  fontWeight: "Bold",
  fontFamily: "Quicksand",
  fontSize: "60px"
}

const Topic = {
  fontWeight: "Bold",
  fontFamily: "Quicksand",
  fontSize: "60px",
  marginTop: "15px",
}

const Text = {
  fontWeight: "Bold",
  fontFamily: "Quicksand",
  fontSize: "25px",
  marginTop: "10px"
}

const sec_text = {
  fontWeight: "Bold",
  fontFamily: "Quicksand",
  fontSize: "25px",
  marginTop: "40px",
  marginBottom: "70px"
}