const handleItems = edges =>
  edges
    .map(
      ({
        node: {
          fields: { slug },
        },
      }) => slug,
    )
    .filter(slug => slug !== '/')
    .sort()
    .reduce((acc, cur) => ({ ...acc, items: [...acc.items, cur] }), {
      items: [],
    });

const handleNavigation = (edges, items) =>
  items.map(slug => {
    if (slug) {
      const {
        node: {
          fields: { title, slug: slugFlield, linkable },
        },
      } = edges.find(
        ({
          node: {
            fields: { slug: slugNode },
          },
        }) => slugNode === slug,
      );

      return { title, url: slugFlield, linkable };
    }
    return null;
  });

export { handleItems, handleNavigation };