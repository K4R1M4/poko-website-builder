let envConfig = {};

try {
  envConfig = await import("../../env.config.js");
} catch (error) {
  console.warn(
    `WARN: Failed to load environment configuration from user's "_config/index.js". Falling back to process.env`
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

export const collections = [];

export const singletons = [calendarSingleton];
