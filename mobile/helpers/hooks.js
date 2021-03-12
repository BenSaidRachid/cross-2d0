import { useState } from "react";

export function useApi(controller) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const start = function (payload) {
        setLoading(true);
        controller(payload)
            .then(res => {
                if (res.data) {
                    setData(res.data);
                } else {
                    setData(res);
                }
            })
            .catch(err => {
                setError(err.response);
            })
            .then(() => {
                setLoading(false);
            });
    };
    return { data, error, loading, fetch: start };
}
