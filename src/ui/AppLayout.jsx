import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import SideBar from "./SideBar";

const Main = styled.main`
background-color: var(--color-grey-50);
padding: 4rem 6rem 4.8rem;
`;

const StledAppLayout = styled.div`
display: grid;
height: 100vh;
grid-template-columns: 26rem 1fr;
grid-template-rows: auto 1fr;
`;

const Container = styled.div`
max-Width: 120rem;
margin: 0 auto;
display: flex;
flex-direction: column;
gap: 3.2rem;
`;


function AppLayout() {
    return (
        <StledAppLayout>
           <Header/>
           <SideBar/>
           <Main>
           <Container>
           <Outlet/>
          </Container>
           </Main>
        </StledAppLayout>
    )
}

export default AppLayout;
