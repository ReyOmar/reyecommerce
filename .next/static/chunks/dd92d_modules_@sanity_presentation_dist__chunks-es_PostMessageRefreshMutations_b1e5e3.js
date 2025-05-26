(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/dd92d_modules_@sanity_presentation_dist__chunks-es_PostMessageRefreshMutations_b1e5e3.js", {

"[project]/node_modules/@sanity/presentation/dist/_chunks-es/PostMessageRefreshMutations.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PostMessageRefreshMutations$1)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$presentation$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@sanity/presentation/node_modules/react-compiler-runtime/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/sanity/lib/index.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
function PostMessageRefreshMutations(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$presentation$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8), { comlink, type, previewKitConnection, loadersConnection } = props;
    let t0, t1;
    $[0] !== props.id ? (t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPublishedId"])(props.id), $[0] = props.id, $[1] = t1) : t1 = $[1], t0 = t1;
    const id = t0, { draft, published, ready } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditState"])(id, type, "low"), livePreviewEnabled = previewKitConnection === "connected" || loadersConnection === "connected";
    if (ready && draft || published) {
        let t2;
        return $[2] !== comlink || $[3] !== draft || $[4] !== id || $[5] !== livePreviewEnabled || $[6] !== published ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PostMessageRefreshMutationsInner, {
            comlink,
            draft,
            livePreviewEnabled,
            published
        }, id), $[2] = comlink, $[3] = draft, $[4] = id, $[5] = livePreviewEnabled, $[6] = published, $[7] = t2) : t2 = $[7], t2;
    }
    return null;
}
function PostMessageRefreshMutationsInner(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$presentation$2f$node_modules$2f$react$2d$compiler$2d$runtime$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14), { comlink, draft, published, livePreviewEnabled } = props, [prevDraft, setPrevDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(draft), [prevPublished, setPrevPublished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(published);
    let t0;
    $[0] !== comlink || $[1] !== draft || $[2] !== livePreviewEnabled || $[3] !== prevDraft?._rev || $[4] !== prevPublished?._rev || $[5] !== published ? (t0 = ()=>{
        prevDraft?._rev !== draft?._rev && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setPrevDraft(draft)), draft && comlink?.post("presentation/refresh", {
            source: "mutation",
            livePreviewEnabled,
            document: parseDocument(draft)
        })), prevPublished?._rev !== published?._rev && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(()=>setPrevPublished(published)), published && comlink?.post("presentation/refresh", {
            source: "mutation",
            livePreviewEnabled,
            document: parseDocument(published)
        }));
    }, $[0] = comlink, $[1] = draft, $[2] = livePreviewEnabled, $[3] = prevDraft?._rev, $[4] = prevPublished?._rev, $[5] = published, $[6] = t0) : t0 = $[6];
    const t1 = prevDraft?._rev, t2 = prevPublished?._rev;
    let t3;
    return $[7] !== comlink || $[8] !== draft || $[9] !== livePreviewEnabled || $[10] !== published || $[11] !== t1 || $[12] !== t2 ? (t3 = [
        comlink,
        draft,
        livePreviewEnabled,
        t1,
        t2,
        published
    ], $[7] = comlink, $[8] = draft, $[9] = livePreviewEnabled, $[10] = published, $[11] = t1, $[12] = t2, $[13] = t3) : t3 = $[13], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t3), null;
}
function parseDocument(document) {
    const { _id, _type, _rev, slug } = document;
    return {
        _id,
        _type,
        _rev,
        slug
    };
}
var PostMessageRefreshMutations$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(PostMessageRefreshMutations);
;
 //# sourceMappingURL=PostMessageRefreshMutations.js.map
}}),
}]);

//# sourceMappingURL=dd92d_modules_%40sanity_presentation_dist__chunks-es_PostMessageRefreshMutations_b1e5e3.js.map