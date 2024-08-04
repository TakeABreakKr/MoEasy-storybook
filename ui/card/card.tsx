import { HTMLAttributes } from 'react';

import { Button } from '../button/button';
import { EllipsisIcon } from '../icon';
import { Separator } from '../separator';
import { NameTag } from '../tag';

import { magic } from '../../utils/styles/index.css';
import * as cardStyle from './card.css';
import {
  CardDescription,
  CardMember,
  CardMembers,
  CardThumbnail,
  CardTitle,
  CardTrigger,
  CardTriggerItem,
  CardWrapper,
} from './compound-card';

export type CardProps = {
  idx: number | string;
  title: string;
  description?: string;
  thumbnail?: string;
  count?: number;
  maxCount?: number;
  members?: CardMember[];
} & HTMLAttributes<HTMLDivElement>;

export default function Card({
  idx,
  title,
  className,
  description = '',
  count = 0,
  maxCount = 10,
  members = [],
  ...props
}: CardProps) {
  return (
    <CardWrapper data-meeting-index={idx} {...props}>
      <CardThumbnail src={`https://via.placeholder.com/116/${idx}`} alt={title} />
      <CardTrigger>
        <CardTriggerItem align="center">수정</CardTriggerItem>
        <CardTriggerItem align="center">초대하기</CardTriggerItem>
        <CardTriggerItem align="center" notice>
          탈퇴하기
        </CardTriggerItem>
        <CardTriggerItem align="center" notice>
          삭제
        </CardTriggerItem>
      </CardTrigger>
      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
      <Separator direction="horizontal" color="#d5d5d5" />
      <CardMembers members={members} />
    </CardWrapper>
  );
}
