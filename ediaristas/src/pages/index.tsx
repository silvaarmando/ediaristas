import Head from 'next/head';
import SafeEnvironment from 'ui/components/feedBack/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import {
  Button,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';
import {
  FormElementContainer,
  ProfessionalsPaper,
  ProfessionalsContainer
} from '@styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

export default function Home() {
  const {
    cep,
    setCep,
    cepValid,
    professionalsSearch,
    error,
    charwoman,
    rightSearch,
    waiting,
    remainingDaily,
  } = useIndex();
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
            value={cep}
            variant={'outlined'}
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            onChange={
              (event) => setCep(
                event
                  .target
                    .value)
            }
          />

          {
            error
              &&
            <Typography
              color={'error'}
            >
              {error}
            </Typography>
          }

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={
              { width: '220px' }
            }
            disabled={
              !cepValid
                ||
              waiting
            }
            onClick={
              () => professionalsSearch(cep)
            }
          >
            {
              waiting
                ?
              <CircularProgress
                size={20}
              />
                :
              'Buscar'
            }
          </Button>
        </FormElementContainer>
        
        {
          rightSearch && (
            charwoman.length > 0
              ?
            <ProfessionalsPaper>
              <ProfessionalsContainer>
                {
                  charwoman.map((item) => {
                    return (
                      <UserInformation
                        name={item.nome_completo}
                        picture={item.foto_usuario}
                        rating={item.reputacao}
                        description={item.cidade}
                      />
                    )
                  })
                }

              </ProfessionalsContainer>
              <Container
                sx={
                  {
                    textAlign: 'center'
                  }
                }
              >
                {
                  remainingDaily > 0
                    &&
                  (
                    <Typography
                      sx={
                        {
                          mt: 5
                        }
                      }
                    >
                      ...e mais
                      {remainingDaily}
                      {' '}
                        {remainingDaily > 1
                          ? 'profissionais atendem'
                          : 'profissional atende'
                        }
                      {' '}
                      ao seu endereço.
                    </Typography>
                  )
                }

                <Button
                  variant={'contained'}
                  color={'secondary'}
                  sx={
                    {
                      mt: 5
                    }
                  }
                >
                  Contratar um profissional
                </Button>
              </Container>
            </ProfessionalsPaper>
              :
            (
              <Typography
                align={'center'}
                color={'textPrimary'}
              >
                Ainda não temos nenhuma diarista disponível para sua região.
              </Typography>
            )
          )
        }
        
      </Container>
    </div>
  )
}
