"use client";

import { useState } from "react";
import { CreditCard, Wallet, Building2, HelpCircle } from "lucide-react";
import AccordionItem from "./accordionItem";

// Policy data
const rentalPolicyItems = [
  {
    id: "rental-term-contract",
    title: "Rental Term & Contract Type",
    content: (
      <div className="space-y-3">
        <div>
          <p className="font-semibold text-slate-900 mb-1">Rental Term:</p>
          <p>Minimum stay varies by house (usually 1–3 months)</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-1">Contract Type:</p>
          <p>Short-term flexible lease under NextU membership</p>
        </div>
      </div>
    ),
  },
  {
    id: "extensions",
    title: "Extensions",
    content: <p>Residents may extend monthly depending on availability</p>,
  },
  {
    id: "early-termination",
    title: "Early Termination",
    content: <p>Must notify 14–30 days in advance (location-dependent)</p>,
  },
];

// Payments policy icons
const paymentMethods = [
  {
    id: "bank-transfer",
    name: "Bank Transfer",
    icon: Building2,
  },
  {
    id: "credit-card",
    name: "Credit Card",
    icon: CreditCard,
  },
  {
    id: "debit-card",
    name: "Debit Card",
    icon: CreditCard,
  },
  {
    id: "e-wallets",
    name: "E-Wallets",
    icon: Wallet,
  },
];

// Payments policy data
const paymentPolicyItems = [
  {
    id: "accepted-payments",
    title: "Accepted Payments",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-slate-900 mb-3">Payment Methods:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {paymentMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={method.id}
                  className="flex items-center space-x-2 p-3 rounded-lg bg-brand-light/95 hover:bg-brand-light/90 transition-colors"
                >
                  <IconComponent className="h-5 w-5 text-brand-primary" />
                  <span className="text-sm text-brand-secondary/70 font-medium">
                    {method.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "billing-cycle",
    title: "Billing Cycle",
    content: (
      <div className="space-y-3">
        <p>
          <span className="font-semibold text-slate-900">Frequency:</span>{" "}
          Monthly
        </p>
        <p>
          <span className="font-semibold text-slate-900">Due Date:</span> Before
          check-in date
        </p>
      </div>
    ),
  },
  {
    id: "late-payment-fee",
    title: "Late Payment Fee",
    content: <p>Applied after 3–5 days overdue</p>,
  },
  {
    id: "deposit",
    title: "Deposit",
    content: <p>Refundable deposit required depending on room type</p>,
  },
];

//  Cancellation & refund policy
const cancellationPolicyItems = [
  {
    id: "cancellation-notice",
    title: "Cancellation Notice",
    content: <p>Before check-in: Possible with advance notice (7–14 days)</p>,
  },
  {
    id: "after-check-in",
    title: "After Check-in",
    content: <p>Pro-rated refunds depending on length of stay</p>,
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    content: <p>Full refund or booking credit for emergencies</p>,
  },
];

// Security & house rules
const securityAndHouse = [
  {
    id: "guests",
    title: "Guests",
    content: <p>Overnight guests must be registered with the community host</p>,
  },
  {
    id: "shared-spaces",
    title: "Shared Spaces",
    content: (
      <p>
        Respect all residents. Keep common areas clean and quiet during
        designated hours
      </p>
    ),
  },
  {
    id: "safety",
    title: "Safety",
    content: <p>No smoking in indoor areas; follow fire safety rules</p>,
  },
  {
    id: "conduct",
    title: "Conduct",
    content: <p>NextU is a mindful community—no disruptive behavior allowed</p>,
  },
];

// Privacy & data protection
const privacyAndDataProtection = [
  {
    id: "data-protection",
    title: "Data Protection",
    content: (
      <p>NextU protects all personal data according to legal standards</p>
    ),
  },
  {
    id: "usage",
    title: "Usage",
    content: (
      <p>Data is used only for booking, membership, and community purposes</p>
    ),
  },
  {
    id: "no-sharing",
    title: "No Sharing",
    content: (
      <p>
        We do not sell or share your data with third parties without consent
      </p>
    ),
  },
];

// FAQ data items
const faqItems = [
  {
    id: "short-term-stay",
    title: "Can I stay short-term (1–3 months)?",
    content: (
      <p>
        Yes. We offer flexible short-term stays depending on availability.
        Minimum stay varies by house (usually 1–3 months).
      </p>
    ),
  },
];

export default function PoliciesAndFAQPage() {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
  const [openPaymentAccordionIndex, setOpenPaymentAccordionIndex] = useState(0);
  const [openFAQAccordionIndex, setOpenFAQAccordionIndex] = useState(-1);

  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 space-y-16">
        {/* Section intro */}
        <section className="text-center">
          <p className="inline-flex items-center px-4 py-1 rounded-full bg-brand-primary text-white text-xs font-medium shadow-sm mb-4">
            <HelpCircle className="h-3 w-3 mr-1 text-white" />
            Policies & FAQs - Next Living
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-secondary mb-4">
            Policies & FAQs
          </h1>
          <div className="space-y-1 text-lg text-brand-secondary/70 max-w-4xl mx-auto text-left md:text-center">
            <p>
              We aim to make your NextU Living experience transparent, safe, and
              effortless.
            </p>
            <p>
              Below you will find all essential policies and answers to the most
              common questions from residents. Clear information means peace of
              mind—for you and our community.
            </p>
          </div>
        </section>

        {/* Rental & Contact Policy */}
        <section className="bg-brand-light/95 rounded-3xl p-8 shadow-sm border border-brand-light/20">
          <h2 className="text-2xl font-semibold text-brand-secondary mb-3">
            Rental & Contact Policies
          </h2>
          <div className="divide-y divide-brand-light/20">
            {rentalPolicyItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                title={item.title}
                content={item.content}
                isOpen={openAccordionIndex === index}
                onToggle={() =>
                  setOpenAccordionIndex(
                    openAccordionIndex === index ? -1 : index
                  )
                }
              />
            ))}
          </div>
        </section>

        {/* Payment Policy */}
        <section className="bg-brand-light/95 rounded-3xl p-8 shadow-sm border border-brand-light/20">
          <h2 className="text-2xl font-semibold text-brand-secondary mb-2">
            Payment Policy
          </h2>
          <div className="divide-y divide-brand-light/20">
            {paymentPolicyItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                title={item.title}
                content={item.content}
                isOpen={openPaymentAccordionIndex === index}
                onToggle={() =>
                  setOpenPaymentAccordionIndex(
                    openPaymentAccordionIndex === index ? -1 : index
                  )
                }
              />
            ))}
          </div>
        </section>

        {/* Cancellation & Refund Policy */}
        <section className="bg-brand-light/95 rounded-3xl p-8 shadow-sm border border-brand-light/20">
          <h2 className="text-2xl font-semibold text-brand-secondary mb-2">
            Cancellation & Refund Policy
          </h2>
          <div className="p-6 space-y-4">
            {cancellationPolicyItems.map((item) => (
              <div
                key={item.id}
                className="border-b border-brand-light/20 pb-4 last:border-b-0 last:pb-0"
              >
                <h3 className="text-base font-semibold text-brand-secondary mb-2">
                  {item.title}
                </h3>
                <div className="text-sm text-brand-secondary/70">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 bg-brand-primary/10 border-t border-brand-primary/20">
            <p className="text-xs font-semibold text-brand-primary mb-2 uppercase tracking-[0.18em]">
              ⓘ Keep wording general, detailed terms in contract
            </p>
            <p className="text-xs text-brand-primary/80">
              Specific cancellation terms and conditions should be detailed in
              the rental agreement contract.
            </p>
          </div>
        </section>

        {/* Security & House Rules */}
        <section className="bg-brand-light/95 rounded-3xl p-8 shadow-sm border border-brand-light/20">
          <h2 className="text-2xl font-semibold text-brand-secondary mb-2">
            Security & House Rules
          </h2>
          <div className="p-6 space-y-4">
            {securityAndHouse.map((item) => (
              <div
                key={item.id}
                className="border-b border-brand-light/20 pb-4 last:border-b-0 last:pb-0"
              >
                <h3 className="text-base font-semibold text-brand-secondary mb-2">
                  {item.title}
                </h3>
                <div className="text-sm text-brand-secondary/70">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy & Data Protection */}
        <section className="bg-brand-light/95 rounded-3xl p-8 shadow-sm border border-brand-light/20">
          <h2 className="text-2xl font-semibold text-brand-secondary mb-2">
            Privacy & Data Protection
          </h2>
          <div className="p-6 space-y-4">
            {privacyAndDataProtection.map((item) => (
              <div
                key={item.id}
                className="border-b border-brand-light/20 pb-4 last:border-b-0 last:pb-0"
              >
                <h3 className="text-base font-semibold text-brand-secondary mb-2">
                  {item.title}
                </h3>
                <div className="text-sm text-brand-secondary/70">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 bg-brand-light/95 border-t border-brand-light/20">
            <p className="text-xs font-semibold text-brand-secondary mb-2 uppercase tracking-[0.18em]">
              ⓘ Required for legal compliance
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-brand-light/95 rounded-3xl p-8 shadow-sm border border-brand-light/20">
          <h2 className="text-2xl font-semibold text-brand-secondary mb-2">
            FAQ
          </h2>
          <div className="divide-y divide-brand-light/20">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                title={item.title}
                content={item.content}
                isOpen={openFAQAccordionIndex === index}
                onToggle={() =>
                  setOpenFAQAccordionIndex(
                    openFAQAccordionIndex === index ? -1 : index
                  )
                }
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
