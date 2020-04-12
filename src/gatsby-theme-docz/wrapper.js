// eslint-disable-next-line import/no-extraneous-dependencies
import { useColorMode } from 'theme-ui';

// eslint-disable-next-line import/no-unresolved
import '../../../styles.css';

const Wrapper = ({ children }) => {
  const [colorMode] = useColorMode();
  return <div className={`${colorMode}-mode`}>{children}</div>;
};

export default Wrapper;
