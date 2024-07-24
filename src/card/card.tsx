import { HTMLAttributes } from 'react';
import clsx from 'clsx';

import Image from 'next/image';

import { Button } from '../button/button';
import { EllipsisIcon } from '../icon';
import { Separator } from '../separator';

import cardStyle from './card.module.css';

export type CardProps = {
  idx: number;
  title: string;
  description?: string;
  thumbnail?: string;
  count?: number;
  maxCount?: number;
  isLiked?: boolean;
  isWaiting?: boolean;
  onLikeClick?: () => void;
} & HTMLAttributes<HTMLDivElement>;

export default function Card({
  idx,
  title,
  className,
  description = '',
  count = 0,
  isWaiting,
  maxCount = 10,
  onLikeClick,
  ...props
}: CardProps) {
  return (
    <div className={clsx(cardStyle.card, className)} {...props}>
      <div className={cardStyle['thumbnail-wrapper']}>
        <div className={cardStyle.thumbnail}>
          <Image src={`https://via.placeholder.com/116/${idx}`} width={116} height={116} alt={title} />
        </div>
      </div>
      <div className={cardStyle.interact}>
        <Button size="small" variant="ghost" rounded="small">
          <EllipsisIcon />
        </Button>
      </div>
      <div>
        <h2 className={cardStyle.title}>{title}</h2>
        <pre className={cardStyle.description}>{description}</pre>
      </div>
      <Separator direction="horizontal" color="#d5d5d5" />
    </div>
  );
}
