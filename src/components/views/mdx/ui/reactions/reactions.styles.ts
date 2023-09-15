import Icon from '@mdi/react';
import tw from 'tailwind-styled-components';

import { Button } from '@/components/core/button';

export const ReactionsGroup = tw.div`
  flex flex-wrap gap-6 mobile-lg:gap-10
`;

export const StyledReactionButton = tw(Button)<{ $reacted?: boolean }>`
  group/reaction
  py-10 px-12
  rounded-full
  text-3xs
  text-secondary-txt
  shadow-none
  bg-transparent
  dark:bg-transparent
  gap-6
  leading-none
  mobile-lg:gap-10
  hocus:shadow-none
  hocus:transform-none
  hocus:text-primary-txt
  hocus:border-[rgba(var(--reaction-color)/0.45)]
  disabled:cursor-default
  ${(p) => (p.$reacted ? 'disabled:opacity-100' : 'disabled:opacity-50')}
  ${(p) =>
    p.$reacted ? 'border-[rgba(var(--reaction-color)/0.45)]' : 'border-divider'}
  ${(p) =>
    p.$reacted ? 'bg-[rgba(var(--reaction-color)/0.08)] ' : 'bg-transparent'}
  ${(p) =>
    p.$reacted
      ? 'dark:bg-[rgba(var(--reaction-color)/0.12)]'
      : 'dark:bg-transparent'}
  ${(p) =>
    p.$reacted
      ? 'hocus:bg-[rgba(var(--reaction-color)/0.08)] '
      : 'hocus:bg-transparent'}
`;

export const ReactionIcon = tw(Icon)`
  transform
  transition
  group-hocus/reaction:text-[rgb(var(--reaction-color))]
  group-hocus/reaction:fill-[rgb(var(--reaction-color))]
  group-hocus/reaction:scale-110
  [[data-reacted="true"]_&]:text-[rgb(var(--reaction-color))]
  [[data-reacted="true"]_&]:fill-[rgb(var(--reaction-color))]
  [[data-reacted="true"]_&]:scale-105
`;
