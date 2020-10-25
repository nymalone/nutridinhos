import React from "react";
import ReactPlayer from "react-player";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
} from "./Pricing.elements";

import printImg from "../../images/print.png";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Conheça nosso jogo</PricingHeading>
          <PricingContainer>
            <ReactPlayer url="https://www.youtube.com/watch?v=Dx49IU39DlI" />
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
