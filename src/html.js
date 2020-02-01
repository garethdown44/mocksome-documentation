import React from "react"
import PropTypes from "prop-types"
import config from "../config";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
        
          {/* BEGIN: Google Analytics Tracking Code */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-46550902-2"></script>
          <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-46550902-2');
            `
          }}
          />
          {/* END: Google Analytics Tracking Code */}

          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {config.siteMetadata.ogImage ? 
            (<meta property="og:image" content={config.siteMetadata.ogImage} />) : null
          }
          <meta property="twitter:card" content="summary_large_image" />
          {config.siteMetadata.ogImage ? 
            (<meta property="twitter:image" content={config.siteMetadata.ogImage} />) : null
          }
          {config.siteMetadata.favicon ?
            (<link rel="shortcut icon" type="image/svg" href={config.siteMetadata.favicon} />) : null
          }
          <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
          <script
  			  src="https://code.jquery.com/jquery-3.3.1.min.js"
  			  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  			  crossOrigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous"></script>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
          dangerouslySetInnerHTML={{
            __html: `
            $(document).on('click','.navbar-collapse.in',function(e) {
              if( $(e.target).is('a') ) {
                $(this).collapse('hide');
              }
            });
            `
          }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.doorbellOptions = {
                "id": "11278",
                "appKey": "nHkiH7SGuhlHx8sT92Tgp4kTdMO7e2paJQjXw9BGTCGMUeq1xs92Drh73eBb9kAc"
            };
            (function(w, d, t) {
                var hasLoaded = false;
                function l() { if (hasLoaded) { return; } hasLoaded = true; window.doorbellOptions.windowLoaded = true; var g = d.createElement(t);g.id = 'doorbellScript';g.type = 'text/javascript';g.async = true;g.src = 'https://embed.doorbell.io/button/'+window.doorbellOptions['id']+'?t='+(new Date().getTime());(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(g); }
                if (w.attachEvent) { w.attachEvent('onload', l); } else if (w.addEventListener) { w.addEventListener('load', l, false); } else { l(); }
                if (d.readyState == 'complete') { l(); }
            }(window, document, 'script'));
              `
            }}
          />
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
