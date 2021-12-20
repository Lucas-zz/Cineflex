export default function Footer({ src, alt, title, weekday, time }) {
    return (
        <div className="choosenMovie">
            <div className="container">
                <img src={src} alt={alt} />
            </div>
            <div className="choosenMovieData">
                <span className="choosenMovieName">
                    {title}
                </span>
                {weekday !== undefined &&
                    <span className="choosenMovieTime">
                        {weekday} - {time}
                    </span>
                }
            </div>
        </div>
    );

}