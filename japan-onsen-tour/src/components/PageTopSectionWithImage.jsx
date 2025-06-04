import Heading2 from "./Heading2";
import ResponsiveRow from "./ResponsiveRow";
import ResponsiveRowImage from "./ResponsiveRowImage";
import ResponsiveRowText from "./ResponsiveRowText";

function PageTopSectionWithImage({ title, content, img, alt="image", className=""}) {
  return (
    <ResponsiveRow className={`${className}`}>
			<ResponsiveRowText className="p-4 py-20 md:px-10 md:py-60 order-1 md:order-1">
        <Heading2>{title}</Heading2>
        <p className="page-content-text">
          {content}
        </p>
      </ResponsiveRowText>
      <ResponsiveRowImage
        src={img}
        alt={alt}
        className="order-2 md:order-2"
      />
    </ResponsiveRow>
  );
}

export default PageTopSectionWithImage;
