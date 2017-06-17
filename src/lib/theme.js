import createTheme from 'styled-components-theme';
import config from '../../config';

const theme = createTheme(...Object.keys(config.theme.colors));

export default theme;
