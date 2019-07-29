import { get } from "lodash";

export const ButtonStyle = theme => ({
  root: {
    borderRadius: "100px",
    fontSize: "1rem",
    padding: "0 16px",
    height: "3rem",
    minWidth: "224px",
    fontFamily: "GTWalsheim Bold"
  },
  label: {
    textTransform: "none"
  },
  /** color='primary' variant='text' */
  textPrimary: {
    backgroundColor: "none",
    border: 0,
    color: get(theme, "palette.primary.main", "white"),
    "&:hover": {
      color: get(theme, "palette.white", "white"),
      backgroundColor: get(theme, "palette.primary.dark", "white")
    },
    "&:disabled": {
      color: get(theme, "palette.gray[600]", "gray"),
      backgroundColor: "transparent"
    }
  },
  /** color='primary' variant='contained' */
  containedPrimary: {
    boxShadow: get(theme, "customShadows[1]", "black"),
    "&:disabled": {
      borderColor: get(theme, "palette.gray[500]", "gray"),
      color: get(theme, "palette.white", "white")
    }
  },
  /** color='primary' variant='outlined' */
  outlinedPrimary: {
    boxShadow: get(theme, "customShadows[1]", "black"),
    borderWidth: "2px",
    borderColor: get(theme, "palette.primary.main", "black"),
    "&:hover": {
      borderWidth: "2px"
    },
    "&:disabled": {
      borderWidth: "2px",
      borderColor: get(theme, "palette.gray[500]", "gray"),
      color: get(theme, "palette.gray[600]", "gray")
    }
  },
  textSecondary: {
    backgroundColor: "none",
    border: 0,
    color: get(theme, "palette.secondary.main", "black"),
    "&:hover": {
      color: get(theme, "palette.white", "white"),
      backgroundColor: get(theme, "palette.secondary.dark", "black")
    },
    "&:disabled": {
      color: get(theme, "palette.gray[600]", "gray"),
      backgroundColor: "transparent"
    }
  },
  /** color='secondary' variant='contained' */
  containedSecondary: {
    boxShadow: get(theme, "customShadows[1]", "black"),
    "&:disabled": {
      borderColor: get(theme, "palette.gray[500]", "gray"),
      color: get(theme, "palette.white", "white")
    }
  },
  /** color='secondary' variant='outlined' */
  outlinedSecondary: {
    boxShadow: get(theme, "customShadows[1]", "black"),
    borderWidth: "2px",
    borderColor: get(theme, "palette.secondary.main", "black"),
    "&:hover": {
      borderWidth: "2px"
    },
    "&:disabled": {
      borderWidth: "2px",
      borderColor: get(theme, "palette.gray[500]", "gray"),
      color: get(theme, "palette.gray[600]", "gray")
    }
  },
  /** size='small' */
  sizeSmall: {
    minWidth: "auto"
  }
});
