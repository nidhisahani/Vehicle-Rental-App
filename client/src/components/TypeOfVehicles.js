import React from 'react'
import { Button, FormControl, FormLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setVehicleType } from '../redux/Actions/SetVehicleType';
import FormControlLabel from '@mui/material/FormControlLabel';


function TypeOfVehicles(props) {
    const dispatch = useDispatch();
    const { register, control, handleSubmit, formState: { errors } } = useFormContext()

    const handleNext = (data) => {
        // props.setActiveComponent('TypeOfVehicles')
        console.log(data)
        dispatch(setVehicleType(data.vehicleType))
    }
    const handleBack = () => {
        props.setActiveComponent('PersonalInfo')
    }
    return (
        <Stack padding={3} direction={'column'} spacing={3} marginTop={'10px'}>
            <Stack>
                <Typography textAlign={'center'}>Select Vehicle Type......</Typography>
            </Stack>
            <form onSubmit={handleSubmit(handleNext)}>
                <Stack direction='column' spacing={3} sx={{ marginLeft: '100px', marginRight: '100px' }}>

                    <FormControl>
                        <Controller 
                        rules={{required:true}}
                        control={control}
                        name='vehicleType'
                        render={({ field }) => (
                            <RadioGroup {...field}>
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="Hatchback"
                              />
                              <FormControlLabel
                                value="2"
                                control={<Radio />}
                                label="Sedan"
                              />
                              <FormControlLabel
                                value="3"
                                control={<Radio />}
                                label="SUV"
                              />

                        </RadioGroup>
                        )}
                        />
                    </FormControl>
                    
                </Stack>
                <Stack direction='row' justifyContent='center' marginTop={2}>
                    <Button onClick={handleBack}>Back</Button>
                    <Button type='submit'>Next</Button>
                </Stack>
            </form>

        </Stack>
  )
}

export default TypeOfVehicles
