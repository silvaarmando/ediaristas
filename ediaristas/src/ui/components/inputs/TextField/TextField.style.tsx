import {
  TextField
} from "@material-ui/core";
import {
  experimentalStyled as styled
} from "@material-ui/core/styles";

export const TextFieldStyled = styled(TextField)`
  border-color: ${({ theme }) => theme.palette.grey[50]};
`;