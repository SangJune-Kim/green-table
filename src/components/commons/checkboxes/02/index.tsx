import BookmarkIcon from "@mui/icons-material/Bookmark";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface ICheckBox01Props {
  title?: string;
  onClick?: () => void;
  onChange?: (e: any) => void;
  id?: string | undefined;
  checked?: boolean | undefined;
}

export default function CheckBox01(props: ICheckBox01Props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0fbaa3",
      },
      secondary: {
        main: "#C4C4C4",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Checkbox
        icon={<BookmarkBorderIcon color="secondary" />}
        checkedIcon={<BookmarkIcon />}
        onClick={props.onClick}
        onChange={props.onChange}
        checked={props.checked}
        id={props.id}
      />
    </ThemeProvider>
  );
}
