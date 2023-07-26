import jsonServerProvider from "https://github.com/marmelab/react-admin/tree/master/packages/ra-data-json-server";

export const dataProvider = jsonServerProvider(import.meta.env.VITE_JSON_SERVER_URL);
