/**
 * Renders the category filters for the project carousel.
 *
 * @param {Object} props Component properties.
 * @param {Function} props.onCategoryChange Selects a project category.
 * @param {string[]} props.menuItems Available categories.
 * @param {string} props.activeCategory Selected category.
 * @returns {React.ReactElement} The project filter buttons.
 */
const PortfolioButton = ({ onCategoryChange, menuItems, activeCategory }) => (
  <div className="portfolio__filters" role="group" aria-label="Project categories">
    {menuItems.map((category) => (
      <button
        className={`portfolio__tab${activeCategory === category ? ' active__portfolio' : ''}`}
        onClick={() => onCategoryChange(category)}
        key={category}
        type="button"
        aria-pressed={activeCategory === category}
      >
        {category}
      </button>
    ))}
  </div>
);

export default PortfolioButton;
