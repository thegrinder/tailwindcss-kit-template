// eslint-disable-next-line import/no-extraneous-dependencies
import { useColorMode } from 'theme-ui';

const Wrapper = ({ children }) => {
  const [colorMode] = useColorMode();
  return <div className={`${colorMode}-mode`}>{children}</div>;
};

export default Wrapper;
