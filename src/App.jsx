import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyledApp = styled.main`
padding: 20px;
`;

function App() {
  return (
    <>
    <GlobalStyles />
    <StyledApp>
      <Row>
      <Row type='horizontol'>
      <Heading as='h1'>Welcome World</Heading>

    <div>
   <Heading as='h2'>Check In</Heading>
   <Button 
   size='medium' 
   vartion='primary' 
   onClick={() => alert('Check In')}>Check In</Button>
   <Button    
   size='small' 
   vartion='danger' 
   onClick={() => alert('Check Out')}>Check Out</Button>
  </div>
    </Row>
    
    <Row>
    <Heading as='h3'>Form</Heading>
    <form>
    <Input type='number' placeholder='number of guests'/>
    <Input type='number' placeholder='number of guests'/>
    </form>
    </Row>
      </Row>
    </StyledApp>
    </>
  );
}

export default App;
