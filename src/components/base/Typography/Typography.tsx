import { FC, HTMLProps } from 'react';
import parse from 'html-react-parser';
import classNames from 'classnames';
import styles from './Typography.module.scss';

export interface TypographyProps extends HTMLProps<HTMLParagraphElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  text?: string | null;
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  size: number;
}

export const Typography: FC<TypographyProps> = ({ as, children, text, size, ...rest }) => {
  const T = as;

  const textInner = text?.toString().replace(/\\n/g, '<br>');
  const content = children ? children : parse(textInner || '');

  return (
    <T {...rest} style={{ fontSize: `${size}px` }} className={classNames(styles.text)}>
      {content}
    </T>
  );
};
