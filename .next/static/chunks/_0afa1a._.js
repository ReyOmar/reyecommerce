(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_0afa1a._.js", {

"[project]/components/AddToBasketButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/store/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
function AddToBasketButton({ product, disabled }) {
    _s();
    const { addItem, removeItem, getItemCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const itemCount = getItemCount(product._id);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //use useeffect to set isClient to true after the component mounts
    //this ensures that the component is only rendered on the client side
    // preventing hydration errors due to server/client mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddToBasketButton.useEffect": ()=>{
            setIsClient(true);
        }
    }["AddToBasketButton.useEffect"], []);
    if (!isClient) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center space-x-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>removeItem(product._id),
                className: `w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${itemCount === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`,
                disabled: itemCount === 0 || disabled,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `text-xl font-bold ${itemCount === 0 ? "text-gray-400" : "text-gray-600"}`,
                    children: "-"
                }, void 0, false, {
                    fileName: "[project]/components/AddToBasketButton.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AddToBasketButton.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-8 text-center font-semibold",
                children: itemCount
            }, void 0, false, {
                fileName: "[project]/components/AddToBasketButton.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>addItem(product),
                className: `w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`,
                disabled: disabled,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white text-xl font-bold",
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/components/AddToBasketButton.tsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AddToBasketButton.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AddToBasketButton.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_s(AddToBasketButton, "freDk9E98KBQZ9yfYgRO8rTDues=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = AddToBasketButton;
const __TURBOPACK__default__export__ = AddToBasketButton;
var _c;
__turbopack_refresh__.register(_c, "AddToBasketButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/env.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "apiVersion": (()=>apiVersion),
    "dataset": (()=>dataset),
    "projectId": (()=>projectId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const apiVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-10';
const dataset = assertValue(("TURBOPACK compile-time value", "production"), 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
const projectId = assertValue(("TURBOPACK compile-time value", "hdtz06o1"), 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/lib/client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "client": (()=>client)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@sanity/client/dist/index.browser.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"],
    apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"],
    useCdn: true,
    stega: {
        studioUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.VERCEL_URL ? `https://${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.VERCEL_URL}/studio` : `${"TURBOPACK compile-time value", "http://localhost:3000"}/studio`
    }
}); //stega 1:43:20
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/imageUrl.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "imageUrl": (()=>imageUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/lib/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$browser$2f$image$2d$url$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@sanity/image-url/lib/browser/image-url.umd.js [app-client] (ecmascript)");
;
;
const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$browser$2f$image$2d$url$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]);
function imageUrl(source) {
    return builder.image(source);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Loader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Loader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"
        }, void 0, false, {
            fileName: "[project]/components/Loader.tsx",
            lineNumber: 4,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Loader.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
_c = Loader;
const __TURBOPACK__default__export__ = Loader;
var _c;
__turbopack_refresh__.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(store)/basket/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddToBasketButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/AddToBasketButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$imageUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/imageUrl.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/store/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__usePromisifiedAuth__as__useAuth$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/client-boundary/PromisifiedAuthProvider.js [app-client] (ecmascript) <export usePromisifiedAuth as useAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
function BasketPage() {
    _s();
    const groupedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "BasketPage.useBasketStore[groupedItems]": (state)=>state.getGroupedItems()
    }["BasketPage.useBasketStore[groupedItems]"]);
    const { isSignedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__usePromisifiedAuth__as__useAuth$3e$__["useAuth"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // wait for client to mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BasketPage.useEffect": ()=>{
            setIsClient(true);
        }
    }["BasketPage.useEffect"], []);
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/(store)/basket/page.tsx",
            lineNumber: 26,
            columnNumber: 12
        }, this);
    }
    if (groupedItems.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto p-4 flex flex-col intems-center justify-center min-h-[50vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-6 text=gray-800",
                    children: "Your Basket"
                }, void 0, false, {
                    fileName: "[project]/app/(store)/basket/page.tsx",
                    lineNumber: 32,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-lg",
                    children: "Your basket is empty"
                }, void 0, false, {
                    fileName: "[project]/app/(store)/basket/page.tsx",
                    lineNumber: 33,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(store)/basket/page.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4 max-w-6xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Your Basket"
            }, void 0, false, {
                fileName: "[project]/app/(store)/basket/page.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow",
                    children: groupedItems?.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-4 border rounded flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center cursor-pointer flex-1 min-w-0",
                                    onClick: ()=>router.push(`/product/${item.product.slug?.current}`),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 sm:h-24 flex-shrink-0 mr-4",
                                            children: item.product.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$imageUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageUrl"])(item.product.image).url(),
                                                alt: item.product.name ?? "Product Image",
                                                className: "w-full h-full object-cover rounded",
                                                width: 96,
                                                height: 96
                                            }, void 0, false, {
                                                fileName: "[project]/app/(store)/basket/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/(store)/basket/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg sm:text-xl font-semibold truncate",
                                                    children: item.product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(store)/basket/page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm sm:text-base",
                                                    children: [
                                                        "price: $",
                                                        ((item.product.price ?? 0) * item.quantity).toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(store)/basket/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(store)/basket/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(store)/basket/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center ml-4 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddToBasketButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        product: item.product
                                    }, void 0, false, {
                                        fileName: "[project]/app/(store)/basket/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(store)/basket/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, item.product._id, true, {
                            fileName: "[project]/app/(store)/basket/page.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(store)/basket/page.tsx",
                    lineNumber: 42,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(store)/basket/page.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(store)/basket/page.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this);
}
_s(BasketPage, "HWzrB7UVPFLKe/84rrDL1n2hd9M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__usePromisifiedAuth__as__useAuth$3e$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BasketPage;
const __TURBOPACK__default__export__ = BasketPage;
var _c;
__turbopack_refresh__.register(_c, "BasketPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(store)/basket/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/@sanity/image-url/lib/browser/image-url.umd.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
(function(global, factory) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = factory() : ("TURBOPACK unreachable", undefined);
})(this, function() {
    function _extends() {
        _extends = Object.assign || function(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = arguments[i];
                for(var key in source){
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            return function() {
                if (i >= o.length) return {
                    done: true
                };
                return {
                    done: false,
                    value: o[i++]
                };
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var example = 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg';
    function parseAssetId(ref) {
        var _ref$split = ref.split('-'), id = _ref$split[1], dimensionString = _ref$split[2], format = _ref$split[3];
        if (!id || !dimensionString || !format) {
            throw new Error("Malformed asset _ref '" + ref + "'. Expected an id like \"" + example + "\".");
        }
        var _dimensionString$spli = dimensionString.split('x'), imgWidthStr = _dimensionString$spli[0], imgHeightStr = _dimensionString$spli[1];
        var width = +imgWidthStr;
        var height = +imgHeightStr;
        var isValidAssetId = isFinite(width) && isFinite(height);
        if (!isValidAssetId) {
            throw new Error("Malformed asset _ref '" + ref + "'. Expected an id like \"" + example + "\".");
        }
        return {
            id: id,
            width: width,
            height: height,
            format: format
        };
    }
    var isRef = function isRef(src) {
        var source = src;
        return source ? typeof source._ref === 'string' : false;
    };
    var isAsset = function isAsset(src) {
        var source = src;
        return source ? typeof source._id === 'string' : false;
    };
    var isAssetStub = function isAssetStub(src) {
        var source = src;
        return source && source.asset ? typeof source.asset.url === 'string' : false;
    };
    // Convert an asset-id, asset or image to an image record suitable for processing
    // eslint-disable-next-line complexity
    function parseSource(source) {
        if (!source) {
            return null;
        }
        var image;
        if (typeof source === 'string' && isUrl(source)) {
            // Someone passed an existing image url?
            image = {
                asset: {
                    _ref: urlToId(source)
                }
            };
        } else if (typeof source === 'string') {
            // Just an asset id
            image = {
                asset: {
                    _ref: source
                }
            };
        } else if (isRef(source)) {
            // We just got passed an asset directly
            image = {
                asset: source
            };
        } else if (isAsset(source)) {
            // If we were passed an image asset document
            image = {
                asset: {
                    _ref: source._id || ''
                }
            };
        } else if (isAssetStub(source)) {
            // If we were passed a partial asset (`url`, but no `_id`)
            image = {
                asset: {
                    _ref: urlToId(source.asset.url)
                }
            };
        } else if (typeof source.asset === 'object') {
            // Probably an actual image with materialized asset
            image = _extends({}, source);
        } else {
            // We got something that does not look like an image, or it is an image
            // that currently isn't sporting an asset.
            return null;
        }
        var img = source;
        if (img.crop) {
            image.crop = img.crop;
        }
        if (img.hotspot) {
            image.hotspot = img.hotspot;
        }
        return applyDefaults(image);
    }
    function isUrl(url) {
        return /^https?:\/\//.test("" + url);
    }
    function urlToId(url) {
        var parts = url.split('/').slice(-1);
        return ("image-" + parts[0]).replace(/\.([a-z]+)$/, '-$1');
    }
    // Mock crop and hotspot if image lacks it
    function applyDefaults(image) {
        if (image.crop && image.hotspot) {
            return image;
        }
        // We need to pad in default values for crop or hotspot
        var result = _extends({}, image);
        if (!result.crop) {
            result.crop = {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            };
        }
        if (!result.hotspot) {
            result.hotspot = {
                x: 0.5,
                y: 0.5,
                height: 1.0,
                width: 1.0
            };
        }
        return result;
    }
    var SPEC_NAME_TO_URL_NAME_MAPPINGS = [
        [
            'width',
            'w'
        ],
        [
            'height',
            'h'
        ],
        [
            'format',
            'fm'
        ],
        [
            'download',
            'dl'
        ],
        [
            'blur',
            'blur'
        ],
        [
            'sharpen',
            'sharp'
        ],
        [
            'invert',
            'invert'
        ],
        [
            'orientation',
            'or'
        ],
        [
            'minHeight',
            'min-h'
        ],
        [
            'maxHeight',
            'max-h'
        ],
        [
            'minWidth',
            'min-w'
        ],
        [
            'maxWidth',
            'max-w'
        ],
        [
            'quality',
            'q'
        ],
        [
            'fit',
            'fit'
        ],
        [
            'crop',
            'crop'
        ],
        [
            'saturation',
            'sat'
        ],
        [
            'auto',
            'auto'
        ],
        [
            'dpr',
            'dpr'
        ],
        [
            'pad',
            'pad'
        ],
        [
            'frame',
            'frame'
        ]
    ];
    function urlForImage(options) {
        var spec = _extends({}, options || {});
        var source = spec.source;
        delete spec.source;
        var image = parseSource(source);
        if (!image) {
            throw new Error("Unable to resolve image URL from source (" + JSON.stringify(source) + ")");
        }
        var id = image.asset._ref || image.asset._id || '';
        var asset = parseAssetId(id);
        // Compute crop rect in terms of pixel coordinates in the raw source image
        var cropLeft = Math.round(image.crop.left * asset.width);
        var cropTop = Math.round(image.crop.top * asset.height);
        var crop = {
            left: cropLeft,
            top: cropTop,
            width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
            height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
        };
        // Compute hot spot rect in terms of pixel coordinates
        var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
        var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
        var hotSpotCenterX = image.hotspot.x * asset.width;
        var hotSpotCenterY = image.hotspot.y * asset.height;
        var hotspot = {
            left: hotSpotCenterX - hotSpotHorizontalRadius,
            top: hotSpotCenterY - hotSpotVerticalRadius,
            right: hotSpotCenterX + hotSpotHorizontalRadius,
            bottom: hotSpotCenterY + hotSpotVerticalRadius
        };
        // If irrelevant, or if we are requested to: don't perform crop/fit based on
        // the crop/hotspot.
        if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
            spec = _extends({}, spec, fit({
                crop: crop,
                hotspot: hotspot
            }, spec));
        }
        return specToImageUrl(_extends({}, spec, {
            asset: asset
        }));
    }
    // eslint-disable-next-line complexity
    function specToImageUrl(spec) {
        var cdnUrl = (spec.baseUrl || 'https://cdn.sanity.io').replace(/\/+$/, '');
        var vanityStub = spec.vanityName ? "/" + spec.vanityName : '';
        var filename = spec.asset.id + "-" + spec.asset.width + "x" + spec.asset.height + "." + spec.asset.format + vanityStub;
        var baseUrl = cdnUrl + "/images/" + spec.projectId + "/" + spec.dataset + "/" + filename;
        var params = [];
        if (spec.rect) {
            // Only bother url with a crop if it actually crops anything
            var _spec$rect = spec.rect, left = _spec$rect.left, top = _spec$rect.top, width = _spec$rect.width, height = _spec$rect.height;
            var isEffectiveCrop = left !== 0 || top !== 0 || height !== spec.asset.height || width !== spec.asset.width;
            if (isEffectiveCrop) {
                params.push("rect=" + left + "," + top + "," + width + "," + height);
            }
        }
        if (spec.bg) {
            params.push("bg=" + spec.bg);
        }
        if (spec.focalPoint) {
            params.push("fp-x=" + spec.focalPoint.x);
            params.push("fp-y=" + spec.focalPoint.y);
        }
        var flip = [
            spec.flipHorizontal && 'h',
            spec.flipVertical && 'v'
        ].filter(Boolean).join('');
        if (flip) {
            params.push("flip=" + flip);
        }
        // Map from spec name to url param name, and allow using the actual param name as an alternative
        SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(mapping) {
            var specName = mapping[0], param = mapping[1];
            if (typeof spec[specName] !== 'undefined') {
                params.push(param + "=" + encodeURIComponent(spec[specName]));
            } else if (typeof spec[param] !== 'undefined') {
                params.push(param + "=" + encodeURIComponent(spec[param]));
            }
        });
        if (params.length === 0) {
            return baseUrl;
        }
        return baseUrl + "?" + params.join('&');
    }
    function fit(source, spec) {
        var cropRect;
        var imgWidth = spec.width;
        var imgHeight = spec.height;
        // If we are not constraining the aspect ratio, we'll just use the whole crop
        if (!(imgWidth && imgHeight)) {
            return {
                width: imgWidth,
                height: imgHeight,
                rect: source.crop
            };
        }
        var crop = source.crop;
        var hotspot = source.hotspot;
        // If we are here, that means aspect ratio is locked and fitting will be a bit harder
        var desiredAspectRatio = imgWidth / imgHeight;
        var cropAspectRatio = crop.width / crop.height;
        if (cropAspectRatio > desiredAspectRatio) {
            // The crop is wider than the desired aspect ratio. That means we are cutting from the sides
            var height = Math.round(crop.height);
            var width = Math.round(height * desiredAspectRatio);
            var top = Math.max(0, Math.round(crop.top));
            // Center output horizontally over hotspot
            var hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
            var left = Math.max(0, Math.round(hotspotXCenter - width / 2));
            // Keep output within crop
            if (left < crop.left) {
                left = crop.left;
            } else if (left + width > crop.left + crop.width) {
                left = crop.left + crop.width - width;
            }
            cropRect = {
                left: left,
                top: top,
                width: width,
                height: height
            };
        } else {
            // The crop is taller than the desired ratio, we are cutting from top and bottom
            var _width = crop.width;
            var _height = Math.round(_width / desiredAspectRatio);
            var _left = Math.max(0, Math.round(crop.left));
            // Center output vertically over hotspot
            var hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
            var _top = Math.max(0, Math.round(hotspotYCenter - _height / 2));
            // Keep output rect within crop
            if (_top < crop.top) {
                _top = crop.top;
            } else if (_top + _height > crop.top + crop.height) {
                _top = crop.top + crop.height - _height;
            }
            cropRect = {
                left: _left,
                top: _top,
                width: _width,
                height: _height
            };
        }
        return {
            width: imgWidth,
            height: imgHeight,
            rect: cropRect
        };
    }
    var validFits = [
        'clip',
        'crop',
        'fill',
        'fillmax',
        'max',
        'scale',
        'min'
    ];
    var validCrops = [
        'top',
        'bottom',
        'left',
        'right',
        'center',
        'focalpoint',
        'entropy'
    ];
    var validAutoModes = [
        'format'
    ];
    function isSanityModernClientLike(client) {
        return client && 'config' in client ? typeof client.config === 'function' : false;
    }
    function isSanityClientLike(client) {
        return client && 'clientConfig' in client ? typeof client.clientConfig === 'object' : false;
    }
    function rewriteSpecName(key) {
        var specs = SPEC_NAME_TO_URL_NAME_MAPPINGS;
        for(var _iterator = _createForOfIteratorHelperLoose(specs), _step; !(_step = _iterator()).done;){
            var entry = _step.value;
            var specName = entry[0], param = entry[1];
            if (key === specName || key === param) {
                return specName;
            }
        }
        return key;
    }
    function urlBuilder(options) {
        // Did we get a modernish client?
        if (isSanityModernClientLike(options)) {
            // Inherit config from client
            var _options$config = options.config(), apiUrl = _options$config.apiHost, projectId = _options$config.projectId, dataset = _options$config.dataset;
            var apiHost = apiUrl || 'https://api.sanity.io';
            return new ImageUrlBuilder(null, {
                baseUrl: apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
                projectId: projectId,
                dataset: dataset
            });
        }
        // Did we get a SanityClient?
        if (isSanityClientLike(options)) {
            // Inherit config from client
            var _options$clientConfig = options.clientConfig, _apiUrl = _options$clientConfig.apiHost, _projectId = _options$clientConfig.projectId, _dataset = _options$clientConfig.dataset;
            var _apiHost = _apiUrl || 'https://api.sanity.io';
            return new ImageUrlBuilder(null, {
                baseUrl: _apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
                projectId: _projectId,
                dataset: _dataset
            });
        }
        // Or just accept the options as given
        return new ImageUrlBuilder(null, options || {});
    }
    var ImageUrlBuilder = /*#__PURE__*/ function() {
        function ImageUrlBuilder(parent, options) {
            this.options = void 0;
            this.options = parent ? _extends({}, parent.options || {}, options || {}) // Merge parent options
             : _extends({}, options || {}); // Copy options
        }
        var _proto = ImageUrlBuilder.prototype;
        _proto.withOptions = function withOptions(options) {
            var baseUrl = options.baseUrl || this.options.baseUrl;
            var newOptions = {
                baseUrl: baseUrl
            };
            for(var key in options){
                if (options.hasOwnProperty(key)) {
                    var specKey = rewriteSpecName(key);
                    newOptions[specKey] = options[key];
                }
            }
            return new ImageUrlBuilder(this, _extends({
                baseUrl: baseUrl
            }, newOptions));
        };
        _proto.image = function image(source) {
            return this.withOptions({
                source: source
            });
        };
        _proto.dataset = function dataset(_dataset2) {
            return this.withOptions({
                dataset: _dataset2
            });
        };
        _proto.projectId = function projectId(_projectId2) {
            return this.withOptions({
                projectId: _projectId2
            });
        };
        _proto.bg = function bg(_bg) {
            return this.withOptions({
                bg: _bg
            });
        };
        _proto.dpr = function dpr(_dpr) {
            // A DPR of 1 is the default - so only include it if we have a different value
            return this.withOptions(_dpr && _dpr !== 1 ? {
                dpr: _dpr
            } : {});
        };
        _proto.width = function width(_width) {
            return this.withOptions({
                width: _width
            });
        };
        _proto.height = function height(_height) {
            return this.withOptions({
                height: _height
            });
        };
        _proto.focalPoint = function focalPoint(x, y) {
            return this.withOptions({
                focalPoint: {
                    x: x,
                    y: y
                }
            });
        };
        _proto.maxWidth = function maxWidth(_maxWidth) {
            return this.withOptions({
                maxWidth: _maxWidth
            });
        };
        _proto.minWidth = function minWidth(_minWidth) {
            return this.withOptions({
                minWidth: _minWidth
            });
        };
        _proto.maxHeight = function maxHeight(_maxHeight) {
            return this.withOptions({
                maxHeight: _maxHeight
            });
        };
        _proto.minHeight = function minHeight(_minHeight) {
            return this.withOptions({
                minHeight: _minHeight
            });
        };
        _proto.size = function size(width, height) {
            return this.withOptions({
                width: width,
                height: height
            });
        };
        _proto.blur = function blur(_blur) {
            return this.withOptions({
                blur: _blur
            });
        };
        _proto.sharpen = function sharpen(_sharpen) {
            return this.withOptions({
                sharpen: _sharpen
            });
        };
        _proto.rect = function rect(left, top, width, height) {
            return this.withOptions({
                rect: {
                    left: left,
                    top: top,
                    width: width,
                    height: height
                }
            });
        };
        _proto.format = function format(_format) {
            return this.withOptions({
                format: _format
            });
        };
        _proto.invert = function invert(_invert) {
            return this.withOptions({
                invert: _invert
            });
        };
        _proto.orientation = function orientation(_orientation) {
            return this.withOptions({
                orientation: _orientation
            });
        };
        _proto.quality = function quality(_quality) {
            return this.withOptions({
                quality: _quality
            });
        };
        _proto.forceDownload = function forceDownload(download) {
            return this.withOptions({
                download: download
            });
        };
        _proto.flipHorizontal = function flipHorizontal() {
            return this.withOptions({
                flipHorizontal: true
            });
        };
        _proto.flipVertical = function flipVertical() {
            return this.withOptions({
                flipVertical: true
            });
        };
        _proto.ignoreImageParams = function ignoreImageParams() {
            return this.withOptions({
                ignoreImageParams: true
            });
        };
        _proto.fit = function fit(value) {
            if (validFits.indexOf(value) === -1) {
                throw new Error("Invalid fit mode \"" + value + "\"");
            }
            return this.withOptions({
                fit: value
            });
        };
        _proto.crop = function crop(value) {
            if (validCrops.indexOf(value) === -1) {
                throw new Error("Invalid crop mode \"" + value + "\"");
            }
            return this.withOptions({
                crop: value
            });
        };
        _proto.saturation = function saturation(_saturation) {
            return this.withOptions({
                saturation: _saturation
            });
        };
        _proto.auto = function auto(value) {
            if (validAutoModes.indexOf(value) === -1) {
                throw new Error("Invalid auto mode \"" + value + "\"");
            }
            return this.withOptions({
                auto: value
            });
        };
        _proto.pad = function pad(_pad) {
            return this.withOptions({
                pad: _pad
            });
        };
        _proto.vanityName = function vanityName(value) {
            return this.withOptions({
                vanityName: value
            });
        };
        _proto.frame = function frame(_frame) {
            if (_frame !== 1) {
                throw new Error("Invalid frame value \"" + _frame + "\"");
            }
            return this.withOptions({
                frame: _frame
            });
        };
        _proto.url = function url() {
            return urlForImage(this.options);
        };
        _proto.toString = function toString() {
            return this.url();
        };
        return ImageUrlBuilder;
    }();
    return urlBuilder;
}); //# sourceMappingURL=image-url.umd.js.map
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/client-boundary/PromisifiedAuthProvider.js [app-client] (ecmascript) <export usePromisifiedAuth as useAuth>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useAuth": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePromisifiedAuth"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/client-boundary/PromisifiedAuthProvider.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_0afa1a._.js.map