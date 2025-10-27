export default {
  name: "patientStory",
  title: "Patient Stories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Patient Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "country",
      title: "Country",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "testimonial",
      title: "Testimonial",
      type: "text",
      validation: (Rule) => Rule.required().max(500),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "treatment",
      title: "Treatment Received",
      type: "string",
    },
    {
      name: "hospital",
      title: "Hospital",
      type: "string",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
