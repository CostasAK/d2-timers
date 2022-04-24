import "./ActivityModifiers.scss";

import ActivityChampions from "./ActivityChampions";
import ActivityModifier from "./ActivityModifier";
import ActivityShields from "./ActivityShields";
import PropTypes from "prop-types";
import Spinner from "react-spinkit";
import useBungieApi from "../../hooks/useBungieApi";

const api_path = "/Destiny2/Manifest/DestinyActivityModifierDefinition/";

function ActivityModifiers({ data, known_shields, known_champions }) {
  const {
    data: modifier_data,
    error,
    isPending,
  } = useBungieApi(
    data.Response.modifiers.map(
      (modifier) => `${api_path}${modifier.activityModifierHash}/`
    )
  );

  if (isPending) {
    return (
      <section className="activity-modifiers">
        <h2 className="loading">
          <Spinner name="cube-grid" fadeIn="none" />
          <span>Loading...</span>
        </h2>
      </section>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  const shields = modifier_data.filter((modifier) =>
    /shielded foes/i.test(modifier.Response.displayProperties.name)
  );

  const champions = modifier_data.filter((modifier) =>
    /champion foes/i.test(modifier.Response.displayProperties.name)
  );

  const other_modifiers = modifier_data.filter(
    (modifier) =>
      !/(shielded|champion) foes|champions: mob/i.test(
        modifier.Response.displayProperties.name
      )
  );

  return (
    <section className="activity-modifiers">
      {shields.length > 0 && (
        <ActivityShields shields={shields} known_shields={known_shields} />
      )}
      {champions.length > 0 && (
        <ActivityChampions
          champions={champions}
          known_champions={known_champions}
        />
      )}
      {other_modifiers.length > 0 && (
        <section className="other-modifiers">
          <h5 className="heading">Modifiers</h5>
          <div className="modifiers">
            {other_modifiers.map((modifier, index) => (
              <ActivityModifier key={index} data={modifier} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

ActivityModifiers.propTypes = {
  data: PropTypes.object.isRequired,
};

ActivityModifiers.defaultProps = {};

export default ActivityModifiers;
