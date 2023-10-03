import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.sunbird.app',
  appName: 'Sunbird',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    "cordova-plugin-fcm-with-dependecy-updated": {
      "ANDROID_FIREBASE_BOM_VERSION": "26.5.0",
      "GRADLE_TOOLS_VERSION": "3.5.0",
      "GOOGLE_SERVICES_VERSION": "4.3.8",
      "ANDROID_DEFAULT_NOTIFICATION_ICON": "@mipmap/ic_launcher"
    },
    "cordova-plugin-utility": {
      "URL_SCHEME": "org.sunbird.app",
      "URL_HOST": "mobile",
    }
  },
  cordova: {
    preferences: {
      "URL_SCHEME": "org.sunbird.app",
      "URL_HOST": "mobile",
    }
  }
};

export default config;
