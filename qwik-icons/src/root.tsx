import {component$} from '@builder.io/qwik';
import {
  MdiAddCircle,
  MdiAddCircleOutline,
  MdiAlert,
  MdiAlertBoxOutline,
  MdiArrowBackCircle,
  MdiArrowForwardCircle,
  MdiBrain,
  MdiCheckCircle,
  MdiCheckCircleOutline,
  MdiChevronDown,
  MdiChevronUp,
  MdiClose,
  MdiCloudDownload,
  MdiCloudDownloadOutline,
  MdiCloudLockOutline,
  MdiContentCopy,
  MdiCreditCardOutline,
  MdiDangerous,
  MdiDeleteOutline,
  MdiDevTo,
  MdiDollar,
  MdiDownload,
  MdiEmail,
  MdiEmailOutline,
  MdiEmoticonDevil,
  MdiErrorOutline,
  MdiGearOutline,
  MdiGmail,
  MdiGoogle,
  MdiGoogleDrive,
  MdiHamburgerMenu,
  MdiInformationSlabBox,
  MdiInformationSlabBoxOutline,
  MdiInformationVariantBoxOutline,
  MdiInvite,
  MdiInvoiceTextEditOutline,
  MdiKeyVariant,
  MdiKeyboardReturn,
  MdiLinkVariant,
  MdiLock,
  MdiLogin,
  MdiLogout,
  MdiMicrosoft,
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
  MdiUser,
  MdiUserOutline,
  MdiUsersOutline,
  MdiWrenchOutline,
} from './index';

export default component$(() => {
  const icons = [
    {component: MdiAddCircle, name: 'MdiAddCircle'},
    {component: MdiAddCircleOutline, name: 'MdiAddCircleOutline'},
    {component: MdiAlert, name: 'MdiAlert'},
    {component: MdiAlertBoxOutline, name: 'MdiAlertBoxOutline'},
    {component: MdiArrowBackCircle, name: 'MdiArrowBackCircle'},
    {component: MdiArrowForwardCircle, name: 'MdiArrowForwardCircle'},
    {component: MdiBrain, name: 'MdiBrain'},
    {component: MdiCheckCircle, name: 'MdiCheckCircle'},
    {component: MdiCheckCircleOutline, name: 'MdiCheckCircleOutline'},
    {component: MdiChevronDown, name: 'MdiChevronDown'},
    {component: MdiChevronUp, name: 'MdiChevronUp'},
    {component: MdiClose, name: 'MdiClose'},
    {component: MdiCloudDownload, name: 'MdiCloudDownload'},
    {component: MdiCloudDownloadOutline, name: 'MdiCloudDownloadOutline'},
    {component: MdiCloudLockOutline, name: 'MdiCloudLockOutline'},
    {component: MdiContentCopy, name: 'MdiContentCopy'},
    {component: MdiCreditCardOutline, name: 'MdiCreditCardOutline'},
    {component: MdiDangerous, name: 'MdiDangerous'},
    {component: MdiDeleteOutline, name: 'MdiDeleteOutline'},
    {component: MdiDevTo, name: 'MdiDevTo'},
    {component: MdiDollar, name: 'MdiDollar'},
    {component: MdiDownload, name: 'MdiDownload'},
    {component: MdiEmail, name: 'MdiEmail'},
    {component: MdiEmailOutline, name: 'MdiEmailOutline'},
    {component: MdiEmoticonDevil, name: 'MdiEmoticonDevil'},
    {component: MdiErrorOutline, name: 'MdiErrorOutline'},
    {component: MdiGearOutline, name: 'MdiGearOutline'},
    {component: MdiGmail, name: 'MdiGmail'},
    {component: MdiGoogle, name: 'MdiGoogle'},
    {component: MdiGoogleDrive, name: 'MdiGoogleDrive'},
    {component: MdiHamburgerMenu, name: 'MdiHamburgerMenu'},
    {component: MdiInformationSlabBox, name: 'MdiInformationSlabBox'},
    {
      component: MdiInformationSlabBoxOutline,
      name: 'MdiInformationSlabBoxOutline',
    },
    {
      component: MdiInformationVariantBoxOutline,
      name: 'MdiInformationVariantBoxOutline',
    },
    {component: MdiInvite, name: 'MdiInvite'},
    {component: MdiInvoiceTextEditOutline, name: 'MdiInvoiceTextEditOutline'},
    {component: MdiKeyVariant, name: 'MdiKeyVariant'},
    {component: MdiKeyboardReturn, name: 'MdiKeyboardReturn'},
    {component: MdiLinkVariant, name: 'MdiLinkVariant'},
    {component: MdiLock, name: 'MdiLock'},
    {component: MdiLogin, name: 'MdiLogin'},
    {component: MdiLogout, name: 'MdiLogout'},
    {component: MdiMicrosoft, name: 'MdiMicrosoft'},
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
    {component: MdiUser, name: 'MdiUser'},
    {component: MdiUserOutline, name: 'MdiUserOutline'},
    {component: MdiUsersOutline, name: 'MdiUsersOutline'},
    {component: MdiWrenchOutline, name: 'MdiWrenchOutline'},
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
            .icon-section {
              max-width: 1400px;
              margin: 0 auto 3rem;
            }
            .section-title {
              font-size: 1.5rem;
              color: #333;
              margin-bottom: 1.5rem;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid #2563eb;
            }
            .icon-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
              gap: 1.5rem;
              max-width: 1400px;
              margin: 0 auto;
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
            .icon-wrapper {
              width: 48px;
              height: 48px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #2563eb;
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

        <section class="icon-section">
          <h2 class="section-title">
            Material Design Icons ({icons.length} icons)
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
      </body>
    </>
  );
});
