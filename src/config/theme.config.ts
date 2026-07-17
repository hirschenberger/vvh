const siteUrl = (
  "https://hirschenberger@github.io/vvh"
).replace(/\/$/, "");

export const SITE = {
  name: "Verschönerungsverein Hertlingshausen",
  description:
    "Homepage des Verschönerungsvereins Hertlingshausen",
  url: siteUrl,
  locale: "de-DE",
  language: "de",
  repositoryUrl: "https://github.com/hirschenberger/vvh",
};

export const NAVIGATION = [
  { to: "/", label: "Startseite" },
  { to: "/blog", label: "Artikel" },
  { to: "/about", label: "Über den Verein" },
  { to: "/contact", label: "Kontakt" },
];

export const CONTACT = {
  email: "falco.hirschenberger@gmail.com",
  socialHandle: "TODO",
  socialUrl: "TODO",
};

export const FORMS = {
  contact: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
  newsletter: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
};

export const SOCIAL_LINKS = [
  { href: CONTACT.socialUrl, label: `${SITE.name} on X`, icon: "twitter" },
  { href: SITE.repositoryUrl, label: `${SITE.name} on GitHub`, icon: "github" },
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: "mail" },
];

export const authors = [
  {
    slug: "falco",
    name: "Falco Hirschenberger",
    bio: "Webmaster",
    longBio:
      "",
    avatar: "/avatars/elena-march.svg",
  },
  {
    slug: "jörg",
    name: "Jörg Noll",
    bio: "Vorsitzender",
    longBio:
      "",
    avatar: "/avatars/samuel-okafor.svg",
  },
];

export const categories = [
  { slug: "veranstaltungen", name: "Veranstaltungen" },
  { slug: "organisation", name: "Organisation" },
];

export const tags = [
  { slug: "sauhäuschen-kerwe", name: "Sauhäuschen Kerwe" },
  { slug: "eingeschärrtes", name: "Eingeschärrtes" },
  { slug: "arbeitseinsatz", name: "Arbeitseinsatz" },
  { slug: "feiern", name: "Feiern" },
];
