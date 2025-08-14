# 🌐 ESP-01 Based Web Server — fcityonline webpage

> This project uses the **ESP8266 ESP-01 Wi-Fi module** to host a **complete, responsive static website** locally via Wi-Fi. Designed to function as a low-cost, portable web server for professionals, brandings, portfolios, services, or webpages etc.

## 📦 Features

- Hosted entirely on ESP-01 using Arduino IDE.
- Embeds a responsive HTML website via `PROGMEM` for memory optimization.
- No external server or SD card needed.
- Mobile-friendly and optimized for local area access.
- Contains SEO and metadata for branding.

## 🧠 How It Works

This project uses the `ESP8266WebServer` class to serve a fully embedded HTML page when a user connects via the ESP-01's IP address.

## 🌐 Access via Local Network

When powered, the ESP-01 connects to your Wi-Fi and becomes accessible via its local IP. Devices on the same network can open the site through a browser.

## 🔧 Hardware Required

| Component         | Description                                 |
|------------------|---------------------------------------------|
| ESP-01 Module     | ESP8266 WiFi SoC (8 pins)                   |
| Arduino Uno       | Used as USB-to-Serial flasher (chipless)   |
| 3.3V Regulator    | AMS1117 or equivalent for powering ESP-01   |
| Breadboard & Jumpers | For wiring connections                |

### ⚠️ Important Notes

- **ESP-01 uses 3.3V only.** Supplying 5V directly may damage it.
- **TX/RX logic level shifting** is not always required but recommended for safe flashing.

## 🖥️ Software Required

- **Arduino IDE**
- **ESP8266 Board Package** (Install via Board Manager)

## 🔌 Wiring Diagram (ESP-01 to Arduino Uno [no ATmega328P])

| ESP-01 Pin | Connects To Arduino Uno Pin |
|------------|-----------------------------|
| VCC        | 3.3V Regulator Output        |
| GND        | GND                          |
| CH_PD      | 3.3V                         |
| GPIO0      | GND (only for flashing)      |
| TX         | RX (Pin 0 on Uno)            |
| RX         | TX (Pin 1 on Uno)            |
| RST        | Not connected (optional pull-up) |

> 💡 After flashing, remove GPIO0 from GND to boot normally.

## 🚀 Flashing the Sketch

1. Open Arduino IDE.
2. Install board: `ESP8266 by ESP8266 Community`.
3. Go to `Tools` → set:
   - Board: **Generic ESP8266 Module**
   - Flash size: 1M (512K SPIFFS)
   - Upload Speed: 115200
   - Port: (select your USB COM port)
4. Open `fcityonline.ino` and replace the Wi-Fi credentials:
   ```cpp
   const char* ssid = "YOUR_WIFI_NAME";
   const char* password = "YOUR_WIFI_PASSWORD";
   ```
5. Click **Upload**.
6. Once uploaded, disconnect GPIO0 from GND and reset the module.

## 🌍 Usage Instructions

1. Open **Serial Monitor** (baud: 115200).
2. After connecting to Wi-Fi, ESP will display an IP address like `192.168.0.105`.
3. Open that IP in any browser on the same Wi-Fi.

## 🔐 Security Warning

- Do **not** commit real SSID and password to public repositories.
- Replace them with placeholders like:
   ```cpp
   const char* ssid = "YOUR_WIFI_SSID";
   const char* password = "YOUR_WIFI_PASSWORD";
   ```

## 🙌 Credits

Developed by **(me)**
Powered by Arduino + ESP8266.

## 🚀 [Live Demo of hosted website on esp-01](https://r0o7-73rm1n41.github.io/esp01-webserver/demo.html)

## 📜 License

<https://unlicense.org/>
