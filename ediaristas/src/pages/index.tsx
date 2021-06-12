import Head from 'next/head';
import SafeEnvironment from 'ui/components/feedBack/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os Profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <UserInformation
        name={'Armando Silva'}
        picture={'https://github.com/franciscoarmando63.png'}
        rating={4}
        description={'Porto Belo'}
      />
    </div>
  )
}
