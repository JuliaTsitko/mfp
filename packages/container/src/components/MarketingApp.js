import app from "marketing/MarketingIndex";
import React, { useRef, useEffect } from "react";

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        app.mountMarketing(ref.current);
    }, []);

    return (
        <div ref={ref} />
    )
}