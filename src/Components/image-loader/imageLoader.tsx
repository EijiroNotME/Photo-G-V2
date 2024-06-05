import { useState, useEffect } from "react";
import { PostData } from "../../types/posts";
// import useLoadbyCategory from "../../hooks/useLoadbyCategory";
import Spinner from "../spinner/spinner";
import useCollection from "../../hooks/useCollection";

type ImageLoaderProps = {
  category: string[];
};

const ImageLoader: React.FC<ImageLoaderProps> = ({ category }) => {
  const [images, setImages] = useState<PostData[]>([]);

  const { error, isPending, posts, loadData } =
    useCollection();

  useEffect(() => {
    loadData(category);
  }, [category]);

  useEffect(() => {
    setImages(posts);
  }, [posts]);

  return (
    <div>
      {!isPending ? (
        <div className="h-screen overflow-hidden">
          <div className="m-5 columns-2 gap-2 lg:gap-4 sm:columns-4 md:columns-5 lg:columns-6 xl:columns-7 [&>img:not(:first-child)]:mt-2 lg:[&>img:not(:first-child)]:mt-4">
            {images.map((post) => (
              <div key={post.imageURL}>
                {/* <h3>{post.title}</h3> */}
                <img src={post.imageURL} alt={post.title} className="rounded-lg mb-5"/>
                {/* <p>{post.description}</p> */}
              </div>
            ))}
            {error && (
              <p className="col-span-5 text-center text-red-500 mt-4">
                {error}
              </p>
            )}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ImageLoader;
