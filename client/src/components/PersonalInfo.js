import React from 'react'
import {Button, Stack, TextField, Typography} from '@mui/material'
import { useFormContext } from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {setPersonalInfo} from '../redux/Actions/SetPersonalInfo'


function PersonalInfo(props) {

  const dispatch=useDispatch();
  const {register, control, handleSubmit, formState:{errors}} =useFormContext()

  const handleNext=(data)=>{
    props.setActiveComponent('NumberOfWheel')
    dispatch(setPersonalInfo(data.personalInfo))
  }

  return (
    <Stack padding={3} direction={'column'} spacing={3} marginTop={'10px'}>
      <Stack>
      <Typography textAlign={'center'}>Please, Fill your First and Last Name</Typography>
      </Stack>
      <form onSubmit={handleSubmit(handleNext)}>
      <Stack direction='column' spacing={3} sx={{marginLeft:'100px' , marginRight:'100px'}}>
            <TextField
              control={control}
              sx={{ width: 'auto' }}
              size='small'
              placeholder='First Name'
              {...register("personalInfo.FirstName",{required:true})}
              error={errors.personalInfo?.FirstName?.type === 'required' ? true:false}
              helperText={errors.personalInfo?.FirstName?.type === 'required' && 'This field is required'}
            />
            
            <TextField
              control={control}
              sx={{ width: 'auto' }}
              size='small'
              placeholder='Last Name'
              {...register('personalInfo.LastName', { required: true })}
              error={errors.personalInfo?.LastName?.type === 'required' ? true:false}
              helperText={errors.personalInfo?.LastName?.type && 'this field is required'}
            />
          </Stack>
          <Stack direction='row' justifyContent='center' marginTop={2}>
            <Button type='submit'>Next</Button>
          </Stack>
      </form>

    </Stack>
  )
}

export default PersonalInfo
