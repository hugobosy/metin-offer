import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useGetOfferCard } from '@/hooks/queries/useGetOfferCard';
import { HomePage } from '@/components/templates/Home/HomePage';

export default function Home() {
  const { data: offer, isLoading: offerIsLoading } = useGetOfferCard();
  return <HomePage offer={offer} />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'pl', ['header'])),
    },
  };
};
