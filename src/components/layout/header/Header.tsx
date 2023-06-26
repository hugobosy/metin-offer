import styles from './Header.module.scss';
import logo from '@/assets/image/metin-logo.png';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export const Header = () => {
  const { t } = useTranslation('header');
  return (
    <div className={styles.wrapper}>
      <Image src={logo} alt={t('logo')} />
      <div className={styles.buttonGroup}>
        <a href="#">{t('login')}</a>
        <a href="#">{t('register')}</a>
      </div>
    </div>
  );
};
