(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/client-boundary/PromisifiedAuthProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PromisifiedAuthProvider": (()=>PromisifiedAuthProvider),
    "usePromisifiedAuth": (()=>usePromisifiedAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$internal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/internal.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$compat$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/compat/router.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const PromisifiedAuthContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
function PromisifiedAuthProvider({ authPromise, children }) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PromisifiedAuthContext.Provider, {
        value: authPromise
    }, children);
}
function usePromisifiedAuth(options = {}) {
    const isPagesRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$compat$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const valueFromContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(PromisifiedAuthContext);
    let resolvedData = valueFromContext;
    if (valueFromContext && "then" in valueFromContext) {
        resolvedData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(valueFromContext);
    }
    if (typeof window === "undefined") {
        if (isPagesRouter) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAuth"])(options);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDerivedAuth"])({
            ...resolvedData,
            ...options
        });
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useAuth"])({
            ...resolvedData,
            ...options
        });
    }
}
;
 //# sourceMappingURL=PromisifiedAuthProvider.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/client-boundary/hooks/useSafeLayoutEffect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useSafeLayoutEffect": (()=>useSafeLayoutEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const useSafeLayoutEffect = typeof window !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect;
;
 //# sourceMappingURL=useSafeLayoutEffect.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/client-boundary/NextOptionsContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClerkNextOptionsProvider": (()=>ClerkNextOptionsProvider),
    "useClerkNextOptions": (()=>useClerkNextOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const ClerkNextOptionsCtx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(void 0);
ClerkNextOptionsCtx.displayName = "ClerkNextOptionsCtx";
const useClerkNextOptions = ()=>{
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(ClerkNextOptionsCtx);
    return ctx == null ? void 0 : ctx.value;
};
const ClerkNextOptionsProvider = (props)=>{
    const { children, options } = props;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClerkNextOptionsCtx.Provider, {
        value: {
            value: options
        }
    }, children);
};
;
 //# sourceMappingURL=NextOptionsContext.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/clerk-js-script.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClerkJSScript": (()=>ClerkJSScript)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$internal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/internal.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$XL46KY3Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-XL46KY3Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$NextOptionsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/client-boundary/NextOptionsContext.js [app-client] (ecmascript)");
;
;
;
;
;
;
function ClerkJSScript(props) {
    const { publishableKey, clerkJSUrl, clerkJSVersion, clerkJSVariant, nonce } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$NextOptionsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClerkNextOptions"])();
    const { domain, proxyUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClerk"])();
    if (!publishableKey) {
        return null;
    }
    const options = {
        domain,
        proxyUrl,
        publishableKey,
        clerkJSUrl,
        clerkJSVersion,
        clerkJSVariant,
        nonce
    };
    const scriptUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$XL46KY3Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clerkJsScriptUrl"])(options);
    const Script = props.router === "app" ? "script" : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Script, {
        src: scriptUrl,
        "data-clerk-js-script": true,
        async: true,
        defer: props.router === "pages" ? false : void 0,
        crossOrigin: "anonymous",
        strategy: props.router === "pages" ? "beforeInteractive" : void 0,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$XL46KY3Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildClerkJsScriptAttributes"])(options)
    });
}
;
 //# sourceMappingURL=clerk-js-script.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_URL": (()=>API_URL),
    "API_VERSION": (()=>API_VERSION),
    "CLERK_JS_URL": (()=>CLERK_JS_URL),
    "CLERK_JS_VERSION": (()=>CLERK_JS_VERSION),
    "DOMAIN": (()=>DOMAIN),
    "ENCRYPTION_KEY": (()=>ENCRYPTION_KEY),
    "IS_SATELLITE": (()=>IS_SATELLITE),
    "KEYLESS_DISABLED": (()=>KEYLESS_DISABLED),
    "PROXY_URL": (()=>PROXY_URL),
    "PUBLISHABLE_KEY": (()=>PUBLISHABLE_KEY),
    "SDK_METADATA": (()=>SDK_METADATA),
    "SECRET_KEY": (()=>SECRET_KEY),
    "SIGN_IN_URL": (()=>SIGN_IN_URL),
    "SIGN_UP_URL": (()=>SIGN_UP_URL),
    "TELEMETRY_DEBUG": (()=>TELEMETRY_DEBUG),
    "TELEMETRY_DISABLED": (()=>TELEMETRY_DISABLED)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$apiUrlFromPublishableKey$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$VOHHPNGZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-VOHHPNGZ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$underscore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/underscore.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-GGFRMWFO.mjs [app-client] (ecmascript)");
;
;
;
const CLERK_JS_VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_JS_VERSION || "";
const CLERK_JS_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_JS_URL || "";
const API_VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CLERK_API_VERSION || "v1";
const SECRET_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CLERK_SECRET_KEY || "";
const PUBLISHABLE_KEY = ("TURBOPACK compile-time value", "pk_test_cmljaC11cmNoaW4tNzYuY2xlcmsuYWNjb3VudHMuZGV2JA") || "";
const ENCRYPTION_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CLERK_ENCRYPTION_KEY || "";
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.CLERK_API_URL || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$VOHHPNGZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiUrlFromPublishableKey"])(PUBLISHABLE_KEY);
const DOMAIN = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_DOMAIN || "";
const PROXY_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_PROXY_URL || "";
const IS_SATELLITE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_IS_SATELLITE) || false;
const SIGN_IN_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "";
const SIGN_UP_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "";
const SDK_METADATA = {
    name: "@clerk/nextjs",
    version: "6.19.2",
    environment: ("TURBOPACK compile-time value", "development")
};
const TELEMETRY_DISABLED = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED);
const TELEMETRY_DEBUG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG);
const KEYLESS_DISABLED = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_KEYLESS_DISABLED) || false;
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/sdk-versions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isNext13": (()=>isNext13),
    "isNextWithUnstableServerActions": (()=>isNextWithUnstableServerActions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/package.json (json)");
;
;
const isNext13 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__["default"].version.startsWith("13.");
const isNextWithUnstableServerActions = isNext13 || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__["default"].version.startsWith("14.0");
;
 //# sourceMappingURL=sdk-versions.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/feature-flags.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "canUseKeyless": (()=>canUseKeyless)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/utils/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-7HPDNZ3R.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/sdk-versions.js [app-client] (ecmascript)");
;
;
;
;
const canUseKeyless = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNextWithUnstableServerActions"] && // Next.js will inline the value of 'development' or 'production' on the client bundle, so this is client-safe.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7HPDNZ3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDevelopmentEnvironment"])() && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEYLESS_DISABLED"];
;
 //# sourceMappingURL=feature-flags.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/mergeNextClerkPropsWithEnv.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mergeNextClerkPropsWithEnv": (()=>mergeNextClerkPropsWithEnv)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$underscore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/underscore.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-GGFRMWFO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/server/constants.js [app-client] (ecmascript)");
;
;
;
const mergeNextClerkPropsWithEnv = (props)=>{
    var _a;
    return {
        ...props,
        publishableKey: props.publishableKey || ("TURBOPACK compile-time value", "pk_test_cmljaC11cmNoaW4tNzYuY2xlcmsuYWNjb3VudHMuZGV2JA") || "",
        clerkJSUrl: props.clerkJSUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_JS_URL,
        clerkJSVersion: props.clerkJSVersion || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_JS_VERSION,
        proxyUrl: props.proxyUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_PROXY_URL || "",
        domain: props.domain || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_DOMAIN || "",
        isSatellite: props.isSatellite || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_IS_SATELLITE),
        signInUrl: props.signInUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "",
        signUpUrl: props.signUpUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "",
        signInForceRedirectUrl: props.signInForceRedirectUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL || "",
        signUpForceRedirectUrl: props.signUpForceRedirectUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL || "",
        signInFallbackRedirectUrl: props.signInFallbackRedirectUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL || "",
        signUpFallbackRedirectUrl: props.signUpFallbackRedirectUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL || "",
        afterSignInUrl: props.afterSignInUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || "",
        afterSignUpUrl: props.afterSignUpUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || "",
        newSubscriptionRedirectUrl: props.newSubscriptionRedirectUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_CHECKOUT_CONTINUE_URL || "",
        telemetry: (_a = props.telemetry) != null ? _a : {
            disabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED),
            debug: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$GGFRMWFO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTruthy"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG)
        },
        sdkMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_METADATA"]
    };
};
;
 //# sourceMappingURL=mergeNextClerkPropsWithEnv.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/client-boundary/hooks/usePagesRouter.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePagesRouter": (()=>usePagesRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$compat$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/compat/router.js [app-client] (ecmascript)");
;
;
const usePagesRouter = ()=>{
    return {
        pagesRouter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$compat$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])()
    };
};
;
 //# sourceMappingURL=usePagesRouter.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/router-telemetry.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouterTelemetry": (()=>RouterTelemetry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/telemetry.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$N74BHP5H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-N74BHP5H.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2f$usePagesRouter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/client-boundary/hooks/usePagesRouter.js [app-client] (ecmascript)");
;
;
;
;
const RouterTelemetry = ()=>{
    var _a, _b;
    const clerk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClerk"])();
    const { pagesRouter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2f$usePagesRouter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePagesRouter"])();
    (_b = clerk.telemetry) == null ? void 0 : _b.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$N74BHP5H$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventFrameworkMetadata"])({
        router: pagesRouter ? "pages" : "app",
        ...((_a = globalThis == null ? void 0 : globalThis.next) == null ? void 0 : _a.version) ? {
            nextjsVersion: globalThis.next.version
        } : {}
    }));
    return null;
};
;
 //# sourceMappingURL=router-telemetry.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/data:4987c2 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f2e6975ce821143806e3b229e4ad74613721e6ca8":"invalidateCacheAction"},"node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js",""] */ __turbopack_context__.s({
    "invalidateCacheAction": (()=>invalidateCacheAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var invalidateCacheAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f2e6975ce821143806e3b229e4ad74613721e6ca8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "invalidateCacheAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVyLWFjdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuYXN5bmMgZnVuY3Rpb24gaW52YWxpZGF0ZUNhY2hlQWN0aW9uKCkge1xuICB2b2lkIChhd2FpdCBjb29raWVzKCkpLmRlbGV0ZShgX19jbGVya19pbnZhbGlkYXRlX2NhY2hlX2Nvb2tpZV8ke0RhdGUubm93KCl9YCk7XG59XG5leHBvcnQge1xuICBpbnZhbGlkYXRlQ2FjaGVBY3Rpb25cbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJkQU1FIn0=
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/removeBasePath.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "removeBasePath": (()=>removeBasePath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
function removeBasePath(to) {
    let destination = to;
    const basePath = ("TURBOPACK compile-time value", "");
    if (basePath && destination.startsWith(basePath)) {
        "TURBOPACK unreachable";
    }
    return destination;
}
;
 //# sourceMappingURL=removeBasePath.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/client/useInternalNavFun.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useInternalNavFun": (()=>useInternalNavFun)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$removeBasePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/removeBasePath.js [app-client] (ecmascript)");
;
;
;
;
const getClerkNavigationObject = (name)=>{
    var _a, _b, _c;
    (_a = window.__clerk_internal_navigations) != null ? _a : window.__clerk_internal_navigations = {};
    (_c = (_b = window.__clerk_internal_navigations)[name]) != null ? _c : _b[name] = {};
    return window.__clerk_internal_navigations[name];
};
const useInternalNavFun = (props)=>{
    const { windowNav, routerNav, name } = props;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    if (windowNav) {
        getClerkNavigationObject(name).fun = (to, opts)=>{
            return new Promise((res)=>{
                var _a, _b, _c;
                (_b = (_a = getClerkNavigationObject(name)).promisesBuffer) != null ? _b : _a.promisesBuffer = [];
                (_c = getClerkNavigationObject(name).promisesBuffer) == null ? void 0 : _c.push(res);
                startTransition(()=>{
                    var _a2, _b2, _c2;
                    if (((_a2 = opts == null ? void 0 : opts.__internal_metadata) == null ? void 0 : _a2.navigationType) === "internal") {
                        const state = ((_c2 = (_b2 = window.next) == null ? void 0 : _b2.version) != null ? _c2 : "") < "14.1.0" ? history.state : null;
                        windowNav(state, "", to);
                    } else {
                        routerNav((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$removeBasePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBasePath"])(to));
                    }
                });
            });
        };
    }
    const flushPromises = ()=>{
        var _a;
        (_a = getClerkNavigationObject(name).promisesBuffer) == null ? void 0 : _a.forEach((resolve)=>resolve());
        getClerkNavigationObject(name).promisesBuffer = [];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInternalNavFun.useEffect": ()=>{
            flushPromises();
            return flushPromises;
        }
    }["useInternalNavFun.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInternalNavFun.useEffect": ()=>{
            if (!isPending) {
                flushPromises();
            }
        }
    }["useInternalNavFun.useEffect"], [
        pathname,
        isPending
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInternalNavFun.useCallback": (to, metadata)=>{
            return getClerkNavigationObject(name).fun(to, metadata);
        }
    }["useInternalNavFun.useCallback"], []);
};
;
 //# sourceMappingURL=useInternalNavFun.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/client/useAwaitablePush.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAwaitablePush": (()=>useAwaitablePush)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useInternalNavFun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/client/useInternalNavFun.js [app-client] (ecmascript)");
"use client";
;
;
;
const useAwaitablePush = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useInternalNavFun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalNavFun"])({
        windowNav: typeof window !== "undefined" ? window.history.pushState.bind(window.history) : void 0,
        routerNav: router.push.bind(router),
        name: "push"
    });
};
;
 //# sourceMappingURL=useAwaitablePush.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/client/useAwaitableReplace.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useAwaitableReplace": (()=>useAwaitableReplace)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useInternalNavFun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/client/useInternalNavFun.js [app-client] (ecmascript)");
"use client";
;
;
;
const useAwaitableReplace = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useInternalNavFun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInternalNavFun"])({
        windowNav: typeof window !== "undefined" ? window.history.replaceState.bind(window.history) : void 0,
        routerNav: router.replace.bind(router),
        name: "replace"
    });
};
;
 //# sourceMappingURL=useAwaitableReplace.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientClerkProvider": (()=>ClientClerkProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/browser.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JKSAJ6AV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-JKSAJ6AV.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$logger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/logger.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-CYDR2ZSA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/package.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2f$useSafeLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/client-boundary/hooks/useSafeLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$NextOptionsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/client-boundary/NextOptionsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$clerk$2d$js$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/clerk-js-script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/feature-flags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$mergeNextClerkPropsWithEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/mergeNextClerkPropsWithEnv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$router$2d$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/router-telemetry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/sdk-versions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$data$3a$4987c2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/data:4987c2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useAwaitablePush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/client/useAwaitablePush.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useAwaitableReplace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/client/useAwaitableReplace.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const LazyCreateKeylessApplication = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/client/keyless-creator-reader.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i).then((m)=>m.KeylessCreatorOrReader));
const NextClientClerkProvider = (props)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$sdk$2d$versions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNextWithUnstableServerActions"]) {
        const deprecationWarning = `Clerk:
Your current Next.js version (${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__["default"].version}) will be deprecated in the next major release of "@clerk/nextjs". Please upgrade to next@14.1.0 or later.`;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$JKSAJ6AV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inBrowser"])()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warnOnce(deprecationWarning);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].logOnce(`
\x1B[43m----------
${deprecationWarning}
----------\x1B[0m
`);
        }
    }
    const { __unstable_invokeMiddlewareOnAuthStateChange = true, children } = props;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const push = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useAwaitablePush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAwaitablePush"])();
    const replace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$useAwaitableReplace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAwaitableReplace"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const isNested = Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$NextOptionsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClerkNextOptions"])());
    if (isNested) {
        return props.children;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NextClientClerkProvider.useEffect": ()=>{
            var _a;
            if (!isPending) {
                (_a = window.__clerk_internal_invalidateCachePromise) == null ? void 0 : _a.call(window);
            }
        }
    }["NextClientClerkProvider.useEffect"], [
        isPending
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2f$useSafeLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSafeLayoutEffect"])({
        "NextClientClerkProvider.useSafeLayoutEffect": ()=>{
            window.__unstable__onBeforeSetActive = ({
                "NextClientClerkProvider.useSafeLayoutEffect": (intent)=>{
                    return new Promise({
                        "NextClientClerkProvider.useSafeLayoutEffect": (resolve)=>{
                            var _a;
                            window.__clerk_internal_invalidateCachePromise = resolve;
                            const nextVersion = ((_a = window == null ? void 0 : window.next) == null ? void 0 : _a.version) || "";
                            if (nextVersion.startsWith("13")) {
                                startTransition({
                                    "NextClientClerkProvider.useSafeLayoutEffect": ()=>{
                                        router.refresh();
                                    }
                                }["NextClientClerkProvider.useSafeLayoutEffect"]);
                            } else if (nextVersion.startsWith("15") && intent === "sign-out") {
                                resolve();
                            } else {
                                void (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$data$3a$4987c2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["invalidateCacheAction"])().then({
                                    "NextClientClerkProvider.useSafeLayoutEffect": ()=>resolve()
                                }["NextClientClerkProvider.useSafeLayoutEffect"]);
                            }
                        }
                    }["NextClientClerkProvider.useSafeLayoutEffect"]);
                }
            })["NextClientClerkProvider.useSafeLayoutEffect"];
            window.__unstable__onAfterSetActive = ({
                "NextClientClerkProvider.useSafeLayoutEffect": ()=>{
                    if (__unstable_invokeMiddlewareOnAuthStateChange) {
                        return router.refresh();
                    }
                }
            })["NextClientClerkProvider.useSafeLayoutEffect"];
        }
    }["NextClientClerkProvider.useSafeLayoutEffect"], []);
    const mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$mergeNextClerkPropsWithEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeNextClerkPropsWithEnv"])({
        ...props,
        // @ts-expect-error Error because of the stricter types of internal `push`
        routerPush: push,
        // @ts-expect-error Error because of the stricter types of internal `replace`
        routerReplace: replace
    });
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$NextOptionsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkNextOptionsProvider"], {
        options: mergedProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ClerkProvider"], {
        ...mergedProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$router$2d$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterTelemetry"], null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$clerk$2d$js$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkJSScript"], {
        router: "app"
    }), children));
};
const ClientClerkProvider = (props)=>{
    const { children, disableKeyless = false, ...rest } = props;
    const safePublishableKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$mergeNextClerkPropsWithEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeNextClerkPropsWithEnv"])(rest).publishableKey;
    if (safePublishableKey || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseKeyless"] || disableKeyless) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(NextClientClerkProvider, {
            ...rest
        }, children);
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(LazyCreateKeylessApplication, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(NextClientClerkProvider, {
        ...rest
    }, children));
};
;
 //# sourceMappingURL=ClerkProvider.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/client/keyless-cookie-sync.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KeylessCookieSync": (()=>KeylessCookieSync)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/feature-flags.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function KeylessCookieSync(props) {
    var _a;
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedLayoutSegments"])();
    const isNotFoundRoute = ((_a = segments[0]) == null ? void 0 : _a.startsWith("/_not-found")) || false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KeylessCookieSync.useEffect": ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$feature$2d$flags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseKeyless"] && !isNotFoundRoute) {
                void __turbopack_context__.r("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i).then({
                    "KeylessCookieSync.useEffect": (m)=>m.syncKeylessConfigAction({
                            ...props,
                            // Preserve the current url and return back, once keys are synced in the middleware
                            returnUrl: window.location.href
                        })
                }["KeylessCookieSync.useEffect"]);
            }
        }
    }["KeylessCookieSync.useEffect"], [
        isNotFoundRoute
    ]);
    return props.children;
}
;
 //# sourceMappingURL=keyless-cookie-sync.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/invalidateNextRouterCache.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "invalidateNextRouterCache": (()=>invalidateNextRouterCache)
});
;
const invalidateNextRouterCache = ()=>{
    if (typeof window === "undefined") {
        return;
    }
    const invalidate = (cache)=>{
        Object.keys(cache).forEach((key)=>{
            delete cache[key];
        });
    };
    try {
        invalidate(window.next.router.sdc);
        invalidate(window.next.router.sbc);
    } catch  {
        return;
    }
};
;
 //# sourceMappingURL=invalidateNextRouterCache.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/pages/ClerkProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClerkProvider": (()=>ClerkProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$internal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/internal.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$XL46KY3Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+shared@3.8.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/shared/dist/chunk-XL46KY3Q.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/router.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2f$useSafeLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/client-boundary/hooks/useSafeLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$NextOptionsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/client-boundary/NextOptionsContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$clerk$2d$js$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/clerk-js-script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$invalidateNextRouterCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/invalidateNextRouterCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$mergeNextClerkPropsWithEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/mergeNextClerkPropsWithEnv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$removeBasePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/removeBasePath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$router$2d$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/utils/router-telemetry.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setErrorThrowerOptions"])({
    packageName: "@clerk/nextjs"
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$3$2e$8$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$XL46KY3Q$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setClerkJsLoadingErrorPackageName"])("@clerk/nextjs");
function ClerkProvider({ children, ...props }) {
    var _a;
    const { __unstable_invokeMiddlewareOnAuthStateChange = true } = props;
    const { push, replace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ClerkProvider"].displayName = "ReactClerkProvider";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2f$useSafeLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSafeLayoutEffect"])({
        "ClerkProvider.useSafeLayoutEffect": ()=>{
            window.__unstable__onBeforeSetActive = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$invalidateNextRouterCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invalidateNextRouterCache"];
        }
    }["ClerkProvider.useSafeLayoutEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$hooks$2f$useSafeLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSafeLayoutEffect"])({
        "ClerkProvider.useSafeLayoutEffect": ()=>{
            window.__unstable__onAfterSetActive = ({
                "ClerkProvider.useSafeLayoutEffect": ()=>{
                    if (__unstable_invokeMiddlewareOnAuthStateChange) {
                        void push(window.location.href);
                    }
                }
            })["ClerkProvider.useSafeLayoutEffect"];
        }
    }["ClerkProvider.useSafeLayoutEffect"], []);
    const navigate = (to)=>push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$removeBasePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBasePath"])(to));
    const replaceNavigate = (to)=>replace((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$removeBasePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeBasePath"])(to));
    const mergedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$mergeNextClerkPropsWithEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeNextClerkPropsWithEnv"])({
        ...props,
        routerPush: navigate,
        routerReplace: replaceNavigate
    });
    const initialState = ((_a = props.authServerSideProps) == null ? void 0 : _a.__clerk_ssr_state) || props.__clerk_ssr_state;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$NextOptionsContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkNextOptionsProvider"], {
        options: mergedProps
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ClerkProvider"], {
        ...mergedProps,
        initialState
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$router$2d$telemetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterTelemetry"], null), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$clerk$2d$js$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkJSScript"], {
        router: "pages"
    }), children));
}
;
 //# sourceMappingURL=ClerkProvider.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/client-boundary/ClerkProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClerkProvider": (()=>ClerkProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$compat$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/compat/router.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$ClerkProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/app-router/client/ClerkProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$pages$2f$ClerkProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/pages/ClerkProvider.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function ClerkProvider(props) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$compat$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const Provider = router ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$pages$2f$ClerkProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkProvider"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$client$2f$ClerkProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientClerkProvider"];
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Provider, {
        ...props
    });
}
;
 //# sourceMappingURL=ClerkProvider.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClerkProvider": (()=>ClerkProvider),
    "Protect": (()=>Protect),
    "SignedIn": (()=>SignedIn),
    "SignedOut": (()=>SignedOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$ClerkProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+nextjs@6.19.2_next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1_ukez7vasxlyqa5v4quld7cmhcm/node_modules/@clerk/nextjs/dist/esm/client-boundary/ClerkProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@clerk+clerk-react@5.31.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/@clerk/clerk-react/dist/chunk-T2VIWQBM.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
;
const ClerkProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$19$2e$2_next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1_ukez7vasxlyqa5v4quld7cmhcm$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$ClerkProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClerkProvider"];
const SignedIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignedIn"];
const SignedOut = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignedOut"];
const Protect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$clerk$2d$react$40$5$2e$31$2e$2_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$T2VIWQBM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Protect"];
;
 //# sourceMappingURL=index.js.map
}}),
}]);

//# sourceMappingURL=7019e_%40clerk_nextjs_dist_esm_8447cc3a._.js.map