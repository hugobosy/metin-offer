import { OfferCard } from '@/components/ui/offerCard/OfferCard';
import { Layout } from '@/components/layout/Layout';

import styles from './HomePage.module.scss';
import { ComponentPropsWithoutRef, FC } from 'react';
import { OfferCardMockType } from '@/mocks/OfferCard.mock';

export interface HomePageProps extends ComponentPropsWithoutRef<'div'> {
  offer?: OfferCardMockType[];
}

export const HomePage: FC<HomePageProps> = (props) => {
  const { offer } = props;

  return (
    <Layout>
      <div className={styles.wrapper}>
        {offer?.map((item) => (
          <OfferCard
            bonusesAdditional={item.bonusesAdditional}
            bonusesBase={item.bonusesBase}
            itemName={item.itemName}
            photo={item.photo}
          />
        ))}
      </div>
    </Layout>
  );
};
