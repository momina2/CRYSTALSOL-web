import React, { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";

// --- Placeholder Data & Constants ---

// The content from your uploaded file, formatted for parsing
const refundPolicyContent = `
CRYSTAL SOLUTIONS – REFUND POLICY
Website: https://crystalsolutions.com.pk/
Email: mail@crystalsolutions.com.pk
Phone: 0304-4770075
Effective Date: November 01, 2025

1. No Refund Policy
Crystal Solutions does not offer refunds for any fees paid for POS software, mobile applications, or related services.

2. Free Trial Evaluation
New clients are provided with a free trial period (typically 1–2 months). This period allows customers ample time to evaluate whether the software meets their business needs. Therefore, all subsequent payments are non-refundable.

3. Non-Refundable Charges
The following payments are strictly non-refundable:
- One-time setup fees
- Monthly subscription fees
- Service upgrade charges
- Customization or integration fees

4. Billing Responsibility
Clients are responsible for paying monthly charges on time to avoid service interruption.

5. Contact Information
Email: mail@crystalsolutions.com.pk
Phone: 0304-4770075
`;

// Helper function to create URL-friendly slugs
const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

// Parser function to structure the policy text
const parsePolicy = (text) => {
  const lines = text
    .trim()
    .split("\n")
    .filter((line) => line.trim() !== "");

  const headerLines = lines.slice(0, 5);
  const bodyLines = lines.slice(5);

  const metadata = {
    title: headerLines[0] || "Refund Policy",
    website: headerLines[1]?.replace("Website: ", "").trim(),
    email: headerLines[2]?.replace("Email: ", "").trim(),
    phone: headerLines[3]?.replace("Phone: ", "").trim(),
    effectiveDate: headerLines[4]?.replace("Effective Date: ", "").trim(),
  };

  const sections = [];
  let currentSection = null;
  let inList = false;

  bodyLines.forEach((line) => {
    const sectionMatch = line.match(/^(\d+\.\s+)(.+)/);
    const listItemMatch = line.match(/^(-|\*)\s*(.+)/);

    if (sectionMatch) {
      if (currentSection) sections.push(currentSection);

      const title = sectionMatch[2].trim();
      currentSection = {
        originalNumber: sectionMatch[1].trim(),
        title,
        id: slugify(title),
        content: [],
      };
      inList = false;
    } else if (currentSection && listItemMatch) {
      // Handle list items (starting with - or *)
      if (!inList) {
        currentSection.content.push({ type: "list", items: [] });
        inList = true;
      }
      // Add item to the last list in content
      const lastContent =
        currentSection.content[currentSection.content.length - 1];
      if (lastContent && lastContent.type === "list") {
        lastContent.items.push(listItemMatch[2].trim());
      }
    } else if (currentSection && line.trim()) {
      // Handle regular paragraph content
      if (inList) inList = false;

      // Add as a paragraph object
      currentSection.content.push({ type: "paragraph", text: line });
    }
  });

  if (currentSection) sections.push(currentSection);

  // Renumbering logic (if needed, simplified here as the source is already numbered)
  const numberedSections = sections.map((section, index) => ({
    ...section,
    number: `${index + 1}.`,
  }));

  return { metadata, sections: numberedSections };
};

const parsedData = parsePolicy(refundPolicyContent);

// --- Components ---

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

const RefundPolicyComponent = () => {
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
        rootMargin: "-100px 0px -80% 0px", // Adjusted to be more aggressive
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

  // Function to render content item (paragraph or list)
  const renderContent = (item, index) => {
    if (item.type === "paragraph") {
      return <p key={index}>{item.text}</p>;
    }
    if (item.type === "list") {
      return (
        <ul key={index} className="list-disc pl-5 space-y-2 mt-2">
          {item.items.map((listItem, i) => (
            <li key={i}>{listItem}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

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
                Effective Date:
                <span className="font-semibold text-gray-700">
                  {" "}
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
                  {section.content.map(renderContent)}
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
                  <span className="text-blue-800 mr-2">
                    {contactInfo.number}
                  </span>
                  <span className="text-blue-800">{contactInfo.title}</span>
                </h2>

                <div className="mt-2 text-md font-medium space-y-1 text-gray-700">
                  <p>
                    Email:
                    <a
                      href={`mailto:${data.metadata.email}`}
                      className="text-blue-700 hover:underline ml-1"
                    >
                      {data.metadata.email}
                    </a>
                  </p>

                  <p>
                    Phone:
                    <a
                      href={`tel:${data.metadata.phone}`}
                      className="text-blue-700 hover:underline ml-1"
                    >
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

export default RefundPolicyComponent;
