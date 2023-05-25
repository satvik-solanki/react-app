import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";
import Form from "./Form"
function Home(props) {
  return (
    <Page title="EmeraldS">
      <Box>
        <Banner/>
      </Box>
    </Page>
  );
}

export default Home;
