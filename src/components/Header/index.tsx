import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function Header() {
  return (
    <>
      <Image src={logo} alt="Logo" width={329} height={100} />
    </>
  );
}