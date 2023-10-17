import galleryCss from "./gallery.module.css";
const Gallery = () => {
  return (
    <>
      <div className={galleryCss.galleryContainer}>
        <div className={galleryCss.uzbSila}><h2><span>Our</span>Gallery</h2></div>
        <div className={galleryCss.galleryTop}>
          <div className={galleryCss.galleryTopDiv1}></div>
          <div className={galleryCss.galleryTopDiv2}></div>
          <div className={galleryCss.galleryTopDiv3}></div>
        </div>
        <div className={galleryCss.galleryMiddle}>
          <div className={galleryCss.galleryTopDiv4}></div>
          <div className={galleryCss.galleryTopDiv5}></div>
          <div className={galleryCss.galleryTopDiv6}></div>

        </div>
        <div className={galleryCss.galleryBottom}>
            <button>View All</button>
        </div>
      </div>
    </>
  );
};
export default Gallery;
