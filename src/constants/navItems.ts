import { NavItem } from '@/types/NavItem';
import { Briefcase, House, MessageCircleMore, PersonStandingIcon, Globe } from 'lucide-react';

const navItems: NavItem[] = [
  { name: "Home", href: '/dashboard/discover', icon:House},  
  { name: 'Feed', href: '/dashboard/feed', icon: Briefcase },
  { name: 'Chats', href: '/dashboard/messages', icon:MessageCircleMore },
  { name: 'Profile', href: '/dashboard/profile', icon:PersonStandingIcon },
];

export default navItems;