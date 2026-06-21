import CardNav from '../ui/CardNav';
import '../ui/CardNav.css';

const navItems = [
  {
    label: 'About',
    bgColor: '#1B1722',
    textColor: '#fff',
    links: [
      { label: 'School History', href: '#about', ariaLabel: 'School History' },
      { label: 'Mission & Vision', href: '#about', ariaLabel: 'Mission & Vision' },
      { label: 'Leadership', href: '#about', ariaLabel: 'Leadership' },
    ],
  },
  {
    label: 'Academics',
    bgColor: '#2F293A',
    textColor: '#fff',
    links: [
      { label: 'Curriculum', href: '#services', ariaLabel: 'Curriculum' },
      { label: 'CBSE Program', href: '#services', ariaLabel: 'CBSE Program' },
      { label: 'Smart Learning', href: '#services', ariaLabel: 'Smart Learning' },
    ],
  },
  {
    label: 'Admissions',
    bgColor: '#1B1722',
    textColor: '#fff',
    links: [
      { label: 'Admissions 2026-27', href: '#admissions', ariaLabel: 'Admissions 2026-27' },
      { label: 'Fee Structure', href: '#admissions', ariaLabel: 'Fee Structure' },
      { label: 'Contact Office', href: '#contact', ariaLabel: 'Contact Office' },
    ],
  },
];

export function Navbar() {
  return (
    <CardNav
      logo="/favicon.svg"          // ← uses your favicon from public folder
      logoAlt="DR ZAKIR MIDDLE SCHOOL"
      items={navItems}
      baseColor="rgba(255,255,255,0.95)"
      menuColor="#1a1304"
      buttonBgColor="#d49a4b"
      buttonTextColor="#1a1304"
    />
  );
}