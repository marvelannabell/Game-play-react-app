import { CatalogueItem } from "./CatalogueItem";

export const Catalogue = ({
  games,
}) => {
  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {/* Display div: with information about every game (if any) */}
      {games.length > 0 ?
        games.map(x => <CatalogueItem key={x._id} game={x} />) :
        <h3 className="no-articles">No articles yet</h3>}
      { }
      {/* Display paragraph: If there is no games  */}

    </section>
  );
};