import { useParams } from "react-router-dom";

export const DetailsPage=({
  games,
})=>{
  const {gameId} = useParams();
  const selsectedGame = games.find(x=>x._id === gameId)
    return(
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
          <div className="game-header">
            <img className="game-img" src={selsectedGame.imageUrl} />
            <h1>{selsectedGame.title}</h1>
            <span className="levels">MaxLevel: {selsectedGame.maxLevel}</span>
            <p className="type">{selsectedGame.category}</p>
          </div>
          <p className="text">
          {selsectedGame.summary}
          </p>
          {/* Bonus ( for Guests and Users ) */}
          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              {/* list all comments for current game (If any) */}
              <li className="comment">
                <p>Content: I rate this one quite highly.</p>
              </li>
              <li className="comment">
                <p>Content: The best game.</p>
              </li>
            </ul>
            {/* Display paragraph: If there are no games in the database */}
            <p className="no-comment">No comments.</p>
          </div>
          {/* Edit/Delete buttons ( Only for creator of this game )  */}
          <div className="buttons">
            <a href="#" className="button">Edit</a>
            <a href="#" className="button">Delete</a>
          </div>
        </div>
        {/* Bonus */}
        {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form">
            <textarea name="comment" placeholder="Comment......" defaultValue={""} />
            <input className="btn submit" type="submit" defaultValue="Add Comment" />
          </form>
        </article>
      </section>
    );
};