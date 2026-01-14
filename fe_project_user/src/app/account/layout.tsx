"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AccountProvider,
  useAccount,
} from "@/components/account/AccountContext";
import { useEffect, useState } from "react";
import api from "@/utils/axiosConfig";

const sidebarItems = [
  { name: "About me", href: "/account/about-me" },
  { name: "Photo & Description", href: "/account/photo-description" },
  { name: "Interests", href: "/account/interests" },

  { name: "Profession & Skills", href: "/account/profession-skills" },
  { divider: true },

  { name: "Password", href: "/account/password" },

  { name: "Delete account", href: "/account/delete-account" },
];

function getCurrentPageName(pathname: string) {
  const item = sidebarItems.find((i) => i.href === pathname);
  return item?.name || "";
}

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [accountData, setAccountData] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    api
      .get("/api/user/profiles/profileme")
      .then((res) => setAccountData(res.data || res));
  }, []);

  if (!accountData)
    return <div className="p-8 text-brand-secondary">Loading...</div>;

  const currentPage = getCurrentPageName(pathname);

  // Move profile score UI to a child component that uses useAccount
  function ProfileScoreBar() {
    const data = useAccount();
    const profileFields = [
      !!data.fullName,
      !!data.dob,
      !!data.gender,
      !!data.phone,
      !!data.address,
      !!data.avatarUrl,
      typeof data.introduction === "string" && data.introduction.length >= 50,
      (Array.isArray(data.interests) && data.interests.length > 0) ||
        (typeof data.interests === "string" && data.interests.trim() !== ""),
      (Array.isArray(data.personalityTraits) &&
        data.personalityTraits.length > 0) ||
        (typeof data.personalityTraits === "string" &&
          data.personalityTraits.trim() !== ""),
      !!data.cvUrl,
      !!data.socialLinks,
    ];
    const filledCount = profileFields.filter(Boolean).length;
    const profileScore = Math.round((filledCount / profileFields.length) * 100);
    return (
      <div className="flex items-center gap-2">
        <span className="text-brand-secondary/80 font-medium">
          Profile score:
        </span>
        <span className="font-bold text-lg text-brand-secondary">
          {profileScore}
        </span>
        <span className="text-brand-secondary/80">/ 100%</span>
        <Link
          href="/account/my-profile"
          className="px-3 py-1 border border-brand-light/30 rounded text-sm hover:bg-brand-light/60 text-brand-primary"
        >
          View profile
        </Link>
      </div>
    );
  }

  return (
    <AccountProvider initialData={accountData}>
      {/* Navbar phụ: breadcrumb + view profile */}
      <div className="w-full border-b border-brand-light/30 bg-brand-light px-12 py-4 flex items-center justify-between sticky top-0 z-10">
        <nav
          className="text-sm text-brand-secondary/80"
          aria-label="Breadcrumb"
        >
          <ol className="list-none p-0 inline-flex items-center gap-1">
            <li className="flex items-center">
              <Link
                href="/"
                className="hover:underline text-brand-secondary/80"
              >
                Home
              </Link>
              <span className="mx-2">&gt;</span>
            </li>
            <li className="flex items-center">
              <Link
                href="/account"
                className="hover:underline text-brand-secondary/80"
              >
                Account
              </Link>
              <span className="mx-2">&gt;</span>
            </li>
            <li className="flex items-center font-semibold text-brand-secondary">
              {currentPage}
            </li>
          </ol>
        </nav>
        <ProfileScoreBar />
      </div>
      {/* Main content: sidebar + page content */}
      <div className="flex min-h-[calc(100vh-64px)] bg-brand-light">
        <aside className="w-1/3 max-w-sm bg-brand-secondary/10 border-r border-brand-secondary/20 pl-12 pr-4 pt-8 flex-shrink-0">
          <nav className="space-y-1">
            {sidebarItems.map((item, idx) =>
              item.divider ? (
                <hr className="my-3 border-brand-light/30" key={idx} />
              ) : item.href ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-2 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? "bg-brand-primary/10 font-semibold text-brand-secondary"
                      : "text-brand-secondary/80 hover:bg-brand-light/50 hover:text-brand-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              ) : null
            )}
          </nav>
        </aside>
        <main className="flex-1 pt-12 pr-0 pl-8 pb-12 flex">
          <div className="flex-1 max-w-none">{children}</div>
        </main>
      </div>
    </AccountProvider>
  );
}
