import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useSettings } from './useSettings';
import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
  const { 
    isLoading,
     Settings: {
     minBookingLength,
     maxBookingLength,

     breakfastPrice,
     maxGuestsPerBookings,
  } = {},
 } = useSettings();

 const { isUpdating, updateSetting } = useUpdateSetting();

 if (isLoading) return <Spinner />;

 function handelUpdate(e, field) {
  const { value}  = e.target;

  if(!value) return;
  updateSetting({[field]: value});
 }
  
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input 
        type='number' 
        id='min-nights' 
        disabled={isUpdating}
        defaultValue={minBookingLength}
        onBlur={(e) => handelUpdate(e, 'minBookingLength')}
        />
      </FormRow>

      <FormRow label='Maximum nights/booking'>
        <Input 
        type='number' 
        id='max-nights' 
        disabled={isUpdating}
        defaultValue={maxBookingLength}
        onBlur={(e) => handelUpdate(e, 'maxBookingLength')}
        />
      </FormRow>

      <FormRow label='Maximum guests/booking'>
        <Input 
        type='number' 
        id='max-guests'
        disabled={isUpdating} 
        defaultValue={maxGuestsPerBookings}       onBlur={(e) => handelUpdate(e, 'maxGuestsPerBookings')}
        />
      </FormRow>

      <FormRow label='Breakfast price'>
        <Input 
        type='number' 
        id='breakfast-price' 
        disabled={isUpdating}
        defaultValue={breakfastPrice}
        onBlur={(e) => handelUpdate(e, 'breakfastPrice')}
         />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
