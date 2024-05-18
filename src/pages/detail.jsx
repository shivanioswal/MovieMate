import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { Rating } from "react-simple-star-rating";

import { fetchDetails } from "../util/helper";
import { search, IMDBImagePath } from "../util/constants";

export default function Detail() {
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState(null);
  const { endpoint, id } = useParams();

  useEffect(() => {
    fetchDetails(`${search}/${endpoint}/${id}`, setDetails, setIsLoading);
  }, [id, endpoint]);

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <HashLoader color="#caf4ff" />
        </div>
      ) : (
        <>
          {details ? (
            <div className="detail">
              <img
                id="detail--poster"
                src={`${IMDBImagePath}/${details.poster_path}`}
                alt={details.title || details.original_name}
              />
              <div>
                <div className="detail--info">
                  <p id="detail--name">
                    {details.title || details.original_name}
                  </p>
                  <p>{details.overview}</p>
                </div>
                <p>
                  Homepage: <a href={details.homepage}>{details.homepage}</a>
                </p>
                {details.runtime && <p>Runtime: {details.runtime} minutes</p>}
                {details.release_date && (
                  <p>Release Date: {details.release_date}</p>
                )}
                <p>Status: {details.status}</p>
                <Rating
                  size={30}
                  initialValue={Math.ceil(details.vote_average) / 2}
                  readonly
                />
                <div className="detail--companies">
                  <p>Production Studio: </p>
                  {details.production_companies.length > 0 &&
                    details.production_companies.map((company) => (
                      <p key={company.id} id="company">
                        {company.name}
                      </p>
                    ))}
                </div>
                <div className="detail--genres">
                  <p>Genre: </p>
                  {details.genres.length > 0 &&
                    details.genres.map((genre) => (
                      <p key={genre.id} id="genre">
                        {genre.name}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <p>Could not find details of {id}</p>
          )}
        </>
      )}
    </div>
  );
}
