import { AiFillTags as icon } from "react-icons/Ai";

export default {
  // Computer Name
  name: "tags",
  // visible title
  title: "Tags",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Tag Name",
      type: "string",
    },
    {
      name: "description",
      title: "Tag Description",
      type: "string",
    },
  ],
  //   preview: {
  //     select: {
  //       name: "name",
  //       description: "description",
  //     },
  //   },
};
