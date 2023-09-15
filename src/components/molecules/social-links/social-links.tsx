import Icon from '@mdi/react';

import {
  gitHubOutline,
  linkedInOutline,
  twitterOutline,
  mdiInstagram,
  facebook,
} from '@/components/icons';

import { BackToTopLink } from './back-to-top';
import {
  SocialLinksContainer,
  SocialLinkItem,
  GitHubLink,
  LinkedInLink,
  TwitterLink,
  FacebookLink,
  InstagramLink,
} from './social-links.styles';

interface SocialLinksProps {
  withBackToTop?: boolean;
}

const iconSize = 0.9;
export const SocialLinks = (props: SocialLinksProps) => {
  const { withBackToTop } = props;
  return (
    <SocialLinksContainer aria-label={'Social links'}>
      <SocialLinkItem>
        <GitHubLink title={'GitHub'} href={'https://github.com/abdorizak'}>
          <Icon path={gitHubOutline} size={iconSize} />
        </GitHubLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <LinkedInLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/abdorizak'}
        >
          <Icon path={linkedInOutline} size={iconSize} />
        </LinkedInLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <FacebookLink
          title={'Facebook'}
          href={'https://facebook.com/abdorizak33'}
        >
          <Icon path={facebook} size={iconSize} />
        </FacebookLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <TwitterLink title={'Twitter'} href={'https://twitter.com/abdorizak3'}>
          <Icon path={twitterOutline} size={iconSize} />
        </TwitterLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <InstagramLink
          title={'Instagram'}
          href={'https://instagram.com/abdorizak3'}
        >
          <Icon path={mdiInstagram} size={iconSize} />
        </InstagramLink>
      </SocialLinkItem>
      {Boolean(withBackToTop) && <BackToTopLink />}
    </SocialLinksContainer>
  );
};
