import { Inter } from 'next/font/google';
import { Layout } from '@/components/layout/Layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Layout>
        <div>Content</div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'pl', ['header'])),
    },
  };
};
