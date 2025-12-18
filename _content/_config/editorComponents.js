const multilineToInline = (multi) => {
  return multi?.replace(/\n/g, "\\n")?.replace(/"/g, '\\"');
};
const inlineToMultiline = (inline) => {
  return inline?.replace(/\\n/g, "\n")?.replace(/\\"/g, '"');
};

export const gallery5 = {
  id: "gallery5",
  label: "Gallery 5",
  icon: "auto_awesome_mosaic",
  fields: [
    {
      name: "images",
      label: "Images",
      widget: "object",
      required: true,
      collapsed: true,
      thumbnail: "image1",
      fields: [
        {
          name: "image1",
          label: "Image 1",
          widget: "image",
        },
        {
          name: "image2",
          label: "Image 2",
          widget: "image",
        },
        {
          name: "image3",
          label: "Image 3",
          widget: "image",
        },
        {
          name: "image4",
          label: "Image 4",
          widget: "image",
        },
        {
          name: "image5",
          label: "Image 5",
          widget: "image",
        },
      ],
    },
  ],
  pattern:
    /^{% component "gallery5\.njk", { images: (?<images>\{.*?\}) } %}$/ms,
  fromBlock: function (match) {
    try {
      return {
        images: JSON.parse(match?.groups?.images || "{}"),
      };
    } catch (e) {
      console.error("Failed to parse images:", e);
      return { images: {} };
    }
  },
  toBlock: function ({ images }) {
    const escapedImgObj = JSON.stringify(images || {});
    return `{% component "gallery5.njk", { images: ${escapedImgObj} } %}`;
  },
  toPreview: function (data) {
    return `TEST`;
  },
};
