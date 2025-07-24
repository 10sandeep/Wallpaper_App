# 📱 WallForge - React Native Wallpaper App (Expo)

WallForge is a beautifully crafted wallpaper app built with **React Native** and **Expo**. This app dynamically adjusts wallpapers based on the device's screen resolution.

---

## 🚀 Getting Started

### 🛠 Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- A physical **Android device** or emulator
- [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) installed on your phone

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/wallforge-app.git
cd wallforge-app

# Install dependencies
npm install
# or
yarn install
📲 Run on Android with Expo Go
bash
Copy code
npx expo start
A QR code will open in your terminal or browser.

Open the Expo Go app on your phone and scan the QR code.

The app will load instantly on your device.

Make sure your phone and computer are on the same Wi-Fi network.

🔄 Clear Cache (if issues occur)
bash
Copy code
npx expo start -c
📁 Folder Structure
bash
Copy code
project-root/
├── app/
│   ├── index.js            # Welcome screen
│   └── home/index.js       # Home screen
├── assets/
│   └── images/             # App images
├── helper/
│   └── common.js           # wp/hp helper functions
├── README.md
└── package.json
📚 Useful Commands
bash
Copy code
npx expo start           # Start the dev server
npx expo start -c        # Clear cache and start fresh
npx expo install expo-linear-gradient   # Install linear gradient


