import React from "react";

function Card(props) {
  return (
    <div className="everything-card mt-6 max-w-md"> {/* reduced margin & limited width */}
      <div className="everything-card flex flex-wrap p-3 gap-1 mb-2 shadow-md rounded-lg">
        <b className="title text-lg">{props.title}</b> {/* slightly smaller text */}
        <div className="everything-card-img mx-auto">
          <img
            className="everything-card-img max-h-40 object-cover rounded-md"
            src={props.imgUrl}
            alt="img"
          />
        </div>
        <div className="description">
          <p className="description-text text-sm leading-6">
            {props.description?.substring(0, 150)} {/* shorter description */}
          </p>
        </div>
        <div className="info mt-2">
          <div className="source-info flex items-center gap-2 text-sm">
            <span className="font-semibold">Source:</span>
            <a
              href={props.url}
              target="_blank"
              className="link underline break-words"
            >
              {props.source.substring(0, 50)}
            </a>
          </div>
          <div className="origin flex flex-col text-xs">
            <p className="origin-item">
              <span className="font-semibold">Author:</span> {props.author}
            </p>
            <p className="origin-item">
              <span className="font-semibold">Published At:</span>{" "}
              {props.publishedAt}
            </p>
          </div>
        </div>
      </div>

      {/* Compact secondary card */}
      <div className="flex lg:flex-row shadow-sm rounded-lg overflow-hidden">
        <div
          className="h-32 lg:h-auto lg:w-32 flex-none bg-cover text-center"
          style={{ backgroundImage: `url(${props.imageUrlLeft})` }}
          title={props.imageLeftTitle}
        ></div>
        <div className="border p-3 flex flex-col justify-between leading-snug">
          <div className="mb-3">
            <p className="text-xs text-gray-600 flex items-center">
              {props.memberIcon && (
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  {props.memberIcon}
                </svg>
              )}
              {props.memberText}
            </p>
            <div className="text-gray-900 font-semibold text-base mb-1">
              {props.cardTitle}
            </div>
            <p className="text-gray-700 text-sm">{props.cardDescription}</p>
          </div>
          <div className="flex items-center">
            {props.authorImage && (
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={props.authorImage}
                alt="Avatar"
              />
            )}
            <div className="text-xs">
              <p className="text-gray-900 leading-none">{props.authorName}</p>
              <p className="text-gray-600">{props.publishedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
