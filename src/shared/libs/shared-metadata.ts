import { loadConfig } from "./config"

interface GeneratedMetadataInput {
  title: string
  description: string
  image?: string
}

export function generatedMetadata({
  title,
  description,
  image,
}: GeneratedMetadataInput) {
  const config = loadConfig()

  return [
    { title },
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content:
        "Website templates, Landing page templates, Blog templates, Portfolio templates, Business templates, Framer templates, Tailwind templates, React templates, Next templates, Webflow templates, Custom templates, Framer, Webflow, Wix, Shopify, Templates, Components, Website component, Sections",
    },
    { name: "creator", content: "creevoo" },
    { name: "publisher", content: "creevoo" },
    { name: "application-name", content: "Creevoo" },
    { name: "google-site-verification", content: config.verification.google },
    { name: "category", content: "Websites" },
    { name: "generator", content: "React Router" },
    { name: "pinterest-rich-pin", content: "true" },

    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1729709107977/6dabcb40-d18e-48cf-a86b-7b423efb6605.png",
    },
    { name: "og:locale", content: "en_US" },
    { name: "og:type", content: "website" },

    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "creevoo" },
    { name: "twitter:creator", content: "@nyomansunima" },
    {
      name: "twitter:image",
      content:
        image ??
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1729709107977/6dabcb40-d18e-48cf-a86b-7b423efb6605.png",
    },
  ]
}
