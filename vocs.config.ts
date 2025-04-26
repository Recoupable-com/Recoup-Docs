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
          text: "Artist",
          items: [
            {
              text: "Artist Profile",
              link: "/artist-profile",
            },
            {
              text: "Artist Segments",
              link: "/artist/segments",
            },
          ],
        },
        {
          text: "Social",
          items: [
            {
              text: "Social Posts (Coming Soon)",
              link: "/social/posts",
            },
          ],
        },
        {
          text: "Segment",
          items: [
            {
              text: "Segment Fans",
              link: "/segment/fans",
            },
          ],
        },
        {
          text: "Post",
          items: [
            {
              text: "Post Comments (Coming Soon)",
              link: "/post/comments",
            },
          ],
        },
        {
          text: "Legacy API (Deprecated)",
          items: [
            {
              text: "Comments (Deprecated)",
              link: "/comments",
            },
            {
              text: "Fans (Deprecated)",
              link: "/fans",
            },
            {
              text: "Posts (Deprecated)",
              link: "/posts",
            },
          ],
        },
        {
          text: "Additional Features",
          items: [
            {
              text: "Image Generation",
              link: "/image-generation",
            },
          ],
        },
      ],
    },
  ],
});
