"use strict";
(self.webpackChunkweb_dcloud = self.webpackChunkweb_dcloud || []).push([
  [530],
  {
    12016: (e, s, t) => {
      t.r(s), t.d(s, { default: () => C });
      var a = t(65043),
        l = t(36290),
        r = t(16007),
        i = t(65226),
        c = t(56473),
        n = t(2476),
        d = t(93480),
        o = t(66883),
        x = (t(33836), t(70579));
      const p = function () {
        const [e, s] = (0, a.useState)([]),
          [t, l] = (0, a.useState)(0),
          [r, p] = (0, a.useState)(0),
          [m, f] = (0, a.useState)(0),
          [u, h] = (0, a.useState)(0);
        (0, a.useEffect)(() => {
          (async () => {
            let e = await fetch("https://api.dcicloud.ai/stats");
            (e = await e.json()),
              e.data.forEach((e) => {
                l((s) => s + parseFloat(e.cloudCompute)),
                  p((s) => s + parseFloat(e.cloudDedicated)),
                  f((s) => s + parseFloat(e.cloudGPU)),
                  h((s) => s + parseFloat(e.bareMetal));
              }),
              s(e);
          })();
        }, []);
        const g = {
            loop: !0,
            autoplay: !0,
            animationData: c,
            rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
          },
          j = {
            loop: !0,
            autoplay: !0,
            animationData: n,
            rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
          },
          w = {
            loop: !0,
            autoplay: !0,
            animationData: d,
            rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
          },
          F = {
            loop: !0,
            autoplay: !0,
            animationData: o,
            rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
          };
        return (0, x.jsxs)("div", {
          id: "home",
          className:
            "w-full gap-[24px] lg:gap-[60px] flex relative lg:flex-row flex-col justify-center items-center",
          children: [
            (0, x.jsxs)("div", {
              className: "flex flex-col gap-4",
              children: [
                (0, x.jsx)("h1", {
                  className:
                    "text-[#A9D2F5] text-5xl font-bold lg:text-start text-center",
                  children: "Explore the DGS Services",
                }),
                (0, x.jsx)("p", {
                  className: "text-[#71A3CE] lg:text-start text-center",
                  children:
                    "By leveraging smart contracts, DGS creates a marketplace for users to rent and share resources like server space, cloud computing, network capacity, and even GPU processing power. This fosters a collaborative community with a revenue-sharing model for token holders, addressing the growing need for scalable and decentralized infrastructure with on-demand access for all.",
                }),
              ],
            }),
            (0, x.jsxs)("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 items-center w-full sm:w-[600px] lg:!w-[1500px] justify-evenly gap-10 text-[#71A3CE] py-[2rem] px-[4rem] before:rounded-[20px] after:rounded-[20px] !rounded-[20px] !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient",
              children: [
                (0, x.jsxs)("div", {
                  className: "flex flex-col items-center justify-center gap-3",
                  children: [
                    (0, x.jsx)("p", {
                      className: "text-lg",
                      children: "Cloud Compute",
                    }),
                    (0, x.jsxs)("div", {
                      className: "flex items-center justify-center gap-1",
                      children: [
                        (0, x.jsx)(i.A, { options: j, height: 50, width: 50 }),
                        (0, x.jsx)("h2", {
                          className: "font-bold text-5xl",
                          children: t,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, x.jsxs)("div", {
                  className: "flex flex-col items-center justify-center gap-3",
                  children: [
                    (0, x.jsx)("p", {
                      className: "text-lg",
                      children: "Cloud Dedicated",
                    }),
                    (0, x.jsxs)("div", {
                      className: "flex items-center justify-center gap-1",
                      children: [
                        (0, x.jsx)(i.A, { options: w, height: 50, width: 50 }),
                        (0, x.jsx)("h2", {
                          className: "font-bold text-5xl",
                          children: r,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, x.jsxs)("div", {
                  className: "flex flex-col items-center justify-center gap-3",
                  children: [
                    (0, x.jsx)("p", {
                      className: "text-lg",
                      children: "Cloud GPU",
                    }),
                    (0, x.jsxs)("div", {
                      className: "flex items-center justify-center gap-1",
                      children: [
                        (0, x.jsx)(i.A, { options: F, height: 50, width: 50 }),
                        (0, x.jsx)("h2", {
                          className: "font-bold text-5xl",
                          children: m,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, x.jsxs)("div", {
                  className: "flex flex-col items-center justify-center gap-3",
                  children: [
                    (0, x.jsx)("p", {
                      className: "text-lg",
                      children: "Bare Metal",
                    }),
                    (0, x.jsxs)("div", {
                      className: "flex items-center justify-center gap-1",
                      children: [
                        (0, x.jsx)(i.A, { options: g, height: 50, width: 50 }),
                        (0, x.jsx)("h2", {
                          className: "font-bold text-5xl",
                          children: u,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var m = t(58662);
      const f = t.p + "static/media/LeftPc.55d033a1a1bef66de4bf.png",
        u = t.p + "static/media/RightPc.4ea636ef9974ebbbdd06.png";
      t.p, t.p, t.p;
      var h = t(45589);
      const g = t.p + "static/media/DCICloudCompute.ef8fbc31eaf87c75ad16.mp4",
        j = t.p + "static/media/DCICloudGPU.26f6532e1306762c8773.mp4",
        w =
          (t.p,
          t.p,
          t.p + "static/media/DCINetworking.74f9fe7dc6fb76f4b478.mp4");
      var F = t(23156);
      const v = t.p + "static/media/board.98d1d553b30c5f458af494e231ab9f6d.svg";
      var N = t(69621),
        y = t(60184);
      const b = function () {
        return (0, x.jsxs)("div", {
          id: "services",
          className:
            "w-full flex flex-col relative gap-[60px] justify-center mt-[60px] lg:mt-[140px] items-center",
          children: [
            (0, x.jsxs)("div", {
              className: "w-full flex items-center justify-center relative",
              children: [
                (0, x.jsx)("div", {
                  className:
                    "w-full flex items-center justify-start absolute z-[-99]",
                  children: (0, x.jsx)("img", {
                    src: f,
                    alt: "",
                    className: "w-[230px] opacity-40",
                  }),
                }),
                (0, x.jsx)("div", {
                  className:
                    "w-[90%] relative z-40 max-w-[1320px] flex items-start justify-center",
                  children: (0, x.jsxs)("div", {
                    className:
                      "w-full flex items-center gap-4 relative z-10 flex-col md:flex-row justify-between !bg-gradient-to-b !from-[#FFFFFF1F] !to-[#73737303] border-gradient !p-8",
                    children: [
                      (0, x.jsxs)(m.P.div, {
                        initial: { translateX: -130, opacity: 0 },
                        whileInView: { translateX: 0, opacity: 1 },
                        viewport: { once: !0 },
                        className:
                          "w-full flex mt-3 lg:mt-0 relative order-2 md:order-1 flex-col items-start gap-4 justify-center text-white",
                        children: [
                          (0, x.jsx)("span", {
                            className:
                              "font-bold text-[30px] sm:text-[40px] text-[#00E0FF]",
                            children: "DGS Cloud Compute",
                          }),
                          (0, x.jsx)("span", {
                            className: "text-[#ffffffb0]",
                            children:
                              "DGS offers a comprehensive suite of cloud solutions to perfectly match your needs. Whether you prioritize affordability, ease of use, or raw power, we have the ideal option for you.",
                          }),
                          (0, x.jsxs)("div", {
                            className:
                              "flex items-center !p-0 flex-wrap justify-evenly w-full gap-y-2 lg:gap-x-6 text-xs lg:text-base gap-x-4 !bg-gradient-to-b !m-0  !from-[#FFFFFF1F] !to-[#73737303] rounded-[20px]",
                            children: [
                              (0, x.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 !px-6 !py-2 md:w-auto w-full",
                                children: [
                                  (0, x.jsx)(N.Wx, { className: "w-[30px]" }),
                                  (0, x.jsx)("span", {
                                    className: "text-[#00E0FF]",
                                    children: "Shared CPU",
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 !px-6 !py-2 md:w-auto w-full",
                                children: [
                                  (0, x.jsx)(N.E9, { className: "w-[30px]" }),
                                  (0, x.jsx)("span", {
                                    className: "text-[#00E0FF]",
                                    children: "Dedicated CPU",
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 !px-6 !py-2 md:w-auto w-full",
                                children: [
                                  (0, x.jsx)(N.qA, { className: "w-[30px]" }),
                                  (0, x.jsx)("span", {
                                    className: "text-[#00E0FF]",
                                    children: "Bare Metal",
                                  }),
                                ],
                              }),
                            ],
                          })                          
                        ],
                      }),
                      (0, x.jsx)(m.P.div, {
                        initial: { translateX: 130, opacity: 0 },
                        whileInView: { translateX: 0, opacity: 1 },
                        viewport: { once: !0 },
                        className: "md:order-2 order-1 md:w-[40%] lg:w-fit",
                        children: (0, x.jsxs)("video", {
                          className: "w-full  rounded-lg lg:w-[500px]",
                          loop: !0,
                          autoPlay: !0,
                          muted: !0,
                          children: [
                            (0, x.jsx)("source", { src: g, type: "video/mp4" }),
                            "Your browser does not support the video tag.",
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, x.jsxs)("div", {
              className: "w-full flex items-center justify-center relative",
              children: [
                (0, x.jsx)("div", {
                  className:
                    "w-full flex items-center justify-start absolute z-[-99]",
                  children: (0, x.jsx)("img", {
                    src: u,
                    alt: "",
                    className: "w-[230px] opacity-40",
                  }),
                }),
                (0, x.jsx)("div", {
                  className:
                    "w-[90%] relative z-40 max-w-[1320px] flex items-start justify-center",
                  children: (0, x.jsxs)("div", {
                    className:
                      "w-full flex items-center relative gap-4 z-10 flex-col md:flex-row justify-between bg-gradient-to-r !from-[#FFFFFF1F] !to-[#73737303] border-gradient !p-8",
                    children: [
                      (0, x.jsxs)(m.P.div, {
                        initial: { translateX: -130, opacity: 0 },
                        whileInView: { translateX: 0, opacity: 1 },
                        viewport: { once: !0 },
                        className:
                          "w-full flex mt-3 lg:mt-0 relative order-2 md:order-1 flex-col items-start gap-4 justify-center text-white",
                        children: [
                          (0, x.jsx)("span", {
                            className:
                              "font-bold text-[30px] sm:text-[40px] text-[#00E0FF]",
                            children: "DGS Cloud GPU",
                          }),
                          (0, x.jsx)("span", {
                            className: "text-[#ffffffb0]",
                            children:
                              "DGS empowers everyone to access the latest AI and graphics technologies, unlocking new possibilities for your projects. Supercharge your AI and graphics applications with DGS's cloud-based GPUs.",
                          }),
                          (0, x.jsxs)("div", {
                            className:
                              "grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 items-center !p-0 justify-start w-full gap-y-2 lg:gap-x-2 text-xs lg:text-base gap-x-4 !bg-gradient-to-b !m-0  !from-[#FFFFFF1F] !to-[#73737303] rounded-[20px]",
                            children: [
                              (0, x.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 !px-6 !py-2 w-full md:w-auto",
                                children: [
                                  (0, x.jsx)("img", {
                                    src: v,
                                    alt: "",
                                    className: "w-[30px] h-[30px]",
                                  }),
                                  (0, x.jsx)("span", {
                                    className: "text-[#00E0FF]",
                                    children: "NVIDIA GH200",
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 !px-6 !py-2 w-full md:w-auto",
                                children: [
                                  (0, x.jsx)("img", {
                                    src: v,
                                    alt: "",
                                    className: "w-[30px] h-[30px]",
                                  }),
                                  (0, x.jsx)("span", {
                                    className: "text-[#00E0FF]",
                                    children: "NVIDIA A16",
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 !px-6 !py-2 w-full md:w-auto",
                                children: [
                                  (0, x.jsx)("img", {
                                    src: v,
                                    alt: "",
                                    className: "w-[30px] h-[30px]",
                                  }),
                                  (0, x.jsx)("span", {
                                    className: "text-[#00E0FF]",
                                    children: "NVIDIA A40",
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 !px-6 !py-2 w-full md:w-auto",
                                children: [
                                  (0, x.jsx)("img", {
                                    src: v,
                                    alt: "",
                                    className: "w-[30px] h-[30px]",
                                  }),
                                  (0, x.jsx)("span", {
                                    className: "text-[#00E0FF]",
                                    children: "NVIDIA L40S",
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 !px-6 !py-2 w-full md:w-auto",
                                children: [
                                  (0, x.jsx)("img", {
                                    src: v,
                                    alt: "",
                                    className: "w-[30px] h-[30px]",
                                  }),
                                  (0, x.jsx)("span", {
                                    className: "text-[#00E0FF]",
                                    children: "NVIDIA A100",
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 !px-6 !py-2 w-full md:w-auto",
                                children: [
                                  (0, x.jsx)("img", {
                                    src: v,
                                    alt: "",
                                    className: "w-[30px] h-[30px]",
                                  }),
                                  (0, x.jsx)("span", {
                                    className: "text-[#00E0FF]",
                                    children: "NVIDIA H100",
                                  }),
                                ],
                              }),
                            ],
                          })                          
                        ],
                      }),
                      (0, x.jsx)(m.P.div, {
                        initial: { translateX: 130, opacity: 0 },
                        whileInView: { translateX: 0, opacity: 1 },
                        viewport: { once: !0 },
                        className: "md:order-2 order-1 md:w-[40%] lg:w-fit",
                        children: (0, x.jsxs)("video", {
                          className: "w-full rounded-lg lg:w-[500px]",
                          loop: !0,
                          autoPlay: !0,
                          muted: !0,
                          children: [
                            (0, x.jsx)("source", { src: j, type: "video/mp4" }),
                            "Your browser does not support the video tag.",
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, x.jsxs)("div", {
              className: "w-full flex items-center justify-center relative",
              children: [
                (0, x.jsx)("div", {
                  className:
                    "w-full flex items-center justify-start absolute z-[-99]",
                  children: (0, x.jsx)("img", {
                    src: u,
                    alt: "",
                    className: "w-[230px] opacity-40",
                  }),
                }),
                (0, x.jsx)("div", {
                  className:
                    "w-[90%] relative z-40 max-w-[1320px] flex items-start justify-center",
                  children: (0, x.jsxs)("div", {
                    className:
                      "w-full flex gap-4 items-center relative z-10 flex-col md:flex-row justify-between bg-gradient-to-r !from-[#FFFFFF1F] !to-[#73737303] border-gradient !p-8",
                    children: [
                      (0, x.jsxs)(m.P.div, {
                        initial: { translateX: -130, opacity: 0 },
                        whileInView: { translateX: 0, opacity: 1 },
                        viewport: { once: !0 },
                        className:
                          "w-full flex mt-3 lg:mt-0 relative order-2 md:order-1 flex-col items-start gap-4 justify-center text-white",
                        children: [
                          (0, x.jsx)("span", {
                            className:
                              "font-bold text-[30px] sm:text-[40px] text-[#00E0FF]",
                            children: "DGS Proxy",
                          }),
                          (0, x.jsx)("span", {
                            className: "text-[#ffffffb0]",
                            children:
                              "DGSCloud offers robust and secure proxy server services designed to enhance online privacy, improve browsing speed, and ensure safe internet access. Our advanced proxy solutions cater to a wide range of needs, from personal browsing to enterprise-level security and content management.",
                          }),
                          (0, x.jsxs)("div", {
                            className:
                              "flex items-center flex-wrap justify-evenly w-full gap-y-2 lg:gap-x-0 text-xs lg:text-base gap-x-4 !bg-gradient-to-b !m-0 !from-[#FFFFFF1F] !to-[#73737303] rounded-[20px] px-0 py-3",
                            children: [
                              (0, x.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 !px-2 !py-2 md:w-auto w-full",
                                children: [
                                  (0, x.jsx)(F.eFy, {
                                    className: "w-[30px] text-[#00E0FF]",
                                  }),
                                  (0, x.jsx)("span", {
                                    className: "text-[#00E0FF]",
                                    children: "Privacy Protection",
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 !px-2 !py-2 md:w-auto w-full",
                                children: [
                                  (0, x.jsx)(F.eFy, {
                                    className: "w-[30px] text-[#00E0FF]",
                                  }),
                                  (0, x.jsx)("span", {
                                    className: "text-[#00E0FF]",
                                    children: "Security Enhancement",
                                  }),
                                ],
                              }),
                              (0, x.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 !px-2 !py-2 md:w-auto w-full",
                                children: [
                                  (0, x.jsx)(F.eFy, {
                                    className: "w-[30px] text-[#00E0FF]",
                                  }),
                                  (0, x.jsx)("span", {
                                    className: "text-[#00E0FF]",
                                    children: "Access Flexibility",
                                  }),
                                ],
                              }),
                            ],
                          })                          
                        ],
                      }),
                      (0, x.jsx)(m.P.div, {
                        initial: { translateX: 130, opacity: 0 },
                        whileInView: { translateX: 0, opacity: 1 },
                        viewport: { once: !0 },
                        className: "md:order-2 order-1 md:w-[40%] lg:w-fit",
                        children: (0, x.jsxs)("video", {
                          className: "w-full rounded-lg lg:w-[500px]",
                          loop: !0,
                          autoPlay: !0,
                          muted: !0,
                          children: [
                            (0, x.jsx)("source", { src: w, type: "video/mp4" }),
                            "Your browser does not support the video tag.",
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      t.p;
      t(87254), t(43488), t(44999);
      const C = function () {
        return (0, x.jsxs)("div", {
          className:
            "w-screen lg:w-full flex flex-col items-center justify-center min-h-screen bg-linear2 pb-[2rem]",
          children: [
            (0, x.jsx)(l.A, {}),
            (0, x.jsxs)("section", {
              className:
                "flex flex-col items-center justify-center w-full overflow-hidden px-[2rem] lg:px-[8rem]",
              children: [(0, x.jsx)(p, {}), (0, x.jsx)(b, {})],
            }),
            (0, x.jsx)(r.A, {}),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=530.b1e6164d.chunk.js.map
