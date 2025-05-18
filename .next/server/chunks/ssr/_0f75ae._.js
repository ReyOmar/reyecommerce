module.exports = {

"[project]/components/AddToBasketButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/store/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function AddToBasketButton({ product, disabled }) {
    const { addItem, removeItem, getItemCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const itemCount = getItemCount(product._id);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    //use useeffect to set isClient to true after the component mounts
    //this ensures that the component is only rendered on the client side
    // preventing hydration errors due to server/client mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    if (!isClient) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center space-x-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>removeItem(product._id),
                className: `w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${itemCount === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`,
                disabled: itemCount === 0 || disabled,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-8 text-center font-semibold",
                children: itemCount
            }, void 0, false, {
                fileName: "[project]/components/AddToBasketButton.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>addItem(product),
                className: `w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`,
                disabled: disabled,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
const __TURBOPACK__default__export__ = AddToBasketButton;
}}),
"[project]/sanity/env.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "apiVersion": (()=>apiVersion),
    "dataset": (()=>dataset),
    "projectId": (()=>projectId)
});
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-10';
const dataset = assertValue(("TURBOPACK compile-time value", "production"), 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
const projectId = assertValue(("TURBOPACK compile-time value", "hdtz06o1"), 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
}}),
"[project]/sanity/lib/client.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "client": (()=>client)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/env.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@sanity/client/dist/index.js [app-ssr] (ecmascript) <locals>");
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataset"],
    apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiVersion"],
    useCdn: true,
    stega: {
        studioUrl: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/studio` : `${"TURBOPACK compile-time value", "http://localhost:3000"}/studio`
    }
}); //stega 1:43:20
}}),
"[project]/lib/imageUrl.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "imageUrl": (()=>imageUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/lib/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@sanity/image-url/lib/node/index.js [app-ssr] (ecmascript)");
;
;
const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["client"]);
function imageUrl(source) {
    return builder.image(source);
}
}}),
"[project]/app/(store)/basket/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddToBasketButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/AddToBasketButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$imageUrl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/imageUrl.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/store/store.ts [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@components/Loader'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__usePromisifiedAuth__as__useAuth$3e$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/client-boundary/PromisifiedAuthProvider.js [app-ssr] (ecmascript) <export usePromisifiedAuth as useAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/shared/dist/react/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function BasketPage() {
    const groupedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.getGroupedItems());
    const { isSignedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__usePromisifiedAuth__as__useAuth$3e$__["useAuth"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // wait for client to mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Loader, {}, void 0, false, {
            fileName: "[project]/app/(store)/basket/page.tsx",
            lineNumber: 26,
            columnNumber: 12
        }, this);
    }
    if (groupedItems.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto p-4 flex flex-col intems-center justify-center min-h-[50vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-6 text=gray-800",
                    children: "Your Basket"
                }, void 0, false, {
                    fileName: "[project]/app/(store)/basket/page.tsx",
                    lineNumber: 32,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4 max-w-6xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Your Basket"
            }, void 0, false, {
                fileName: "[project]/app/(store)/basket/page.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow",
                    children: groupedItems?.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-4 border rounded flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center cursor-pointer flex-1 min-w-0",
                                    onClick: ()=>router.push(`/product/${item.product.slug?.current}`),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 sm:h-24 flex-shrink-0 mr-4",
                                            children: item.product.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$imageUrl$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageUrl"])(item.product.image).url(),
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg sm:text-xl font-semibold truncate",
                                                    children: item.product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(store)/basket/page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center ml-4 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddToBasketButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
const __TURBOPACK__default__export__ = BasketPage;
}}),
"[project]/app/(store)/basket/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/@sanity/image-url/lib/node/parseAssetId.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var example = 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg';
function parseAssetId(ref) {
    var _a = ref.split('-'), id = _a[1], dimensionString = _a[2], format = _a[3];
    if (!id || !dimensionString || !format) {
        throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, "\"."));
    }
    var _b = dimensionString.split('x'), imgWidthStr = _b[0], imgHeightStr = _b[1];
    var width = +imgWidthStr;
    var height = +imgHeightStr;
    var isValidAssetId = isFinite(width) && isFinite(height);
    if (!isValidAssetId) {
        throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, "\"."));
    }
    return {
        id: id,
        width: width,
        height: height,
        format: format
    };
}
exports.default = parseAssetId; //# sourceMappingURL=parseAssetId.js.map
}}),
"[project]/node_modules/@sanity/image-url/lib/node/parseSource.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var isRef = function(src) {
    var source = src;
    return source ? typeof source._ref === 'string' : false;
};
var isAsset = function(src) {
    var source = src;
    return source ? typeof source._id === 'string' : false;
};
var isAssetStub = function(src) {
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
        image = __assign({}, source);
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
exports.default = parseSource;
function isUrl(url) {
    return /^https?:\/\//.test("".concat(url));
}
function urlToId(url) {
    var parts = url.split('/').slice(-1);
    return "image-".concat(parts[0]).replace(/\.([a-z]+)$/, '-$1');
}
// Mock crop and hotspot if image lacks it
function applyDefaults(image) {
    if (image.crop && image.hotspot) {
        return image;
    }
    // We need to pad in default values for crop or hotspot
    var result = __assign({}, image);
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
} //# sourceMappingURL=parseSource.js.map
}}),
"[project]/node_modules/@sanity/image-url/lib/node/urlForImage.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parseSource = exports.SPEC_NAME_TO_URL_NAME_MAPPINGS = void 0;
var parseAssetId_1 = __importDefault(__turbopack_require__("[project]/node_modules/@sanity/image-url/lib/node/parseAssetId.js [app-ssr] (ecmascript)"));
var parseSource_1 = __importDefault(__turbopack_require__("[project]/node_modules/@sanity/image-url/lib/node/parseSource.js [app-ssr] (ecmascript)"));
exports.parseSource = parseSource_1.default;
exports.SPEC_NAME_TO_URL_NAME_MAPPINGS = [
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
    var spec = __assign({}, options || {});
    var source = spec.source;
    delete spec.source;
    var image = (0, parseSource_1.default)(source);
    if (!image) {
        throw new Error("Unable to resolve image URL from source (".concat(JSON.stringify(source), ")"));
    }
    var id = image.asset._ref || image.asset._id || '';
    var asset = (0, parseAssetId_1.default)(id);
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
        spec = __assign(__assign({}, spec), fit({
            crop: crop,
            hotspot: hotspot
        }, spec));
    }
    return specToImageUrl(__assign(__assign({}, spec), {
        asset: asset
    }));
}
exports.default = urlForImage;
// eslint-disable-next-line complexity
function specToImageUrl(spec) {
    var cdnUrl = (spec.baseUrl || 'https://cdn.sanity.io').replace(/\/+$/, '');
    var vanityStub = spec.vanityName ? "/".concat(spec.vanityName) : '';
    var filename = "".concat(spec.asset.id, "-").concat(spec.asset.width, "x").concat(spec.asset.height, ".").concat(spec.asset.format).concat(vanityStub);
    var baseUrl = "".concat(cdnUrl, "/images/").concat(spec.projectId, "/").concat(spec.dataset, "/").concat(filename);
    var params = [];
    if (spec.rect) {
        // Only bother url with a crop if it actually crops anything
        var _a = spec.rect, left = _a.left, top_1 = _a.top, width = _a.width, height = _a.height;
        var isEffectiveCrop = left !== 0 || top_1 !== 0 || height !== spec.asset.height || width !== spec.asset.width;
        if (isEffectiveCrop) {
            params.push("rect=".concat(left, ",").concat(top_1, ",").concat(width, ",").concat(height));
        }
    }
    if (spec.bg) {
        params.push("bg=".concat(spec.bg));
    }
    if (spec.focalPoint) {
        params.push("fp-x=".concat(spec.focalPoint.x));
        params.push("fp-y=".concat(spec.focalPoint.y));
    }
    var flip = [
        spec.flipHorizontal && 'h',
        spec.flipVertical && 'v'
    ].filter(Boolean).join('');
    if (flip) {
        params.push("flip=".concat(flip));
    }
    // Map from spec name to url param name, and allow using the actual param name as an alternative
    exports.SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(mapping) {
        var specName = mapping[0], param = mapping[1];
        if (typeof spec[specName] !== 'undefined') {
            params.push("".concat(param, "=").concat(encodeURIComponent(spec[specName])));
        } else if (typeof spec[param] !== 'undefined') {
            params.push("".concat(param, "=").concat(encodeURIComponent(spec[param])));
        }
    });
    if (params.length === 0) {
        return baseUrl;
    }
    return "".concat(baseUrl, "?").concat(params.join('&'));
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
        var top_2 = Math.max(0, Math.round(crop.top));
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
            top: top_2,
            width: width,
            height: height
        };
    } else {
        // The crop is taller than the desired ratio, we are cutting from top and bottom
        var width = crop.width;
        var height = Math.round(width / desiredAspectRatio);
        var left = Math.max(0, Math.round(crop.left));
        // Center output vertically over hotspot
        var hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
        var top_3 = Math.max(0, Math.round(hotspotYCenter - height / 2));
        // Keep output rect within crop
        if (top_3 < crop.top) {
            top_3 = crop.top;
        } else if (top_3 + height > crop.top + crop.height) {
            top_3 = crop.top + crop.height - height;
        }
        cropRect = {
            left: left,
            top: top_3,
            width: width,
            height: height
        };
    }
    return {
        width: imgWidth,
        height: imgHeight,
        rect: cropRect
    };
} //# sourceMappingURL=urlForImage.js.map
}}),
"[project]/node_modules/@sanity/image-url/lib/node/builder.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImageUrlBuilder = void 0;
var urlForImage_1 = __importStar(__turbopack_require__("[project]/node_modules/@sanity/image-url/lib/node/urlForImage.js [app-ssr] (ecmascript)"));
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
    var specs = urlForImage_1.SPEC_NAME_TO_URL_NAME_MAPPINGS;
    for(var _i = 0, specs_1 = specs; _i < specs_1.length; _i++){
        var entry = specs_1[_i];
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
        var _a = options.config(), apiUrl = _a.apiHost, projectId = _a.projectId, dataset = _a.dataset;
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
        var _b = options.clientConfig, apiUrl = _b.apiHost, projectId = _b.projectId, dataset = _b.dataset;
        var apiHost = apiUrl || 'https://api.sanity.io';
        return new ImageUrlBuilder(null, {
            baseUrl: apiHost.replace(/^https:\/\/api\./, 'https://cdn.'),
            projectId: projectId,
            dataset: dataset
        });
    }
    // Or just accept the options as given
    return new ImageUrlBuilder(null, options || {});
}
exports.default = urlBuilder;
var ImageUrlBuilder = function() {
    function ImageUrlBuilder(parent, options) {
        this.options = parent ? __assign(__assign({}, parent.options || {}), options || {}) : __assign({}, options || {}); // Copy options
    }
    ImageUrlBuilder.prototype.withOptions = function(options) {
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
        return new ImageUrlBuilder(this, __assign({
            baseUrl: baseUrl
        }, newOptions));
    };
    // The image to be represented. Accepts a Sanity 'image'-document, 'asset'-document or
    // _id of asset. To get the benefit of automatic hot-spot/crop integration with the content
    // studio, the 'image'-document must be provided.
    ImageUrlBuilder.prototype.image = function(source) {
        return this.withOptions({
            source: source
        });
    };
    // Specify the dataset
    ImageUrlBuilder.prototype.dataset = function(dataset) {
        return this.withOptions({
            dataset: dataset
        });
    };
    // Specify the projectId
    ImageUrlBuilder.prototype.projectId = function(projectId) {
        return this.withOptions({
            projectId: projectId
        });
    };
    // Specify background color
    ImageUrlBuilder.prototype.bg = function(bg) {
        return this.withOptions({
            bg: bg
        });
    };
    // Set DPR scaling factor
    ImageUrlBuilder.prototype.dpr = function(dpr) {
        // A DPR of 1 is the default - so only include it if we have a different value
        return this.withOptions(dpr && dpr !== 1 ? {
            dpr: dpr
        } : {});
    };
    // Specify the width of the image in pixels
    ImageUrlBuilder.prototype.width = function(width) {
        return this.withOptions({
            width: width
        });
    };
    // Specify the height of the image in pixels
    ImageUrlBuilder.prototype.height = function(height) {
        return this.withOptions({
            height: height
        });
    };
    // Specify focal point in fraction of image dimensions. Each component 0.0-1.0
    ImageUrlBuilder.prototype.focalPoint = function(x, y) {
        return this.withOptions({
            focalPoint: {
                x: x,
                y: y
            }
        });
    };
    ImageUrlBuilder.prototype.maxWidth = function(maxWidth) {
        return this.withOptions({
            maxWidth: maxWidth
        });
    };
    ImageUrlBuilder.prototype.minWidth = function(minWidth) {
        return this.withOptions({
            minWidth: minWidth
        });
    };
    ImageUrlBuilder.prototype.maxHeight = function(maxHeight) {
        return this.withOptions({
            maxHeight: maxHeight
        });
    };
    ImageUrlBuilder.prototype.minHeight = function(minHeight) {
        return this.withOptions({
            minHeight: minHeight
        });
    };
    // Specify width and height in pixels
    ImageUrlBuilder.prototype.size = function(width, height) {
        return this.withOptions({
            width: width,
            height: height
        });
    };
    // Specify blur between 0 and 100
    ImageUrlBuilder.prototype.blur = function(blur) {
        return this.withOptions({
            blur: blur
        });
    };
    ImageUrlBuilder.prototype.sharpen = function(sharpen) {
        return this.withOptions({
            sharpen: sharpen
        });
    };
    // Specify the desired rectangle of the image
    ImageUrlBuilder.prototype.rect = function(left, top, width, height) {
        return this.withOptions({
            rect: {
                left: left,
                top: top,
                width: width,
                height: height
            }
        });
    };
    // Specify the image format of the image. 'jpg', 'pjpg', 'png', 'webp'
    ImageUrlBuilder.prototype.format = function(format) {
        return this.withOptions({
            format: format
        });
    };
    ImageUrlBuilder.prototype.invert = function(invert) {
        return this.withOptions({
            invert: invert
        });
    };
    // Rotation in degrees 0, 90, 180, 270
    ImageUrlBuilder.prototype.orientation = function(orientation) {
        return this.withOptions({
            orientation: orientation
        });
    };
    // Compression quality 0-100
    ImageUrlBuilder.prototype.quality = function(quality) {
        return this.withOptions({
            quality: quality
        });
    };
    // Make it a download link. Parameter is default filename.
    ImageUrlBuilder.prototype.forceDownload = function(download) {
        return this.withOptions({
            download: download
        });
    };
    // Flip image horizontally
    ImageUrlBuilder.prototype.flipHorizontal = function() {
        return this.withOptions({
            flipHorizontal: true
        });
    };
    // Flip image vertically
    ImageUrlBuilder.prototype.flipVertical = function() {
        return this.withOptions({
            flipVertical: true
        });
    };
    // Ignore crop/hotspot from image record, even when present
    ImageUrlBuilder.prototype.ignoreImageParams = function() {
        return this.withOptions({
            ignoreImageParams: true
        });
    };
    ImageUrlBuilder.prototype.fit = function(value) {
        if (validFits.indexOf(value) === -1) {
            throw new Error("Invalid fit mode \"".concat(value, "\""));
        }
        return this.withOptions({
            fit: value
        });
    };
    ImageUrlBuilder.prototype.crop = function(value) {
        if (validCrops.indexOf(value) === -1) {
            throw new Error("Invalid crop mode \"".concat(value, "\""));
        }
        return this.withOptions({
            crop: value
        });
    };
    // Saturation
    ImageUrlBuilder.prototype.saturation = function(saturation) {
        return this.withOptions({
            saturation: saturation
        });
    };
    ImageUrlBuilder.prototype.auto = function(value) {
        if (validAutoModes.indexOf(value) === -1) {
            throw new Error("Invalid auto mode \"".concat(value, "\""));
        }
        return this.withOptions({
            auto: value
        });
    };
    // Specify the number of pixels to pad the image
    ImageUrlBuilder.prototype.pad = function(pad) {
        return this.withOptions({
            pad: pad
        });
    };
    // Vanity URL for more SEO friendly URLs
    ImageUrlBuilder.prototype.vanityName = function(value) {
        return this.withOptions({
            vanityName: value
        });
    };
    ImageUrlBuilder.prototype.frame = function(frame) {
        if (frame !== 1) {
            throw new Error("Invalid frame value \"".concat(frame, "\""));
        }
        return this.withOptions({
            frame: frame
        });
    };
    // Gets the url based on the submitted parameters
    ImageUrlBuilder.prototype.url = function() {
        return (0, urlForImage_1.default)(this.options);
    };
    // Alias for url()
    ImageUrlBuilder.prototype.toString = function() {
        return this.url();
    };
    return ImageUrlBuilder;
}();
exports.ImageUrlBuilder = ImageUrlBuilder; //# sourceMappingURL=builder.js.map
}}),
"[project]/node_modules/@sanity/image-url/lib/node/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var builder_1 = __importDefault(__turbopack_require__("[project]/node_modules/@sanity/image-url/lib/node/builder.js [app-ssr] (ecmascript)"));
module.exports = builder_1.default; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/client-boundary/PromisifiedAuthProvider.js [app-ssr] (ecmascript) <export usePromisifiedAuth as useAuth>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useAuth": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePromisifiedAuth"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/client-boundary/PromisifiedAuthProvider.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_0f75ae._.js.map