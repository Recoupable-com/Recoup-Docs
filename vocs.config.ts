import { defineConfig } from "vocs";

export default defineConfig({
  title: "Recoup API",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Example",
      link: "/example",
    },
    {
      text: "API Reference",
      items: [
        {
          text: "Fans",
          link: "/fans",
        },
        {
          text: "Posts",
          link: "/posts",
        },
      ],
    },
  ],
});
