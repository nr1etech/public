import {component$} from '@builder.io/qwik';
import {
  ClientLoopIconOnDarkBlue,
  ClientLoopIconOnLightBlue,
  ClientLoopIconOnWhite,
  ClientLoopLogoBlack,
  PlaidIconBw,
  PlaidLogoBw,
  FlagAe1x1,
  FlagAe4x3,
  FlagAu1x1,
  FlagAu4x3,
  FlagDe1x1,
  FlagDe4x3,
  FlagFr1x1,
  FlagFr4x3,
  FlagIe1x1,
  FlagIe4x3,
  FlagUs1x1,
  FlagUs4x3,
  FlagZa1x1,
  FlagZa4x3,
  LogosGoogleIcon,
  LogosMicrosoftIcon,
  MdiAdd,
  MdiAddBold,
  MdiAddBox,
  MdiAddCircle,
  MdiAddCircleOutline,
  MdiAirHorn,
  MdiAlert,
  MdiAlertBox,
  MdiAlertBoxOutline,
  MdiAlertCircle,
  MdiAlertCircleOutline,
  MdiAlertOutline,
  MdiArrowBackCircle,
  MdiArrowForwardCircle,
  MdiBank,
  MdiBankOutline,
  MdiBrain,
  MdiBrainFreezeOutline,
  MdiBuilding,
  MdiCalendar,
  MdiCheckCircle,
  MdiCheckCircleOutline,
  MdiChevronDown,
  MdiChevronUp,
  MdiClose,
  MdiCloudDownload,
  MdiCloudDownloadOutline,
  MdiCloudLockOutline,
  MdiContact,
  MdiContactOutline,
  MdiContacts,
  MdiContactsOutline,
  MdiContentCopy,
  MdiCreditCardOutline,
  MdiCrown,
  MdiCrownCircle,
  MdiCrownCircleOutline,
  MdiCrownOutline,
  MdiDangerous,
  MdiDeleteOutline,
  MdiDevTo,
  MdiDollar,
  MdiDownload,
  MdiEmail,
  MdiEmailOutline,
  MdiEmoticonDevil,
  MdiError,
  MdiErrorOutline,
  MdiGearOutline,
  MdiGmail,
  MdiGoogle,
  MdiGoogleDrive,
  MdiHamburgerMenu,
  MdiInformation,
  MdiInformationBox,
  MdiInformationBoxOutline,
  MdiInformationOutline,
  MdiInformationSlabBox,
  MdiInformationSlabBoxOutline,
  MdiInformationSlabCircle,
  MdiInformationSlabCircleOutline,
  MdiInformationVariantBox,
  MdiInformationVariantBoxOutline,
  MdiInformationVariantCircle,
  MdiInformationVariantCircleOutline,
  MdiInstantMix,
  MdiInvite,
  MdiInvoiceTextEditOutline,
  MdiKeyVariant,
  MdiKeyboardReturn,
  MdiLinkVariant,
  MdiLock,
  MdiLogin,
  MdiLogout,
  MdiMicrosoft,
  MdiMicrosoftGithub,
  MdiMixerSettings,
  MdiNavigateBefore,
  MdiNavigateNext,
  MdiNetworkOutline,
  MdiOfficeBuildingOutline,
  MdiPercent,
  MdiPersonCheck,
  MdiPersonCheckOutline,
  MdiPlusBoxOutline,
  MdiRefresh,
  MdiSearch,
  MdiSecureOutline,
  MdiShieldCrown,
  MdiShieldCrownOutline,
  MdiUser,
  MdiUserOutline,
  MdiUsersOutline,
  MdiWarning,
  MdiWarningBox,
  MdiWarningBoxOutline,
  MdiWarningCircle,
  MdiWarningCircleOutline,
  MdiWarningOutline,
  MdiWrenchOutline,
  Spinners6DotsRotate,
  SpinnersBarsRotateFade,
  SpinnersRingResize,
  ClientLoopLogoWhite,
  ClientLoopLogoPrimary,
  ClientLoopLogoLightBlue,
  ClientLoopLogoGray,
  ClientLoopLogoDarkBlue,
  Nr1eIcon,
  Nr1eLogoDarkBg,
  Nr1eLogoLightBg,
  Nr1eLogoTaglineDarkBg,
  Nr1eLogoTaglineLightBg,
  AuthSureIcon,
  AuthSureLogoDarkBg,
  AuthSureLogoLightBg,
  AuthSureLogoTaglineDarkBg,
  AuthSureLogoTaglineLightBg,
  UpgilityIcon,
  UpgilityLogoDarkBg,
  UpgilityLogoLightBg,
  UpgilityLogoTaglineDarkBg,
  UpgilityLogoTaglineLightBg,
  DigitalPlatIcon,
  DigitalPlatLogo,
  EnpagoIcon,
  EnpagoLogoDarkBg,
  EnpagoLogoLightBg,
  PurpleShipIcon,
  PurpleShipLogo,
  ReverblyIcon,
  ReverblyLogoDarkBg,
  ReverblyLogoLightBg,
  ReverblyLogoTaglineDarkBg,
  ReverblyLogoTaglineLightBg,
  TriggerPointIconBlueDarkBg,
  TriggerPointIconBlueLightBg,
  TriggerPointIconTealDarkBg,
  TriggerPointIconTealLightBg,
  TriggerPointIconVioletDarkBg,
  TriggerPointIconVioletLightBg,
  TriggerPointLogoBlueDarkBg,
  TriggerPointLogoBlueLightBg,
  TriggerPointLogoTealDarkBg,
  TriggerPointLogoTealLightBg,
  TriggerPointLogoVioletDarkBg,
  TriggerPointLogoVioletLightBg,
  TriggerPointLogoTaglineBlueDarkBg,
  TriggerPointLogoTaglineBlueLightBg,
  TriggerPointLogoTaglineTealDarkBg,
  TriggerPointLogoTaglineTealLightBg,
  TriggerPointLogoTaglineVioletDarkBg,
  TriggerPointLogoTaglineVioletLightBg,
  AdminiPayIcon,
  AdminiPayLogo,
  CenterGaugeIconDarkBg,
  CenterGaugeIconLightBg,
  CenterGaugeLogoDarkBg,
  CenterGaugeLogoLightBg,
  CloudAccountManagerIcon,
  CloudAccountManagerLogoDarkBg,
  CloudAccountManagerLogoLightBg,
  TrueMarkIconDarkBg,
  TrueMarkIconLightBg,
  TrueMarkLogoDarkBg,
  TrueMarkLogoLightBg,
} from './index';

export default component$(() => {
  const icons = [
    {component: MdiAdd, name: 'MdiAdd'},
    {component: MdiAddBold, name: 'MdiAddBold'},
    {component: MdiAddBox, name: 'MdiAddBox'},
    {component: MdiAddCircle, name: 'MdiAddCircle'},
    {component: MdiAddCircleOutline, name: 'MdiAddCircleOutline'},
    {component: MdiAirHorn, name: 'MdiAirHorn'},
    {component: MdiAlert, name: 'MdiAlert'},
    {component: MdiAlertBox, name: 'MdiAlertBox'},
    {component: MdiAlertBoxOutline, name: 'MdiAlertBoxOutline'},
    {component: MdiAlertCircle, name: 'MdiAlertCircle'},
    {component: MdiAlertCircleOutline, name: 'MdiAlertCircleOutline'},
    {component: MdiAlertOutline, name: 'MdiAlertOutline'},
    {component: MdiArrowBackCircle, name: 'MdiArrowBackCircle'},
    {component: MdiArrowForwardCircle, name: 'MdiArrowForwardCircle'},
    {component: MdiBank, name: 'MdiBank'},
    {component: MdiBankOutline, name: 'MdiBankOutline'},
    {component: MdiBrain, name: 'MdiBrain'},
    {component: MdiBrainFreezeOutline, name: 'MdiBrainFreezeOutline'},
    {component: MdiBuilding, name: 'MdiBuilding'},
    {component: MdiCalendar, name: 'MdiCalendar'},
    {component: MdiCheckCircle, name: 'MdiCheckCircle'},
    {component: MdiCheckCircleOutline, name: 'MdiCheckCircleOutline'},
    {component: MdiChevronDown, name: 'MdiChevronDown'},
    {component: MdiChevronUp, name: 'MdiChevronUp'},
    {component: MdiClose, name: 'MdiClose'},
    {component: MdiCloudDownload, name: 'MdiCloudDownload'},
    {component: MdiCloudDownloadOutline, name: 'MdiCloudDownloadOutline'},
    {component: MdiCloudLockOutline, name: 'MdiCloudLockOutline'},
    {component: MdiContact, name: 'MdiContact'},
    {component: MdiContactOutline, name: 'MdiContactOutline'},
    {component: MdiContacts, name: 'MdiContacts'},
    {component: MdiContactsOutline, name: 'MdiContactsOutline'},
    {component: MdiContentCopy, name: 'MdiContentCopy'},
    {component: MdiCreditCardOutline, name: 'MdiCreditCardOutline'},
    {component: MdiCrown, name: 'MdiCrown'},
    {component: MdiCrownCircle, name: 'MdiCrownCircle'},
    {component: MdiCrownCircleOutline, name: 'MdiCrownCircleOutline'},
    {component: MdiCrownOutline, name: 'MdiCrownOutline'},
    {component: MdiDangerous, name: 'MdiDangerous'},
    {component: MdiDeleteOutline, name: 'MdiDeleteOutline'},
    {component: MdiDevTo, name: 'MdiDevTo'},
    {component: MdiDollar, name: 'MdiDollar'},
    {component: MdiDownload, name: 'MdiDownload'},
    {component: MdiEmail, name: 'MdiEmail'},
    {component: MdiEmailOutline, name: 'MdiEmailOutline'},
    {component: MdiEmoticonDevil, name: 'MdiEmoticonDevil'},
    {component: MdiError, name: 'MdiError'},
    {component: MdiErrorOutline, name: 'MdiErrorOutline'},
    {component: MdiGearOutline, name: 'MdiGearOutline'},
    {component: MdiGmail, name: 'MdiGmail'},
    {component: MdiGoogle, name: 'MdiGoogle'},
    {component: MdiGoogleDrive, name: 'MdiGoogleDrive'},
    {component: MdiHamburgerMenu, name: 'MdiHamburgerMenu'},
    {component: MdiInformation, name: 'MdiInformation'},
    {component: MdiInformationBox, name: 'MdiInformationBox'},
    {component: MdiInformationBoxOutline, name: 'MdiInformationBoxOutline'},
    {component: MdiInformationOutline, name: 'MdiInformationOutline'},
    {component: MdiInformationSlabBox, name: 'MdiInformationSlabBox'},
    {
      component: MdiInformationSlabBoxOutline,
      name: 'MdiInformationSlabBoxOutline',
    },
    {component: MdiInformationSlabCircle, name: 'MdiInformationSlabCircle'},
    {
      component: MdiInformationSlabCircleOutline,
      name: 'MdiInformationSlabCircleOutline',
    },
    {component: MdiInformationVariantBox, name: 'MdiInformationVariantBox'},
    {
      component: MdiInformationVariantBoxOutline,
      name: 'MdiInformationVariantBoxOutline',
    },
    {
      component: MdiInformationVariantCircle,
      name: 'MdiInformationVariantCircle',
    },
    {
      component: MdiInformationVariantCircleOutline,
      name: 'MdiInformationVariantCircleOutline',
    },
    {component: MdiInstantMix, name: 'MdiInstantMix'},
    {component: MdiInvite, name: 'MdiInvite'},
    {component: MdiInvoiceTextEditOutline, name: 'MdiInvoiceTextEditOutline'},
    {component: MdiKeyVariant, name: 'MdiKeyVariant'},
    {component: MdiKeyboardReturn, name: 'MdiKeyboardReturn'},
    {component: MdiLinkVariant, name: 'MdiLinkVariant'},
    {component: MdiLock, name: 'MdiLock'},
    {component: MdiLogin, name: 'MdiLogin'},
    {component: MdiLogout, name: 'MdiLogout'},
    {component: MdiMicrosoft, name: 'MdiMicrosoft'},
    {component: MdiMicrosoftGithub, name: 'MdiMicrosoftGithub'},
    {component: MdiMixerSettings, name: 'MdiMixerSettings'},
    {component: MdiNavigateBefore, name: 'MdiNavigateBefore'},
    {component: MdiNavigateNext, name: 'MdiNavigateNext'},
    {component: MdiNetworkOutline, name: 'MdiNetworkOutline'},
    {component: MdiOfficeBuildingOutline, name: 'MdiOfficeBuildingOutline'},
    {component: MdiPercent, name: 'MdiPercent'},
    {component: MdiPersonCheck, name: 'MdiPersonCheck'},
    {component: MdiPersonCheckOutline, name: 'MdiPersonCheckOutline'},
    {component: MdiPlusBoxOutline, name: 'MdiPlusBoxOutline'},
    {component: MdiRefresh, name: 'MdiRefresh'},
    {component: MdiSearch, name: 'MdiSearch'},
    {component: MdiSecureOutline, name: 'MdiSecureOutline'},
    {component: MdiShieldCrown, name: 'MdiShieldCrown'},
    {component: MdiShieldCrownOutline, name: 'MdiShieldCrownOutline'},
    {component: MdiUser, name: 'MdiUser'},
    {component: MdiUserOutline, name: 'MdiUserOutline'},
    {component: MdiUsersOutline, name: 'MdiUsersOutline'},
    {component: MdiWarning, name: 'MdiWarning'},
    {component: MdiWarningBox, name: 'MdiWarningBox'},
    {component: MdiWarningBoxOutline, name: 'MdiWarningBoxOutline'},
    {component: MdiWarningCircle, name: 'MdiWarningCircle'},
    {component: MdiWarningCircleOutline, name: 'MdiWarningCircleOutline'},
    {component: MdiWarningOutline, name: 'MdiWarningOutline'},
    {component: MdiWrenchOutline, name: 'MdiWrenchOutline'},
  ];

  const logoIcons = [
    {component: LogosGoogleIcon, name: 'LogosGoogleIcon'},
    {component: LogosMicrosoftIcon, name: 'LogosMicrosoftIcon'},
  ];

  const brandIcons = [
    {component: AdminiPayIcon, name: 'AdminiPayIcon'},
    {component: CenterGaugeIconDarkBg, name: 'CenterGaugeIconDarkBg'},
    {component: CenterGaugeIconLightBg, name: 'CenterGaugeIconLightBg'},
    {component: CloudAccountManagerIcon, name: 'CloudAccountManagerIcon'},
    {component: ClientLoopIconOnWhite, name: 'ClientLoopIconOnWhite'},
    {component: ClientLoopIconOnDarkBlue, name: 'ClientLoopIconOnDarkBlue'},
    {component: ClientLoopIconOnLightBlue, name: 'ClientLoopIconOnLightBlue'},
    {component: Nr1eIcon, name: 'Nr1eIcon'},
    {component: AuthSureIcon, name: 'AuthSureIcon'},
    {component: UpgilityIcon, name: 'UpgilityIcon'},
    {component: DigitalPlatIcon, name: 'DigitalPlatIcon'},
    {component: EnpagoIcon, name: 'EnpagoIcon'},
    {component: PurpleShipIcon, name: 'PurpleShipIcon'},
    {component: ReverblyIcon, name: 'ReverblyIcon'},
    {component: TrueMarkIconDarkBg, name: 'TrueMarkIconDarkBg'},
    {component: TrueMarkIconLightBg, name: 'TrueMarkIconLightBg'},
    {component: TriggerPointIconBlueDarkBg, name: 'TriggerPointIconBlueDarkBg'},
    {
      component: TriggerPointIconBlueLightBg,
      name: 'TriggerPointIconBlueLightBg',
    },
    {component: TriggerPointIconTealDarkBg, name: 'TriggerPointIconTealDarkBg'},
    {
      component: TriggerPointIconTealLightBg,
      name: 'TriggerPointIconTealLightBg',
    },
    {
      component: TriggerPointIconVioletDarkBg,
      name: 'TriggerPointIconVioletDarkBg',
    },
    {
      component: TriggerPointIconVioletLightBg,
      name: 'TriggerPointIconVioletLightBg',
    },
    {component: PlaidIconBw, name: 'PlaidIconBw'},
  ];

  const brandLogos = [
    {component: AdminiPayLogo, name: 'AdminiPayLogo'},
    {component: CenterGaugeLogoDarkBg, name: 'CenterGaugeLogoDarkBg'},
    {component: CenterGaugeLogoLightBg, name: 'CenterGaugeLogoLightBg'},
    {
      component: CloudAccountManagerLogoDarkBg,
      name: 'CloudAccountManagerLogoDarkBg',
    },
    {
      component: CloudAccountManagerLogoLightBg,
      name: 'CloudAccountManagerLogoLightBg',
    },
    {component: ClientLoopLogoBlack, name: 'ClientLoopLogoBlack'},
    {component: ClientLoopLogoDarkBlue, name: 'ClientLoopLogoDarkBlue'},
    {component: ClientLoopLogoGray, name: 'ClientLoopLogoGray'},
    {component: ClientLoopLogoLightBlue, name: 'ClientLoopLogoLightBlue'},
    {component: ClientLoopLogoPrimary, name: 'ClientLoopLogoPrimary'},
    {component: ClientLoopLogoWhite, name: 'ClientLoopLogoWhite'},
    {component: Nr1eLogoDarkBg, name: 'Nr1eLogoDarkBg'},
    {component: Nr1eLogoLightBg, name: 'Nr1eLogoLightBg'},
    {component: Nr1eLogoTaglineDarkBg, name: 'Nr1eLogoTaglineDarkBg'},
    {component: Nr1eLogoTaglineLightBg, name: 'Nr1eLogoTaglineLightBg'},
    {component: AuthSureLogoDarkBg, name: 'AuthSureLogoDarkBg'},
    {component: AuthSureLogoLightBg, name: 'AuthSureLogoLightBg'},
    {component: AuthSureLogoTaglineDarkBg, name: 'AuthSureLogoTaglineDarkBg'},
    {component: AuthSureLogoTaglineLightBg, name: 'AuthSureLogoTaglineLightBg'},
    {component: UpgilityLogoDarkBg, name: 'UpgilityLogoDarkBg'},
    {component: UpgilityLogoLightBg, name: 'UpgilityLogoLightBg'},
    {component: UpgilityLogoTaglineDarkBg, name: 'UpgilityLogoTaglineDarkBg'},
    {component: UpgilityLogoTaglineLightBg, name: 'UpgilityLogoTaglineLightBg'},
    {component: DigitalPlatLogo, name: 'DigitalPlatLogo'},
    {component: EnpagoLogoDarkBg, name: 'EnpagoLogoDarkBg'},
    {component: EnpagoLogoLightBg, name: 'EnpagoLogoLightBg'},
    {component: PurpleShipLogo, name: 'PurpleShipLogo'},
    {component: ReverblyLogoDarkBg, name: 'ReverblyLogoDarkBg'},
    {component: ReverblyLogoLightBg, name: 'ReverblyLogoLightBg'},
    {component: ReverblyLogoTaglineDarkBg, name: 'ReverblyLogoTaglineDarkBg'},
    {component: ReverblyLogoTaglineLightBg, name: 'ReverblyLogoTaglineLightBg'},
    {component: TrueMarkLogoDarkBg, name: 'TrueMarkLogoDarkBg'},
    {component: TrueMarkLogoLightBg, name: 'TrueMarkLogoLightBg'},
    {component: TriggerPointLogoBlueDarkBg, name: 'TriggerPointLogoBlueDarkBg'},
    {
      component: TriggerPointLogoBlueLightBg,
      name: 'TriggerPointLogoBlueLightBg',
    },
    {component: TriggerPointLogoTealDarkBg, name: 'TriggerPointLogoTealDarkBg'},
    {
      component: TriggerPointLogoTealLightBg,
      name: 'TriggerPointLogoTealLightBg',
    },
    {
      component: TriggerPointLogoVioletDarkBg,
      name: 'TriggerPointLogoVioletDarkBg',
    },
    {
      component: TriggerPointLogoVioletLightBg,
      name: 'TriggerPointLogoVioletLightBg',
    },
    {
      component: TriggerPointLogoTaglineBlueDarkBg,
      name: 'TriggerPointLogoTaglineBlueDarkBg',
    },
    {
      component: TriggerPointLogoTaglineBlueLightBg,
      name: 'TriggerPointLogoTaglineBlueLightBg',
    },
    {
      component: TriggerPointLogoTaglineTealDarkBg,
      name: 'TriggerPointLogoTaglineTealDarkBg',
    },
    {
      component: TriggerPointLogoTaglineTealLightBg,
      name: 'TriggerPointLogoTaglineTealLightBg',
    },
    {
      component: TriggerPointLogoTaglineVioletDarkBg,
      name: 'TriggerPointLogoTaglineVioletDarkBg',
    },
    {
      component: TriggerPointLogoTaglineVioletLightBg,
      name: 'TriggerPointLogoTaglineVioletLightBg',
    },
    {component: PlaidLogoBw, name: 'PlaidLogoBw'},
  ];

  const flagIcons = [
    {component: FlagAe1x1, name: 'FlagAe1x1'},
    {component: FlagAe4x3, name: 'FlagAe4x3'},
    {component: FlagAu1x1, name: 'FlagAu1x1'},
    {component: FlagAu4x3, name: 'FlagAu4x3'},
    {component: FlagDe1x1, name: 'FlagDe1x1'},
    {component: FlagDe4x3, name: 'FlagDe4x3'},
    {component: FlagFr1x1, name: 'FlagFr1x1'},
    {component: FlagFr4x3, name: 'FlagFr4x3'},
    {component: FlagIe1x1, name: 'FlagIe1x1'},
    {component: FlagIe4x3, name: 'FlagIe4x3'},
    {component: FlagUs1x1, name: 'FlagUs1x1'},
    {component: FlagUs4x3, name: 'FlagUs4x3'},
    {component: FlagZa1x1, name: 'FlagZa1x1'},
    {component: FlagZa4x3, name: 'FlagZa4x3'},
  ];

  const spinnerIcons = [
    {component: Spinners6DotsRotate, name: 'Spinners6DotsRotate'},
    {component: SpinnersBarsRotateFade, name: 'SpinnersBarsRotateFade'},
    {component: SpinnersRingResize, name: 'SpinnersRingResize'},
  ];

  return (
    <>
      <head>
        <meta charset="utf-8" />
        <title>NR1E Qwik Icons</title>
        <style>
          {`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            html {
              scroll-behavior: smooth;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              padding: 2rem;
              background: #f5f5f5;
            }
            .header {
              text-align: center;
              margin-bottom: 2rem;
            }
            .logo {
              max-width: 300px;
              height: auto;
              margin-bottom: 1rem;
            }
            h1 {
              color: #333;
              margin: 0;
            }
            .nav-menu {
              max-width: 1400px;
              margin: 0 auto 2rem;
              padding: 1rem;
              background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            }
            .nav-menu ul {
              list-style: none;
              display: flex;
              gap: 1rem;
              justify-content: center;
              flex-wrap: wrap;
            }
            .nav-menu li {
              display: flex;
              align-items: center;
            }
            .nav-menu li:not(:last-child)::after {
              content: '•';
              margin-left: 1rem;
              color: #94a3b8;
            }
            .nav-menu a {
              color: #1e293b;
              text-decoration: none;
              padding: 0.5rem 1rem;
              border-radius: 6px;
              transition: all 0.2s ease;
              font-weight: 500;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
            }
            .nav-menu a:hover {
              background: #2563eb;
              color: white;
              transform: translateY(-1px);
            }
            .nav-menu .nav-count {
              font-size: 0.75rem;
              opacity: 0.7;
            }
            .icon-section {
              max-width: 1400px;
              margin: 0 auto 3rem;
            }
            .section-title {
              font-size: 1.75rem;
              font-weight: 600;
              color: #1e293b;
              margin-bottom: 1.5rem;
              padding: 1rem 1.5rem;
              background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
              border-left: 4px solid #2563eb;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.05);
              transition: all 0.3s ease;
            }
            .section-title:hover {
              background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
              transform: translateX(4px);
            }
            .section-title a {
              color: inherit;
              text-decoration: none;
              display: flex;
              align-items: center;
              gap: 0.5rem;
            }
            .section-title a:hover {
              color: #2563eb;
            }
            .section-title .count {
              font-size: 0.875rem;
              font-weight: 400;
              color: #64748b;
              margin-left: auto;
            }
            .icon-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
              gap: 1.5rem;
              max-width: 1400px;
              margin: 0 auto;
            }
            .logo-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
              grid-auto-rows: minmax(min-content, max-content);
              gap: 1.5rem;
              max-width: 1400px;
              margin: 0 auto;
              align-items: start;
            }
            .logo-wrapper svg {
              max-height: 60px;
            }
            .icon-card {
              background: white;
              border-radius: 8px;
              padding: 1.5rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0.75rem;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              transition: transform 0.2s, box-shadow 0.2s;
            }
            .icon-card:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 8px rgba(0,0,0,0.15);
            }
            .icon-card.dark-bg {
              background: #1e293b;
            }
            .icon-card.dark-bg .icon-name {
              color: #e2e8f0;
            }
            .icon-wrapper {
              width: 48px;
              height: 48px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .logo-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .icon-name {
              font-size: 0.75rem;
              color: #666;
              text-align: center;
              word-break: break-word;
            }
          `}
        </style>
      </head>
      <body>
        <div class="header">
          <img
            src="https://nr1e.com/images/logo-tagline.svg"
            alt="NR1E"
            class="logo"
          />
          <h1>Qwik Icons</h1>
        </div>

        <nav class="nav-menu">
          <ul>
            <li>
              <a href="#material-design-icons">
                <span>Material Design Icons</span>
                <span class="nav-count">({icons.length})</span>
              </a>
            </li>
            <li>
              <a href="#logos">
                <span>Logos</span>
                <span class="nav-count">({logoIcons.length})</span>
              </a>
            </li>
            <li>
              <a href="#brands">
                <span>Brand Icons</span>
                <span class="nav-count">({brandIcons.length})</span>
              </a>
            </li>
            <li>
              <a href="#brand-logos">
                <span>Brand Logos</span>
                <span class="nav-count">({brandLogos.length})</span>
              </a>
            </li>
            <li>
              <a href="#flags">
                <span>Flags</span>
                <span class="nav-count">({flagIcons.length})</span>
              </a>
            </li>
            <li>
              <a href="#spinners">
                <span>Spinners</span>
                <span class="nav-count">({spinnerIcons.length})</span>
              </a>
            </li>
          </ul>
        </nav>

        <section id="material-design-icons" class="icon-section">
          <h2 class="section-title">
            <a href="https://icon-sets.iconify.design/mdi/">
              <span>Material Design Icons</span>
              <span class="count">{icons.length} icons</span>
            </a>
          </h2>
          <div class="icon-grid">
            {icons.map((icon) => {
              const Icon = icon.component;
              return (
                <div key={icon.name} class="icon-card">
                  <div class="icon-wrapper">
                    <Icon size={48} />
                  </div>
                  <div class="icon-name">{icon.name}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="logos" class="icon-section">
          <h2 class="section-title">
            <a href="https://icon-sets.iconify.design/logos">
              <span>Logos</span>
              <span class="count">{logoIcons.length} icons</span>
            </a>
          </h2>
          <div class="icon-grid">
            {logoIcons.map((icon) => {
              const Icon = icon.component;
              return (
                <div key={icon.name} class="icon-card">
                  <div class="icon-wrapper">
                    <Icon size={48} />
                  </div>
                  <div class="icon-name">{icon.name}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="brands" class="icon-section">
          <h2 class="section-title">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span>Brand Icons</span>
              <span class="count">{brandIcons.length} icons</span>
            </div>
          </h2>
          <div class="icon-grid">
            {brandIcons.map((icon) => {
              const Icon = icon.component;
              const isDark =
                icon.name.toLowerCase().includes('white') ||
                icon.name.toLowerCase().includes('darkbg');
              return (
                <div
                  key={icon.name}
                  class={`icon-card${isDark ? ' dark-bg' : ''}`}
                >
                  <div class="icon-wrapper">
                    <Icon size={48} />
                  </div>
                  <div class="icon-name">{icon.name}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="brand-logos" class="icon-section">
          <h2 class="section-title">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span>Brand Logos</span>
              <span class="count">{brandLogos.length} logos</span>
            </div>
          </h2>
          <div class="logo-grid">
            {brandLogos.map((icon) => {
              const Icon = icon.component;
              const isDark =
                icon.name.toLowerCase().includes('white') ||
                icon.name.toLowerCase().includes('darkbg');
              return (
                <div
                  key={icon.name}
                  class={`icon-card${isDark ? ' dark-bg' : ''}`}
                >
                  <div class="logo-wrapper">
                    <Icon width={192} />
                  </div>
                  <div class="icon-name">{icon.name}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="flags" class="icon-section">
          <h2 class="section-title">
            <a href="https://icon-sets.iconify.design/flag">
              <span>Flags</span>
              <span class="count">{flagIcons.length} icons</span>
            </a>
          </h2>
          <div class="icon-grid">
            {flagIcons.map((icon) => {
              const Icon = icon.component;
              return (
                <div key={icon.name} class="icon-card">
                  <div class="icon-wrapper">
                    <Icon size={48} />
                  </div>
                  <div class="icon-name">{icon.name}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="spinners" class="icon-section">
          <h2 class="section-title">
            <a href="https://icon-sets.iconify.design/svg-spinners">
              <span>Spinners</span>
              <span class="count">{spinnerIcons.length} icons</span>
            </a>
          </h2>
          <div class="icon-grid">
            {spinnerIcons.map((icon) => {
              const Icon = icon.component;
              return (
                <div key={icon.name} class="icon-card">
                  <div class="icon-wrapper">
                    <Icon size={48} />
                  </div>
                  <div class="icon-name">{icon.name}</div>
                </div>
              );
            })}
          </div>
        </section>
      </body>
    </>
  );
});
