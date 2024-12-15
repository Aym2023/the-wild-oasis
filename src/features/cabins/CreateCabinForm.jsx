// import styled from "styled-components";
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {createCabin } from "../../services/apiCabines";
import toast from 'react-hot-toast';


import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "./FormRow";


function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState} = useForm();

  const {errors} = formState;
  console.log(errors);
  
  const queryClient = useQueryClient();

  const {isLoading: isCreating, mutate} = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('New cabin successfully deleted');
      queryClient.invalidateQueries({queryKey: ['cabins']});
      reset();
    },
   onError: (err) => toast.error(err.message),
  });


  function OnSubmit(data) {
    mutate({...data, image: data.image[0] });
  }

  function OnError(errors) {
  }

  return (
    <Form onSubmit={handleSubmit(OnSubmit, OnError)}>
    <FormRow 
    label='Cabin name' 
    error={errors?.name?.message}>
    <Input 
    type="text" 
    id="name" 
    disabled={isCreating}
    {...register('name', {
         required: 'This field is required',
        }
        )}/>
    </FormRow>
      
    <FormRow 
    label='Maximum capacity' 
    error={errors?.maxCapacity?.message}>
     <Input 
     type="number" 
     id="maxCapacity"
     disabled={isCreating}
      {...register('maxCapacity', {
           required: 'This field is required',
          min: {
             value:1,
             message: 'Capacity shold be at least 1',
           }
         })}
         />
     </FormRow>

      <FormRow 
      label='Regular price' 
      error={errors?.regularPrice?.message}>
      <Input 
      type="number" 
      id="regularPrice" 
      disabled={isCreating}
      {...register('regularPrice', {
          required: 'This field is required',
          min: {
            value:1,
            message: 'Capacity shold be at least 1',
          }
        })}
        />
    </FormRow>

      <FormRow 
      label='Discount' 
      error={errors?.discount?.message}>
      <Input 
      type="number" 
      id="discount" 
      disabled={isCreating}
      defaultValue={0} 
      {...register('discount', {
          required: 'This field is required',
          validate: (value) =>
             value <= getValues().regularPrice || 'Discount should be less than regularPrice',
        })}
        />
    </FormRow>

      <FormRow 
      label='Description for website' 
      error={errors?.description?.message}
      disabled={isCreating}
      >
      <Textarea 
      type="number" 
      id="description" 
      disabled={isCreating}
      defaultValue=""  
      {...register('description', {
          required: 'This field is required',
              })}
              />
    </FormRow>

      <FormRow 
      label='Cabin photo'
      // error={errors?.image?.message}
      // disabled={isCreating}
      >
        <FileInput 
        id="image"  
        disabled={isCreating}
        accept="image/*"
        {...register('image', {
          required: 'This field is required',
         })}
          />
        </FormRow>

       <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>

        <Button disabled={isCreating}>
        Add cabin
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
