import { u as B, a as y, b as V, c as q, f as x, d as u, j as o, P as w, e as j, S as K, g as G, N as g, h as v, i as O, M as p, T as Q, s as H, L as A, B as L, k as f, l as F, A as k, m as S } from "./index-043cbe5c.mjs";
function J(a) {
  const r = B(a);
  return y(() => {
    r.current = a;
  }), V(() => (...e) => {
    var t;
    return (t = r.current) == null ? void 0 : t.call(r, ...e);
  }, []);
}
var h = "Avatar", [W, ce] = q(h), [X, N] = W(h), C = x(
  (a, r) => {
    const { __scopeAvatar: e, ...t } = a, [l, s] = u("idle");
    return /* @__PURE__ */ o.jsx(
      X,
      {
        scope: e,
        imageLoadingStatus: l,
        onImageLoadingStatusChange: s,
        children: /* @__PURE__ */ o.jsx(w.span, { ...t, ref: r })
      }
    );
  }
);
C.displayName = h;
var R = "AvatarImage", M = x(
  (a, r) => {
    const { __scopeAvatar: e, src: t, onLoadingStatusChange: l = () => {
    }, ...s } = a, n = N(R, e), i = Y(t), c = J((d) => {
      l(d), n.onImageLoadingStatusChange(d);
    });
    return j(() => {
      i !== "idle" && c(i);
    }, [i, c]), i === "loaded" ? /* @__PURE__ */ o.jsx(w.img, { ...s, ref: r, src: t }) : null;
  }
);
M.displayName = R;
var I = "AvatarFallback", P = x(
  (a, r) => {
    const { __scopeAvatar: e, delayMs: t, ...l } = a, s = N(I, e), [n, i] = u(t === void 0);
    return y(() => {
      if (t !== void 0) {
        const c = window.setTimeout(() => i(!0), t);
        return () => window.clearTimeout(c);
      }
    }, [t]), n && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ o.jsx(w.span, { ...l, ref: r }) : null;
  }
);
P.displayName = I;
function Y(a) {
  const [r, e] = u("idle");
  return j(() => {
    if (!a) {
      e("error");
      return;
    }
    let t = !0;
    const l = new window.Image(), s = (n) => () => {
      t && e(n);
    };
    return e("loading"), l.onload = s("loaded"), l.onerror = s("error"), l.src = a, () => {
      t = !1;
    };
  }, [a]), r;
}
var Z = C, D = M, ee = P;
const U = ({ image: a, label: r, labelColor: e, bgColor: t, size: l, className: s }) => {
  let n = "", i = " -mb-2 ";
  switch (l) {
    case "sm":
      n = " w-7 h-7 text-sm ";
      break;
    case "lg":
      n = " w-12 h-12 text-xl ";
      break;
    case "xl":
      n = " w-16 h-16 text-2xl ", i = " -mb-3 ";
      break;
    case "2xl":
      n = " w-20 h-20 text-2xl ", i = " -mb-3 ";
      break;
    default:
      n = " w-10 h-10 text-md ";
      break;
  }
  return /* @__PURE__ */ o.jsxs(Z, { className: `relative inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle ${n}`, children: [
    a ? /* @__PURE__ */ o.jsx(D, { className: `absolute z-20 h-full w-full object-cover ${s && s}`, src: a }) : /* @__PURE__ */ o.jsx("span", { className: `${e && `text-${e}`} relative z-10 inline-flex h-full w-full items-center justify-center p-2 font-semibold ${s && s}`, style: t ? { backgroundColor: t } : {}, children: r }),
    /* @__PURE__ */ o.jsx(ee, { asChild: !0, children: /* @__PURE__ */ o.jsx(K, { className: `${i} absolute z-0 h-full w-full text-grey-300` }) })
  ] });
}, $ = ({
  id: a,
  title: r,
  detail: e,
  action: t,
  hideActions: l,
  avatar: s,
  className: n,
  testId: i,
  separator: c = !0,
  bgOnHover: d = !0,
  paddingRight: z = !0,
  onClick: m,
  children: b
}) => {
  const E = (T) => {
    m == null || m(T);
  }, _ = G(
    "group/list-item flex items-center justify-between",
    d && "hover:bg-gradient-to-r hover:from-white hover:to-grey-50 dark:hover:from-black dark:hover:to-grey-950",
    c ? "border-b border-grey-100 last-of-type:border-b-transparent hover:border-grey-200 dark:border-grey-900 dark:hover:border-grey-800" : "border-y border-transparent hover:border-grey-200 first-of-type:hover:border-t-transparent dark:hover:border-grey-800",
    n
  );
  return /* @__PURE__ */ o.jsxs("div", { className: _, "data-testid": i, children: [
    b || /* @__PURE__ */ o.jsxs("div", { className: `flex grow items-center gap-3 ${m && "cursor-pointer"}`, onClick: E, children: [
      s && s,
      /* @__PURE__ */ o.jsxs("div", { className: "flex grow flex-col py-3 pr-6", id: a, children: [
        /* @__PURE__ */ o.jsx("span", { children: r }),
        e && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-grey-700", children: e })
      ] })
    ] }),
    t && /* @__PURE__ */ o.jsx("div", { className: `visible py-3 md:pl-6 ${z && "md:pr-6"} ${l ? "group-hover/list-item:visible md:invisible" : ""}`, children: t })
  ] });
}, te = g.create(() => {
  const { updateRoute: a } = v(), r = g.useModal(), [e, t] = u(""), [l, s] = u(null);
  async function n() {
    H({
      message: "Site followed",
      type: "success"
    }), r.remove(), a("");
  }
  async function i() {
    s(l);
  }
  const c = O("index", n, i);
  return /* @__PURE__ */ o.jsx(
    p,
    {
      afterClose: () => {
        c.reset(), a("");
      },
      cancelLabel: "Cancel",
      okLabel: "Follow",
      size: "sm",
      title: "Follow a Ghost site",
      onOk: () => c.mutate(e),
      children: /* @__PURE__ */ o.jsx("div", { className: "mt-3 flex flex-col gap-4", children: /* @__PURE__ */ o.jsx(
        Q,
        {
          autoFocus: !0,
          error: !!l,
          hint: l,
          placeholder: "@username@hostname",
          title: "Profile name",
          value: e,
          "data-test-new-follower": !0,
          onChange: (d) => t(d.target.value)
        }
      ) })
    }
  );
});
function oe(a) {
  var s;
  const e = (s = F().data) == null ? void 0 : s.site, t = (e == null ? void 0 : e.url) ?? window.location.origin, l = new k(
    new URL(t),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    a
  );
  return S({
    queryKey: [`followers:${a}`],
    async queryFn() {
      const n = await l.getFollowers();
      return await Promise.all(n.map((c) => l.getActor(c)));
    }
  });
}
const ae = ({}) => {
  const { updateRoute: a } = v(), { data: r = [], isLoading: e } = oe("index");
  return /* @__PURE__ */ o.jsx(
    p,
    {
      afterClose: () => {
        a("profile");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Followers",
      topRightContent: "close",
      children: /* @__PURE__ */ o.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: e ? /* @__PURE__ */ o.jsx("p", { children: "Loading followers..." }) : /* @__PURE__ */ o.jsx(A, { children: r.map((t) => /* @__PURE__ */ o.jsx(
        $,
        {
          action: /* @__PURE__ */ o.jsx(L, { color: "grey", label: "Remove", link: !0 }),
          avatar: /* @__PURE__ */ o.jsx(U, { image: t.icon, size: "sm" }),
          detail: f(t),
          id: "list-item",
          title: t.name || f(t)
        },
        t.id
      )) }) })
    }
  );
}, re = g.create(ae);
function se(a) {
  var s;
  const e = (s = F().data) == null ? void 0 : s.site, t = (e == null ? void 0 : e.url) ?? window.location.origin, l = new k(
    new URL(t),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    a
  );
  return S({
    queryKey: [`following:${a}`],
    async queryFn() {
      return l.getFollowing();
    }
  });
}
const le = ({}) => {
  const { updateRoute: a } = v(), { data: r = [] } = se("index");
  return /* @__PURE__ */ o.jsx(
    p,
    {
      afterClose: () => {
        a("profile");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Following",
      topRightContent: "close",
      children: /* @__PURE__ */ o.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ o.jsx(A, { children: r.map((e) => /* @__PURE__ */ o.jsx(
        $,
        {
          action: /* @__PURE__ */ o.jsx(L, { color: "grey", label: "Unfollow", link: !0 }),
          avatar: /* @__PURE__ */ o.jsx(U, { image: e.icon, size: "sm" }),
          detail: f(e),
          id: "list-item",
          title: e.name
        },
        e.id
      )) }) })
    }
  );
}, ne = g.create(le), de = { FollowSite: te, ViewFollowing: ne, ViewFollowers: re };
export {
  de as default
};
//# sourceMappingURL=modals-39d50cfc.mjs.map
