

import React, { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";

// --- Placeholder Data & Constants ---

const LOGO_PLACEHOLDER_URL =
  "https://placehold.co/100x48/030712/ffffff?text=CS+Logo";

const termsContent = `
CRYSTAL SOLUTIONS – TERMS & CONDITIONS
Website: https://crystalsolutions.com.pk/
Email: mail@crystalsolutions.com.pk
Phone: 0304-4770075
Effective Date: November 01, 2025

1. Introduction
These Terms & Conditions (“Terms”) govern the use of POS software, mobile applications, and related services provided by Crystal Solutions.
By subscribing to or using our services, you agree to these Terms.

2. Services Provided
Crystal Solutions offers business management solutions including POS systems, mobile applications, cloud services, and technical support. Services require a one-time setup fee followed by a monthly subscription.

3. Free Trial Period
We may offer a free trial period (typically 1–2 months) for new clients. During this period, clients may evaluate the software with no charges applied. After the trial, monthly billing automatically begins.

4. Payments and Billing
A one-time setup fee is required at the start. Monthly service fees are due at the end of each billing cycle. Payments must be made through approved payment methods. Non-payment may result in service interruption.

5. No Refund Policy
All payments made to Crystal Solutions are final and non-refundable. Clients have sufficient time during the free trial to evaluate whether the service meets their needs.

6. Invoicing
Invoices are currently issued manually. Automated invoicing and billing will be enabled once payment gateway integration is complete.

7. User Responsibilities
Clients must ensure that login credentials, POS devices, and business data are used securely and lawfully. Unauthorized access or misuse may result in account suspension.

8. Limitation of Liability
Crystal Solutions is not responsible for indirect or consequential damages resulting from the use of our services. Our maximum liability is limited to the amount paid in the most recent billing cycle.

9. Modifications to the Terms
We reserve the right to update or modify these Terms at any time. The latest version will always be available on our website.

10. Contact Information
For support or inquiries:
Email: mail@crystalsolutions.com.pk
Phone: 0304-4770075
`; 

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const parseTerms = (text) => {
  const lines = text
    .trim()
    .split("\n")
    .filter((line) => line.trim() !== "");

  const headerLines = lines.slice(0, 5);
  const bodyLines = lines.slice(5);

  const metadata = {
    title: headerLines[0] || "Terms & Conditions",
    website: headerLines[1]?.replace("Website: ", "").trim(),
    email: headerLines[2]?.replace("Email: ", "").trim(),
    phone: headerLines[3]?.replace("Phone: ", "").trim(),
    effectiveDate: headerLines[4]?.replace("Effective Date: ", "").trim(),
  };

  const sections = [];
  let currentSection = null;

  bodyLines.forEach((line) => {
    const sectionMatch = line.match(/^(\d+\.\s+)(.+)/);

    if (sectionMatch) {
      if (currentSection) sections.push(currentSection);

      const title = sectionMatch[2].trim();
      currentSection = {
        originalNumber: sectionMatch[1].trim(),
        title,
        id: slugify(title),
        content: [],
      };
    } else if (currentSection && line.trim()) {
      currentSection.content.push(line);
    }
  });

  if (currentSection) sections.push(currentSection);

  const introduction =
    sections.length > 0 && sections[0].title === "Introduction"
      ? sections[0]
      : null;

  const formalSectionsToRenumber = introduction ? sections.slice(1) : sections;

  const numberedSections = formalSectionsToRenumber.map((section, index) => ({
    ...section,
    number: `${index + (introduction ? 1 : 0) + 1}.`,
  }));

  const finalSections = introduction
    ? [{ ...introduction, number: "1." }, ...numberedSections]
    : numberedSections;

  return { metadata, sections: finalSections };
};

const parsedData = parseTerms(termsContent);

const TableOfContents = ({ sections, activeId }) => {
  const otherSections = sections.filter(
    (s) => s.title !== "Contact Information"
  );

  const contactId = slugify("contact-information-wrapper");

  return (
    <div className="sticky top-[100px] hidden lg:block w-full max-w-xs xl:max-w-sm pr-4">
      <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">
        Table of Contents
      </h3>

      <ul className="space-y-2">
        {otherSections.map((item, index) => (
          <li key={index} className="text-sm">
            <a
              href={`#${item.id}`}
              className={`block py-1 transition-colors duration-200 ${
                activeId === item.id
                  ? "font-bold text-blue-700 border-l-4 border-blue-700 pl-3 -ml-3"
                  : "text-gray-600 hover:text-gray-900 pl-3"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="font-semibold text-gray-700 mr-1">
                {item.number}
              </span>
              {item.title}
            </a>
          </li>
        ))}

        <li key="contact-info" className="text-sm">
          <a
            href={`#${contactId}`}
            className={`block py-1 transition-colors duration-200 ${
              activeId === contactId
                ? "font-bold text-blue-700 border-l-4 border-blue-700 pl-3 -ml-3"
                : "text-gray-600 hover:text-gray-900 pl-3"
            }`}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById(contactId)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Information
          </a>
        </li>
      </ul>
    </div>
  );
};

const scrollbarHideStyles = `
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
`;

const TermsAndConditionsComponent = () => {
  const [activeId, setActiveId] = useState(parsedData.sections[0]?.id || "");
  const contentRef = useRef(null);
  const data = parsedData;

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);
        if (intersectingEntry) setActiveId(intersectingEntry.target.id);
      },
      {
        root: contentRef.current,
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0,
      }
    );

    const sectionTargets = contentRef.current.querySelectorAll("h2[id]");

    const contactId = slugify("contact-information-wrapper");
    const contactTarget = contentRef.current.querySelector(`#${contactId}`);

    const allTargets = [...Array.from(sectionTargets), contactTarget].filter(
      (el) => el
    );

    allTargets.forEach((target) => observer.observe(target));

    return () => allTargets.forEach((target) => observer.unobserve(target));
  }, []);

  const allSections = data.sections;

  const contactInfo = allSections.find(
    (s) => s.title === "Contact Information"
  );

  const mainSections = allSections.filter(
    (s) => s.title !== "Contact Information"
  );

  const contactWrapperId = slugify("contact-information-wrapper");

  return (
    <>
      {/* Scrollbar Hide Styles */}
      <style dangerouslySetInnerHTML={{ __html: scrollbarHideStyles }} />

      <div className="bg-white py-12 md:py-16 h-screen overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex">
          {/* LEFT SIDEBAR */}
          <div className="w-full lg:w-1/4">
            <TableOfContents sections={data.sections} activeId={activeId} />
          </div>

          {/* RIGHT CONTENT AREA */}
          <div
            ref={contentRef}
            className="w-full lg:w-3/4 max-w-4xl mx-auto lg:mx-0 lg:pl-8 h-screen overflow-y-auto pr-4 hide-scrollbar"
          >
            <div className="mb-10 pt-4 pb-6">
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
                {data.metadata.title.replace("CRYSTAL SOLUTIONS – ", "")}
              </h1>

              <p className="text-sm md:text-base text-gray-500">
                Last Updated:
                <span className="font-semibold text-gray-700">
                  {data.metadata.effectiveDate}
                </span>
              </p>
            </div>

            {mainSections.map((section, index) => (
              <div key={index} className="mb-10">
                <h2
                  id={section.id}
                  className="text-xl md:text-xl font-bold text-gray-900 mb-4 tracking-wide pt-4 scroll-mt-[100px]"
                >
                  <span className="text-blue-800 mr-2">{section.number}</span>
                  <span className="text-blue-800">{section.title}</span>
                </h2>

                <div className="text-md leading-relaxed space-y-4 text-gray-700">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact Information Section */}
            {contactInfo && (
              <div
                className="mt-12 pt-6 border-t border-gray-200 scroll-mt-[100px] bg-white"
                id={contactWrapperId}
              >
                <h2 className="text-xl md:text-xl font-bold text-gray-900 mb-3 pt-4">
                  <span className="text-blue-700 mr-2">
                    {contactInfo.number}
                  </span>
                  {contactInfo.title}
                </h2>

                <div className="mt-2 text-md font-medium space-y-1 text-gray-700">
                  <p>For support or inquiries:</p>

                  <p className="text-blue-700">
                    Email:
                    <a href={`mailto:${data.metadata.email}`}>
                      {data.metadata.email}
                    </a>
                  </p>

                  <p className="text-blue-700">
                    Phone:
                    <a href={`tel:${data.metadata.phone}`}>
                      {data.metadata.phone}
                    </a>
                  </p>
                </div>
              </div>
            )}
            <div className="h-48 md:h-96"></div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          className="fixed bottom-6 right-6 p-3 bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-800 transition-colors z-50"
          onClick={() =>
            contentRef.current.scrollTo({ top: 0, behavior: "smooth" })
          }
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </>
  );
};

export default TermsAndConditionsComponent;
