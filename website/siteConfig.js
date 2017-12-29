const resaurus = require("resaurus");

const users = [
  {
    caption: "User1",
    image: "img/docusaurus.svg",
    infoLink: "https://www.facebook.com",
    pinned: true
  }
];

const siteConfig = {
  title: "Reason Node" /* title for your website */,
  tagline: "A Node.js-like API for ReasonML",
  url: "https://facebook.github.io" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  projectName: "reason-node",
  headerLinks: [
    { doc: "installation", label: "Docs" },
    { doc: "doc4", label: "API" },
    { page: "help", label: "Help" },
    { blog: true, label: "Blog" }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: "img/reasonNode.svg",
  footerIcon: "img/reasonNode.svg",
  favicon: "img/favicon.png",
  /* colors for website */
  colors: {
    primaryColor: "#FF8585",
    secondaryColor: "#E87474"
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    "Copyright © " +
    new Date().getFullYear() +
    " Your Name or Your Company Name",
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  scripts: ["https://buttons.github.io/buttons.js"],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: "https://github.com/kennetpostigo/reason-node"
};

module.exports = resaurus(siteConfig);
