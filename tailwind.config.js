/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#333",
        midnightblue: "#00338d",
        whitesmoke: {
          100: "#eee",
          200: "#e9e9e9",
        },
        black: "#000",
        darkgray: "#b8b3b3",
        gainsboro: "#d9d9d9",
        gray: "#1b1b1b",
        darkorange: "#ff7300",
        darkslateblue: "#2f579f",
        silver: "#bababa",
      },
      spacing: {
        "num-165": "165px",
        "num-9_4": "9.4px",
        "num-64_1": "64.1px",
        "num-2_4": "2.4px",
        "num-498": "498px",
      },
      fontFamily: {
        "playfair": "Playfair Display, serif",
        "source-sans-pro": "Source Sans Pro, sans-serif",
        "poppins": "Poppins, sans-serif",
      },
      borderRadius: {
        "num-20": "20px",
        "num-30": "30px",
        "num-50": "50%",
      },
      padding: {
        "num-0": "0px",
        "num-6": "6px",
        "num-4": "4px",
        "num-2": "2px",
        "num-1": "1px",
        "num-23": "23px",
        "num-7": "7px",
        "num-45": "45px",
        "num-22": "22px",
      },
    },
    fontSize: {
      "num-16": "16px",
      "num-20": "20px",
      "num-12": "12px",
      "num-14": "14px",
      "num-19": "19px",
      "num-24": "24px",
      "num-36": "36px",
      "num-29": "29px",
      "num-22": "22px",
    },
    screens: {},
  },
  corePlugins: {
    preflight: false,
  },
};
