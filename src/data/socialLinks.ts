import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Github,
  MessageCircle,
  Send,
  Mail,
  Phone
} from 'lucide-react';

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: any;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/siakbary',
    icon: Facebook,
    color: 'bg-[#1877F2] hover:bg-[#0C63D4]'
  },
  {
    id: 'twitter',
    name: 'X / Twitter',
    url: 'https://x.com/siakbary',
    icon: Twitter,
    color: 'bg-black hover:bg-gray-800'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/akbaryahya',
    icon: Instagram,
    color: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:from-[#7232A8] hover:via-[#E41A1A] hover:to-[#ECA237]'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@AkbarYahya',
    icon: Youtube,
    color: 'bg-[#FF0000] hover:bg-[#D90000]'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/akbaryahya/',
    icon: Linkedin,
    color: 'bg-[#0A66C2] hover:bg-[#084E96]'
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/akbaryahya',
    icon: Github,
    color: 'bg-[#24292F] hover:bg-[#1D2125]'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@siakbary',
    icon: MessageCircle, // Using a similar icon
    color: 'bg-black hover:bg-gray-800'
  },
  {
    id: 'bsky',
    name: 'BlueSky',
    url: 'https://bsky.app/profile/siakbary.my.id',
    icon: Twitter, // Using similar icon
    color: 'bg-[#0085FF] hover:bg-[#0066CC]'
  },
  {
    id: 'threads',
    name: 'Threads',
    url: 'https://www.threads.com/@akbaryahya',
    icon: MessageCircle,
    color: 'bg-[#000000] hover:bg-[#333333]'
  },
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/Siakbary',
    icon: Send,
    color: 'bg-[#26A5E4] hover:bg-[#0088CC]'
  },
  {
    id: 'line',
    name: 'LINE',
    url: 'https://line.me/ti/p/-8u6YmSovz',
    icon: MessageCircle,
    color: 'bg-[#06C755] hover:bg-[#05A847]'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/088744444510',
    icon: Phone,
    color: 'bg-[#25D366] hover:bg-[#1DA853]'
  },
  {
    id: 'vk',
    name: 'VK',
    url: 'https://vk.com/akbaryahya',
    icon: MessageCircle,
    color: 'bg-[#0077FF] hover:bg-[#0066CC]'
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:me@siakbary.my.id',
    icon: Mail,
    color: 'bg-[#EA4335] hover:bg-[#C5221F]'
  }
];

export default socialLinks;