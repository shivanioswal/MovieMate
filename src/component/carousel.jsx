import Slider from "react-slick";
import { Link } from "react-router-dom";

import { IMDBImagePath, settings } from "../util/constants";

export default function Carousel({ data, category, redirect }) {
  return (
    <>
      <div className="home--header">
        <h2>{category}</h2>
        <Link to={redirect}>
          <button className="see--all">View More</button>
        </Link>
      </div>
      <Slider {...settings}>
        {data.map((item) => {
          const { id, title, original_name, poster_path } = item;
          const endpoint = title ? "movie" : "tv";

          return (
            <Link key={id} to={`/search/${endpoint}/${id}`}>
              <div className="listing--details">
                <div className="no-overflow">
                  <img
                    id="poster"
                    src={`${IMDBImagePath}/${poster_path}`}
                    alt={title}
                  />
                </div>
                <p className="name">{title || original_name}</p>
              </div>
            </Link>
          );
        })}
      </Slider>
    </>
  );
}
