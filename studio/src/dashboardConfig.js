export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60832e3251c5ac28f61279e7",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-s2dk1mup",
                  apiId: "4d607ffb-6a90-432d-aa64-915d9dae5b02",
                },
                {
                  buildHookId: "60832e3258970721911da504",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-3x6rqtev",
                  apiId: "e471b38c-799c-48a6-a4a5-2e7d7fe5e6ea",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/zuhairabs/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-3x6rqtev.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
