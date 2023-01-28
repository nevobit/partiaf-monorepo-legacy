export const persistLocalStorage = <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify({...value}));
};

// TODO: pass this in utilities

export const clearLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};