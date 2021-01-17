import { BiBookBookmark as icon } from "react-icons/Bi";

export default {
  // Computer Name
  name: "book",
  // visible title
  title: "Book",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Book Title",
      type: "string",
    },
    {
      name: "isbn",
      title: "Book ISBN",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
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
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tags" }] }],
    },
  ],
  //   preview: {
  //     select: {
  //       name: "name",
  //       description: "description",
  //     },
  //   },
};
