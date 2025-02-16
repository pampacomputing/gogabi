import * as icons from './svgs/_index';

type IconName = 'Facebook' | 'Instagram';

interface IconProps {
  name: IconName;
}

export default function Icon({ name }: IconProps) {
  const CurrentIcon = icons[name] ;

  if (!CurrentIcon) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }

  return (
    
    <svg
      className="w-5 h-5"
      color="inherit"
      fill="white"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <CurrentIcon />
    </svg>
  );
}
