let envConfig = {};

try {
  envConfig = await import("../../env.config.js");
} catch (error) {
  console.warn(
    `WARN: Failed to load environment configuration from user's "_config/index.js". Falling back to process.env`,
  );
  envConfig = process?.env || {};
}

const CONTENT_DIR = envConfig.CONTENT_DIR || "_content";

const calendarSingleton = {
  name: "calendar-data",
  label: "Calendar Data",
  file: `${CONTENT_DIR}/_data/calendar-data.yaml`,
  icon: "date_range", // You can specify an icon
  fields: [
    {
      label: "Bookings",
      name: "bookings",
      widget: "list",
      summary: "{{fields.from}} -> {{fields.until}}",
      collapsed: true,
      // minimize_collapsed: true,
      add_to_top: true,
      fields: [
        {
          label: "From",
          name: "from",
          widget: "datetime",
          time_format: false,
          default: "{{now}}",
        },
        {
          label: "Until",
          name: "until",
          widget: "datetime",
          time_format: false,
          default: "{{now}}",
        },
      ],
    },
  ],
};

const fullGalleryImagesSingleton = {
  // icon: "date_range",
  name: "fullGalleryImages",
  label: "Gallery Images",
  editor: { preview: false },
  i18n: false,
  file: `${CONTENT_DIR}/_data/fullGalleryImages.yaml`,
  media_folder: `/${CONTENT_DIR}/_images/gallery`,
  public_folder: "/_images/gallery",
  fields: [
    {
      label: "Notice",
      name: "notice",
      widget: "boolean",
      default: false,
      readonly: true,
      before_input: `See the [dedicated assets directory](/admin/#/assets/_content/_images/gallery) to manage gallery images.`,
    },
  ],
};

export const collections = [];

export const singletons = [calendarSingleton, fullGalleryImagesSingleton];
