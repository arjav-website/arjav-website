import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Arjav Capital" },
      {
        name: "description",
        content:
          "Terms governing access to and use of arjavcapital.com, owned and operated by Arjav Investment Advisors LLP.",
      },
      { property: "og:title", content: "Terms of Use — Arjav Capital" },
      {
        property: "og:description",
        content:
          "Intellectual property, disclaimers, limitation of liability and governing law for the Arjav Capital website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsOfUse,
});

const clauses = [
  "By using the Website, the User agrees to follow and be bound by the following terms and conditions, and these terms and conditions may be revised or modified at any time by Us without any notice to the User.",
  "The Website is owned by Us. All content present on this Website is our exclusive property including all the software, text, images, graphics, video and audio used on this Website.",
  "The Arjav name and logo are trademarks that belong to and are owned by Us. These trademarks may not be used in any manner without prior written consent from Us.",
  "No material from this Website may be copied, modified, reproduced, republished, uploaded, transmitted, posted or distributed in any form without prior written permission from Us. All rights not expressly granted herein are reserved. Unauthorised use of the materials appearing on this Website may violate copyright, trademark and other applicable laws, and could result in criminal or civil penalties. We may monitor access to the Website.",
  "Any reference to Assets Under Management or AUM used on the Website reflects the combined Assets Under Management of Arjav Investment Advisors LLP and its affiliate investment advisors as of the close of the prior calendar quarter.",
  "The portfolio companies shown throughout the Website are intended to provide an indicative list of active investments by business but may not always reflect the most up to date composition of our portfolio.",
  "We may terminate the User's access to the Website at any time for any reason. The provisions regarding disclaimer of warranty, accuracy of information, and indemnification shall survive such termination.",
  "We make no warranties, express or implied, including, without limitation, those of merchantability and fitness for a particular purpose, with respect to any information, data, statements or products made available on the Website.",
  "The Website, and all content, materials, information, software, products and services provided on the Website, are provided on an \u201Cas is\u201D and \u201Cas available\u201D basis.",
  "The User agrees not to: (i) interfere or attempt to interfere with the functioning of the Website or any activity being conducted on the Website; (ii) exploit any of the content commercially or otherwise copy, distribute, delete or modify any portion of the Website; (iii) violate any law, regulation, rule or the intellectual property or contractual rights of others, or attempt to violate the security of the Website or use or gain access to the identities, information or computers of others through the Website; and (iv) transmit any virus, worm or any other system interference through the Website.",
  "Certain individuals may be identified on the Website as \u2018partner\u2019 or \u2018director\u2019. Please note that such titles are used as a part of business and commercial usage that is customary in the private equity industry. Such titles are not intended to indicate that any such individual is actually a partner of any partnership or director of any company as those terms are used under law.",
  "We shall have no responsibility for any damage to the User's computer system or loss of data that results from the download of any content, materials or information from the Website.",
  "We may unilaterally change or discontinue any aspect of the Website at any time, including its content or features.",
  "The information contained in the Website has been obtained from sources believed to be reliable. Arjav Investment Advisors LLP disclaims all warranties as to the accuracy, completeness, or adequacy of such information.",
  "We will not be liable for damages of any kind, including without limitation, direct, incidental or consequential damages (including, but not limited to, damages for lost profits, business interruption and loss of programs or information) arising out of the use of or inability to use the Website, or any information provided on the Website, or for any other reason whatsoever.",
  "The User agrees to indemnify, defend and hold Arjav Investment Advisors LLP harmless from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, arising out of or relating to any misuse by the User of the content and services provided on the Website.",
  "The Website provides links to websites and access to content, products, and services from third parties, including users, advertisers, affiliates, and sponsors of the Website. The User agrees that Arjav Investment Advisors LLP is not responsible for the availability of, and content provided on, third-party websites. The User is requested to peruse the policies posted by other websites regarding privacy and other topics before use. We are not responsible for third-party content accessible through the Website, including opinions, advice, statements, and advertisements, and the User shall bear all risks associated with the use of such content. We are not responsible for any loss or damage of any sort the User may incur from dealing with any third party.",
  "The User acknowledges and confirms that by accessing the Website, the User is seeking information relating to the organisation on their own accord and that there has been no form of solicitation, advertisement or inducement by the organisation. Any part of the content is not, and should not be construed as, an offer or solicitation to buy or sell any securities or make any investments or any products. No material/information provided on this website should be construed as investment advice. Any action on the User's part on the basis of the said content is at their own risk and responsibility.",
  "We make no warranty that: (a) the Website will meet your requirements; (b) the Website will be available on an uninterrupted, timely, secure, or error-free basis; (c) the results that may be obtained from the use of the Website or any services offered through the Website will be accurate or reliable.",
  "In case any provision of the Terms of Use shall be invalid, illegal or unenforceable, the validity, legality or enforceability of the remaining provisions shall not in any way be affected or impaired thereby and such provision shall be ineffective only to the extent of such invalidity, illegality or unenforceability.",
  "The Terms of Use shall be governed by and construed in accordance with the laws of India. All disputes arising out of or in connection with the Terms of Use or the Website shall be submitted to the exclusive jurisdiction of the courts of Mumbai, India.",
];

function TermsOfUse() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="This website is owned and operated by Arjav Investment Advisors LLP (“Arjav”, “we”, “us” or “our”). The term “User” shall mean any person who is browsing the Website. These Terms of Use govern the User’s access to and use of the Website. The User agrees to be legally bound by the Terms of Use by accessing or using the Website. In case the User does not agree with the Terms of Use for any reason, please do not use the Website."
    >
      <ol className="space-y-6">
        {clauses.map((clause, i) => (
          <li key={i} className="flex gap-4">
            <span className="mt-[0.15rem] shrink-0 text-[0.85rem] font-bold text-brand-violet">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{clause}</span>
          </li>
        ))}
      </ol>
    </LegalPage>
  );
}
