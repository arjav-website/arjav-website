import { createFileRoute } from "@tanstack/react-router";

import { LegalList, LegalPage, LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Arjav Capital" },
      {
        name: "description",
        content:
          "How Arjav Investment Advisors LLP collects, uses, shares and protects personal information through arjavcapital.com.",
      },
      { property: "og:title", content: "Privacy Policy — Arjav Capital" },
      {
        property: "og:description",
        content:
          "Arjav Capital's privacy practices: information collected, legal basis, your rights, retention and grievance redressal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Effective April 1, 2026. This policy applies to information collected by Arjav Investment Advisors LLP and its subsidiaries or affiliated companies (“Arjav”, “we”, “us” or “our”) on our website as well as otherwise. Your use of the Website signifies acceptance of the terms of this Policy."
    >
      <LegalSection heading="Definitions">
        <p>
          “Personally Identifiable Information” or “PII” means any information that relates to a
          natural person, which, either directly or indirectly, in combination with other
          information available or likely to be available with a corporate body, is capable of
          identifying such person.
        </p>
      </LegalSection>

      <LegalSection heading="The Information We Collect">
        <h3 className="font-semibold text-ink">1. Information you provide directly to us</h3>
        <p>
          We do not collect Personally Identifiable Information about you, unless you choose to fill
          out your information on this website through specific provided forms or otherwise provide
          it to us directly. In general, you may browse our Website without providing any Personally
          Identifiable Information about yourself.
        </p>
        <h3 className="font-semibold text-ink">2. Information we collect from third parties</h3>
        <p>
          We may also collect PII about you from third parties, such as a CV received from a
          recruiting firm, fit-for-work information received from a physician, or background
          information received from a background check provider. We also collect information from
          business partners and vendors to support our provision of investment services. The data we
          collect from such third parties is often in aggregate form and not individually
          identifiable, though at times may include personal data. For example, we may collect
          information from providers of market surveys and vendors who aggregate publicly available
          information. The extent to which we may obtain information from such sources is governed
          by the third-party source.
        </p>
        <h3 className="font-semibold text-ink">
          3. Information that is passively or automatically collected
        </h3>
        <p>
          We do automatically collect certain information when you visit our website such as IP
          addresses and other anonymous data including the type of operating system, the type of
          browser you are using, the time and duration of site visits and the pages visited, to
          provide better usability and a personalised experience.
        </p>
      </LegalSection>

      <LegalSection heading="How We Normally Use Information About You">
        <p>
          We will process your PII for our legitimate business interests. We may use your PII for
          the following purposes:
        </p>
        <LegalList
          items={[
            "For the purposes for which you provided it to us or a vendor;",
            "To establish and maintain contact with you;",
            "For rendering you services;",
            "To provide the features and services available through the Website;",
            "To provide and improve our investment services, including evaluating potential investments and managing existing investments;",
            "To respond to your requests or to send you other communications;",
            "To process and respond to your inquiries or to request your feedback;",
            "To improve the content and features of the Website;",
            "For recruiting purposes;",
            "To enforce the legal terms that govern your use of the Website;",
            "To administer and troubleshoot the Website.",
          ]}
        />
        <p>
          Further, we may use your PII solely to respond to your inquiry or to process an
          application form you have completed on our website, or to respond to any legal process or
          as required by law in response to any court order, subpoena or a law enforcement agency,
          or to take action against any illegal activity and to address any potential threat to the
          physical safety of a person.
        </p>
      </LegalSection>

      <LegalSection heading="Information Sharing">
        <p>
          We may share your PII with any of our subsidiaries or affiliated entities and our business
          partners, service vendors or authorised third-party agents located in any part of the
          world for the purposes mentioned above. We will take measures to safeguard the transfer of
          your PII to third parties in a manner that complies with the applicable data protection
          laws. You acknowledge and agree that we may disclose your PII, if required to do so by law
          or in a good faith belief that such disclosure is permitted by this Policy or reasonably
          necessary or appropriate for any of the following reasons: (a) to comply with legal
          process; (b) to enforce this Policy, our Terms of Use, or other contracts with you,
          including investigation of potential violations thereof; (c) to respond to claims that any
          content violates the rights of third parties; and/or (d) to protect our rights and
          property and those of our advisory business units, agents, affiliates, and investors. This
          includes exchanging information with other companies and organisations for fraud
          protection, spam/malware prevention, and similar purposes.
        </p>
      </LegalSection>

      <LegalSection heading="Legal Basis">
        <p>
          To the extent needed under any applicable laws, our legal grounds for processing your
          personal data are as follows:
        </p>
        <p>
          <strong className="text-ink">1. Legitimate Interests:</strong> In many cases, we handle
          personal data on the ground that it furthers our legitimate interests in commercial
          activities, such as the following:
        </p>
        <LegalList
          items={[
            "Providing our investment services",
            "Providing and maintaining our Site",
            "Analysing and improving our business and Site",
            "Communications, including responding to your inquiries about our services",
            "Addressing information security needs and protecting our investors, and others",
            "Managing legal issues",
          ]}
        />
        <p>
          <strong className="text-ink">2. Legal Compliance:</strong> We need to use and disclose
          personal data in certain ways to comply with our legal obligations.
        </p>
        <p>
          <strong className="text-ink">3. Honour Our Contractual Commitments to You:</strong> Much
          of our processing of personal data is to meet our contractual obligations to our
          investors, or to take steps at investors&rsquo; request in anticipation of entering into a
          contract with them.
        </p>
        <p>
          <strong className="text-ink">4. Protection of Interests:</strong> It is necessary to
          protect your interests or those of someone else.
        </p>
      </LegalSection>

      <LegalSection heading="Consent">
        <p>
          Where we collect personal data from a third party that has obtained your consent, we may
          process your personal data on the basis of consent.
        </p>
      </LegalSection>

      <LegalSection heading="Your Rights">
        <p>
          The EU&rsquo;s General Data Protection Regulation grants the following rights to EU data
          subjects:
        </p>
        <LegalList
          items={[
            "Request access to your PII and the processing activities on the same.",
            "Request that your PII is rectified if it is inaccurate or incomplete.",
            "Request erasure of your PII in certain circumstances.",
            "Request restriction of the processing of your PII in certain circumstances.",
            "Right to object to direct marketing.",
            "Right not to be subject to automated decision-making and profiling.",
            "Receive your PII provided to us as a controller in a structured, commonly used and machine-readable format in certain circumstances.",
            "Lodge a complaint with a supervisory authority.",
            "Withdraw your consent provided at any time by contacting us.",
          ]}
        />
        <p>
          To the extent these apply to you, to exercise the rights outlined above in respect of your
          PII, please use the contact details available in the contact section below. We will
          endeavour to respond to you within the appropriate time as required by law.
        </p>
      </LegalSection>

      <LegalSection heading="Right to Opt Out and Withdrawal">
        <p>
          We respect your privacy considerations and hence provide you an option to refuse to
          provide your PII or information sought to be collected. You also have the option to
          subscribe/opt-in to receive newsletters, new alerts and marketing content. You can always
          opt out of such options by writing to{" "}
          <a className="text-brand-violet underline" href="mailto:info@arjavcapital.com">
            info@arjavcapital.com
          </a>{" "}
          or clicking the “unsubscribe” link at the bottom of an email newsletter received by you
          from us.
        </p>
      </LegalSection>

      <LegalSection heading="Social Networking">
        <p>
          We may maintain a presence on social networking and blogging platforms, some of which are
          operated by third parties, such as LinkedIn, Facebook, and X. This Policy applies to our
          use of information you submit to us there, but it does not apply to what those third-party
          platforms do with your information. Those platforms have their own privacy policies, and
          we encourage you to read them.
        </p>
      </LegalSection>

      <LegalSection heading="Authenticity">
        <p>
          We shall not be responsible for the authenticity of the information and it is your duty to
          ensure that the information provided by you about yourself and any other individual is
          accurate and updated. If a user provides any information that is untrue, inaccurate, not
          current or incomplete (or becomes untrue, inaccurate, not current or incomplete), or we
          have reasonable grounds to suspect that such information is untrue, inaccurate, not
          current or incomplete, we have the right to suspend or terminate our relationship at our
          sole discretion.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and Other Technologies">
        <p>
          A cookie is a text-only string of information that a website transfers to the cookie file
          of the browser on your computer&rsquo;s hard disk so that the website can remember who you
          are. The Website may use temporary cookies to store certain data (that is not sensitive
          personal data or information) that is used by us for maintenance of the Website and its
          features, and for administration of your account. In the course of optimising services, we
          may allow authorised third parties to place or recognise a unique cookie on your browser.
          We do not store personally identifiable information in the cookies.
        </p>
      </LegalSection>

      <LegalSection heading="Data Storage and Retention">
        <p>
          We shall retain your PII pursuant to the business purposes and in line with our retention
          policies. Your PII is stored in databases located on the servers of the cloud-based
          database management services that we engage. We will hold your information for as long as
          necessary to fulfil the purposes set forth in this Policy or as long as we are legally
          required or permitted to do so. Information may persist in copies made for backup and
          business continuity purposes for additional time.
        </p>
      </LegalSection>

      <LegalSection heading="Protection of Minors’ Information">
        <p>
          The website is not directed to children under the age of eighteen (18). We do not
          knowingly solicit PII from or market to anyone under eighteen (18) years of age. If you
          believe that we have received information from a minor, please notify us immediately and
          we will ensure that reasonable efforts will be made by us to delete such information from
          our database.
        </p>
      </LegalSection>

      <LegalSection heading="Links to Third Party Websites">
        <p>
          Our website may contain links to other sites including social media sites, whose
          information practices may be different from ours. You should read such third-party
          websites&rsquo; privacy notices; we do not control those sites or their privacy practices.
          We do not endorse or make any representations about third-party websites.
        </p>
      </LegalSection>

      <LegalSection heading="Our Commitment to Security">
        <p>
          We utilise appropriate physical, technical and administrative procedures to safeguard the
          information we collect. However, we cannot and do not guarantee that these measures will
          prevent every unauthorised attempt to access, use, or disclose your information since,
          despite our efforts, no Internet and/or other electronic transmissions can be completely
          secure.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this Policy">
        <p>
          We will continue to evaluate this Policy, and we may make changes to the Policy
          accordingly. Any changes will be posted here and you should check this page periodically
          for updates.
        </p>
      </LegalSection>

      <LegalSection heading="Grievance Redressal">
        <p>
          Any grievance or complaint, in relation to processing of information, should be sent to
          Arjav Investment Advisors LLP in writing to the following contact email ID. Grievances
          shall be redressed as expeditiously as possible.
        </p>
        <p>
          <strong className="text-ink">Name:</strong> Grievance Redressal Officer
          <br />
          <strong className="text-ink">Primary Email Address:</strong>{" "}
          <a className="text-brand-violet underline" href="mailto:info@arjavcapital.com">
            info@arjavcapital.com
          </a>
          <br />
          <strong className="text-ink">Address:</strong> 301, 3rd Floor, Peninsula Chambers,
          Ganpatrao Kadam Marg, Lower Parel (W), Mumbai, Maharashtra - 400013
        </p>
      </LegalSection>
    </LegalPage>
  );
}
