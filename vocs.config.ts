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
          text: "Chats",
          items: [
            {
              text: "Create Chat",
              link: "/chat/create",
            },
            {
              text: "Generate",
              link: "/chat/generate",
            },
            {
              text: "Stream",
              link: "/chat/stream",
            },
            {
              text: "Get Chats",
              link: "/chat/chats",
            },
          ],
        },
        {
          text: "Accounts",
          items: [
            {
              text: "Get Account",
              link: "/accounts/get",
            },
            {
              text: "Get Account ID",
              link: "/accounts/id",
            },
          ],
        },
        {
          text: "Organizations",
          items: [
            {
              text: "Get Organizations",
              link: "/organizations/list",
            },
            {
              text: "Create Organization",
              link: "/organizations/create",
            },
            {
              text: "Add Artist to Org",
              link: "/organizations/add-artist",
            },
          ],
        },
        {
          text: "Artists",
          items: [
            {
              text: "Get Artists",
              link: "/artists/list",
            },
          ],
        },
        {
          text: "Artist",
          items: [
            {
              text: "Artist Socials",
              link: "/artist/socials",
            },
            {
              text: "Artist Segments",
              link: "/artist/segments",
            },
            {
              text: "Artist Social Scrape",
              link: "/artist/socials-scrape",
            },
          ],
        },
        {
          text: "Social",
          items: [
            {
              text: "Social Posts",
              link: "/social/posts",
            },
            {
              text: "Social Scrape",
              link: "/social/scrape",
            },
          ],
        },
        {
          text: "Spotify",
          items: [
            {
              text: "Search",
              link: "/spotify/search",
            },
            {
              text: "Artist",
              link: "/spotify/artist",
            },
            {
              text: "Artist Albums",
              link: "/spotify/artist-albums",
            },
            {
              text: "Artist Top Tracks",
              link: "/spotify/artist-top-tracks",
            },
            {
              text: "Album",
              link: "/spotify/album",
            },
          ],
        },
        {
          text: "Instagram",
          items: [
            {
              text: "Profiles",
              link: "/instagram/profiles",
            },
            {
              text: "Comments",
              link: "/instagram/comments",
            },
          ],
        },
        {
          text: "X / Twitter",
          items: [
            {
              text: "Search",
              link: "/x/search",
            },
            {
              text: "Get Trends",
              link: "/x/trends",
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
              text: "Post Comments",
              link: "/post/comments",
            },
          ],
        },
        {
          text: "Songs",
          items: [
            {
              text: "Songs",
              link: "/songs/songs",
            },
            {
              text: "Catalogs",
              link: "/songs/catalogs",
            },
            {
              text: "Catalog Songs",
              link: "/songs/catalog-songs",
            },
          ],
        },
        {
          text: "Tasks",
          items: [
            {
              text: "Get Tasks",
              link: "/tasks/get",
            },
            {
              text: "Create Task",
              link: "/tasks/create",
            },
            {
              text: "Update Task",
              link: "/tasks/update",
            },
            {
              text: "Delete Task",
              link: "/tasks/delete",
            },
          ],
        },
        {
          text: "Images",
          items: [
            {
              text: "Generate",
              link: "/image/generation",
            },
          ],
        },
        {
          text: "Transcribe",
          items: [
            {
              text: "Transcribe Audio",
              link: "/transcribe/audio",
            },
          ],
        },
        {
          text: "Additional Features",
          items: [
            {
              text: "Subscriptions",
              link: "/subscriptions",
            },
          ],
        },
        {
          text: "Apify",
          items: [
            {
              text: "Scraper Results",
              link: "/apify/scraper",
            },
          ],
        },
        {
          text: "Legacy API (Deprecated)",
          items: [
            {
              text: "Artist Profile (Deprecated)",
              link: "/artist-profile",
            },
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
            {
              text: "Image Generation (Deprecated)",
              link: "/image-generation",
            },
          ],
        },
      ],
    },
  ],
});
