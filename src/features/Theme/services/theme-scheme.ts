const PRIMARY_COLOR_LIGHT = "rgb(3, 123, 121)";
const SECONDARY_COLOR_LIGHT = "rgb(3, 123, 121)";
const TEXT_LIGHT = "rgb(61, 60, 60)";

export const lightTheme = {
  bg: "rgb(236 236 236)",
  text: TEXT_LIGHT,
  primary: PRIMARY_COLOR_LIGHT,
  secondary: SECONDARY_COLOR_LIGHT,
  ui: {
    switch: "rgb(255, 244, 201)",
    buttons: {
      primary: {
        background: PRIMARY_COLOR_LIGHT,
        color: "#fff",
        border: "none",
      },
      secondary: {
        background: SECONDARY_COLOR_LIGHT,
        color: "#fff",
        border: "none",
      },
      outlined: {
        background: "inherit",
        color: PRIMARY_COLOR_LIGHT,
        border: PRIMARY_COLOR_LIGHT,
      },
      ghost: {
        background: "inherit",
        color: TEXT_LIGHT,
        border: "none",
      },
    },
  },
};

const PRIMARY_COLOR_DARK = "rgb(6, 164, 162)";
const SECONDARY_COLOR_DARK = "rgb(103, 187, 186)";
const TEXT_DARK = "rgb(222, 222, 222)";

export const darkTheme = {
  bg: "rgb(63, 62, 62)",
  text: TEXT_DARK,
  primary: PRIMARY_COLOR_DARK,
  secondary: SECONDARY_COLOR_DARK,
  ui: {
    switch: "rgb(222, 222, 222)",
    buttons: {
      primary: {
        background: PRIMARY_COLOR_DARK,
        color: "#fff",
        border: "none",
      },
      secondary: {
        background: SECONDARY_COLOR_DARK,
        color: "#fff",
        border: "none",
      },
      outlined: {
        background: "inherit",
        color: PRIMARY_COLOR_DARK,
        border: PRIMARY_COLOR_DARK,
      },
      ghost: {
        background: "inherit",
        color: TEXT_DARK,
        border: "none",
      },
    },
  },
};
