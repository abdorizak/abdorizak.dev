import type { Route } from 'next';

import { NoPaddingSection } from '@/components/core/section';
import software from '@/data/software.json';

import {
  GridContainer,
  SoftwareGrid,
  SoftwareItem,
  AppIcon,
  AppName,
} from './software.styles';

export const Software = () => {
  return (
    <NoPaddingSection $as={'div'}>
      <GridContainer>
        <SoftwareGrid>
          {software.map((item, index) => {
            return (
              <li key={index}>
                <SoftwareItem
                  href={(item.link || '#') as Route}
                  title={item.name}
                >
                  <AppIcon
                    src={`/static/images/${item.image}`}
                    size={72}
                    alt={item.name}
                  />
                  <AppName>{item.name}</AppName>
                </SoftwareItem>
              </li>
            );
          })}
        </SoftwareGrid>
      </GridContainer>
    </NoPaddingSection>
  );
};
