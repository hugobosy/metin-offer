import styles from './OfferCard.module.scss';
import Image, { StaticImageData } from 'next/image';
import { ComponentPropsWithoutRef, FC } from 'react';

export interface OfferCardProps extends ComponentPropsWithoutRef<'div'> {
  itemName?: string;
  photo?: StaticImageData;
  bonusesBase?: { bonus: string }[];
  bonusesAdditional?: { bonus: string }[];
}
export const OfferCard: FC<OfferCardProps> = (props) => {
  const { itemName, photo, bonusesBase, bonusesAdditional } = props;
  return (
    <div className={styles.wrapper}>
      <h2>{itemName}</h2>
      <div className={styles.image}>
        <Image src={photo ?? ''} alt={itemName ?? ''} />
      </div>
      <div className={styles.bonuses}>
        <ul>
          {bonusesBase?.map((bonus, index) => (
            <li>
              {index + 1} - {bonus.bonus}
            </li>
          ))}
        </ul>
        <ul>
          {bonusesAdditional?.map((bonus, index) => (
            <li>
              {index + 6} - {bonus.bonus}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.buttonGroup}></div>
    </div>
  );
};
