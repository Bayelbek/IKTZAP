export const APP_NAME = "IKTZAP";

// export const API_URL = "http://localhost:5000";
// export const API_URL = "http://192.168.100.37:5000";
export const API_URL = "https://api.iktzap.besoft.kg";

export const PAGE_SIZE = 30;

export const getStorageFullUrl = (folderName: string, path: string) => {
  return `${API_URL}/storage/${folderName}/${path}`;
};
