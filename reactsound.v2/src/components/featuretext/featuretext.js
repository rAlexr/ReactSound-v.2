import {
  FeatureBoxContentWrap,
  FeatureBoxParagraph,
  FeatureBoxTitle,
  FeatureBoxWrap,
  FeatureContainer,
  FeatureDescription,
  FeatureTextWrap,
  FeatureTitle,
} from "./feature.styled";

const FeatureText = () => {
  return (
    <FeatureContainer>
      <FeatureTextWrap>
        <FeatureTitle>features</FeatureTitle>
        <FeatureDescription>
          As the headphones all others are measured against, the XX99 Mark I
          demonstrates over five decades of audio expertise, redefining the
          critical listening experience. This pair of closed-back headphones are
          made of industrial, aerospace-grade materials to emphasize durability
          at a relatively light weight of 11 oz.
        </FeatureDescription>
        <FeatureDescription>
          From the handcrafted microfiber ear cushions to the robust metal
          headband with inner damping element, the components work together to
          deliver comfort and uncompromising sound. Its closed-back design
          delivers up to 27 dB of passive noise cancellation, reducing resonance
          by reflecting sound to a dedicated absorber. For connectivity, a
          specially tuned cable is included with a balanced gold connector.
        </FeatureDescription>
      </FeatureTextWrap>

      <FeatureBoxWrap>
        <FeatureBoxTitle>in the box</FeatureBoxTitle>
        <FeatureBoxContentWrap>
          <FeatureBoxParagraph>
            <span>1 x</span> headphone unit
          </FeatureBoxParagraph>
          <FeatureBoxParagraph>
            <span>1 x</span> headphone unit
          </FeatureBoxParagraph>
          <FeatureBoxParagraph>
            <span>1 x</span> headphone unit
          </FeatureBoxParagraph>
          <FeatureBoxParagraph>
            <span>1 x</span> headphone unit
          </FeatureBoxParagraph>
        </FeatureBoxContentWrap>
      </FeatureBoxWrap>
    </FeatureContainer>
  );
};

export default FeatureText;
