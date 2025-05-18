export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 'volcanoyt',
    title: 'VolcanoYT',
    description: 'A comprehensive platform focused on video content creation and sharing, with a clean modern interface and user-friendly experience.',
    imageUrl: 'https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://volcanoyt.com/',
    tags: ['Web App', 'Content Platform', 'Video Sharing']
  },
  {
    id: 'ps-yuuki',
    title: 'PS Yuuki',
    description: 'A specialized platform for PlayStation enthusiasts, offering resources, tools, and community features for gamers.',
    imageUrl: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: 'https://ps.yuuki.me/',
    tags: ['Gaming', 'PlayStation', 'Community']
  }
];

export default projects;