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
          { text: "\u76D1\u63A7", link: "/pages/48e74d/" },
          { text: "linux\u77E5\u8BC6", link: "/pages/d11aa9/" },
          { text: "ansible", link: "/pages/2f40d8/" }
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
        link: "/pages/339240/"
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
      avatar: "/img/logo.png",
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
        content: "\u4E2A\u4EBA\u6280\u672F\u535A\u5BA2"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIFx1NjNEMFx1NzkzQVx1RkYxQVx1NTk4Mlx1NjBBOFx1NjBGM1x1NEY3Rlx1NzUyOEpTXHU3MjQ4XHU2NzJDXHU3Njg0XHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2XHU1M0VGXHU1M0MyXHU4MDAzXHVGRjFBaHR0cHM6Ly9naXRodWIuY29tL3h1Z2FveWkvdnVlcHJlc3MtdGhlbWUtdmRvaW5nL3RyZWUvYTJmMDNlOTkzZGQyZjJhM2FmZGM1N2NmNzJhZGZjNmYxYjZiMGMzMi9kb2NzLy52dWVwcmVzc1xuICovXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZzRDdXN0b21UaGVtZSwgVXNlclBsdWdpbnMgfSBmcm9tICd2dWVwcmVzcy9jb25maWcnXG5pbXBvcnQgeyBWZG9pbmdUaGVtZUNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLXZkb2luZy90eXBlcydcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbi8vIGltcG9ydCBiYWlkdUNvZGUgZnJvbSAnLi9jb25maWcvYmFpZHVDb2RlJyAvLyBcdTc2N0VcdTVFQTZcdTdFREZcdThCQTFobVx1NzgwMVxuLy8gaW1wb3J0IGh0bWxNb2R1bGVzIGZyb20gJy4vY29uZmlnL2h0bWxNb2R1bGVzJyAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTYzRDJcdTUxNjVcdTc2ODRodG1sXHU1NzU3XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZzRDdXN0b21UaGVtZTxWZG9pbmdUaGVtZUNvbmZpZz4oe1xuIC8vIHRoZW1lOiAndmRvaW5nJywgLy8gXHU0RjdGXHU3NTI4bnBtXHU1MzA1XHU0RTNCXHU5ODk4XG4gIHRoZW1lOiByZXNvbHZlKFwiL3Jvb3QvdnVlcHJlc3MtdGhlbWUtdmRvaW5nL2RvY3MvLnZ1ZXByZXNzXCIsICcuLi8uLi92ZG9pbmcnKSwgLy8gXHU0RjdGXHU3NTI4XHU2NzJDXHU1NzMwXHU0RTNCXHU5ODk4XG5cbiAgbG9jYWxlczoge1xuICAgICcvJzoge1xuICAgICAgbGFuZzogJ3poLUNOJyxcbiAgICAgIHRpdGxlOiBcIllBTyBibG9nXCIsXG4gICAgICBkZXNjcmlwdGlvbjogJ1x1OEJCMFx1NUY1NScsXG4gICAgfVxuICB9LFxuICAvLyBiYXNlOiAnLycsIC8vIFx1OUVEOFx1OEJBNCcvJ1x1MzAwMlx1NTk4Mlx1Njc5Q1x1NEY2MFx1NjBGM1x1NUMwNlx1NEY2MFx1NzY4NFx1N0Y1MVx1N0FEOVx1OTBFOFx1N0Y3Mlx1NTIzMFx1NTk4MiBodHRwczovL2Zvby5naXRodWIuaW8vYmFyL1x1RkYwQ1x1OTBBM1x1NEU0OCBiYXNlIFx1NUU5NFx1OEJFNVx1ODhBQlx1OEJCRVx1N0Y2RVx1NjIxMCBcIi9iYXIvXCIsXHVGRjA4XHU1NDI2XHU1MjE5XHU5ODc1XHU5NzYyXHU1QzA2XHU1OTMxXHU1M0JCXHU2ODM3XHU1RjBGXHU3QjQ5XHU2NTg3XHU0RUY2XHVGRjA5XG5cbiAgLy8gXHU0RTNCXHU5ODk4XHU5MTREXHU3RjZFXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgLy8gXHU1QkZDXHU4MjJBXHU5MTREXHU3RjZFXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6ICdcdTk5OTZcdTk4NzUnLCBsaW5rOiAnLycgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NjU3MFx1NjM2RVx1NUU5MycsXG4gICAgICAgIGxpbms6ICcvc2h1anVrdS8nLCAvL1x1NzZFRVx1NUY1NVx1OTg3NVx1OTRGRVx1NjNBNVx1RkYwQ1x1NkI2NFx1NTkwNGxpbmtcdTY2MkZ2ZG9pbmdcdTRFM0JcdTk4OThcdTY1QjBcdTU4OUVcdTc2ODRcdTkxNERcdTdGNkVcdTk4NzlcdUZGMENcdTY3MDlcdTRFOENcdTdFQTdcdTVCRkNcdTgyMkFcdTY1RjZcdUZGMENcdTUzRUZcdTRFRTVcdTcwQjlcdTUxRkJcdTRFMDBcdTdFQTdcdTVCRkNcdTgyMkFcdThERjNcdTUyMzBcdTc2RUVcdTVGNTVcdTk4NzVcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAvLyBcdThCRjRcdTY2MEVcdUZGMUFcdTRFRTVcdTRFMEJcdTYyNDBcdTY3MDlsaW5rXHU3Njg0XHU1MDNDXHU1M0VBXHU2NjJGXHU1NzI4XHU3NkY4XHU1RTk0bWRcdTY1ODdcdTRFRjZcdTU5MzRcdTkwRThcdTVCOUFcdTRFNDlcdTc2ODRcdTZDMzhcdTRFNDVcdTk0RkVcdTYzQTVcdUZGMDhcdTRFMERcdTY2MkZcdTRFQzBcdTRFNDhcdTcyNzlcdTZCOEFcdTdGMTZcdTc4MDFcdUZGMDlcdTMwMDJcdTUzRTZcdTU5MTZcdUZGMENcdTZDRThcdTYxMEZcdTdFRDNcdTVDM0VcdTY2MkZcdTY3MDlcdTY1OUNcdTY3NjBcdTc2ODRcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnXHU0RjIwXHU3RURGXHU2NTcwXHU2MzZFXHU1RTkzJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgdGV4dDogJ3Bvc3RncmVzcWwnLCBsaW5rOiAnL3BhZ2VzL2VlNzY3Zi8nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ215c3FsJywgbGluazogJy9wYWdlcy84MTQzY2M0ODBmYWY5YTExLycgfSxcbiAgICBcdCAgICAgIHsgdGV4dDogJ29yYWNsZScsIGxpbms6ICcvcGFnZXMvODE0M2NjNDgwZmFmOWExMS8nIH0sXG5cdCAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdTVCNjZcdTRFNjBcdTdCMTRcdThCQjAnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHUzMDBBc3FsXHU3RjE2XHU3QTBCXHUzMDBCJywgbGluazogJy9ub3RlL3NxbC8nIH0sXG4gICAgICAgICAgICAgIC8ve1xuICAgICAgICAgICAgICAgIC8vdGV4dDogJ1x1MzAwQU9jZWFuQmFzZVx1MzAwQicsXG4gICAgICAgICAgICAgICAgLy9saW5rOiAnL25vdGUvdHlwZXNjcmlwdC1heGlvcy8nLFxuICAgICAgICAgICAgICAvL30sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnXHUzMDBBXHU1OTI3XHU2NTcwXHU2MzZFXHUzMDBCJyxcbiAgICAgICAgICAgICAgICBsaW5rOiAnL25vdGUvZGFzaHVqdS8nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogJ1x1MzAwQXBvc3RncmVzcWxcdTMwMEInLFxuICAgICAgICAgICAgICAgIGxpbms6ICcvbm90ZS9wb3N0Z3Jlc3FsLycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU4RkQwXHU3RUY0XHU0RTEzXHU5ODc5JyxcbiAgICAgICAgbGluazogJy95dW53ZWkvJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdEb2NrZXImazhzJywgbGluazogJy9wYWdlcy8zMzFlZmEvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1N0Y1MVx1N0VEQycsIGxpbms6ICcvcGFnZXMvMGQ4MDFkLycgfSxcblx0ICAgICAgICB7IHRleHQ6ICdcdTc2RDFcdTYzQTcnLCBsaW5rOiAnL3BhZ2VzLzQ4ZTc0ZC8nfSxcbiAgICAgICAgICB7IHRleHQ6ICdsaW51eFx1NzdFNVx1OEJDNicsIGxpbms6ICcvcGFnZXMvZDExYWE5Lyd9LFxuICAgICAgICAgIHsgdGV4dDogJ2Fuc2libGUnLCBsaW5rOiAnL3BhZ2VzLzJmNDBkOC8nfVxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1N0YxNlx1N0EwQicsXG4gICAgICAgIGxpbms6ICcvYmlhbmNoZW5nLycsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAncHl0aG9uJywgbGluazogJy9wYWdlcy83NGMyNmEvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ2phdmEnLCBsaW5rOiAnL3BhZ2VzLzRjNzc4NzYwYmUyNmQ4YjMvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ3NoZWxsJywgbGluazogJy9wYWdlcy8xMTc3MDhlMGFmN2YwYmQ5LycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDL0MrKy9HTycsIGxpbms6ICcvcGFnZXMvNDFmODdkODkwZDBhMDJhZi8nIH0sXG5cdCAgeyB0ZXh0OiAnXHU1MjREXHU3QUVGJywgbGluazogJy9wYWdlcy80MWY4N2Q4OTBkMGEwMmFmLycgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTY4QTZcdTVERTVcdTUzODInLFxuICAgICAgICBsaW5rOiAnL2RyZWFtLycsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2ODExXHU4MzkzXHU2RDNFJywgbGluazogJy9wYWdlcy8xMTViMmYvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1N0bTMyL2FyZHVpbm8nLCBsaW5rOiAnL3BhZ2VzL2FlYTY1NzFiN2E4YmFlODYvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1NEVCQVx1NURFNVx1NjY3QVx1ODBGRCcsIGxpbms6ICcvcGFnZXMvMmQ2MTVkZjlhMzZhOThlZC8nIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiAnXHU1MTczXHU0RThFJywgbGluazogJy9ndWFueXUvJyB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU0RTAwXHU0RTJBXHU0RUJBXHU3Njg0XHU0RTE2XHU3NTRDXHU4OUMyJyxcbiAgICAgICAgbGluazogJy9wYWdlcy8zMzkyNDAvJyxcbiAgICAgICAgLy8gaXRlbXM6IFtcbiAgICAgICAgLy8gICB7IHRleHQ6ICdcdTdGNTFcdTdBRDknLCBsaW5rOiAnL3BhZ2VzL2JlYjZjMGJkOGE2NmNlYTYvJyB9LFxuICAgICAgICAvLyAgIHsgdGV4dDogJ1x1OEQ0NFx1NkU5MCcsIGxpbms6ICcvcGFnZXMvZWVlODNhOTIxMWE3MGY5ZC8nIH0sXG4gICAgICAgIC8vICAgeyB0ZXh0OiAnVnVlXHU4RDQ0XHU2RTkwJywgbGluazogJy9wYWdlcy8xMmRmOGFjZTUyZDQ5M2Y2LycgfSxcbiAgICAgICAgLy8gXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdcdTdEMjJcdTVGMTUnLFxuICAgICAgICBsaW5rOiAnL2FyY2hpdmVzLycsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1MjA2XHU3QzdCJywgbGluazogJy9jYXRlZ29yaWVzLycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTY4MDdcdTdCN0UnLCBsaW5rOiAnL3RhZ3MvJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1x1NUY1Mlx1Njg2MycsIGxpbms6ICcvYXJjaGl2ZXMvJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHNpZGViYXJEZXB0aDogMiwgLy8gXHU0RkE3XHU4RkI5XHU2ODBGXHU2NjNFXHU3OTNBXHU2REYxXHU1RUE2XHVGRjBDXHU5RUQ4XHU4QkE0MVx1RkYwQ1x1NjcwMFx1NTkyNzJcdUZGMDhcdTY2M0VcdTc5M0FcdTUyMzBoM1x1NjgwN1x1OTg5OFx1RkYwOVxuICAgIGxvZ286ICcvaW1nL2xvZ28ucG5nJywgLy8gXHU1QkZDXHU4MjJBXHU2ODBGbG9nb1xuICAgIC8vIHJlcG86ICd4dWdhb3lpL3Z1ZXByZXNzLXRoZW1lLXZkb2luZycsIC8vIFx1NUJGQ1x1ODIyQVx1NjgwRlx1NTNGM1x1NEZBN1x1NzUxRlx1NjIxMEdpdGh1Ylx1OTRGRVx1NjNBNVxuICAgIHNlYXJjaE1heFN1Z2dlc3Rpb25zOiAxMCwgLy8gXHU2NDFDXHU3RDIyXHU3RUQzXHU2NzlDXHU2NjNFXHU3OTNBXHU2NzAwXHU1OTI3XHU2NTcwXG4gICAgbGFzdFVwZGF0ZWQ6ICdcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjAnLCAvLyBcdTVGMDBcdTU0MkZcdTY2RjRcdTY1QjBcdTY1RjZcdTk1RjRcdUZGMENcdTVFNzZcdTkxNERcdTdGNkVcdTUyNERcdTdGMDBcdTY1ODdcdTVCNTcgICBzdHJpbmcgfCBib29sZWFuIChcdTUzRDZcdTUwM0NcdTRFM0FnaXRcdTYzRDBcdTRFQTRcdTY1RjZcdTk1RjQpXG4gICAgZG9jc0RpcjogJ2RvY3MnLCAvLyBcdTdGMTZcdThGOTFcdTc2ODRcdTY1ODdcdTRFRjZcdTU5MzlcbiAgICBlZGl0TGlua3M6IHRydWUsIC8vIFx1NTQyRlx1NzUyOFx1N0YxNlx1OEY5MVxuICAgIGVkaXRMaW5rVGV4dDogJ1x1N0YxNlx1OEY5MScsXG5cbiAgICAvLyoqKiBcdTRFRTVcdTRFMEJcdTY2MkZWZG9pbmdcdTRFM0JcdTk4OThcdTc2RjhcdTUxNzNcdTkxNERcdTdGNkVcdUZGMENcdTY1ODdcdTY4NjNcdUZGMUFodHRwczovL2RvYy54dWdhb3lpLmNvbS9wYWdlcy9hMjBjZTgvICoqKi8vXG5cbiAgICAvLyBjYXRlZ29yeTogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NjI1M1x1NUYwMFx1NTIwNlx1N0M3Qlx1NTI5Rlx1ODBGRFx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgICAvLyB0YWc6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTY4MDdcdTdCN0VcdTUyOUZcdTgwRkRcdUZGMENcdTlFRDhcdThCQTR0cnVlXG4gICAgLy8gYXJjaGl2ZTogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NjI1M1x1NUYwMFx1NUY1Mlx1Njg2M1x1NTI5Rlx1ODBGRFx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgICAvLyBjYXRlZ29yeVRleHQ6ICdcdTk2OEZcdTdCMTQnLCAvLyBcdTc4OEVcdTcyNDdcdTUzMTZcdTY1ODdcdTdBRTBcdUZGMDhfcG9zdHNcdTY1ODdcdTRFRjZcdTU5MzlcdTc2ODRcdTY1ODdcdTdBRTBcdUZGMDlcdTk4ODRcdThCQkVcdTc1MUZcdTYyMTBcdTc2ODRcdTUyMDZcdTdDN0JcdTUwM0NcdUZGMENcdTlFRDhcdThCQTQnXHU5NjhGXHU3QjE0J1xuXG4gICAgLy8gYm9keUJnSW1nOiBbXG4gICAgLy8gICAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3h1Z2FveWkvaW1hZ2Vfc3RvcmUvYmxvZy8yMDIwMDUwNzE3NTgyOC5qcGVnJyxcbiAgICAvLyAgICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gveHVnYW95aS9pbWFnZV9zdG9yZS9ibG9nLzIwMjAwNTA3MTc1ODQ1LmpwZWcnLFxuICAgIC8vICAgJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC94dWdhb3lpL2ltYWdlX3N0b3JlL2Jsb2cvMjAyMDA1MDcxNzU4NDYuanBlZydcbiAgICAvLyBdLCAvLyBib2R5XHU4MENDXHU2NjZGXHU1OTI3XHU1NkZFXHVGRjBDXHU5RUQ4XHU4QkE0XHU2NUUwXHUzMDAyIFx1NTM1NVx1NUYyMFx1NTZGRVx1NzI0NyBTdHJpbmcgfCBcdTU5MUFcdTVGMjBcdTU2RkVcdTcyNDcgQXJyYXksIFx1NTkxQVx1NUYyMFx1NTZGRVx1NzI0N1x1NjVGNlx1NkJDRlx1OTY5NDE1XHU3OUQyXHU2MzYyXHU0RTAwXHU1RjIwXHUzMDAyXG4gICAgLy8gYm9keUJnSW1nT3BhY2l0eTogMC41LCAvLyBib2R5XHU4MENDXHU2NjZGXHU1NkZFXHU5MDBGXHU2NjBFXHU1RUE2XHVGRjBDXHU5MDA5XHU1MDNDIDAuMX4gMS4wLCBcdTlFRDhcdThCQTQwLjVcbiAgICAvLyB0aXRsZUJhZGdlOiBmYWxzZSwgLy8gXHU2NTg3XHU3QUUwXHU2ODA3XHU5ODk4XHU1MjREXHU3Njg0XHU1NkZFXHU2ODA3XHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBXHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZVxuICAgIC8vIHRpdGxlQmFkZ2VJY29uczogWyAvLyBcdTY1ODdcdTdBRTBcdTY4MDdcdTk4OThcdTUyNERcdTU2RkVcdTY4MDdcdTc2ODRcdTU3MzBcdTU3NDBcdUZGMENcdTlFRDhcdThCQTRcdTRFM0JcdTk4OThcdTUxODVcdTdGNkVcdTU2RkVcdTY4MDdcbiAgICAvLyAgICdcdTU2RkVcdTY4MDdcdTU3MzBcdTU3NDAxJyxcbiAgICAvLyAgICdcdTU2RkVcdTY4MDdcdTU3MzBcdTU3NDAyJ1xuICAgIC8vIF0sXG5cbiAgICAvLyBib2R5QmdJbWc6IFtcbiAgICAvLyAgICcvaW1nL2ZpcnN0LnBuZycsXG4gICAgLy8gXSwgLy8gYm9keVx1ODBDQ1x1NjY2Rlx1NTkyN1x1NTZGRVx1RkYwQ1x1OUVEOFx1OEJBNFx1NjVFMFx1MzAwMiBcdTUzNTVcdTVGMjBcdTU2RkVcdTcyNDcgU3RyaW5nIHwgXHU1OTFBXHU1RjIwXHU1NkZFXHU3MjQ3IEFycmF5LCBcdTU5MUFcdTVGMjBcdTU2RkVcdTcyNDdcdTY1RjZcdTZCQ0ZcdTk2OTQxNVx1NzlEMlx1NjM2Mlx1NEUwMFx1NUYyMFx1MzAwMlxuICAgIC8vIGJvZHlCZ0ltZ09wYWNpdHk6IDAuNSwgLy8gYm9keVx1ODBDQ1x1NjY2Rlx1NTZGRVx1OTAwRlx1NjYwRVx1NUVBNlx1RkYwQ1x1OTAwOVx1NTAzQyAwLjF+IDEuMCwgXHU5RUQ4XHU4QkE0MC41XG4gICAgLy8gdGl0bGVCYWRnZTogZmFsc2UsIC8vIFx1NjU4N1x1N0FFMFx1NjgwN1x1OTg5OFx1NTI0RFx1NzY4NFx1NTZGRVx1NjgwN1x1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgICAvLyB0aXRsZUJhZGdlSWNvbnM6IFsgLy8gXHU2NTg3XHU3QUUwXHU2ODA3XHU5ODk4XHU1MjREXHU1NkZFXHU2ODA3XHU3Njg0XHU1NzMwXHU1NzQwXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNCXHU5ODk4XHU1MTg1XHU3RjZFXHU1NkZFXHU2ODA3XG4gICAgLy8gICAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3h1Z2FveWkvaW1hZ2Vfc3RvcmUvYmxvZy8yMDIwMDUwNzE3NTg0NS5qcGVnJyxcbiAgICAvLyAgICd0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC94dWdhb3lpL2ltYWdlX3N0b3JlL2Jsb2cvMjAyMDA1MDcxNzU4NDYuanBlZydcbiAgICAvLyBdLFxuXG5cblxuXG5cbiAgICAvLyBjb250ZW50QmdTdHlsZTogMSwgLy8gXHU2NTg3XHU3QUUwXHU1MTg1XHU1QkI5XHU1NzU3XHU3Njg0XHU4MENDXHU2NjZGXHU5OENFXHU2ODNDXHVGRjBDXHU5RUQ4XHU4QkE0XHU2NUUwLiAxIFx1NjVCOVx1NjgzQyB8IDIgXHU2QTJBXHU3RUJGIHwgMyBcdTdBRDZcdTdFQkYgfCA0IFx1NURFNlx1NjU5Q1x1N0VCRiB8IDUgXHU1M0YzXHU2NTlDXHU3RUJGIHwgNiBcdTcwQjlcdTcyQjZcblxuICAgIC8vIHVwZGF0ZUJhcjogeyAvLyBcdTY3MDBcdThGRDFcdTY2RjRcdTY1QjBcdTY4MEZcbiAgICAvLyAgIHNob3dUb0FydGljbGU6IGZhbHNlLCAvLyBcdTY2M0VcdTc5M0FcdTUyMzBcdTY1ODdcdTdBRTBcdTk4NzVcdTVFOTVcdTkwRThcdUZGMENcdTlFRDhcdThCQTR0cnVlXG4gICAgLy8gICBtb3JlQXJ0aWNsZTogJy9hcmNoaXZlcycgLy8gXHUyMDFDXHU2NkY0XHU1OTFBXHU2NTg3XHU3QUUwXHUyMDFEXHU4REYzXHU4RjZDXHU3Njg0XHU5ODc1XHU5NzYyXHVGRjBDXHU5RUQ4XHU4QkE0Jy9hcmNoaXZlcydcbiAgICAvLyB9LFxuICAgIC8vIHJpZ2h0TWVudUJhcjogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NTNGM1x1NEZBN1x1NjU4N1x1N0FFMFx1NTkyN1x1N0VCMlx1NjgwRlx1RkYwQ1x1OUVEOFx1OEJBNHRydWUgKFx1NUM0Rlx1NUJCRFx1NUMwRlx1NEU4RTEzMDBweFx1NEUwQlx1NjVFMFx1OEJCQVx1NTk4Mlx1NEY1NVx1OTBGRFx1NEUwRFx1NjYzRVx1NzkzQSlcbiAgICAvLyBzaWRlYmFyT3BlbjogZmFsc2UsIC8vIFx1NTIxRFx1NTlDQlx1NzJCNlx1NjAwMVx1NjYyRlx1NTQyNlx1NjI1M1x1NUYwMFx1NURFNlx1NEZBN1x1OEZCOVx1NjgwRlx1RkYwQ1x1OUVEOFx1OEJBNHRydWVcbiAgICAvLyBwYWdlQnV0dG9uOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBXHU1RkVCXHU2Mzc3XHU3RkZCXHU5ODc1XHU2MzA5XHU5NEFFXHVGRjBDXHU5RUQ4XHU4QkE0dHJ1ZVxuXG4gICAgLy8gXHU0RkE3XHU4RkI5XHU2ODBGICAnc3RydWN0dXJpbmcnIHwgeyBtb2RlOiAnc3RydWN0dXJpbmcnLCBjb2xsYXBzYWJsZTogQm9vbGVhbn0gfCAnYXV0bycgfCA8XHU4MUVBXHU1QjlBXHU0RTQ5PiAgICBcdTZFMjlcdTk5QThcdTYzRDBcdTc5M0FcdUZGMUFcdTc2RUVcdTVGNTVcdTk4NzVcdTY1NzBcdTYzNkVcdTRGOURcdThENTZcdTRFOEVcdTdFRDNcdTY3ODRcdTUzMTZcdTc2ODRcdTRGQTdcdThGQjlcdTY4MEZcdTY1NzBcdTYzNkVcdUZGMENcdTU5ODJcdTY3OUNcdTRGNjBcdTRFMERcdThCQkVcdTdGNkVcdTRFM0Enc3RydWN0dXJpbmcnLFx1NUMwNlx1NjVFMFx1NkNENVx1NEY3Rlx1NzUyOFx1NzZFRVx1NUY1NVx1OTg3NVxuICAgIHNpZGViYXI6ICdzdHJ1Y3R1cmluZycsXG5cbiAgICAvLyBcdTY1ODdcdTdBRTBcdTlFRDhcdThCQTRcdTc2ODRcdTRGNUNcdTgwMDVcdTRGRTFcdTYwNkZcdUZGMEMoXHU1M0VGXHU1NzI4bWRcdTY1ODdcdTRFRjZcdTRFMkRcdTUzNTVcdTcyRUNcdTkxNERcdTdGNkVcdTZCNjRcdTRGRTFcdTYwNkYpIHN0cmluZyB8IHtuYW1lOiBzdHJpbmcsIGxpbms/OiBzdHJpbmd9XG4gICAgYXV0aG9yOiB7XG4gICAgICBuYW1lOiAnbHVveWFvJywgLy8gXHU1RkM1XHU5NzAwXG4gICAgICAvLyBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3h1Z2FveWknLCAvLyBcdTUzRUZcdTkwMDlcdTc2ODRcbiAgICB9LFxuXG4gICAgLy8gXHU1MzVBXHU0RTNCXHU0RkUxXHU2MDZGIChcdTY2M0VcdTc5M0FcdTU3MjhcdTk5OTZcdTk4NzVcdTRGQTdcdThGQjlcdTY4MEYpXG4gICAgYmxvZ2dlcjoge1xuICAgICAgLy8gYXZhdGFyOiAnaHR0cHM6Ly9naW1nMi5iYWlkdS5jb20vaW1hZ2Vfc2VhcmNoL3NyYz1odHRwJTNBJTJGJTJGYy1zc2wuZHVpdGFuZy5jb20lMkZ1cGxvYWRzJTJGaXRlbSUyRjIwMTkwNiUyRjI2JTJGMjAxOTA2MjYxNjEyMDNfdnNhaG0uanBnJnJlZmVyPWh0dHAlM0ElMkYlMkZjLXNzbC5kdWl0YW5nLmNvbSZhcHA9MjAwMiZzaXplPWY5OTk5LDEwMDAwJnE9YTgwJm49MCZnPTBuJmZtdD1hdXRvP3NlYz0xNjUyMDYwOTU3JnQ9Zjg3NWRjNWJhODEzNzU4Zjk3MzY3NTAwN2MzMTc3ODknLFxuICAgICAgYXZhdGFyOiAnL2ltZy9sb2dvLnBuZycsXG4gICAgICBuYW1lOiAnbHVveWFvJyxcbiAgICAgIHNsb2dhbjogJ1x1NEUwRFx1NzlFRlx1OERFQ1x1NkI2NSBcdTY1RTBcdTRFRTVcdTgxRjNcdTUzNDNcdTkxQ0MnLFxuICAgIH0sXG5cbiAgICAvLyBcdTc5M0VcdTRFQTRcdTU2RkVcdTY4MDcgKFx1NjYzRVx1NzkzQVx1NEU4RVx1NTM1QVx1NEUzQlx1NEZFMVx1NjA2Rlx1NjgwRlx1NTQ4Q1x1OTg3NVx1ODExQVx1NjgwRlx1MzAwMlx1NTE4NVx1N0Y2RVx1NTZGRVx1NjgwN1x1RkYxQWh0dHBzOi8vZG9jLnh1Z2FveWkuY29tL3BhZ2VzL2EyMGNlOC8jc29jaWFsKVxuICAgIHNvY2lhbDoge1xuICAgICAgLy8gaWNvbmZvbnRDc3NGaWxlOiAnLy9hdC5hbGljZG4uY29tL3QveHh4LmNzcycsIC8vIFx1NTNFRlx1OTAwOVx1RkYwQ1x1OTYzRlx1OTFDQ1x1NTZGRVx1NjgwN1x1NUU5M1x1NTcyOFx1N0VCRmNzc1x1NjU4N1x1NEVGNlx1NTczMFx1NTc0MFx1RkYwQ1x1NUJGOVx1NEU4RVx1NEUzQlx1OTg5OFx1NkNBMVx1NjcwOVx1NzY4NFx1NTZGRVx1NjgwN1x1NTNFRlx1ODFFQVx1NURGMVx1NkRGQlx1NTJBMFx1MzAwMlx1OTYzRlx1OTFDQ1x1NTZGRVx1NzI0N1x1NUU5M1x1RkYxQWh0dHBzOi8vd3d3Lmljb25mb250LmNuL1xuICAgICAgaWNvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGljb25DbGFzczogJ2ljb24teW91amlhbicsXG4gICAgICAgICAgdGl0bGU6ICdcdTUzRDFcdTkwQUVcdTRFRjYnLFxuICAgICAgICAgIGxpbms6ICdtYWlsdG86NDczNjE4ODQ5QHFxLmNvbScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgICAvLyBpY29uQ2xhc3M6ICdpY29uLWdpdGh1YicsXG4gICAgICAgICAgLy8gdGl0bGU6ICdHaXRIdWInLFxuICAgICAgICAgIC8vIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20veHVnYW95aScsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgICAvLyBpY29uQ2xhc3M6ICdpY29uLWVyamknLFxuICAgICAgICAgIC8vIHRpdGxlOiAnXHU1NDJDXHU5N0YzXHU0RTUwJyxcbiAgICAgICAgICAvLyBsaW5rOiAnaHR0cHM6Ly9tdXNpYy4xNjMuY29tLyMvcGxheWxpc3Q/aWQ9NzU1NTk3MTczJyxcbiAgICAgICAgLy8gfSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIC8vIFx1OTg3NVx1ODExQVx1NEZFMVx1NjA2RlxuICAgIGZvb3Rlcjoge1xuICAgICAgY3JlYXRlWWVhcjogMjAxOSwgLy8gXHU1MzVBXHU1QkEyXHU1MjFCXHU1RUZBXHU1RTc0XHU0RUZEXG4gICAgICAvLyBjb3B5cmlnaHRJbmZvOlxuICAgICAgICAvLyAnRXZhbiBYdSB8IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20veHVnYW95aS92dWVwcmVzcy10aGVtZS12ZG9pbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVwiIHRhcmdldD1cIl9ibGFua1wiPk1JVCBMaWNlbnNlPC9hPicsIC8vIFx1NTM1QVx1NUJBMlx1NzI0OFx1Njc0M1x1NEZFMVx1NjA2Rlx1RkYwQ1x1NjUyRlx1NjMwMWFcdTY4MDdcdTdCN0VcdTYyMTZcdTYzNjJcdTg4NENcdTY4MDdcdTdCN0U8L2JyPlxuICAgIH0sXG5cbiAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlobXRsKFx1NUU3Rlx1NTQ0QSlcdTZBMjFcdTU3NTdcbiAgICAvLyAvLyBodG1sTW9kdWxlc1xuICB9LFxuXG4gIC8vIFx1NkNFOFx1NTE2NVx1NTIzMFx1OTg3NVx1OTc2MjxoZWFkPlx1NEUyRFx1NzY4NFx1NjgwN1x1N0I3RVx1RkYwQ1x1NjgzQ1x1NUYwRlt0YWdOYW1lLCB7IGF0dHJOYW1lOiBhdHRyVmFsdWUgfSwgaW5uZXJIVE1MP11cbiAgaGVhZDogW1xuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvaW1nL2Zhdmljb24uaWNvJyB9XSwgLy9mYXZpY29uc1x1RkYwQ1x1OEQ0NFx1NkU5MFx1NjUzRVx1NTcyOHB1YmxpY1x1NjU4N1x1NEVGNlx1NTkzOVxuICAgIFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2tleXdvcmRzJyxcbiAgICAgICAgY29udGVudDogJ1x1NEUyQVx1NEVCQVx1NjI4MFx1NjcyRlx1NTM1QVx1NUJBMicsXG4gICAgICB9LFxuICAgIF0sXG4gICAgLy8gWydtZXRhJywgeyBuYW1lOiAnYmFpZHUtc2l0ZS12ZXJpZmljYXRpb24nLCBjb250ZW50OiAnN0Y1NXdlWkREYycgfV0sIC8vIFx1NzY3RVx1NUVBNlx1N0VERlx1OEJBMVx1NzY4NFx1N0FEOVx1OTU3Rlx1OUE4Q1x1OEJDMVx1RkYwOFx1NEY2MFx1NTNFRlx1NEVFNVx1NTNCQlx1NjM4OVx1RkYwOVxuICAgIFsnbWV0YScsIHsgbmFtZTogJ3RoZW1lLWNvbG9yJywgY29udGVudDogJyMxMWE4Y2QnIH1dLCAvLyBcdTc5RkJcdTUyQThcdTZENEZcdTg5QzhcdTU2NjhcdTRFM0JcdTk4OThcdTk4OUNcdTgyNzJcbiAgICAvLyBbXG4gICAgLy8gICAnc2NyaXB0JyxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgJ2RhdGEtYWQtY2xpZW50JzogJ2NhLXB1Yi03ODI4MzMzNzI1OTkzNTU0JyxcbiAgICAvLyAgICAgYXN5bmM6ICdhc3luYycsXG4gICAgLy8gICAgIHNyYzogJ2h0dHBzOi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzJyxcbiAgICAvLyAgIH0sXG4gICAgLy8gXSwgLy8gXHU3RjUxXHU3QUQ5XHU1MTczXHU4MDU0R29vZ2xlIEFkU2Vuc2UgXHU0RTBFIGh0bWxcdTY4M0NcdTVGMEZcdTVFN0ZcdTU0NEFcdTY1MkZcdTYzMDFcdUZGMDhcdTRGNjBcdTUzRUZcdTRFRTVcdTUzQkJcdTYzODlcdUZGMDlcbiAgXSxcblxuXG4gIC8vIFx1NjNEMlx1NEVGNlx1OTE0RFx1N0Y2RVxuICBwbHVnaW5zOiA8VXNlclBsdWdpbnM+W1xuXG4gICAgLy8gJ3Z1ZXByZXNzLXBsdWdpbi1iYWlkdS1hdXRvcHVzaCcsIC8vIFx1NzY3RVx1NUVBNlx1ODFFQVx1NTJBOFx1NjNBOFx1OTAwMVxuXG4gICAgLy8gW1xuICAgICAgLy8gJ3Z1ZXByZXNzLXBsdWdpbi1iYWlkdS10b25namknLCAvLyBcdTc2N0VcdTVFQTZcdTdFREZcdThCQTFcbiAgICAgIC8vIHtcbiAgICAgICAgLy8gaG06IGJhaWR1Q29kZSxcbiAgICAgIC8vIH0sXG4gICAgLy8gXSxcblxuICAgIC8vIFx1NTE2OFx1NjU4N1x1NjQxQ1x1N0QyMlx1MzAwMiBcdTI2QTBcdUZFMEZcdTZDRThcdTYxMEZcdUZGMUFcdTZCNjRcdTYzRDJcdTRFRjZcdTRGMUFcdTU3MjhcdTYyNTNcdTVGMDBcdTdGNTFcdTdBRDlcdTY1RjZcdTU5MUFcdTUyQTBcdThGN0RcdTkwRThcdTUyMDZqc1x1NjU4N1x1NEVGNlx1NzUyOFx1NEU4RVx1NjQxQ1x1N0QyMlx1RkYwQ1x1NUJGQ1x1ODFGNFx1NTIxRFx1NkIyMVx1OEJCRlx1OTVFRVx1N0Y1MVx1N0FEOVx1NTNEOFx1NjE2Mlx1MzAwMlx1NTk4Mlx1NTcyOFx1NjEwRlx1NTIxRFx1NkIyMVx1OEJCRlx1OTVFRVx1OTAxRlx1NUVBNlx1NzY4NFx1OEJERFx1NTNFRlx1NEVFNVx1NEUwRFx1NEY3Rlx1NzUyOFx1NkI2NFx1NjNEMlx1NEVGNlx1RkYwMVx1RkYwOFx1NjNBOFx1ODM1MFx1RkYxQXZ1ZXByZXNzLXBsdWdpbi10aGlyZHBhcnR5LXNlYXJjaFx1RkYwOVxuICAgICAgJ3Z1ZXByZXNzLXBsdWdpbi10aGlyZHBhcnR5LXNlYXNlYXJjaCcsXG4vLyAgICAnZnVsbHRleHQtc2VhcmNoJyxcblxuICAgIC8vIFx1NTNFRlx1NEVFNVx1NkRGQlx1NTJBMFx1N0IyQ1x1NEUwOVx1NjVCOVx1NjQxQ1x1N0QyMlx1OTRGRVx1NjNBNVx1NzY4NFx1NjQxQ1x1N0QyMlx1Njg0Nlx1RkYwOFx1N0VFN1x1NjI3Rlx1NTM5Rlx1NUI5OFx1NjVCOVx1NjQxQ1x1N0QyMlx1Njg0Nlx1NzY4NFx1OTE0RFx1N0Y2RVx1NTNDMlx1NjU3MFx1RkYwOVxuICAgIC8vICd0aGlyZHBhcnR5LXNlYXJjaCc6IHtcbiAgICAvLyAgIHRoaXJkcGFydHk6IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIHRpdGxlOiAnXHU1NzI4TUROXHU0RTJEXHU2NDFDXHU3RDIyJyxcbiAgICAvLyAgICAgICBmcm9udFVybDogJ2h0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL3poLUNOL3NlYXJjaD9xPScsIC8vIFx1NjQxQ1x1N0QyMlx1OTRGRVx1NjNBNVx1NzY4NFx1NTI0RFx1OTc2Mlx1OTBFOFx1NTIwNlxuICAgIC8vICAgICAgIGJlaGluZFVybDogJycsIC8vIFx1NjQxQ1x1N0QyMlx1OTRGRVx1NjNBNVx1NzY4NFx1NTQwRVx1OTc2Mlx1OTBFOFx1NTIwNlx1RkYwQ1x1NTNFRlx1OTAwOVx1RkYwQ1x1OUVEOFx1OEJBNCAnJ1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdGl0bGU6ICdcdTU3MjhSdW5vb2JcdTRFMkRcdTY0MUNcdTdEMjInLFxuICAgIC8vICAgICAgIGZyb250VXJsOiAnaHR0cHM6Ly93d3cucnVub29iLmNvbS8/cz0nLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgdGl0bGU6ICdcdTU3MjhWdWUgQVBJXHU0RTJEXHU2NDFDXHU3RDIyJyxcbiAgICAvLyAgICAgICBmcm9udFVybDogJ2h0dHBzOi8vY24udnVlanMub3JnL3YyL2FwaS8jJyxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIHRpdGxlOiAnXHU1NzI4QmluZ1x1NEUyRFx1NjQxQ1x1N0QyMicsXG4gICAgLy8gICAgICAgZnJvbnRVcmw6ICdodHRwczovL2NuLmJpbmcuY29tL3NlYXJjaD9xPScsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICB0aXRsZTogJ1x1OTAxQVx1OEZDN1x1NzY3RVx1NUVBNlx1NjQxQ1x1N0QyMlx1NjcyQ1x1N0FEOVx1NzY4NCcsXG4gICAgLy8gICAgICAgZnJvbnRVcmw6ICdodHRwczovL3d3dy5iYWlkdS5jb20vcz93ZD1zaXRlJTNBeHVnYW95aS5jb20lMjAnLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgXSxcbiAgICAvLyB9LFxuXG4gICAgW1xuICAgICAgJ29uZS1jbGljay1jb3B5JywgLy8gXHU0RUUzXHU3ODAxXHU1NzU3XHU1OTBEXHU1MjM2XHU2MzA5XHU5NEFFXG4gICAgICB7XG4gICAgICAgIGNvcHlTZWxlY3RvcjogWydkaXZbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHByZScsICdkaXZbY2xhc3MqPVwiYXNpZGUtY29kZVwiXSBhc2lkZSddLCAvLyBTdHJpbmcgb3IgQXJyYXlcbiAgICAgICAgY29weU1lc3NhZ2U6ICdcdTU5MERcdTUyMzZcdTYyMTBcdTUyOUYnLCAvLyBkZWZhdWx0IGlzICdDb3B5IHN1Y2Nlc3NmdWxseSBhbmQgdGhlbiBwYXN0ZSBpdCBmb3IgdXNlLidcbiAgICAgICAgZHVyYXRpb246IDEwMDAsIC8vIHByb21wdCBtZXNzYWdlIGRpc3BsYXkgdGltZS5cbiAgICAgICAgc2hvd0luTW9iaWxlOiBmYWxzZSwgLy8gd2hldGhlciB0byBkaXNwbGF5IG9uIHRoZSBtb2JpbGUgc2lkZSwgZGVmYXVsdDogZmFsc2UuXG4gICAgICB9LFxuICAgIF0sXG5cbiAgICBbXG4gICAgICAnZGVtby1ibG9jaycsIC8vIGRlbW9cdTZGMTRcdTc5M0FcdTZBMjFcdTU3NTcgaHR0cHM6Ly9naXRodWIuY29tL3hpZ3VheGlndWEvdnVlcHJlc3MtcGx1Z2luLWRlbW8tYmxvY2tcbiAgICAgIHtcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAvLyBqc0xpYjogWydodHRwOi8veHh4J10sIC8vIFx1NTcyOFx1N0VCRlx1NzkzQVx1NEY4Qihqc2ZpZGRsZSwgY29kZXBlbilcdTRFMkRcdTc2ODRqc1x1NEY5RFx1OEQ1NlxuICAgICAgICAgIC8vIGNzc0xpYjogWydodHRwOi8veHh4J10sIC8vIFx1NTcyOFx1N0VCRlx1NzkzQVx1NEY4Qlx1NEUyRFx1NzY4NGNzc1x1NEY5RFx1OEQ1NlxuICAgICAgICAgIC8vIHZ1ZTogJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vdnVlL2Rpc3QvdnVlLm1pbi5qcycsIC8vIFx1NTcyOFx1N0VCRlx1NzkzQVx1NEY4Qlx1NEUyRFx1NzY4NHZ1ZVx1NEY5RFx1OEQ1NlxuICAgICAgICAgIGpzZmlkZGxlOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU2NjNFXHU3OTNBIGpzZmlkZGxlIFx1OTRGRVx1NjNBNVxuICAgICAgICAgIGNvZGVwZW46IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQSBjb2RlcGVuIFx1OTRGRVx1NjNBNVxuICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTVDNTVcdTc5M0FcdTRFM0FcdTZBMkFcdTU0MTFcdTY4MzdcdTVGMEZcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXG4gICAgICAndnVlcHJlc3MtcGx1Z2luLXpvb21pbmcnLCAvLyBcdTY1M0VcdTU5MjdcdTU2RkVcdTcyNDdcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICcudGhlbWUtdmRvaW5nLWNvbnRlbnQgaW1nOm5vdCgubm8tem9vbSknLCAvLyBcdTYzOTJcdTk2NjRjbGFzc1x1NjYyRm5vLXpvb21cdTc2ODRcdTU2RkVcdTcyNDdcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGJnQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNiknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIC8vIFtcbiAgICAgIC8vICd2dWVwcmVzcy1wbHVnaW4tY29tbWVudCcsIC8vIFx1OEJDNFx1OEJCQVxuICAgICAgLy8ge1xuICAgICAgICAvLyBjaG9vc2VuOiAnZ2l0YWxrJyxcbiAgICAgICAgLy8gb3B0aW9uczoge1xuICAgICAgICAgIC8vIGNsaWVudElEOiAnYTZlMTM1NTI4Nzk0NzA5NmI4OGInLFxuICAgICAgICAgIC8vIGNsaWVudFNlY3JldDogJ2YwZTc3ZDA3MGZhYmZjZDVhZjk1YmViYjgyYjJkNTc0ZDcyNDhkNzEnLFxuICAgICAgICAgIC8vIHJlcG86ICdibG9nLWdpdGFsay1jb21tZW50JywgLy8gR2l0SHViIFx1NEVEM1x1NUU5M1xuICAgICAgICAgIC8vIG93bmVyOiAneHVnYW95aScsIC8vIEdpdEh1Ylx1NEVEM1x1NUU5M1x1NjI0MFx1NjcwOVx1ODAwNVxuICAgICAgICAgIC8vIGFkbWluOiBbJ3h1Z2FveWknXSwgLy8gXHU1QkY5XHU0RUQzXHU1RTkzXHU2NzA5XHU1MTk5XHU2NzQzXHU5NjUwXHU3Njg0XHU0RUJBXG4gICAgICAgICAgLy8gLy8gZGlzdHJhY3Rpb25GcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAvLyBwYWdlckRpcmVjdGlvbjogJ2xhc3QnLCAvLyAnZmlyc3QnXHU2QjYzXHU1RThGIHwgJ2xhc3QnXHU1MDEyXHU1RThGXG4gICAgICAgICAgLy8gaWQ6ICc8JS0gKGZyb250bWF0dGVyLnBlcm1hbGluayB8fCBmcm9udG1hdHRlci50by5wYXRoKS5zbGljZSgtMTYpICU+JywgLy8gIFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTUyRlx1NEUwMFx1NjgwN1x1OEJDNixcdTk1N0ZcdTVFQTZcdTRFMERcdTgwRkRcdThEODVcdThGQzc1MFxuICAgICAgICAgIC8vIHRpdGxlOiAnXHUzMDBDXHU4QkM0XHU4QkJBXHUzMDBEPCUtIGZyb250bWF0dGVyLnRpdGxlICU+JywgLy8gR2l0SHViIGlzc3VlIFx1NzY4NFx1NjgwN1x1OTg5OFxuICAgICAgICAgIC8vIGxhYmVsczogWydHaXRhbGsnLCAnQ29tbWVudCddLCAvLyBHaXRIdWIgaXNzdWUgXHU3Njg0XHU2ODA3XHU3QjdFXG4gICAgICAgICAgLy8gYm9keTpcbiAgICAgICAgICAgIC8vICdcdTk4NzVcdTk3NjJcdUZGMUE8JS0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIChmcm9udG1hdHRlci50by5wYXRoIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSkgJT4nLCAvLyBHaXRIdWIgaXNzdWUgXHU3Njg0XHU1MTg1XHU1QkI5XG4gICAgICAgIC8vIH0sXG4gICAgICAvLyB9LFxuICAgIC8vIF0sXG4gICAgW1xuICAgICAgJ0B2dWVwcmVzcy9sYXN0LXVwZGF0ZWQnLCAvLyBcIlx1NEUwQVx1NkIyMVx1NjZGNFx1NjVCMFwiXHU2NUY2XHU5NUY0XHU2ODNDXHU1RjBGXG4gICAgICB7XG4gICAgICAgIHRyYW5zZm9ybWVyOiAodGltZXN0YW1wLCBsYW5nKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGRheWpzKHRpbWVzdGFtcCkuZm9ybWF0KCdZWVlZL01NL0RELCBISDptbTpzcycpXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIF0sXG5cbiAgbWFya2Rvd246IHtcbiAgICBsaW5lTnVtYmVyczogdHJ1ZSxcbiAgICBleHRyYWN0SGVhZGVyczogWydoMicsICdoMycsICdoNCcsICdoNScsICdoNiddLCAvLyBcdTYzRDBcdTUzRDZcdTY4MDdcdTk4OThcdTUyMzBcdTRGQTdcdThGQjlcdTY4MEZcdTc2ODRcdTdFQTdcdTUyMkJcdUZGMENcdTlFRDhcdThCQTRbJ2gyJywgJ2gzJ11cbiAgfSxcblxuICAvLyBcdTc2RDFcdTU0MkNcdTY1ODdcdTRFRjZcdTUzRDhcdTUzMTZcdTVFNzZcdTkxQ0RcdTY1QjBcdTY3ODRcdTVFRkFcbiAgZXh0cmFXYXRjaEZpbGVzOiBbXG4gICAgJy52dWVwcmVzcy9jb25maWcudHMnLFxuLy8gICAgJy52dWVwcmVzcy9jb25maWcvaHRtbE1vZHVsZXMudHMnLFxuICBdXG59KVxuXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFHQTtBQUNBO0FBRUE7QUFJQSxJQUFPLGlCQUFRLHlCQUE0QztBQUFBLEVBRXpELE9BQU8sUUFBUSw4Q0FBOEM7QUFBQSxFQUU3RCxTQUFTO0FBQUEsSUFDUCxLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUE7QUFBQTtBQUFBLEVBTWpCLGFBQWE7QUFBQSxJQUVYLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxnQkFBTSxNQUFNO0FBQUEsTUFDcEI7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUVMO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsY0FDTCxFQUFFLE1BQU0sY0FBYyxNQUFNO0FBQUEsY0FDNUIsRUFBRSxNQUFNLFNBQVMsTUFBTTtBQUFBLGNBQzFCLEVBQUUsTUFBTSxVQUFVLE1BQU07QUFBQTtBQUFBO0FBQUEsVUFHekI7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxjQUNMLEVBQUUsTUFBTSwrQkFBVyxNQUFNO0FBQUEsY0FLekI7QUFBQSxnQkFDRSxNQUFNO0FBQUEsZ0JBQ04sTUFBTTtBQUFBO0FBQUEsY0FFUjtBQUFBLGdCQUNFLE1BQU07QUFBQSxnQkFDTixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTWhCO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTCxFQUFFLE1BQU0sY0FBYyxNQUFNO0FBQUEsVUFDNUIsRUFBRSxNQUFNLGdCQUFNLE1BQU07QUFBQSxVQUNyQixFQUFFLE1BQU0sZ0JBQU0sTUFBTTtBQUFBLFVBQ25CLEVBQUUsTUFBTSxxQkFBVyxNQUFNO0FBQUEsVUFDekIsRUFBRSxNQUFNLFdBQVcsTUFBTTtBQUFBO0FBQUE7QUFBQSxNQUc3QjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLFVBQVUsTUFBTTtBQUFBLFVBQ3hCLEVBQUUsTUFBTSxRQUFRLE1BQU07QUFBQSxVQUN0QixFQUFFLE1BQU0sU0FBUyxNQUFNO0FBQUEsVUFDdkIsRUFBRSxNQUFNLFlBQVksTUFBTTtBQUFBLFVBQ2pDLEVBQUUsTUFBTSxnQkFBTSxNQUFNO0FBQUE7QUFBQTtBQUFBLE1BR2pCO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTCxFQUFFLE1BQU0sc0JBQU8sTUFBTTtBQUFBLFVBQ3JCLEVBQUUsTUFBTSxpQkFBaUIsTUFBTTtBQUFBLFVBQy9CLEVBQUUsTUFBTSw0QkFBUSxNQUFNO0FBQUE7QUFBQTtBQUFBLE1BRzFCLEVBQUUsTUFBTSxnQkFBTSxNQUFNO0FBQUEsTUFDcEI7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQTtBQUFBLE1BT1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSxnQkFBTSxNQUFNO0FBQUEsVUFDcEIsRUFBRSxNQUFNLGdCQUFNLE1BQU07QUFBQSxVQUNwQixFQUFFLE1BQU0sZ0JBQU0sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSTFCLGNBQWM7QUFBQSxJQUNkLE1BQU07QUFBQSxJQUVOLHNCQUFzQjtBQUFBLElBQ3RCLGFBQWE7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxJQUNYLGNBQWM7QUFBQSxJQThDZCxTQUFTO0FBQUEsSUFHVCxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUE7QUFBQSxJQUtSLFNBQVM7QUFBQSxNQUVQLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQTtBQUFBLElBSVYsUUFBUTtBQUFBLE1BRU4sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWdCWixRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUE7QUFBQTtBQUFBLEVBVWhCLE1BQU07QUFBQSxJQUNKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNO0FBQUEsSUFDOUI7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBO0FBQUE7QUFBQSxJQUliLENBQUMsUUFBUSxFQUFFLE1BQU0sZUFBZSxTQUFTO0FBQUE7QUFBQSxFQWEzQyxTQUFzQjtBQUFBLElBWWxCO0FBQUEsSUE4QkY7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYyxDQUFDLCtCQUErQjtBQUFBLFFBQzlDLGFBQWE7QUFBQSxRQUNiLFVBQVU7QUFBQSxRQUNWLGNBQWM7QUFBQTtBQUFBO0FBQUEsSUFJbEI7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsVUFBVTtBQUFBLFVBSVIsVUFBVTtBQUFBLFVBQ1YsU0FBUztBQUFBLFVBQ1QsWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSWxCO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLFNBQVM7QUFBQSxVQUNQLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXdCZjtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxhQUFhLENBQUMsV0FBVyxTQUFTO0FBQ2hDLGlCQUFPLE1BQU0sV0FBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU12QyxVQUFVO0FBQUEsSUFDUixhQUFhO0FBQUEsSUFDYixnQkFBZ0IsQ0FBQyxNQUFNLE1BQU0sTUFBTSxNQUFNO0FBQUE7QUFBQSxFQUkzQyxpQkFBaUI7QUFBQSxJQUNmO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K