import { useCallback, useState } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // 1) 어떤 종류의 요청이든 가능하게
    // 2) 어떤 데이터 변환도 가능하게
    // 3) 로딩과 에러 상태 관리
    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            });

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;
