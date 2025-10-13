import { NavItem } from '@/types/NavItem';
import { Briefcase, House, MessageCircleMore, PersonStandingIcon } from 'lucide-react';

const navItems: NavItem[] = [
  { name: "Home", href: '/dashboard', icon:House},
  { name: 'Chats', href: '/dashboard/messages', icon:MessageCircleMore },
  { name: 'Profile', href: '/dashboard/profile', icon:PersonStandingIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Briefcase }
];

export default navItems;