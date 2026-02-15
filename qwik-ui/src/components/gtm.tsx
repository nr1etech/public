import {component$} from '@builder.io/qwik';

export interface GtmProps {
  id: string;
}

/**
 * Sets up Google Tag Manager. This should go at the top of the <head> element.
 */
export const GtmHead = component$((props: GtmProps) => {
  return (
    <script
      dangerouslySetInnerHTML={`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer', ${props.id});`}
    ></script>
  );
});

/**
 * Sets up Google Tag Manager. This should go at after the opening <body> tag.
 */
export const GtmBody = component$((props: GtmProps) => {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${props.id}`}
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>
    </noscript>
  );
});
