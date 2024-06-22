import Card1 from "./card1";
import PropTypes from "prop-types";

const CardGroup = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[310.563rem] left-[0rem] flex flex-col items-start justify-start gap-[2.5rem] text-left text-[1.25rem] text-black font-p ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-[0rem] px-[6.25rem] gap-[2.5rem]">
        <Card1
          picture="/picture@2x.png"
          johnSmith="John Smith"
          cEOAndFounder="CEO and Founder"
          yearsOfExperienceInDigita="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
        />
        <Card1
          picture="/picture@2x.png"
          johnSmith="Jane Doe"
          cEOAndFounder="Director of Operations"
          yearsOfExperienceInDigita="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
          propHeight="unset"
          propWidth="6.425rem"
          propWidth1="12.138rem"
          propHeight1="3.075rem"
          propTop="1.638rem"
          propLeft="0.013rem"
          propDisplay="inline-block"
          propWidth2="12.125rem"
        />
        <Card1
          picture="/picture@2x.png"
          johnSmith="Michael Brown"
          cEOAndFounder="Senior SEO Specialist"
          yearsOfExperienceInDigita="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          propHeight="unset"
          propWidth="6.425rem"
          propWidth1="11.438rem"
          propHeight1="3.063rem"
          propTop="1.625rem"
          propLeft="0rem"
          propDisplay="unset"
          propWidth2="unset"
        />
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] px-[6.25rem] gap-[2.5rem]">
        <Card1
          picture="/picture@2x.png"
          johnSmith="Emily Johnson"
          cEOAndFounder="PPC Manager"
          yearsOfExperienceInDigita="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
          propHeight="22.125rem"
          propWidth="6.425rem"
          propWidth1="8.75rem"
          propHeight1="3.063rem"
          propTop="1.625rem"
          propLeft="0rem"
          propDisplay="unset"
          propWidth2="unset"
        />
        <Card1
          picture="/picture@2x.png"
          johnSmith="Brian Williams"
          cEOAndFounder="Social Media Specialist"
          yearsOfExperienceInDigita="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
          propHeight="22.125rem"
          propWidth="6.425rem"
          propWidth1="12.138rem"
          propHeight1="4.513rem"
          propTop="1.638rem"
          propLeft="0.013rem"
          propDisplay="inline-block"
          propWidth2="12.125rem"
        />
        <div className="w-[24.188rem] shadow-[0px_5px_0px_#191a23] rounded-26xl bg-white box-border h-[22.125rem] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[2.5rem] px-[2.187rem] border-[1px] border-solid border-dark">
          <div className="flex flex-col items-start justify-start gap-[1.75rem]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-end justify-start py-[0rem] pr-[4.75rem] pl-[0rem] gap-[1.25rem]">
                <img
                  className="w-[6.425rem] relative h-[6.425rem] object-cover"
                  alt=""
                  src="/picture@2x.png"
                />
                <div className="w-[12.138rem] relative h-[3.075rem]">
                  <div className="absolute top-[0rem] left-[0rem] font-medium">
                    Sarah Kim
                  </div>
                  <div className="absolute top-[1.638rem] left-[0.013rem] text-[1.125rem] inline-block w-[12.125rem]">
                    Content Creator
                  </div>
                </div>
              </div>
              <img
                className="w-[2.125rem] relative h-[2.125rem] ml-[-4.188rem]"
                alt=""
                src="/social-icon.svg"
              />
            </div>
            <div className="w-[19.875rem] relative box-border h-[0.063rem] border-t-[1px] border-solid border-black" />
            <div className="w-[19.813rem] relative text-[1.125rem] inline-block">
              <p className="m-0">
                2+ years of experience in writing and editing
              </p>
              <p className="m-0">
                Skilled in creating compelling, SEO-optimized content for
                various industries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardGroup.propTypes = {
  className: PropTypes.string,
};

export default CardGroup;
