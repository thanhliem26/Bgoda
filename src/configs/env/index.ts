const envConfig = {
    ENDPOINT_API: import.meta.env.VITE_ENDPOINT_BE,
    ENDPOINT_API_APPLICATION: import.meta.env.VITE_ENDPOINT_BE_APPLICATION,
    TINY_API_KEY: import.meta.env.VITE_TINY_API_KEY,
    ENDPOINT_API_NODE: import.meta.env.VITE_ENDPOINT_BE_NODE
}

export default envConfig;