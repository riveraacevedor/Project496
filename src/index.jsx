import React from "react";
import { AddCircleWrapper } from "./AddCircleWrapper";
import { AppBar } from "./AppBar";
import { ArrowBack } from "./ArrowBack";
import { ArrowForward } from "./ArrowForward";
import { BuildingBlocks } from "./BuildingBlocks";
import { IconButtonStandard } from "./IconButtonStandard";
import { Menu } from "./Menu";
import { MoreVert } from "./MoreVert";
import { PlayArrowFilledWrapper } from "./PlayArrowFilledWrapper";
import { Stars } from "./Stars";
import { StarsFilledWrapper } from "./StarsFilledWrapper";
import ellipse1 from "./ellipse-1.png";
import icon2 from "./icon-2.svg";
import icon from "./icon.svg";
import icons from "./icons.svg";
import image from "./image.svg";

export const Profile = () => {
  return (
    <div className="flex flex-wrap items-start gap-[0px_-35px] relative bg-m3-schemes-surface border-8 border-solid border-m3-schemes-outline-variant">
      <div className="flex w-[905px] h-[68px] items-center gap-4 p-4 relative bg-m3-schemes-surface shadow-[0px_0.59px_0px_#00000026,inset_0px_-0.59px_0px_#0000000d]">
        <img className="relative flex-[0_0_auto]" alt="Icons" src={icons} />

        <div className="flex items-center justify-between px-4 py-1.5 relative flex-1 grow bg-m3-schemes-surface-container rounded-[46.08px] overflow-hidden">
          <div className="flex items-center gap-2 relative flex-1 grow">
            <div className="relative w-[15.36px] h-[15.36px]">
              <img
                className="absolute w-[66.67%] h-[87.50%] top-[4.17%] left-[16.67%]"
                alt="Icon"
                src={icon}
              />
            </div>

            <div className="relative flex-1 mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-m3-schemes-on-surface text-base tracking-[0.50px] leading-6">
              www.url.com
            </div>
          </div>

          <div className="relative w-5 h-5">
            <img
              className="absolute w-[83.33%] h-[79.17%] top-[8.33%] left-[8.33%]"
              alt="Icon"
              src={image}
            />
          </div>
        </div>

        <div className="relative w-7 h-7 bg-m3-schemes-outline rounded-[109.09px] overflow-hidden">
          <div className="absolute top-[calc(50.00%_-_11px)] left-[calc(50.00%_-_7px)] h-6 flex items-center justify-center font-m3-body-large font-[number:var(--m3-body-large-font-weight)] text-m-3white text-[length:var(--m3-body-large-font-size)] text-center tracking-[var(--m3-body-large-letter-spacing)] leading-[var(--m3-body-large-line-height)] whitespace-nowrap [font-style:var(--m3-body-large-font-style)]">
            M
          </div>
        </div>

        <div className="relative w-6 h-6">
          <img
            className="absolute w-[16.67%] h-[66.67%] top-[16.67%] left-[41.67%]"
            alt="Icon"
            src={icon2}
          />
        </div>
      </div>

      <div className="w-[793px] h-[452px] items-start bg-[#ffe3e3] rounded-[var(--shape-corner-extra-large)] flex flex-col relative">
        <AppBar
          buildingBlocksAppHeadline="User Profile"
          buildingBlocksAppHeadlineClassName="!text-m3-schemes-on-surface !justify-center !items-center"
          className="!mr-[-24.00px] !px-3 !py-2 !left-[unset] !w-[817px] !top-[unset]"
          configuration="small"
          elevation="flat"
          iconButtonStandardIcon={<ArrowBack className="!relative !w-6 !h-6" />}
          override={
            <MoreVert className="!relative !w-6 !h-6" color="#49454F" />
          }
          trailingElementsClassName="!-ml-1"
        />
        <header className="relative w-[817px] h-[336px] mr-[-24.00px] bg-transparent">
          <div className="absolute top-[295px] left-[556px] w-[217px] h-[66px] text-[#5f0d04] text-[length:var(--m3-headline-small-font-size)] leading-[var(--m3-headline-small-line-height)] [-webkit-line-clamp:2] [display:-webkit-box] items-center justify-center font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] tracking-[var(--m3-headline-small-letter-spacing)] overflow-hidden text-ellipsis [-webkit-box-orient:vertical] [font-style:var(--m3-headline-small-font-style)]">
            User’s Reviews
          </div>

          <img
            className="absolute -top-2 left-[280px] w-[199px] h-48 object-cover"
            alt="Ellipse"
            src={ellipse1}
          />

          <div className="absolute top-[184px] left-[145px] w-[468px] h-[196px] flex">
            <div className="flex w-[468px] h-[156px] relative flex-col items-start gap-1">
              <div className="relative self-stretch mt-[-1.00px] text-[#5f0d04] text-[length:var(--m3-headline-small-font-size)] leading-[var(--m3-headline-small-line-height)] [-webkit-line-clamp:2] [display:-webkit-box] items-center justify-center font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] tracking-[var(--m3-headline-small-letter-spacing)] overflow-hidden text-ellipsis [-webkit-box-orient:vertical] [font-style:var(--m3-headline-small-font-style)]">
                Username
              </div>

              <div className="relative flex items-center justify-center self-stretch font-m3-label-small font-[number:var(--m3-label-small-font-weight)] text-[#5f0d04] text-[length:var(--m3-label-small-font-size)] tracking-[var(--m3-label-small-letter-spacing)] leading-[var(--m3-label-small-line-height)] [font-style:var(--m3-label-small-font-style)]">
                Date joined
              </div>

              <p className="relative self-stretch font-m3-body-medium font-[number:var(--m3-body-medium-font-weight)] text-[#5f0d04] text-[length:var(--m3-body-medium-font-size)] tracking-[var(--m3-body-medium-letter-spacing)] leading-[var(--m3-body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:7] [-webkit-box-orient:vertical] [font-style:var(--m3-body-medium-font-style)]">
                User Bio (if applicable)
                <br />
                <br />
                <br />
                <br />
                Edit Bio (if User is You)
              </p>
            </div>
          </div>
        </header>

        <div className="flex flex-col h-[338px] items-start pt-0 pb-8 px-0 relative self-stretch w-full mb-[-286.00px]">
          <div className="flex h-[72px] items-center px-6 py-2 relative self-stretch w-full">
            <div className="relative flex items-center justify-center w-fit font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-m3-schemes-on-surface text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
              Recently Rated
            </div>

            <IconButtonStandard
              icon={
                <ArrowForward className="!relative !w-6 !h-6" color="#49454F" />
              }
              size="small"
              stateProp="enabled"
              type="round"
              width="default"
            />
          </div>

          <div className="flex flex-col h-[155px] items-start gap-4 px-6 py-0 relative self-stretch w-full">
            <div className="flex flex-col items-start gap-1 flex-[0_0_auto] relative self-stretch w-full rounded-xl">
              <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="bg-[linear-gradient(0deg,rgba(250,175,126,1)_0%,rgba(250,175,126,1)_100%)] relative w-[120px] h-[120px] rounded-2xl" />

                <div className="items-start justify-around gap-2 flex-1 self-stretch grow flex flex-col relative">
                  <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] font-m3-title-large font-[number:var(--m3-title-large-font-weight)] text-[#5f0d04] text-[length:var(--m3-title-large-font-size)] tracking-[var(--m3-title-large-letter-spacing)] leading-[var(--m3-title-large-line-height)] [font-style:var(--m3-title-large-font-style)]">
                      Title
                    </div>

                    <p className="relative self-stretch font-m3-body-medium font-[number:var(--m3-body-medium-font-weight)] text-[#5f0d04] text-[length:var(--m3-body-medium-font-size)] tracking-[var(--m3-body-medium-letter-spacing)] leading-[var(--m3-body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--m3-body-medium-font-style)]">
                      Description duis aute irure dolor in reprehenderit in
                      voluptate velit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[120px] mb-[-101.00px] relative self-stretch w-full rounded-xl" />

            <div className="flex flex-col items-start gap-1 flex-[0_0_auto] mb-[-237.00px] relative self-stretch w-full rounded-xl">
              <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="bg-[linear-gradient(0deg,rgba(255,227,227,1)_0%,rgba(255,227,227,1)_100%)] relative w-[120px] h-[120px] rounded-2xl" />

                <div className="items-start justify-between flex-1 self-stretch grow flex flex-col relative">
                  <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] font-m3-title-large font-[number:var(--m3-title-large-font-weight)] text-m3-schemes-on-surface text-[length:var(--m3-title-large-font-size)] tracking-[var(--m3-title-large-letter-spacing)] leading-[var(--m3-title-large-line-height)] [font-style:var(--m3-title-large-font-style)]">
                      Title
                    </div>

                    <p className="relative self-stretch font-m3-body-medium font-[number:var(--m3-body-medium-font-weight)] text-m3-schemes-on-surface-variant text-[length:var(--m3-body-medium-font-size)] tracking-[var(--m3-body-medium-letter-spacing)] leading-[var(--m3-body-medium-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--m3-body-medium-font-style)]">
                      Description duis aute irure dolor in reprehenderit in
                      voluptate velit.
                    </p>
                  </div>

                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="h-6 gap-1 flex-1 grow flex items-center relative">
                      <AddCircleWrapper />
                      <div className="relative w-fit font-m3-body-small font-[number:var(--m3-body-small-font-weight)] text-m3-schemes-on-surface-variant text-[length:var(--m3-body-small-font-size)] tracking-[var(--m3-body-small-letter-spacing)] leading-[var(--m3-body-small-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-body-small-font-style)]">
                        Today
                      </div>

                      <div className="relative w-fit font-m3-body-small font-[number:var(--m3-body-small-font-weight)] text-m3-schemes-on-surface-variant text-[length:var(--m3-body-small-font-size)] tracking-[var(--m3-body-small-letter-spacing)] leading-[var(--m3-body-small-line-height)] whitespace-nowrap [font-style:var(--m3-body-small-font-style)]">
                        •
                      </div>

                      <div className="relative flex-1 font-m3-body-small font-[number:var(--m3-body-small-font-weight)] text-m3-schemes-on-surface-variant text-[length:var(--m3-body-small-font-size)] tracking-[var(--m3-body-small-letter-spacing)] leading-[var(--m3-body-small-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--m3-body-small-font-style)]">
                        23 min
                      </div>
                    </div>

                    <PlayArrowFilledWrapper />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[72px] h-[709px] items-center gap-10 pt-11 pb-14 px-0 relative bg-[#ffdcbe]">
        <div className="inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
          <IconButtonStandard
            className="!flex-[0_0_auto]"
            icon={<Menu className="!relative !w-6 !h-6" color="#600E05" />}
            size="medium"
            stateProp="enabled"
            type="square"
            width="default"
          />
        </div>

        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <BuildingBlocks
            badge="none"
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            iconContainerClassName="!bg-[#ff9393]"
            labelText="Filter"
            labelTextClassName="!text-[#5f0d04]"
            selected
            showLabel
            starsFilledColor="#6E0000"
            stateProp="enabled"
          />
          <BuildingBlocks
            badge="none"
            className="!self-stretch !flex-[0_0_auto] !left-[unset] !w-full !top-[unset]"
            labelText="Favorites"
            labelTextClassName="!text-[#5f0d04]"
            selected={false}
            showLabel
            starsColor="#600E05"
            stateProp="enabled"
          />
          <div className="flex-[0_0_auto] flex flex-col items-center justify-center gap-1 px-0 py-1.5 relative self-stretch w-full">
            <div className="inline-flex items-center justify-center relative flex-[0_0_auto] rounded-2xl overflow-hidden">
              <div className="w-14 h-8 gap-2.5 px-0 py-1 flex items-center justify-center relative">
                <StarsFilledWrapper />
                <Stars className="!relative !w-6 !h-6" color="#600E05" />
              </div>
            </div>

            <div className="relative self-stretch font-m3-label-medium font-[number:var(--m3-label-medium-font-weight)] text-[#5f0d04] text-[length:var(--m3-label-medium-font-size)] text-center tracking-[var(--m3-label-medium-letter-spacing)] leading-[var(--m3-label-medium-line-height)] [font-style:var(--m3-label-medium-font-style)]">
              Rated
            </div>
          </div>

          <div className="h-16 flex flex-col items-center justify-center gap-1 px-0 py-1.5 relative self-stretch w-full">
            <div className="inline-flex items-center justify-center relative flex-[0_0_auto] rounded-2xl overflow-hidden">
              <div className="w-14 h-8 gap-2.5 px-0 py-1 flex items-center justify-center relative">
                <StarsFilledWrapper />
                <Stars className="!relative !w-6 !h-6" color="#600E05" />
              </div>
            </div>

            <div className="relative self-stretch font-m3-label-medium font-[number:var(--m3-label-medium-font-weight)] text-[#5f0d04] text-[length:var(--m3-label-medium-font-size)] text-center tracking-[var(--m3-label-medium-letter-spacing)] leading-[var(--m3-label-medium-line-height)] [font-style:var(--m3-label-medium-font-style)]">
              Recommend
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
