const COLORS = {
  PRUSSIAN_BLUE: {
    BASE: "#0b3c5d",
    LIGHT: "#3c91cb",
    LIGHTEST: "#7eb4d9",
    get RGBA() {
      return (hex, alpha) => hexToRgbA(hex, alpha);
    },
    get DEFAULT_GRADIENT() {
      return gradient(this);
    },
    get BACKGROUND_GRADIENT() {
      return bgGradient(this);
    }
  },
  SKY_BLUE: {
    BASE: "#328cc1",
    LIGHT: "#56c0ff",
    LIGHTEST: "#b6d7eb",
    get RGBA() {
      return (hex, alpha) => hexToRgbA(hex, alpha);
    },
    get DEFAULT_GRADIENT() {
      return gradient(this);
    },
    get BACKGROUND_GRADIENT() {
      return bgGradient(this);
    }
  },
  GOLD_LEAF: {
    BASE: "#d9b310",
    LIGHT: "#cbb764",
    LIGHTEST: "#f0e1a2",
    get RGBA() {
      return (hex, alpha) => hexToRgbA(hex, alpha);
    },
    get DEFAULT_GRADIENT() {
      return gradient(this);
    },
    get BACKGROUND_GRADIENT() {
      return bgGradient(this);
    }
  },
  IVORY_BLACK: {
    BASE: "#1d2731",
    LIGHT: "#4e5963",
    LIGHTEST: "#7a8ea2",
    get RGBA() {
      return (hex, alpha) => hexToRgbA(hex, alpha);
    },
    get DEFAULT_GRADIENT() {
      return gradient(this);
    },
    get BACKGROUND_GRADIENT() {
      return bgGradient(this);
    }
  },
  EGGSHELL: "#f5f5f5",
  SUMMER_SKY: {
    BASE: "#286DA8",
    LIGHT: "#3fa6ff",
    LIGHTEST: "#9fd3ff",
    get RGBA() {
      return (hex, alpha) => hexToRgbA(hex, alpha);
    },
    get DEFAULT_GRADIENT() {
      return gradient(this);
    },
    get BACKGROUND_GRADIENT() {
      return bgGradient(this);
    }
  },
  WARM_PEACH: {
    BASE: "#CD5360",
    LIGHT: "#eb818c",
    LIGHTEST: "#f9c2c8",
    get RGBA() {
      return (hex, alpha) => hexToRgbA(hex, alpha);
    },
    get DEFAULT_GRADIENT() {
      return gradient(this);
    },
    get BACKGROUND_GRADIENT() {
      return bgGradient(this);
    }
  },
  FIELD: {
    BASE: "#B37D4E",
    LIGHT: "#c69e7c",
    LIGHTEST: "#ebc8aa",
    get RGBA() {
      return (hex, alpha) => hexToRgbA(hex, alpha);
    },
    get DEFAULT_GRADIENT() {
      return gradient(this);
    },
    get BACKGROUND_GRADIENT() {
      return bgGradient(this);
    }
  },
  BREEZE: {
    BASE: "#438496",
    LIGHT: "#56b1c9",
    LIGHTEST: "#93d4e7",
    get RGBA() {
      return (hex, alpha) => hexToRgbA(hex, alpha);
    },
    get DEFAULT_GRADIENT() {
      return gradient(this);
    },
    get BACKGROUND_GRADIENT() {
      return bgGradient(this);
    }
  }
};

function hexToRgbA(hex, alpha = "1") {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      "," +
      alpha +
      ")"
    );
  }
  throw new Error("Bad Hex");
}

function gradient(color) {
  return `linear-gradient(45deg, ${color.RGBA(color.BASE)} 0%, ${color.RGBA(
    color.LIGHT
  )} 50%, ${color.RGBA(color.LIGHTEST)} 100%);`;
}

function bgGradient(color) {
  return `linear-gradient(45deg, ${color.RGBA(
    color.BASE,
    "0.9"
  )} 0%, ${color.RGBA(color.LIGHT, "0.7")} 45%, ${color.RGBA(
    color.LIGHTEST,
    "0.25"
  )} 100%);`;
}

export default COLORS;
