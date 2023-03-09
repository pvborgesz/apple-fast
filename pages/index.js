import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <div className='text-black bg-black'>
      <NextSeo
        title='Apple Fast'
        description='Bem vindo à Apple Fast.'
        canonical='https://applefast.com.br/'
        openGraph={{
          url: 'https://applefast.com.br/',
        }}
      />
      <Head>
        <title>Apple Fast</title>
        <link
          rel='icon'
          href='/favicon.png'
        />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
