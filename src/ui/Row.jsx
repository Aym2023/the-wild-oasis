import styled, { css } from "styled-components";


const Row = styled.div`
 Display: flex;

 ${(props) => props.type === 'horizontol' && css`
    justify-content: space-between;
    align-items: center:
    gap: 1.2rem;
    `}

     ${(props) => props.type === 'vertical' && css`
    flex-direction: column; 
    gap: 1.6rem;
    `}
`;

Row.defaultProps = {
    type:'vertical',
    };

export default Row;