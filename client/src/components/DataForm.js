import React from 'react'
import { Stack, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import PersonalInfo from './PersonalInfo'
import NumberOfWheel from './NumberOfWheel'
import TypeOfVehicles from './TypeOfVehicles'


function DataForm() {

  const methods = useForm({})
  const [activeComponent, setActiveComponent] = useState('PersonalInfo')

  return (
    <Container>
      {
        activeComponent !== 'DataPreview' && (
          <Stack direction={'column'}>
            <Stack marginTop={'100px'}>
              <Typography variant='h4' color={'slateblue'} textAlign={'center'}>Vehical Detail Form, Fill your data below..... </Typography>
            </Stack>
            <Stack
            direction='column'
            justifyContent='center'
            gap={1}
            sx={{
              width: 'auto',
              height: "300px",
              boxShadow: 4,
              marginLeft: "200px",
              marginRight: "200px",
              marginTop: "50px",
            }}
          >
            <FormProvider {...methods}>
              {
                activeComponent === 'PersonalInfo' && <PersonalInfo setActiveComponent={setActiveComponent} />
              }
              {
                activeComponent === 'NumberOfWheel' && <NumberOfWheel setActiveComponent={setActiveComponent} />
              }
              {
                activeComponent === 'TypeOfVehicles' && <TypeOfVehicles setActiveComponent={setActiveComponent} />
              }
              {/* {
                activeComponent === 'VehicalModel' && <VehicalModel setActiveComponent={setActiveComponent} />
              }
              {
                activeComponent === 'DateRange' && <DateRange setActiveComponent={setActiveComponent} />
              } */}
            </FormProvider>

          </Stack>
          </Stack>
        )
      }
      <Stack>
        {/* {
          activeComponent === 'DataPreview' && <DataPreview setActiveComponent={setActiveComponent} />
        } */}
      </Stack>
    </Container>
  )
}

export default DataForm
