import { NavItem } from '@/types/NavItem';
import { Briefcase, House, MessageCircleMore, PersonStandingIcon, Globe } from 'lucide-react';

const navItems: NavItem[] = [
  { name: "Home", href: '/dashboard', icon:House},  
  { name: 'Discover', href: '/dashboard/discover', icon:Globe },
  { name: 'Feed', href: '/dashboard/feed', icon: Briefcase },
  { name: 'Chats', href: '/dashboard/messages', icon:MessageCircleMore },
  { name: 'Profile', href: '/dashboard/profile', icon:PersonStandingIcon },
];

export default navItems;