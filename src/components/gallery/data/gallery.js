import photo11 from '../../../assets/gallery/photo-bloom.jpg';
import photo7 from '../../../assets/gallery/photo-greenery.jpg';
import photo9 from '../../../assets/gallery/photo-lakeview.jpg';
import photo3 from '../../../assets/gallery/photo-mountains.jpg';
import photo1 from '../../../assets/gallery/photo-nature.jpg';
import photo13 from '../../../assets/gallery/photo-peaceful.jpg';
import photo4 from '../../../assets/gallery/photo-portrait.jpg';
import photo6 from '../../../assets/gallery/photo-reflection.jpg';
import photo5 from '../../../assets/gallery/photo-sky.jpg';
import photo8 from '../../../assets/gallery/photo-sunset.jpg';
import photo10 from '../../../assets/gallery/photo-urbanlight.jpg';
import photo2 from '../../../assets/gallery/photo-waves.jpg';
import photo12 from '../../../assets/gallery/photo-winterscene.jpg';
import preview11 from '../../../assets/gallery/previews/photo-bloom.webp';
import preview7 from '../../../assets/gallery/previews/photo-greenery.webp';
import preview9 from '../../../assets/gallery/previews/photo-lakeview.webp';
import preview3 from '../../../assets/gallery/previews/photo-mountains.webp';
import preview1 from '../../../assets/gallery/previews/photo-nature.webp';
import preview13 from '../../../assets/gallery/previews/photo-peaceful.webp';
import preview4 from '../../../assets/gallery/previews/photo-portrait.webp';
import preview6 from '../../../assets/gallery/previews/photo-reflection.webp';
import preview5 from '../../../assets/gallery/previews/photo-sky.webp';
import preview8 from '../../../assets/gallery/previews/photo-sunset.webp';
import preview10 from '../../../assets/gallery/previews/photo-urbanlight.webp';
import preview2 from '../../../assets/gallery/previews/photo-waves.webp';
import preview12 from '../../../assets/gallery/previews/photo-winterscene.webp';
import viewer11 from '../../../assets/gallery/viewer/photo-bloom.webp';
import viewer7 from '../../../assets/gallery/viewer/photo-greenery.webp';
import viewer9 from '../../../assets/gallery/viewer/photo-lakeview.webp';
import viewer3 from '../../../assets/gallery/viewer/photo-mountains.webp';
import viewer1 from '../../../assets/gallery/viewer/photo-nature.webp';
import viewer13 from '../../../assets/gallery/viewer/photo-peaceful.webp';
import viewer4 from '../../../assets/gallery/viewer/photo-portrait.webp';
import viewer6 from '../../../assets/gallery/viewer/photo-reflection.webp';
import viewer5 from '../../../assets/gallery/viewer/photo-sky.webp';
import viewer8 from '../../../assets/gallery/viewer/photo-sunset.webp';
import viewer10 from '../../../assets/gallery/viewer/photo-urbanlight.webp';
import viewer2 from '../../../assets/gallery/viewer/photo-waves.webp';
import viewer12 from '../../../assets/gallery/viewer/photo-winterscene.webp';

/**
 * Original gallery images and lightweight previews in display order.
 *
 * @type {Array<{src: string, preview: string, viewer: string, width: number, height: number, title: string}>}
 */
const galleryImages = [
  { src: photo1, preview: preview1, viewer: viewer1, width: 1200, height: 1200, title: 'Nature' },
  { src: photo2, preview: preview2, viewer: viewer2, width: 640, height: 480, title: 'Waves' },
  {
    src: photo3,
    preview: preview3,
    viewer: viewer3,
    width: 3000,
    height: 2250,
    title: 'Mountains',
  },
  { src: photo4, preview: preview4, viewer: viewer4, width: 700, height: 932, title: 'Portrait' },
  { src: photo5, preview: preview5, viewer: viewer5, width: 2000, height: 3000, title: 'Sky' },
  {
    src: photo6,
    preview: preview6,
    viewer: viewer6,
    width: 1024,
    height: 683,
    title: 'Reflection',
  },
  { src: photo7, preview: preview7, viewer: viewer7, width: 3000, height: 2003, title: 'Greenery' },
  { src: photo8, preview: preview8, viewer: viewer8, width: 3000, height: 1998, title: 'Sunset' },
  { src: photo9, preview: preview9, viewer: viewer9, width: 600, height: 400, title: 'Lake View' },
  {
    src: photo10,
    preview: preview10,
    viewer: viewer10,
    width: 3000,
    height: 2250,
    title: 'Urban Light',
  },
  { src: photo11, preview: preview11, viewer: viewer11, width: 7728, height: 5152, title: 'Bloom' },
  {
    src: photo12,
    preview: preview12,
    viewer: viewer12,
    width: 2500,
    height: 1667,
    title: 'Winter Scene',
  },
  {
    src: photo13,
    preview: preview13,
    viewer: viewer13,
    width: 500,
    height: 625,
    title: 'Peaceful',
  },
];

export default galleryImages;
