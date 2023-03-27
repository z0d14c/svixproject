import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const AppContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
});

const ContentContainer = styled(Box)({
  width: "100%",
  padding: "32px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
  height: "90vh"
});

export const ShellLayout = () => {
  return (
    <AppContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </AppContainer>
  );
};

export default ShellLayout;
