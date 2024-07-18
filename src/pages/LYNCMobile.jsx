import { useState, useCallback } from "react";
import NavLinks1 from "../components/NavLinks1";
import PortalPopup from "../components/PortalPopup";

const LYNCMobile = () => {
  const [isNavLinksOpen, setNavLinksOpen] = useState(false);

  const openNavLinks = useCallback(() => {
    setNavLinksOpen(true);
  }, []);

  const closeNavLinks = useCallback(() => {
    setNavLinksOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-bg-ui-dark-blue h-[7440px] overflow-hidden text-left text-5xl text-text-ui-white-100 font-body-body-2-body-2-regular">
        <img
          className="absolute top-[1650px] left-[-323px] w-[1149.4px] h-[1110.8px] object-contain"
          alt=""
          src="/background1@2x.png"
        />
        <img
          className="absolute top-[2661px] left-[-323px] w-[1149.4px] h-[1110.8px] object-contain"
          alt=""
          src="/background1@2x.png"
        />
        <img
          className="absolute top-[1494px] left-[16px] w-[432px] h-[360px] object-contain"
          alt=""
          src="/background2@2x.png"
        />
        <img
          className="absolute top-[805px] left-[3.2px] w-[442.3px] h-[482px] object-contain"
          alt=""
          src="/background3@2x.png"
        />
        <img
          className="absolute top-[-730px] left-[-421px] w-[1309.4px] h-[892.4px] object-contain"
          alt=""
          src="/background4@2x.png"
        />
        <img
          className="absolute top-[1028px] left-[-120px] w-[704px] h-[372px]"
          alt=""
          src="/compny-group.svg"
        />
        <img
          className="absolute top-[0px] left-[-126px] w-[709px] h-[8612.1px] mix-blend-overlay"
          alt=""
          src="/grid.svg"
        />
        <div className="absolute top-[675px] left-[calc(50%_-_186px)] w-[372px] h-[100px]">
          <div className="absolute top-[0px] left-[calc(50%_-_186px)] w-[372px] h-[100px]">
            <div className="absolute top-[0px] left-[calc(50%_-_186px)] [backdrop-filter:blur(300px)] rounded-xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-[372px] h-[100px] border-[1px] border-solid border-gradient-stroke" />
          </div>
          <div className="absolute top-[23px] left-[20.6px] w-[331.9px] h-[53px]">
            <img
              className="absolute top-[7px] left-[0px] w-[97.1px] h-[42.3px] object-cover"
              alt=""
              src="/longhashx-white-11@2x.png"
            />
            <img
              className="absolute top-[19px] left-[117.3px] w-[97.1px] h-[22.8px] object-cover"
              alt=""
              src="/axelar-logo-full-white-11@2x.png"
            />
            <img
              className="absolute top-[0px] left-[234.7px] w-[97.1px] h-[53px] object-cover"
              alt=""
              src="/image-391@2x.png"
            />
          </div>
        </div>
        <b className="absolute top-[643px] left-[calc(50%_-_70px)] text-base inline-block text-text-ui-white-60 text-center w-[139.9px]">
          Backed by
        </b>
        <div className="absolute top-[869px] left-[calc(50%_-_172px)] w-[342px] h-[146px] text-center text-lg">
          <div className="absolute top-[-0.5px] left-[calc(50%_-_171.5px)] box-border w-[343px] h-px border-t-[1px] border-solid border-gray-200" />
          <div className="absolute top-[145.5px] left-[calc(50%_-_171.5px)] box-border w-[343px] h-px border-t-[1px] border-solid border-gray-200" />
          <b className="absolute top-[25px] left-[1px] flex items-center w-[340px]">
            <span className="w-full">
              <p className="m-0">
                <span>{`LYNC provides a scalable infrastructure for launching web3 games, without hampering the `}</span>
                <span className="text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  gaming experience.
                </span>
              </p>
              <p className="m-0">So that you can deliver the next big hit!</p>
            </span>
          </b>
        </div>
        <div className="absolute w-[calc(100%_-_58px)] top-[1109px] right-[29px] left-[29px] h-[269.2px] text-center">
          <div className="absolute w-[calc(100%_-_41.1px)] top-[0px] left-[19.6px] font-black inline-block">
            <span>{`Making blockchain gaming accessible to `}</span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              everyone!
            </span>
          </div>
          <div className="absolute w-full top-[88px] right-[0px] left-[0px] h-[181.2px]">
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[90.8px]">
              <img
                className="absolute w-[calc(100%_-_270.5px)] top-[0px] right-[270.5px] left-[0px] max-w-full overflow-hidden h-[90.8px] object-cover"
                alt=""
                src="/image-881@2x.png"
              />
              <img
                className="absolute w-[calc(100%_-_270.5px)] top-[20px] right-[135.2px] left-[135.3px] max-w-full overflow-hidden h-[49.9px] object-cover"
                alt=""
                src="/image-891@2x.png"
              />
              <img
                className="absolute w-[calc(100%_-_270.5px)] top-[30px] right-[0px] left-[270.5px] max-w-full overflow-hidden h-[29.2px] object-cover"
                alt=""
                src="/som-website-logo-1-11@2x.png"
              />
            </div>
            <div className="absolute w-[calc(100%_-_128.4px)] top-[91px] right-[71.8px] left-[56.6px] h-[90.2px]">
              <img
                className="absolute w-[calc(100%_-_139.2px)] top-[35px] right-[0px] left-[139.2px] max-w-full overflow-hidden h-[19.3px] object-cover"
                alt=""
                src="/image-901@2x.png"
              />
              <img
                className="absolute w-[calc(100%_-_139.2px)] top-[0px] right-[139.2px] left-[0px] max-w-full overflow-hidden h-[90.2px] object-cover"
                alt=""
                src="/image-871@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_58px)] top-[1494px] right-[29px] left-[29px] h-[399px] text-center text-base">
          <div className="absolute w-full top-[0px] left-[0px] text-5xl font-black inline-block">
            <p className="m-0">{`Power Up Your Web3 Game Development, With `}</p>
            <p className="m-0 text-transparent !bg-clip-text [background:linear-gradient(94.68deg,_#ff0276_20.25%,_#7209b7_71.53%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              LYNC SDKs
            </p>
          </div>
          <b className="absolute w-[calc(100%_-_39.2px)] top-[106px] left-[19.6px] inline-block text-text-ui-white-60 h-[66px]">
            LYNC SDKs can be easily integrated into game engines like Unity 3D
            and Unreal Engine in a few clicks.
          </b>
          <div className="absolute w-[calc(100%_-_1px)] top-[202px] right-[0px] left-[1px] h-[197px] text-left">
            <img
              className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-xl max-w-full overflow-hidden h-[197px] object-contain"
              alt=""
              src="/card1.svg"
            />
            <b className="absolute w-[calc(100%_-_50.9px)] top-[28px] left-[23.5px] flex items-center">
              <span className="w-full">
                <p className="m-0">
                  <span>{`Don't Worry about the `}</span>
                  <span className="text-transparent !bg-clip-text [background:linear-gradient(94.68deg,_#ff0276_20.25%,_#7209b7_71.53%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Web3
                  </span>
                  <span className="text-text-ui-white-100"> Complexities</span>
                </p>
              </span>
            </b>
            <div className="absolute w-[calc(100%_-_66.5px)] top-[63px] right-[43px] left-[23.5px] h-[108px] text-3xs">
              <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-[108px]">
                <b className="absolute w-[calc(100%_-_119.5px)] top-[0px] left-[26.4px] flex items-center h-[19px]">
                  Save 9-12 months of development time
                </b>
                <b className="absolute w-[calc(100%_-_154.7px)] top-[89px] left-[27.4px] flex items-center h-[19px]">
                  Go Cross-Chain in a few clicks
                </b>
                <b className="absolute w-[calc(100%_-_77.4px)] top-[30px] left-[26.4px] flex items-center h-[19px]">{`Focus completely on Game Dev and Mechanics `}</b>
                <b className="absolute w-[calc(100%_-_27.5px)] top-[59px] left-[27.4px] flex items-center h-[19px]">{`Save Up to $500K+ on Salaries & Smart Contract Auditing`}</b>
                <img
                  className="absolute w-[calc(100%_-_286.9px)] top-[0px] right-[286.9px] left-[0px] max-w-full overflow-hidden h-[18px]"
                  alt=""
                  src="/mdistarfourpoints1.svg"
                />
                <img
                  className="absolute w-[calc(100%_-_286.9px)] top-[30px] right-[285.9px] left-[1px] max-w-full overflow-hidden h-[18px]"
                  alt=""
                  src="/mdistarfourpoints2.svg"
                />
                <img
                  className="absolute w-[calc(100%_-_286.9px)] top-[60px] right-[286.9px] left-[0px] max-w-full overflow-hidden h-[18px]"
                  alt=""
                  src="/mdistarfourpoints1.svg"
                />
                <img
                  className="absolute w-[calc(100%_-_286.9px)] top-[90px] right-[286.9px] left-[0px] max-w-full overflow-hidden h-[18px]"
                  alt=""
                  src="/mdistarfourpoints1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_59px)] top-[1945px] right-[29px] left-[30px] h-[738px] text-base text-text-ui-gray-75">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-[32.24px] box-border h-[200px] overflow-hidden text-3xs border-[1px] border-solid border-text-ui-white-100">
            <img
              className="absolute top-[44px] left-[-236px] w-[558.6px] h-[651.7px] object-contain mix-blend-normal"
              alt=""
              src="/bg-gradient@2x.png"
            />
            <b className="absolute top-[90px] left-[22px] flex items-center w-[158px]">
              Unleash Your Potential - Explore the Knowledge Hub Today!
            </b>
            <b className="absolute top-[32px] left-[22px] text-base flex text-text-ui-white-100 items-center w-[271px]">
              Elevate Your Gameplay with Essential Insights!
            </b>
            <div className="absolute top-[137px] left-[22px] rounded-[20.15px] bg-text-ui-white-100 overflow-hidden flex flex-row items-center justify-center py-[8.1px] px-[14.1px] gap-[4px] text-center text-mini-1 text-gray-100">
              <div className="w-[75.6px] relative h-[20.1px]">
                <b className="absolute top-[0%] left-[2.65%] tracking-[0.25px] leading-[20.15px]">
                  View Docs
                </b>
              </div>
              <img
                className="w-[24.2px] relative h-[24.2px] hidden"
                alt=""
                src="/arrow-alt-lright-alt.svg"
              />
            </div>
            <img
              className="absolute top-[19px] left-[213px] w-[183.3px] h-[183.3px] object-contain"
              alt=""
              src="/httpslottiefilescomanimationsgamerzejqvj6nm1@2x.png"
            />
          </div>
          <div className="absolute w-full top-[352px] right-[0px] left-[0px] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-[250px] overflow-hidden border-[1px] border-solid border-gradient-stroke">
            <img
              className="absolute top-[46px] left-[149px] w-[246.1px] h-[252.7px] object-contain"
              alt=""
              src="/httpslottiefilescomanimationscryptowalletyqvwzv1l981@2x.png"
            />
            <b className="absolute top-[65px] left-[19px] flex items-center w-[168px]">
              User ops created in 10 hours
            </b>
            <div className="absolute top-[14px] left-[19px] text-19xl font-black text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center w-[158px]">
              50000+
            </div>
          </div>
          <div className="absolute w-full top-[216px] right-[0px] left-[0px] h-[120px]">
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-[120px] border-[1px] border-solid border-gradient-stroke" />
            <b className="absolute w-[calc(100%_-_92.7px)] top-[61px] left-[18.6px] flex items-center h-[34.5px]">{`Projects have downloaded & integrated LYNC SDKs`}</b>
            <div className="absolute w-[calc(100%_-_187.2px)] top-[17px] left-[18.6px] text-19xl font-black text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center h-10">
              200+
            </div>
          </div>
          <div className="absolute w-full top-[618px] right-[0px] left-[0px] h-[120px]">
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-[120px] border-[1px] border-solid border-gradient-stroke" />
            <b className="absolute w-[calc(100%_-_92.7px)] top-[61px] left-[18.6px] flex items-center h-[34.5px]">
              Contracts have been deployed via LYNC
            </b>
            <div className="absolute w-[calc(100%_-_187.2px)] top-[17px] left-[18.6px] text-19xl font-black text-transparent !bg-clip-text [background:linear-gradient(94.68deg,_#ff0276_20.25%,_#7209b7_71.53%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center h-10">
              8000+
            </div>
          </div>
        </div>
        <div className="absolute top-[2787px] left-[calc(50%_-_185px)] font-black text-center flex items-center w-[369px]">
          <span className="w-full">
            <span>{`Product `}</span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Suite
            </span>
          </span>
        </div>
        <div className="absolute top-[91px] left-[-66px] w-[562px] h-[431.4px]">
          <div className="absolute top-[60px] left-[0px] w-[556.6px] h-[314px]">
            <div className="absolute top-[1.9px] left-[142.2px] rounded-[6.52px] bg-bg-ui-dark-blue box-border w-[214.2px] h-[215.5px] [transform:_rotate(131.6deg)] [transform-origin:0_0] border-[0.5px] border-solid border-darkblue" />
            <div className="absolute top-[0px] left-[409.4px] rounded-[6.52px] bg-bg-ui-dark-blue box-border w-[221.8px] h-[223.1px] [transform:_rotate(48.4deg)] [transform-origin:0_0] border-[0.5px] border-solid border-darkblue" />
          </div>
          <div className="absolute top-[59.2px] left-[127.9px] rounded-[2.67px] bg-bg-ui-dark-blue box-border w-[87.8px] h-[88.3px] [transform:_rotate(-137.6deg)] [transform-origin:0_0] border-[0.2px] border-solid border-darkblue" />
          <div className="absolute top-[366.2px] left-[138.9px] rounded-[2.67px] bg-bg-ui-dark-blue box-border w-[87.8px] h-[88.3px] [transform:_rotate(-137.6deg)] [transform-origin:0_0] border-[0.2px] border-solid border-darkblue" />
          <div className="absolute top-[64.2px] left-[553.9px] rounded-[2.67px] bg-bg-ui-dark-blue box-border w-[87.8px] h-[88.3px] [transform:_rotate(-133deg)] [transform-origin:0_0] border-[0.2px] border-solid border-darkblue" />
          <div className="absolute top-[354.9px] left-[562px] rounded-[2.67px] bg-bg-ui-dark-blue box-border w-[87.8px] h-[88.3px] [transform:_rotate(-134.2deg)] [transform-origin:0_0] border-[0.2px] border-solid border-darkblue" />
        </div>
        <div className="absolute w-[calc(100%_-_58px)] top-[calc(50%_-_3505px)] right-[29px] left-[29px] h-[360px] text-sm">
          <div className="absolute w-[calc(100%_-_38.5px)] top-[calc(50%_+_85px)] right-[19.8px] left-[18.7px] rounded-xl [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] h-10 overflow-hidden flex flex-row items-center justify-center py-2 px-3.5 box-border gap-[4px]">
            <div className="w-[79px] relative h-5">
              <b className="absolute top-[0%] left-[0%] tracking-[0.25px] leading-[20px]">
                Get started
              </b>
            </div>
            <img
              className="w-6 relative h-6"
              alt=""
              src="/arrow-alt-lright-alt2.svg"
            />
          </div>
          <div className="absolute top-[calc(50%_+_136px)] left-[calc(50%_-_168px)] [backdrop-filter:blur(300px)] w-[335.5px] h-11 flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[8px]">
            <div className="w-[71px] relative h-5">
              <b className="absolute top-[0%] left-[0%] tracking-[0.25px] leading-[20px]">
                View Docs
              </b>
            </div>
            <img
              className="w-6 relative h-6"
              alt=""
              src="/arrow-alt-lright-alt2.svg"
            />
          </div>
          <b className="absolute w-[calc(100%_-_36.5px)] top-[calc(50%_-_4px)] left-[16.8px] inline-block text-text-ui-white-60 text-center h-16">
            We help game developers to launch their game on Web 3.0, by keeping
            blockchain complexities aside with WebWorld SDKs!
          </b>
          <div className="absolute w-full top-[calc(50%_-_180px)] left-[0px] text-19xl font-black text-center inline-block">
            <p className="m-0">Launch Your Game</p>
            <p className="m-0">
              <span>{`on `}</span>
              <span className="text-transparent !bg-clip-text [background:linear-gradient(94.68deg,_#ff0276_20.25%,_#7209b7_71.53%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Web 3.0
              </span>
              <span className="text-text-ui-white-100"> in Minutes</span>
            </p>
          </div>
        </div>
        <div className="absolute top-[28px] left-[29px] [backdrop-filter:blur(250px)] rounded-29xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-[371px] h-20 flex flex-row items-center justify-between py-2.5 px-5 text-sm text-gray-100 border-[1px] border-solid border-gradient-stroke">
          <img
            className="w-8 relative h-8 cursor-pointer"
            alt=""
            src="/menu.svg"
            onClick={openNavLinks}
          />
          <div className="w-[67px] flex flex-row items-center justify-center py-2.5 px-3.5 box-border">
            <div className="w-[37.1px] relative h-[23px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [filter:blur(1.3px)] hidden">
                <img
                  className="relative w-[23px] h-[23px]"
                  alt=""
                  src="/subtract.svg"
                />
                <img
                  className="relative w-[23px] h-[23px] object-contain"
                  alt=""
                  src="/subtract1@2x.png"
                />
              </div>
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <img
                  className="relative w-[22.9px] h-[23px]"
                  alt=""
                  src="/subtract-2.svg"
                />
                <img
                  className="relative w-[23px] h-[23px] object-contain"
                  alt=""
                  src="/subtract2@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-text-ui-white-100 overflow-hidden flex flex-row items-center justify-center py-2 px-3.5 gap-[4px]">
            <div className="w-[75px] relative h-5 hidden">
              <b className="absolute top-[0%] left-[0%] tracking-[0.25px] leading-[20px]">
                Get started
              </b>
            </div>
            <img
              className="w-6 relative h-6"
              alt=""
              src="/arrow-alt-lright-alt-2.svg"
            />
          </div>
        </div>
        <div className="absolute top-[2873px] left-[48.7px] w-[337.3px] h-[86px] text-lg">
          <b className="absolute top-[0px] left-[0px] flex items-center w-[337.3px]">
            LYNC Wallet SDK
          </b>
          <div className="absolute top-[29px] left-[0px] text-sm text-text-ui-gray-75 flex items-center w-[331.2px]">
            Empowering developers to integrate account abstraction in their
            game, dapp, metaverse and more in minutes.
          </div>
        </div>
        <div className="absolute top-[3079px] left-[48.7px] w-[337.3px] h-[86px] text-lg">
          <b className="absolute top-[0px] left-[0px] flex items-center w-[337.3px]">
            LYNC Wallet SDK
          </b>
          <div className="absolute top-[29px] left-[0px] text-sm text-text-ui-gray-75 flex items-center w-[331.2px]">
            Empowering developers to integrate account abstraction in their
            game, dapp, metaverse and more in minutes.
          </div>
        </div>
        <div className="absolute top-[3285px] left-[45px] w-[341px] h-[86px] text-lg">
          <b className="absolute top-[0px] left-[0px] flex items-center w-[341px]">
            LYNC Wallet SDK
          </b>
          <div className="absolute top-[29px] left-[0px] text-sm text-text-ui-gray-75 flex items-center w-[334.9px]">
            Empowering developers to integrate account abstraction in their
            game, dapp, metaverse and more in minutes.
          </div>
        </div>
        <div className="absolute top-[2976px] left-[48.7px] w-[337.3px] h-[86px] text-lg">
          <b className="absolute top-[0px] left-[0px] flex items-center w-[337.3px]">
            LYNC Wallet SDK
          </b>
          <div className="absolute top-[29px] left-[0px] text-sm text-text-ui-gray-75 flex items-center w-[331.2px]">
            Empowering developers to integrate account abstraction in their
            game, dapp, metaverse and more in minutes.
          </div>
        </div>
        <div className="absolute top-[3182px] left-[48.7px] w-[337.3px] h-[86px] text-lg">
          <b className="absolute top-[0px] left-[0px] flex items-center w-[337.3px]">
            LYNC Wallet SDK
          </b>
          <div className="absolute top-[29px] left-[0px] text-sm text-text-ui-gray-75 flex items-center w-[331.2px]">
            Empowering developers to integrate account abstraction in their
            game, dapp, metaverse and more in minutes.
          </div>
        </div>
        <div className="absolute top-[3388px] left-[45px] w-[337.3px] h-[86px] text-lg">
          <b className="absolute top-[0px] left-[0px] flex items-center w-[337.3px]">
            LYNC Wallet SDK
          </b>
          <div className="absolute top-[29px] left-[0px] text-sm text-text-ui-gray-75 flex items-center w-[331.2px]">
            Empowering developers to integrate account abstraction in their
            game, dapp, metaverse and more in minutes.
          </div>
        </div>
        <img
          className="absolute bottom-[2754px] left-[calc(50%_-_215px)] w-[430px] h-[571px] opacity-[0.2]"
          alt=""
          src="/overlay1.svg"
        />
        <img
          className="absolute top-[6944px] left-[-293px] w-[1149.4px] h-[1110.8px] object-contain"
          alt=""
          src="/background1@2x.png"
        />
        <img
          className="absolute top-[5464px] left-[-293px] w-[1149.4px] h-[1110.8px] object-contain"
          alt=""
          src="/background1@2x.png"
        />
        <img
          className="absolute top-[4762px] left-[-293px] w-[1149.4px] h-[1110.8px] object-contain"
          alt=""
          src="/background1@2x.png"
        />
        <div className="absolute bottom-[2832px] left-[calc(50%_-_152px)] [backdrop-filter:blur(300px)] rounded-29xl box-border w-[304px] flex flex-col items-start justify-start min-w-[304px] text-base border-[1px] border-solid border-gradient-stroke">
          <img
            className="self-stretch relative rounded-t-xl rounded-b-none max-w-full overflow-hidden h-[171px] shrink-0 object-cover"
            alt=""
            src="/image-94@2x.png"
          />
          <div className="self-stretch [backdrop-filter:blur(300px)] rounded-t-none rounded-b-xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] flex flex-col items-start justify-start py-4 px-5 gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <b className="self-stretch relative">
                LYNC teamed up with Astar Network to effortlessly bring the next
                billion gamers into Web3 🎮
              </b>
              <b className="self-stretch relative text-sm text-text-ui-gray-75">
                LYNC joins forces with Astar Network to allow game developers
                and studios to launch games in just a few minutes using LYNC’s
                SDK and infrastructure.
              </b>
            </div>
            <div className="rounded-xl bg-text-ui-white-100 flex flex-row items-center justify-center py-3 px-3.5 text-3xs text-text-ui-gray">
              <b className="relative">Read more</b>
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_50px)] top-[3989px] left-[25px] font-black text-center inline-block">
          <p className="m-0">From our</p>
          <p className="m-0 text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Blog
          </p>
        </div>
        <div className="absolute w-[calc(100%_-_50px)] top-[4724px] left-[25px] font-black text-center inline-block">
          <span>Valuable</span>
          <span className="text-transparent !bg-clip-text [background:linear-gradient(94.68deg,_#ff0276_20.25%,_#7209b7_71.53%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            {" "}
            Reviews
          </span>
        </div>
        <b className="absolute w-[calc(100%_-_90px)] top-[4075px] left-[45px] text-base inline-block text-text-ui-white-60 text-center h-[66px]">
          Level Up Your Web3 Gaming Experience: Explore Our Blog for Insights,
          Tips, and Innovations in Gaming SDKs!
        </b>
        <img
          className="absolute w-[calc(100%_-_382px)] right-[353px] bottom-[3018px] left-[29px] rounded-13xl max-w-full overflow-hidden h-12 object-contain"
          alt=""
          src="/expand-right1@2x.png"
        />
        <div className="absolute w-[calc(100%_-_382px)] right-[29px] bottom-[3017px] left-[353px] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-12 flex flex-row items-center justify-center border-[1px] border-solid border-gradient-stroke">
          <img
            className="w-1.5 relative h-3 object-contain"
            alt=""
            src="/vector-9.svg"
          />
        </div>
        <div className="absolute bottom-[2344px] left-[calc(50%_-_152px)] rounded-xl w-[304px] flex flex-col items-start justify-start text-base">
          <div className="self-stretch rounded-t-xl rounded-b-none bg-bg-ui-dark-blue flex flex-row items-center justify-center py-4 px-5 opacity-[0.8]">
            <div className="flex-1 relative font-medium">
              Absolutely blown away by the capabilities of this company's Web3
              gaming SDK! Integrating it into my project was seamless, and the
              innovative tools provided took my game to the next level. The
              support team was incredibly responsive and helpful throughout the
              process. Highly recommended!
            </div>
          </div>
          <div className="self-stretch [backdrop-filter:blur(300px)] rounded-t-none rounded-b-xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] flex flex-row items-center justify-start py-4 px-5 gap-[10px] text-sm font-label-label-bold">
            <div className="flex flex-row items-start justify-start p-2">
              <div className="w-8 relative rounded-[50%] bg-gainsboro h-8" />
            </div>
            <div className="flex flex-col items-start justify-start">
              <b className="relative uppercase">Alex George</b>
              <b className="relative text-7xs tracking-[0.2em] leading-[125%] uppercase font-body-body-2-body-2-regular text-text-ui-gray-75">
                CEO, Polygon
              </b>
            </div>
          </div>
        </div>
        <img
          className="absolute w-[calc(100%_-_382px)] right-[353px] bottom-[2475px] left-[29px] rounded-13xl max-w-full overflow-hidden h-12 object-contain"
          alt=""
          src="/expand-right2@2x.png"
        />
        <div className="absolute w-[calc(100%_-_382px)] right-[29px] bottom-[2475px] left-[353px] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-12 flex flex-row items-center justify-center border-[1px] border-solid border-gradient-stroke">
          <img
            className="w-1.5 relative h-3 object-contain"
            alt=""
            src="/vector-9.svg"
          />
        </div>
        <img
          className="absolute top-[5206px] left-[-127px] w-[557px] h-[455px] object-cover"
          alt=""
          src="/image-96@2x.png"
        />
        <div className="absolute bottom-[2025px] left-[calc(50%_-_170px)] font-black text-center flex items-center w-[340px]">
          <span className="w-full">
            <p className="m-0">Strongest Web3</p>
            <p className="m-0 text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Community
            </p>
          </span>
        </div>
        <div className="absolute bottom-[1674px] left-[calc(50%_-_170px)] font-black text-center flex items-center w-[340px]">
          <span className="w-full">
            <p className="m-0">{`Our `}</p>
            <p className="m-0 text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Believers and Partners
            </p>
          </span>
        </div>
        <div className="absolute bottom-[1977px] left-[calc(50%_-_80px)] rounded-xl [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] w-40 overflow-hidden flex flex-row items-center justify-center py-2 px-3.5 box-border gap-[10px] text-sm">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/telegramsvgrepocom-1.svg"
          />
          <div className="w-[94px] relative h-5">
            <b className="absolute top-[0%] left-[0%] tracking-[0.25px] leading-[20px]">
              Join Telegram
            </b>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_252px)] right-[223px] bottom-[1557.7px] left-[29px] h-[83.6px]">
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(180.14px)] rounded-[19.22px] [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-[83.6px] border-[0.6px] border-solid border-gradient-stroke" />
          <img
            className="absolute w-[calc(100%_-_46.5px)] right-[23.7px] bottom-[0.8px] left-[22.8px] max-w-full overflow-hidden h-[82px] object-cover"
            alt=""
            src="/image-392@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_252px)] right-[29px] bottom-[1559.8px] left-[223px] h-[84.2px]">
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(226.18px)] rounded-[24.13px] [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-[84.2px] border-[0.8px] border-solid border-gradient-stroke" />
          <img
            className="absolute w-[calc(100%_-_44.1px)] right-[21.6px] bottom-[18.4px] left-[22.5px] max-w-full overflow-hidden h-[42.5px] object-cover"
            alt=""
            src="/image-581@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_252px)] right-[223px] bottom-[1457.6px] left-[29px] h-[82.7px]">
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(178.14px)] rounded-[19px] [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-[82.7px] border-[0.6px] border-solid border-gradient-stroke" />
          <img
            className="absolute w-[calc(100%_-_48px)] right-[23.6px] bottom-[22px] left-[24.4px] max-w-full overflow-hidden h-[38.6px] object-cover"
            alt=""
            src="/spheronwhite-11@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_252px)] right-[29px] bottom-[1456.8px] left-[223px] h-[84.2px]">
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(181.33px)] rounded-[19.34px] [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-[84.2px] border-[0.6px] border-solid border-gradient-stroke" />
          <img
            className="absolute w-[calc(100%_-_39.3px)] right-[20.1px] bottom-[11.3px] left-[19.2px] max-w-full overflow-hidden h-[60.9px] object-cover"
            alt=""
            src="/longhashx-white-12@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_252px)] right-[223px] bottom-[1355.8px] left-[29px] h-[84.2px]">
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(181.33px)] rounded-[19.34px] [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-[84.2px] border-[0.6px] border-solid border-gradient-stroke" />
          <img
            className="absolute w-[calc(100%_-_54.3px)] right-[27.5px] bottom-[27.2px] left-[26.8px] max-w-full overflow-hidden h-[29.7px] object-cover"
            alt=""
            src="/axelar-logo-full-white-12@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_252px)] right-[29px] bottom-[1355.8px] left-[223px] h-[84.2px]">
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(181.33px)] rounded-[19.34px] [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-[84.2px] border-[0.6px] border-solid border-gradient-stroke" />
          <img
            className="absolute w-[calc(100%_-_49.7px)] right-[20px] bottom-[30.4px] left-[29.7px] max-w-full overflow-hidden h-[28.9px] object-cover"
            alt=""
            src="/image-781@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_252px)] right-[223px] bottom-[1254.8px] left-[29px] h-[84.2px]">
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(181.33px)] rounded-[19.34px] [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-[84.2px] border-[0.6px] border-solid border-gradient-stroke" />
          <div className="absolute w-[calc(100%_-_27.6px)] right-[13.4px] bottom-[21.7px] left-[14.2px] h-[40.9px]">
            <img
              className="absolute w-[calc(100%_-_118.6px)] right-[118.6px] bottom-[0px] left-[0px] max-w-full overflow-hidden h-[40.9px] object-cover"
              alt=""
              src="/image-451@2x.png"
            />
            <img
              className="absolute w-[calc(100%_-_37px)] right-[-0.1px] bottom-[5.1px] left-[37.1px] max-w-full overflow-hidden h-[31.2px] object-cover"
              alt=""
              src="/image-461@2x.png"
            />
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_252px)] right-[29px] bottom-[1254.8px] left-[223px] h-[84.2px]">
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(181.33px)] rounded-[19.34px] [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border h-[84.2px] border-[0.6px] border-solid border-gradient-stroke" />
          <img
            className="absolute w-[calc(100%_-_93.8px)] right-[47.3px] bottom-[20.9px] left-[46.5px] max-w-full overflow-hidden h-[46.5px] object-cover"
            alt=""
            src="/image-79-11@2x.png"
          />
        </div>
        <div className="absolute bottom-[708px] left-[calc(50%_-_186px)] w-[206px] h-[139px] text-lg">
          <img
            className="absolute bottom-[104.8px] left-[calc(50%_-_102px)] w-[145.8px] h-[34.2px]"
            alt=""
            src="/logo1.svg"
          />
          <b className="absolute bottom-[68px] left-[calc(50%_-_102px)] inline-block w-[205px]">
            A GameFi Infrastructure
          </b>
          <div className="absolute bottom-[0px] left-[calc(50%_-_103px)] w-[167.2px] h-12">
            <div className="absolute bottom-[0px] left-[calc(50%_-_83.6px)] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-[49px] h-12 flex flex-col items-center justify-center p-3 border-[1px] border-solid border-gradient-stroke">
              <img className="w-6 relative h-[23px]" alt="" src="/vector.svg" />
            </div>
            <div className="absolute bottom-[0px] left-[calc(50%_-_24.5px)] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-[49px] h-12 flex flex-col items-center justify-center p-3 border-[1px] border-solid border-gradient-stroke">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/akariconsdiscordfill1.svg"
              />
            </div>
            <div className="absolute bottom-[0px] left-[calc(50%_+_34.7px)] [backdrop-filter:blur(300px)] rounded-13xl [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-[49px] h-12 flex flex-col items-center justify-center p-3 border-[1px] border-solid border-gradient-stroke">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/akariconstwitterfill1.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[6788px] left-[30px] w-[86px] h-[149.9px] text-sm text-text-ui-gray-75">
          <b className="absolute top-[0px] left-[0px] text-lg text-text-ui-white-100">
            Product
          </b>
          <div className="absolute top-[28.9px] left-[0px] font-medium flex items-center w-[37px] h-6">
            SDK’s
          </div>
          <div className="absolute top-[61.9px] left-[0px] font-medium flex items-center w-[86px] h-[23px]">
            Transfer API’s
          </div>
          <div className="absolute top-[93.9px] left-[0px] font-medium flex items-center w-[73px] h-6">
            Token API’s
          </div>
          <div className="absolute top-[125.9px] left-[0px] font-medium flex items-center w-[61px] h-6">
            NFT API’s
          </div>
        </div>
        <div className="absolute top-[6788px] left-[179px] w-[87px] h-[149.9px] text-sm text-text-ui-gray-75">
          <b className="absolute top-[0px] left-[0px] text-lg text-text-ui-white-100">
            Company
          </b>
          <div className="absolute top-[28.9px] left-[0px] font-medium flex items-center w-14 h-6">
            About us
          </div>
          <div className="absolute top-[62px] left-[0px] font-medium flex items-center w-[59px] h-[23px]">
            Press Kit
          </div>
          <div className="absolute top-[93.9px] left-[0px] font-medium flex items-center w-[51px] h-6">
            Security
          </div>
          <div className="absolute top-[125.9px] left-[0px] font-medium flex items-center w-[87px] h-6">
            Privacy Policy
          </div>
        </div>
        <div className="absolute top-[6962px] left-[29px] w-[67px] h-[149.9px] text-sm text-text-ui-gray-75">
          <b className="absolute top-[0px] left-[0px] text-lg text-text-ui-white-100">
            Contact
          </b>
          <div className="absolute top-[28.9px] left-[0px] font-medium flex items-center w-[35px] h-6">
            Email
          </div>
          <div className="absolute top-[61.9px] left-[0px] font-medium flex items-center w-[49px] h-[23px]">
            Discord
          </div>
          <div className="absolute top-[93.9px] left-[0px] font-medium flex items-center w-[59px] h-6">
            Telegram
          </div>
          <div className="absolute top-[125.9px] left-[0px] font-medium flex items-center w-[34px] h-6">
            Press
          </div>
        </div>
        <div className="absolute top-[6962px] left-[179px] w-[67px] h-[149.9px] text-sm text-text-ui-gray-75">
          <b className="absolute top-[0px] left-[0px] text-lg text-text-ui-white-100">
            Contact
          </b>
          <div className="absolute top-[28.9px] left-[0px] font-medium flex items-center w-[35px] h-6">
            Email
          </div>
          <div className="absolute top-[61.9px] left-[0px] font-medium flex items-center w-[49px] h-[23px]">
            Discord
          </div>
          <div className="absolute top-[93.9px] left-[0px] font-medium flex items-center w-[59px] h-6">
            Telegram
          </div>
          <div className="absolute top-[125.9px] left-[0px] font-medium flex items-center w-[34px] h-6">
            Press
          </div>
        </div>
        <div className="absolute bottom-[143px] left-[calc(50%_-_186px)] w-[303px] h-36 text-text-ui-gray-75">
          <b className="absolute bottom-[112px] left-[calc(50%_-_151.5px)] text-text-ui-white-100">
            Supercharge your inbox
          </b>
          <b className="absolute bottom-[83px] left-[calc(50%_-_151.5px)] text-base">
            Sign up for our newsletter
          </b>
          <div className="absolute bottom-[0px] left-[calc(50%_-_151.5px)] [backdrop-filter:blur(237.63px)] rounded-[25.35px] [background:linear-gradient(92.98deg,_rgba(217,_217,_217,_0.07),_rgba(217,_217,_217,_0.05)_99.05%)] box-border w-[303px] overflow-hidden flex flex-row items-center justify-start py-[9.5px] px-[11.1px] text-xs-1 border-[0.8px] border-solid border-gradient-stroke">
            <div className="w-[283.9px] relative h-[34px]">
              <b className="absolute top-[10px] left-[0px] inline-block w-[156.7px] h-[15px]">
                enter you email address
              </b>
              <div className="absolute top-[0px] left-[162.9px] rounded-[25.35px] [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] w-[121px] flex flex-row items-center justify-center py-[9.5px] px-[12.7px] box-border min-w-[95.05px] text-center text-text-ui-white-100">
                <b className="flex-1 relative">Submit</b>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute w-[calc(100%_-_91px)] top-[6281px] right-[46px] left-[45px] max-w-full overflow-hidden h-[81px]"
          alt=""
          src="/lync-logo1.svg"
        />
        <img
          className="absolute h-[2.42%] w-[149.63%] top-[86.03%] right-[-31.72%] bottom-[11.54%] left-[-17.91%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-269.svg"
        />
        <div className="absolute top-[6350px] left-[44px] font-black text-center inline-block w-[337px]">
          <p className="m-0">Got a game idea ?</p>
          <p className="m-0">Let's make it big together !!!</p>
        </div>
        <div className="absolute top-[6432px] left-[calc(50%_-_74px)] rounded-xl [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] w-[148px] overflow-hidden flex flex-row items-center justify-center py-2 px-3.5 box-border text-sm">
          <div className="flex-1 relative h-5">
            <b className="absolute top-[0%] left-[0%] tracking-[0.25px] leading-[20px]">
              Get started
            </b>
          </div>
          <img
            className="w-6 relative h-6 hidden"
            alt=""
            src="/arrow-alt-lright-alt-3.svg"
          />
        </div>
        <b className="absolute bottom-[69px] left-[calc(50%_-_86px)] text-3xs text-text-ui-gray-75 text-center">
          2024 LYNC World  · Terms of service
        </b>
        <div className="absolute bottom-[3793px] left-[calc(50%_-_186px)] font-black text-center flex items-center w-[372px]">
          <span className="w-full">
            <p className="m-0">{`With LYNC, build on your `}</p>
            <p className="m-0 text-transparent !bg-clip-text [background:linear-gradient(205.14deg,_#3f37c9_36.56%,_#4cc9f0)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              favorite chain.
            </p>
          </span>
        </div>
        <div className="absolute w-[calc(100%_-_252.8px)] right-[29.4px] bottom-[3526px] left-[223.4px] h-[232px]">
          <img
            className="absolute w-[calc(100%_-_12.2px)] right-[5.7px] bottom-[178.4px] left-[6.5px] max-w-full overflow-hidden h-[53.6px] object-cover"
            alt=""
            src="/image-93@2x.png"
          />
          <img
            className="absolute w-[calc(100%_-_1.7px)] right-[0.9px] bottom-[55.7px] left-[0.8px] max-w-full overflow-hidden h-[34.1px] object-cover"
            alt=""
            src="/image-55@2x.png"
          />
          <img
            className="absolute w-full right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden h-[35.8px] object-cover"
            alt=""
            src="/avalanche-horizontal-white-2@2x.png"
          />
          <img
            className="absolute w-[calc(100%_-_24.4px)] right-[12.2px] bottom-[109.7px] left-[12.2px] max-w-full overflow-hidden h-[48.8px] object-cover"
            alt=""
            src="/image-66@2x.png"
          />
        </div>
        <img
          className="absolute w-[calc(100%_-_268px)] right-[223px] bottom-[3526px] left-[45px] max-w-full overflow-hidden h-[225px]"
          alt=""
          src="/group-273.svg"
        />
        <div className="absolute w-[calc(100%_-_344px)] right-[344px] bottom-[3489px] left-[0px] [filter:blur(38px)] bg-bg-ui-dark-blue h-[304px]" />
        <div className="absolute right-[0px] bottom-[3489px] [filter:blur(38px)] bg-bg-ui-dark-blue w-[82px] h-[304px]" />
        <img
          className="absolute w-[calc(100%_+_11px)] right-[-11px] bottom-[3503px] left-[0px] max-w-full overflow-hidden h-[305px] opacity-[0.2]"
          alt=""
          src="/overlay2.svg"
        />
      </div>
      {isNavLinksOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeNavLinks}
        >
          <NavLinks1 onClose={closeNavLinks} />
        </PortalPopup>
      )}
    </>
  );
};

export default LYNCMobile;
