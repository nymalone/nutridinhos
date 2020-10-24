import React from 'react';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
} from './Pricing.elements';

import printImg from '../../images/print.png'

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Conheça nosso jogo</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                 <img src={printImg} alt="print" />
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                 <img src={printImg} alt="print" />
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                 <img src={printImg} alt="print" />
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
