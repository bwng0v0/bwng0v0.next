'use client';
import { useEffect, useRef } from 'react';
// import { useTheme } from 'next-themes'; 다크모드 미지원

export default function Giscus() {
    const ref = useRef(null);
    // const { resolvedTheme } = useTheme(); 다크모드 미지원

    // https://github.com/giscus/giscus/tree/main/styles/themes
    // const theme = resolvedTheme === 'dark' ? 'dark' : 'light'; 다크모드 미지원
    const theme = 'light';

    useEffect(() => {
        if (!ref.current || ref.current.hasChildNodes()) return;

        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://giscus.app/client.js';
        scriptElem.async = true;
        scriptElem.crossOrigin = 'anonymous';

        scriptElem.setAttribute('data-repo', "bwng0v0/giscus-only");
        scriptElem.setAttribute('data-repo-id', "R_kgDOMj7igA");
        scriptElem.setAttribute('data-category', "Announcements");
        scriptElem.setAttribute('data-category-id', "DIC_kwDOMj7igM4ChrN9");
        scriptElem.setAttribute('data-mapping', 'pathname');
        scriptElem.setAttribute('data-strict', '0');
        scriptElem.setAttribute('data-reactions-enabled', '1');
        scriptElem.setAttribute('data-emit-metadata', '0');
        scriptElem.setAttribute('data-input-position', 'bottom');
        scriptElem.setAttribute('data-theme', theme);
        scriptElem.setAttribute('data-lang', 'ko');

        ref.current.appendChild(scriptElem);
    }, [theme]);

    // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
    useEffect(() => {
        const iframe = document.querySelector < HTMLIFrameElement > ('iframe.giscus-frame');
        iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
    }, [theme]);

    return <section ref={ref} />;
}