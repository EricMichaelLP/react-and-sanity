const actor = {
  title: "Actor",
  name: "actor",
  type: "document",
  fields: [
    {
      name: "Actor",
      type: "string",
      title: "actor",
      description: "Actors name",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default actor;
