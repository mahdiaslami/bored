import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ir.rezero.bored',
  appName: 'Bored',
  webDir: 'dist',
  server: {
    hostname: "localhost",
    url: "http://localhost:5173",
    cleartext: true,
    allowNavigation: [
      "http://localhost:5173"
    ]
  },
  android: {
    webContentsDebuggingEnabled: true
  },
  plugins: {
    Keyboard: {
      resizeOnFullScreen: false
    },
    SplashScreen: {
      launchAutoHide: false
    }
  }
};

export default config;
