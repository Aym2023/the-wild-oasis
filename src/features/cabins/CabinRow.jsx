import styled from "styled-components";
import { useState } from 'react';
import { HiSquare2Stack, HiPencil, HiTrash } from "react-icons/hi2";

import  { useDeleteCabin } from './useDeleteCabin';
import { useCreateCabin } from "./useCreateCabin";

import CreateCabinForm from './CreateCabinForm';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
  margin-bottom: 1rem;
  margin-top: 1.3rem;
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

 const formatCurrency = (value) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
    value
  );


 function CabinRow ({ cabin }) {
const [showForm, setShowForm] = useState(false);
const { isDeleting, deleteCabin } = useDeleteCabin();
const { isCreating, createCabin} = useCreateCabin();

const {
id: cabinId, 
name,
maxCapacity, 
regularPrice, 
discount, 
description, 
image,
} = cabin;

function handelDuplicte () {
  createCabin({
    name: `Copy of ${name}`,
    maxCapacity, 
    regularPrice, 
    discount, 
    description, 
    image,       
  });
}

return (
  <>
<TableRow role='row'>
<Img src={image}/>
 <Cabin>{name}</Cabin>
 <div>fits up to {maxCapacity} guests</div>
 <Price>{formatCurrency(regularPrice)}</Price>
  {discount ? 
 ( <Discount>{formatCurrency(discount)}</Discount> 
) :  ( 
 <span> &mdash;</span> 
 )} 

  <div> 
 <button disabled={isCreating} onClick={handelDuplicte} > 
  <HiSquare2Stack/>
  </button>

   <button onClick={()=> setShowForm((show) => !show)}>
  <HiPencil/>
  </button>  
 
 <button onClick={() => deleteCabin(cabinId)} disabled = {isDeleting}>
 <HiTrash/>
 </button>
</div> 
  </TableRow>
  {showForm && <CreateCabinForm cabinToEdit={cabin}/>}
  </>
  );
}

export default CabinRow;