(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/@sanity+next-loader@1.5.3_@sanity+types@3.88.2_@types+react@19.1.3__next@15.3.2_@babel+core@7_7mfojybcesyr26oj65l43treie/node_modules/@sanity/next-loader/dist/_chunks-es/RefreshOnFocus.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RefreshOnFocus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.2_@babel+core@7.27.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const focusThrottleInterval = 5e3;
function RefreshOnFocus() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$2_$40$babel$2b$core$40$7$2e$27$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RefreshOnFocus.useEffect": ()=>{
            const controller = new AbortController();
            let nextFocusRevalidatedAt = 0;
            const callback = {
                "RefreshOnFocus.useEffect.callback": ()=>{
                    const now = Date.now();
                    now > nextFocusRevalidatedAt && document.visibilityState !== "hidden" && (router.refresh(), nextFocusRevalidatedAt = now + focusThrottleInterval);
                }
            }["RefreshOnFocus.useEffect.callback"], { signal } = controller;
            return document.addEventListener("visibilitychange", callback, {
                passive: !0,
                signal
            }), window.addEventListener("focus", callback, {
                passive: !0,
                signal
            }), ({
                "RefreshOnFocus.useEffect": ()=>controller.abort()
            })["RefreshOnFocus.useEffect"];
        }
    }["RefreshOnFocus.useEffect"], [
        router
    ]), null;
}
RefreshOnFocus.displayName = "RefreshOnFocus";
;
 //# sourceMappingURL=RefreshOnFocus.js.map
}}),
}]);

//# sourceMappingURL=38769_%40sanity_next-loader_dist__chunks-es_RefreshOnFocus_3ce98b90.js.map