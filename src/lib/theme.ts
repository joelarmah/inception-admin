export const theme = {
  colors: {
    primary: {
      blue: "#2B3674",
      lightBlue: "#258BBC",
      linkedin: "#066093",
    },
    ui: {
      background: {
        white: "#FFFFFF",
        gray: "#F9FAFB",
      },
      text: {
        primary: "#1E293B",
        secondary: "#64748B",
        muted: "#6B7280",
      },
      border: {
        default: "#D1D5DB",
        focus: "#3B82F6",
      },
      selection: {
        background: "#EFF6FF",
        border: "#BFDBFE",
      },
    },
    social: {
      github: "#000000",
      linkedin: "#066093",
    },
    status: {
      error: "#EF4444",
      success: "#10B981",
    },
  },
} as const

export type Theme = typeof theme
