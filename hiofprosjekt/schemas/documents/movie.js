const movie = {
  title: "Movie",
  name: "movie",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "slug",
      description: "Unique slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Actor",
      name: "actor",
      type: "reference",
      to: [{ type: "actor" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "actor.title",
    },
  },
};

export default movie;
