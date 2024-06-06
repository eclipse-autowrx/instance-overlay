import { Config } from "@/types/addon.type";

const config: Config = {
  serverBaseUrl:
    import.meta.env.VITE_SERVER_BASE_URL || "http://localhost:8080",
  serverVersion: import.meta.env.VITE_SERVER_VERSION || "v2",
  studioUrl: "https://studio.digital.auto",
  studioBeUrl: "https://bewebstudio.digitalauto.tech",
  widgetMarketPlaceUrl: "https://marketplace.digital.auto/packagetype/widget",
  widgetMarketPlaceBe: "https://store-be.digitalauto.tech",
  uploadFileUrl: "https://upload.digitalauto.asia",
  instanceLogo:
    "https://covesa.global/wp-content/uploads/2024/03/covesa_logo.png",
  instance: "covesa",
  genAI: {
    defaultEndpointUrl: "https://intermediate.digitalauto.tech/v1/genai",
    marketplaceUrl: "https://store-be.digitalauto.tech/marketplace/genai",
    sdvApp: [],
    dashboard: [],
  },
};

export default config;
