import Head from 'next/head';
import SafeEnvironment from 'ui/components/feedBack/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import {
  Button,
  Typography,
  Container,
} from '@material-ui/core';
import {
  FormElementContainer,
  ProfessionalsPaper,
  ProfessionalsContainer
} from '@styles/pages/index.style';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os Profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <Container>
        <FormElementContainer>
          <TextFieldMask
            variant={'outlined'}
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
          />

          <Typography
            color={'error'}
          >
            CEP inválido
          </Typography>
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={
              { width: '220px' }
            }
          >
            Buscar
          </Button>
        </FormElementContainer>

        <ProfessionalsPaper>
          <ProfessionalsContainer>
            <UserInformation
              name={'Armando Silva'}
              picture={'https://github.com/franciscoarmando63.png'}
              rating={4}
              description={'Porto Belo'}
            />
            <UserInformation
              name={'Armando Silva'}
              picture={'https://github.com/franciscoarmando63.png'}
              rating={4}
              description={'Porto Belo'}
            />
            <UserInformation
              name={'Armando Silva'}
              picture={'https://github.com/franciscoarmando63.png'}
              rating={4}
              description={'Porto Belo'}
            />
            <UserInformation
              name={'Armando Silva'}
              picture={'https://github.com/franciscoarmando63.png'}
              rating={4}
              description={'Porto Belo'}
            />
          </ProfessionalsContainer>
        </ProfessionalsPaper>
      </Container>
    </div>
  )
}
