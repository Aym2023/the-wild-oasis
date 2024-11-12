import { useEffect } from 'react';
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabines} from '../services/apiCabines';

function Cabins() {
  useEffect(function() {
    getCabines().then((data) => console.log(data));
  }, [] );

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src='https://znfmmkrjaydtmpkpbstq.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg'/>
    </Row>
  );
}

export default Cabins;
