// docs/.vuepress/config.ts
import { resolve } from "path";
import { defineConfig4CustomTheme } from "vuepress/config";
import dayjs from "dayjs";
var config_default = defineConfig4CustomTheme({
  theme: resolve("/root/vuepress-theme-vdoing/docs/.vuepress", "../../vdoing"),
  locales: {
    "/": {
      lang: "zh-CN",
      title: "YAO blog",
      description: "\u8BB0\u5F55"
    }
  },
  themeConfig: {
    nav: [
      { text: "\u9996\u9875", link: "/" },
      {
        text: "\u6570\u636E\u5E93",
        link: "/shujuku/",
        items: [
          {
            text: "\u4F20\u7EDF\u6570\u636E\u5E93",
            items: [
              { text: "postgresql", link: "/pages/ee767f/" },
              { text: "mysql", link: "/pages/8143cc480faf9a11/" },
              { text: "oracle", link: "/pages/8143cc480faf9a11/" }
            ]
          },
          {
            text: "\u5B66\u4E60\u7B14\u8BB0",
            items: [
              { text: "\u300Asql\u7F16\u7A0B\u300B", link: "/note/sql/" },
              {
                text: "\u300A\u5927\u6570\u636E\u300B",
                link: "/note/dashuju/"
              },
              {
                text: "\u300Apostgresql\u300B",
                link: "/note/postgresql/"
              }
            ]
          }
        ]
      },
      {
        text: "\u8FD0\u7EF4\u4E13\u9879",
        link: "/yunwei/",
        items: [
          { text: "Docker&k8s", link: "/pages/331efa/" },
          { text: "\u7F51\u7EDC", link: "/pages/0d801d/" },
          { text: "\u76D1\u63A7", link: "/pages/48e74d/" }
        ]
      },
      {
        text: "\u7F16\u7A0B",
        link: "/biancheng/",
        items: [
          { text: "python", link: "/pages/74c26a/" },
          { text: "java", link: "/pages/4c778760be26d8b3/" },
          { text: "shell", link: "/pages/117708e0af7f0bd9/" },
          { text: "C/C++/GO", link: "/pages/41f87d890d0a02af/" },
          { text: "\u524D\u7AEF", link: "/pages/41f87d890d0a02af/" }
        ]
      },
      {
        text: "\u68A6\u5DE5\u5382",
        link: "/dream/",
        items: [
          { text: "\u6811\u8393\u6D3E", link: "/pages/115b2f/" },
          { text: "Stm32/arduino", link: "/pages/aea6571b7a8bae86/" },
          { text: "\u4EBA\u5DE5\u667A\u80FD", link: "/pages/2d615df9a36a98ed/" }
        ]
      },
      { text: "\u5173\u4E8E", link: "/guanyu/" },
      {
        text: "\u4E00\u4E2A\u4EBA\u7684\u4E16\u754C\u89C2",
        link: "/pages/494c74/"
      },
      {
        text: "\u7D22\u5F15",
        link: "/archives/",
        items: [
          { text: "\u5206\u7C7B", link: "/categories/" },
          { text: "\u6807\u7B7E", link: "/tags/" },
          { text: "\u5F52\u6863", link: "/archives/" }
        ]
      }
    ],
    sidebarDepth: 2,
    logo: "/img/logo.png",
    searchMaxSuggestions: 10,
    lastUpdated: "\u4E0A\u6B21\u66F4\u65B0",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "\u7F16\u8F91",
    sidebar: "structuring",
    author: {
      name: "luoyao"
    },
    blogger: {
      avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201906%2F26%2F20190626161203_vsahm.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652060957&t=f875dc5ba813758f973675007c317789",
      name: "luoyao",
      slogan: "\u4E0D\u79EF\u8DEC\u6B65 \u65E0\u4EE5\u81F3\u5343\u91CC"
    },
    social: {
      icons: [
        {
          iconClass: "icon-youjian",
          title: "\u53D1\u90AE\u4EF6",
          link: "mailto:473618849@qq.com"
        }
      ]
    },
    footer: {
      createYear: 2019
    }
  },
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "\u524D\u7AEF\u535A\u5BA2,\u4E2A\u4EBA\u6280\u672F\u535A\u5BA2,\u524D\u7AEF,\u524D\u7AEF\u5F00\u53D1,\u524D\u7AEF\u6846\u67B6,yunwei\u524D\u7AEF,\u524D\u7AEF\u9762\u8BD5\u9898,\u6280\u672F\u6587\u6863,\u5B66\u4E60,\u9762\u8BD5,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown"
      }
    ],
    ["meta", { name: "theme-color", content: "#11a8cd" }]
  ],
  plugins: [
    "vuepress-plugin-thirdparty-seasearch",
    [
      "one-click-copy",
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: "\u590D\u5236\u6210\u529F",
        duration: 1e3,
        showInMobile: false
      }
    ],
    [
      "demo-block",
      {
        settings: {
          jsfiddle: false,
          codepen: true,
          horizontal: false
        }
      }
    ],
    [
      "vuepress-plugin-zooming",
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)"
        }
      }
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        }
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"]
  },
  extraWatchFiles: [
    ".vuepress/config.ts"
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIFx1NjNEMFx1NzkzQVx1RkYxQVx1NTk4Mlx1NjBBOFx1NjBGM1x1NEY3Rlx1NzUyOEpTXHU3MjQ4XHU2NzJDXHU3Njg0XHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU1M0VGXHU1M0MyXHU4MDAzXHVGRjFBaHR0cHM6Ly9naXRodWIuY29tL3h1Z2FveWkvdnVlcHJlc3MtdGhlbWUtdmRvaW5nL3RyZWUvYTJmMDNlOTkzZGQyZjJhM2FmZGM1N2NmNzJhZGZjNmYxYjZiMGMzMi9kb2NzLy52dWVwcmVzc1xuICovXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZzRDdXN0b21UaGVtZSwgVXNlclBsdWdpbnMgfSBmcm9tICd2dWVwcmVzcy9jb25maWcnXG5pbXBvcnQgeyBWZG9pbmdUaGVtZUNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXZkb2luZy90eXBlcydcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbi8vIGltcG9ydCBiYWlkdUNvZGUgZnJvbSAnLi9jb25maWcvYmFpZHVDb2RlJyAvLyBcdTc2N0VcdTVFQTZcdTdFREZcdThCQTFobVx1NzgwMVxuLy8gaW1wb3J0IGh0bWxNb2R1bGVzIGZyb20gJy4vY29uZmlnL2h0bWxNb2R1bGVzJyAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTYzRDJcdTUxNjVcdTc2ODRodG1sXHU1NzU3XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZzRDdXN0b21UaGVtZTxWZG9pbmdUaGVtZUNvbmZpZz4oe1xuIC8vIHRoZW1lOiAndmRvaW5nJywgLy8gXHU0RjdGXHU3NTI4bnBtXHU1MzA1XHU0RTNCXHU5ODk4XG4gIHRoZW1lOiByZXNvbHZlKFwiL3Jvb3QvdnVlcHJlc3MtdGhlbWUtdmRvaW5nL2RvY3MvLnZ1ZXByZXNzXCIsICcuLi8uLi92ZG9pbmcnKSwgLy8gXHU0RjdGXHU3NTI4XHU2NzJDXHU1NzMwXHU0RTNCXHU5ODk4XG5cbiAgbG9jYWxlczoge1xuICAgICcvJzoge1xuICAgICAgbGFuZzogJ3poLUNOJyxcbiAgICAgIHRpdGxlOiBcIllBTyBibG9nXCIsXG4gICAgICBkZXNjcmlwdGlvbjogJ1x1OEJCMFx1NUY1NScsXG4gICAgfVxuICB9LFxuICAvLyBiYXNlOiAnLycsIC8vIFx1OUVEOFx1OEJBNCcvJ1x1MzAwMlx1NTk4Mlx1Njc5Q1x1NEY2MFx1NjBGM1x1NUMwNlx1NEY2MFx1NzY4NFx1N0Y1MVx1N0FEOVx1OTBFOFx1N0Y3Mlx1NTIzMFx1NTk4MiBodHRwczovL2Zvby5naXRodWIuaW8vYmFyL1x1RkYwQ1x1OTBBM1x1NEU0OCBiYXNlIFx1NUU5NFx1OEJFNVx1ODhBQlx1OEJCRVx1N0Y2RVx1NjIxMCBcIi9iYXIvXCIsXHVGRjA4XHU1NDI2XHU1MjE5XHU5ODc1XHU5NzYyXHU1QzA2XHU1OTMxXHU1M0JCXHU2ODM3XHU1RjBGXHU3QjQ5XHU2NTg3XHU0RUY2XHVGRjA5XG5cbiAgLy8gXHU0RTNCXHU5ODk4XHU5MTREXHU3RjZFXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgLy8gXHU1QkZDXHU4MjJBXHU5MTREXHU3RjZFXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6ICdcdTk5OTZcdTk4NzUnLCBsaW5rOiAnLycgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NjU3MFx1NjM2RVx1NUU5MycsXG4gICAgICAgIGxpbms6ICcvc2h1anVrdS8nLCAvL1x1NzZFRVx1NUY1NVx1OTg3NVx1OTRGRVx1NjNBNVx1RkYwQ1x1NkI2NFx1NTkwNGxpbmtcdTY2MkZ2ZG9pbmdcdTRFM0JcdTk4OThcdTY1QjBcdTU4OUVcdTc2ODRcdTkxNERcdTdGNkVcdTk4NzlcdUZGMENcdTY3MDlcdTRFOENcdTdFQTdcdTVCRkNcdTgyMkFcdTY1RjZcdUZGMENcdTUzRUZcdTRFRTVcdTcwQjlcdTUxRkJcdTRFMDBcdTdFQTdcdTVCRkNcdTgyMkFcdThERjNcdTUyMzBcdTc2RUVcdTVGNTVcdTk4NzVcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAvLyBcdThCRjRcdTY2MEVcdUZGMUFcdTRFRTVcdTRFMEJcdTYyNDBcdTY3MDlsaW5rXHU3Njg0XHU1MDNDXHU1M0VBXHU2NjJGXHU1NzI4XHU3NkY4XHU1RTk0bWRcdTY1ODdcdTRFRjZcdTU5MzRcdTkwRThcdTVCOUFcdTRFNDlcdTc2ODRcdTZDMzhcdTRFNDVcdTk0RkVcdTYzQTVcdUZGMDhcdTRFMERcdTY2MkZcdTRFQzBcdTRFNDhcdTcyNzlcdTZCOEFcdTdGMTZcdTc4MDFcdUZGMDlcdTMwMDJcdTUzRTZcdTU5MTZcdUZGMENcdTZDRThcdTYxMEZcdTdFRDNcdTVDM0VcdTY2MkZcdTY3MDlcdTY1OUNcdTY3NjBcdTc2ODRcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnXHU0RjIwXHU3RURGXHU2NTcwXHU2MzZFXHU1RTkzJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgdGV4dDogJ3Bvc3RncmVzcWwnLCBsaW5rOiAnL3BhZ2VzL2VlNzY3Zi8nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ215c3FsJywgbGluazogJy9wYWdlcy84MTQzY2M0ODBmYWY5YTExLycgfSxcbiAgICBcdCAgICAgIHsgdGV4dDogJ29yYWNsZScsIGxpbms6ICcvcGFnZXMvODE0M2NjNDgwZmFmOWExMS8nIH0sXG5cdCAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdTVCNjZcdTRFNjBcdTdCMTRcdThCQjAnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUzMDBBc3FsXHU3RjE2XHU3QTBCXHUzMDBCJywgbGluazogJy9ub3RlL3NxbC8nIH0sXG4gICAgICAgICAgICAgIC8ve1xuICAgICAgICAgICAgICAgIC8vdGV4dDogJ1x1MzAwQU9jZWFuQmFzZVx1MzAwQicsXG4gICAgICAgICAgICAgICAgLy9saW5rOiAnL25vdGUvdHlwZXNjcmlwdC1heGlvcy8nLFxuICAgICAgICAgICAgICAvL30sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnXHUzMDBBXHU1OTI3XHU2NTcwXHU2MzZFXHUzMDBCJyxcbiAgICAgICAgICAgICAgICBsaW5rOiAnL25vdGUvZGFzaHVqdS8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1x1MzAwQXBvc3RncmVzcWxcdTMwMEInLFxuICAgICAgICAgICAgICAgIGxpbms6ICcvbm90ZS9wb3N0Z3Jlc3FsLycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU4RkQwXHU3RUY0XHU0RTEzXHU5ODc5JyxcbiAgICAgICAgbGluazogJy95dW53ZWkvJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdEb2NrZXImazhzJywgbGluazogJy9wYWdlcy8zMzFlZmEvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1N0Y1MVx1N0VEQycsIGxpbms6ICcvcGFnZXMvMGQ4MDFkLycgfSxcblx0ICB7IHRleHQ6ICdcdTc2RDFcdTYzQTcnLCBsaW5rOiAnL3BhZ2VzLzQ4ZTc0ZC8nfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTdGMTZcdTdBMEInLFxuICAgICAgICBsaW5rOiAnL2JpYW5jaGVuZy8nLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ3B5dGhvbicsIGxpbms6ICcvcGFnZXMvNzRjMjZhLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdqYXZhJywgbGluazogJy9wYWdlcy80Yzc3ODc2MGJlMjZkOGIzLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdzaGVsbCcsIGxpbms6ICcvcGFnZXMvMTE3NzA4ZTBhZjdmMGJkOS8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnQy9DKysvR08nLCBsaW5rOiAnL3BhZ2VzLzQxZjg3ZDg5MGQwYTAyYWYvJyB9LFxuXHQgIHsgdGV4dDogJ1x1NTI0RFx1N0FFRicsIGxpbms6ICcvcGFnZXMvNDFmODdkODkwZDBhMDJhZi8nIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU2OEE2XHU1REU1XHU1MzgyJyxcbiAgICAgICAgbGluazogJy9kcmVhbS8nLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1x1NjgxMVx1ODM5M1x1NkQzRScsIGxpbms6ICcvcGFnZXMvMTE1YjJmLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdTdG0zMi9hcmR1aW5vJywgbGluazogJy9wYWdlcy9hZWE2NTcxYjdhOGJhZTg2LycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTRFQkFcdTVERTVcdTY2N0FcdTgwRkQnLCBsaW5rOiAnL3BhZ2VzLzJkNjE1ZGY5YTM2YTk4ZWQvJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogJ1x1NTE3M1x1NEU4RScsIGxpbms6ICcvZ3Vhbnl1LycgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NEUwMFx1NEUyQVx1NEVCQVx1NzY4NFx1NEUxNlx1NzU0Q1x1ODlDMicsXG4gICAgICAgIGxpbms6ICcvcGFnZXMvNDk0Yzc0LycsXG4gICAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAgIC8vICAgeyB0ZXh0OiAnXHU3RjUxXHU3QUQ5JywgbGluazogJy9wYWdlcy9iZWI2YzBiZDhhNjZjZWE2LycgfSxcbiAgICAgICAgLy8gICB7IHRleHQ6ICdcdThENDRcdTZFOTAnLCBsaW5rOiAnL3BhZ2VzL2VlZTgzYTkyMTFhNzBmOWQvJyB9LFxuICAgICAgICAvLyAgIHsgdGV4dDogJ1Z1ZVx1OEQ0NFx1NkU5MCcsIGxpbms6ICcvcGFnZXMvMTJkZjhhY2U1MmQ0OTNmNi8nIH0sXG4gICAgICAgIC8vIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU3RDIyXHU1RjE1JyxcbiAgICAgICAgbGluazogJy9hcmNoaXZlcy8nLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1x1NTIwNlx1N0M3QicsIGxpbms6ICcvY2F0ZWdvcmllcy8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2ODA3XHU3QjdFJywgbGluazogJy90YWdzLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTVGNTJcdTY4NjMnLCBsaW5rOiAnL2FyY2hpdmVzLycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzaWRlYmFyRGVwdGg6IDIsIC8vIFx1NEZBN1x1OEZCOVx1NjgwRlx1NjYzRVx1NzkzQVx1NkRGMVx1NUVBNlx1RkYwQ1x1OUVEOFx1OEJBNDFcdUZGMENcdTY3MDBcdTU5MjcyXHVGRjA4XHU2NjNFXHU3OTNBXHU1MjMwaDNcdTY4MDdcdTk4OThcdUZGMDlcbiAgICBsb2dvOiAnL2ltZy9sb2dvLnBuZycsIC8vIFx1NUJGQ1x1ODIyQVx1NjgwRmxvZ29cbiAgICAvLyByZXBvOiAneHVnYW95aS92dWVwcmVzcy10aGVtZS12ZG9pbmcnLCAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcdTUzRjNcdTRGQTdcdTc1MUZcdTYyMTBHaXRodWJcdTk0RkVcdTYzQTVcbiAgICBzZWFyY2hNYXhTdWdnZXN0aW9uczogMTAsIC8vIFx1NjQxQ1x1N0QyMlx1N0VEM1x1Njc5Q1x1NjYzRVx1NzkzQVx1NjcwMFx1NTkyN1x1NjU3MFxuICAgIGxhc3RVcGRhdGVkOiAnXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwJywgLy8gXHU1RjAwXHU1NDJGXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XHVGRjBDXHU1RTc2XHU5MTREXHU3RjZFXHU1MjREXHU3RjAwXHU2NTg3XHU1QjU3ICAgc3RyaW5nIHwgYm9vbGVhbiAoXHU1M0Q2XHU1MDNDXHU0RTNBZ2l0XHU2M0QwXHU0RUE0XHU2NUY2XHU5NUY0KVxuICAgIGRvY3NEaXI6ICdkb2NzJywgLy8gXHU3RjE2XHU4RjkxXHU3Njg0XHU2NTg3XHU0RUY2XHU1OTM5XG4gICAgZWRpdExpbmtzOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjhcdTdGMTZcdThGOTFcbiAgICBlZGl0TGlua1RleHQ6ICdcdTdGMTZcdThGOTEnLFxuXG4gICAgLy8qKiogXHU0RUU1XHU0RTBCXHU2NjJGVmRvaW5nXHU0RTNCXHU5ODk4XHU3NkY4XHU1MTczXHU5MTREXHU3RjZFXHVGRjBDXHU2NTg3XHU2ODYzXHVGRjFBaHR0cHM6Ly9kb2MueHVnYW95aS5jb20vcGFnZXMvYTIwY2U4LyAqKiovL1xuXG4gICAgLy8gY2F0ZWdvcnk6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTUyMDZcdTdDN0JcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXG4gICAgLy8gdGFnOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU2MjUzXHU1RjAwXHU2ODA3XHU3QjdFXHU1MjlGXHU4MEZEXHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZVxuICAgIC8vIGFyY2hpdmU6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTVGNTJcdTY4NjNcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXG4gICAgLy8gY2F0ZWdvcnlUZXh0OiAnXHU5NjhGXHU3QjE0JywgLy8gXHU3ODhFXHU3MjQ3XHU1MzE2XHU2NTg3XHU3QUUwXHVGRjA4X3Bvc3RzXHU2NTg3XHU0RUY2XHU1OTM5XHU3Njg0XHU2NTg3XHU3QUUwXHVGRjA5XHU5ODg0XHU4QkJFXHU3NTFGXHU2MjEwXHU3Njg0XHU1MjA2XHU3QzdCXHU1MDNDXHVGRjBDXHU5RUQ4XHU4QkE0J1x1OTY4Rlx1N0IxNCdcblxuICAgIC8vIGJvZHlCZ0ltZzogW1xuICAgIC8vICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC94dWdhb3lpL2ltYWdlX3N0b3JlL2Jsb2cvMjAyMDA1MDcxNzU4MjguanBlZycsXG4gICAgLy8gICAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3h1Z2FveWkvaW1hZ2Vfc3RvcmUvYmxvZy8yMDIwMDUwNzE3NTg0NS5qcGVnJyxcbiAgICAvLyAgICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gveHVnYW95aS9pbWFnZV9zdG9yZS9ibG9nLzIwMjAwNTA3MTc1ODQ2LmpwZWcnXG4gICAgLy8gXSwgLy8gYm9keVx1ODBDQ1x1NjY2Rlx1NTkyN1x1NTZGRVx1RkYwQ1x1OUVEOFx1OEJBNFx1NjVFMFx1MzAwMiBcdTUzNTVcdTVGMjBcdTU2RkVcdTcyNDcgU3RyaW5nIHwgXHU1OTFBXHU1RjIwXHU1NkZFXHU3MjQ3IEFycmF5LCBcdTU5MUFcdTVGMjBcdTU2RkVcdTcyNDdcdTY1RjZcdTZCQ0ZcdTk2OTQxNVx1NzlEMlx1NjM2Mlx1NEUwMFx1NUYyMFx1MzAwMlxuICAgIC8vIGJvZHlCZ0ltZ09wYWNpdHk6IDAuNSwgLy8gYm9keVx1ODBDQ1x1NjY2Rlx1NTZGRVx1OTAwRlx1NjYwRVx1NUVBNlx1RkYwQ1x1OTAwOVx1NTAzQyAwLjF+IDEuMCwgXHU5RUQ4XHU4QkE0MC41XG4gICAgLy8gdGl0bGVCYWRnZTogZmFsc2UsIC8vIFx1NjU4N1x1N0FFMFx1NjgwN1x1OTg5OFx1NTI0RFx1NzY4NFx1NTZGRVx1NjgwN1x1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgICAvLyB0aXRsZUJhZGdlSWNvbnM6IFsgLy8gXHU2NTg3XHU3QUUwXHU2ODA3XHU5ODk4XHU1MjREXHU1NkZFXHU2ODA3XHU3Njg0XHU1NzMwXHU1NzQwXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNCXHU5ODk4XHU1MTg1XHU3RjZFXHU1NkZFXHU2ODA3XG4gICAgLy8gICAnXHU1NkZFXHU2ODA3XHU1NzMwXHU1NzQwMScsXG4gICAgLy8gICAnXHU1NkZFXHU2ODA3XHU1NzMwXHU1NzQwMidcbiAgICAvLyBdLFxuICAgIC8vIGNvbnRlbnRCZ1N0eWxlOiAxLCAvLyBcdTY1ODdcdTdBRTBcdTUxODVcdTVCQjlcdTU3NTdcdTc2ODRcdTgwQ0NcdTY2NkZcdTk4Q0VcdTY4M0NcdUZGMENcdTlFRDhcdThCQTRcdTY1RTAuIDEgXHU2NUI5XHU2ODNDIHwgMiBcdTZBMkFcdTdFQkYgfCAzIFx1N0FENlx1N0VCRiB8IDQgXHU1REU2XHU2NTlDXHU3RUJGIHwgNSBcdTUzRjNcdTY1OUNcdTdFQkYgfCA2IFx1NzBCOVx1NzJCNlxuXG4gICAgLy8gdXBkYXRlQmFyOiB7IC8vIFx1NjcwMFx1OEZEMVx1NjZGNFx1NjVCMFx1NjgwRlxuICAgIC8vICAgc2hvd1RvQXJ0aWNsZTogZmFsc2UsIC8vIFx1NjYzRVx1NzkzQVx1NTIzMFx1NjU4N1x1N0FFMFx1OTg3NVx1NUU5NVx1OTBFOFx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgICAvLyAgIG1vcmVBcnRpY2xlOiAnL2FyY2hpdmVzJyAvLyBcdTIwMUNcdTY2RjRcdTU5MUFcdTY1ODdcdTdBRTBcdTIwMURcdThERjNcdThGNkNcdTc2ODRcdTk4NzVcdTk3NjJcdUZGMENcdTlFRDhcdThCQTQnL2FyY2hpdmVzJ1xuICAgIC8vIH0sXG4gICAgLy8gcmlnaHRNZW51QmFyOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBXHU1M0YzXHU0RkE3XHU2NTg3XHU3QUUwXHU1OTI3XHU3RUIyXHU2ODBGXHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZSAoXHU1QzRGXHU1QkJEXHU1QzBGXHU0RThFMTMwMHB4XHU0RTBCXHU2NUUwXHU4QkJBXHU1OTgyXHU0RjU1XHU5MEZEXHU0RTBEXHU2NjNFXHU3OTNBKVxuICAgIC8vIHNpZGViYXJPcGVuOiBmYWxzZSwgLy8gXHU1MjFEXHU1OUNCXHU3MkI2XHU2MDAxXHU2NjJGXHU1NDI2XHU2MjUzXHU1RjAwXHU1REU2XHU0RkE3XHU4RkI5XHU2ODBGXHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZVxuICAgIC8vIHBhZ2VCdXR0b246IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdTVGRUJcdTYzNzdcdTdGRkJcdTk4NzVcdTYzMDlcdTk0QUVcdUZGMENcdTlFRDhcdThCQTR0cnVlXG5cbiAgICAvLyBcdTRGQTdcdThGQjlcdTY4MEYgICdzdHJ1Y3R1cmluZycgfCB7IG1vZGU6ICdzdHJ1Y3R1cmluZycsIGNvbGxhcHNhYmxlOiBCb29sZWFufSB8ICdhdXRvJyB8IDxcdTgxRUFcdTVCOUFcdTRFNDk+ICAgIFx1NkUyOVx1OTlBOFx1NjNEMFx1NzkzQVx1RkYxQ