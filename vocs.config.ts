import { defineConfig } from "vocs";

export default defineConfig({
  title: "Recoup API",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "API Reference",
      items: [
        {
          text: "Artist Profile",
          link: "/artist-profile",
        },
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
