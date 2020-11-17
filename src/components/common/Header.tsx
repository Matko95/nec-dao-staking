import React from "react";
import { useLocation } from "react-router-dom";
import { observer, inject } from "mobx-react";
import NectarLogoHeader from "assets/svgs/NecLogo.svg";
import styled from "styled-components";
import { Typography, Button, Box, Grid } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { BeehiveCountdown } from "components/common/beehive/Countdown";

const Header = styled(Box)`
  position: fixed;
  z-index: 1200;
  width: 100%;
  padding: 0 166px;
  height: 70px;
  background: transparent;
  
  & > div {
    height: 100%;
  }
  
  @media(max-width: 768px) {
    padding: 0 25px;
  }
`;

const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  .MuiButton-outlinedPrimary {
    color: #ffffff !important;
    height: 40px !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

export const AppHeader = inject("root")(
  observer((props) => {
    const { beehiveStore } = props.root;

    const { showCountdown } = beehiveStore;

    console.log(showCountdown);

    return (
      <Header boxSizing='border-box'>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item>
            <Logo src={NectarLogoHeader} />
          </Grid>
          <Grid item>
            <HeaderButton>
              <BeehiveCountdown />
              <Button variant={"outlined"} color={"primary"} href="https://www.deversifi.com">
                <Typography
                  variant={"body2"}
                  align={"left"}
                  color={"textPrimary"}
                  style={{ fontWeight: "bold", marginRight: "16px", textTransform: "none" }}
                >
                  DeversiFi
                </Typography>
                <ArrowForward fontSize={"small"} />
              </Button>
            </HeaderButton>
          </Grid>
        </Grid>
      </Header>
    );
  })
);
