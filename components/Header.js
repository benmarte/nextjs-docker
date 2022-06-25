import getConfig from 'next/config';

const {
  publicRuntimeConfig: { processEnv },
} = getConfig();

const Header = () => {

  const {NEXT_PUBLIC_MESSAGE} = processEnv;
  
  return (
    <div>
      Hello, {NEXT_PUBLIC_MESSAGE}
    </div>
  )
}

export default Header;