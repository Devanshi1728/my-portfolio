module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
    animation: {
      bounceOnce: "bounceOnce 0.6s ease-in-out",
      wave: "wave 1.5s infinite ease-in-out",
      pulseSlow: "pulseSlow 2s infinite",
      float: "float 3s ease-in-out infinite",
      flip: "flip 3s ease-in-out",
      slideRotate: "slideRotate 1s ease-in-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      slideUp: {
        "0%": { transform: "translateY(50px)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
      slideDown: {
        "0%": { transform: "translateY(-50px)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
      scaleIn: {
        "0%": { transform: "scale(0.8)", opacity: 0 },
        "100%": { transform: "scale(1)", opacity: 1 },
      },
      bounceOnce: {
        "0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
        "100%": { transform: "translateY(0)" },
      },
      wave: {
        "0%": { transform: "rotate(0deg)" },
        "50%": { transform: "rotate(10deg)" },
        "100%": { transform: "rotate(0deg)" },
      },
      pulseSlow: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0.5 },
      },
      float: {
        "0%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-10px)" },
        "100%": { transform: "translateY(0)" },
      },
      flip: {
        "0%": { transform: "rotateY(0deg)" },
        "50%": { transform: "rotateY(180deg)" },
        "100%": { transform: "rotateY(360deg)" },
      },
      slideRotate: {
        "0%": { transform: "translateX(-100px) rotate(-10deg)", opacity: 0 },
        "100%": { transform: "translateX(0) rotate(0deg)", opacity: 1 },
      }
    }
  },
  plugins: [],
};