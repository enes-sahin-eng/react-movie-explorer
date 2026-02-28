import WatchListMovie from "./WatchListMovie.jsx";
export default function WatchList({
  movies,
  isWatchListOpen,
  setWatchListMovies,
  onRemoveFromWatchList,
}) {
  return (
    <>
      {isWatchListOpen && (
        <div className=" my-3">
          <div className="card">
            <div className="card-header">
              <h2 className="title h5 mb-0">Watch List</h2>
            </div>
            <div className="card-body">
              {movies.length > 0 ? (
                <>
                  <h2>Watch List</h2>
                  <div
                    id="movie-list"
                    className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-1 g-lg-3"
                  >
                    {movies.map((x, index) => (
                      <WatchListMovie
                        key={index}
                        movieObj={x}
                        onRemoveFromWatchList={onRemoveFromWatchList}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <h5 className="text-secondary">Film Bulunamadı</h5>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
