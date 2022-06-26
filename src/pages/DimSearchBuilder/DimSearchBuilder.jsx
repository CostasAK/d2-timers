import A from "../../components/A";
import { DimSearchBuilderResults } from "./DimSearchBuilderResults";
import { DimSearchBuilderToggles } from "./DimSearchBuilderToggles";
import { StyledDimSearchBuilder } from "./StyledDimSearchBuilder";
import createPersistedState from "use-persisted-state";

const useToggleState = createPersistedState("DimSearchBuilder");

const toggles = [
  {
    display: "",
    options: [
      {
        key: "maxPowerItems",
        display: "Max Power Items",
        filter: "is:maxpower",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "itemsInLoadouts",
        display: "Items in Loadouts",
        filter: "is:inloadout",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "masterworkedItems",
        display: "Masterworked Items",
        filter: "is:masterwork",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "classifiedItems",
        display: "Classified Items",
        filter: "name:classified",
        default: 0,
        options: ["Keep"],
      },
    ],
  },
  {
    display: "Tags",
    options: [
      {
        key: "tagFavorite",
        display: "Favorite",
        filter: "tag:favorite",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "tagKeep",
        display: "Keep",
        filter: "tag:keep",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "tagJunk",
        display: "Junk",
        filter: "tag:junk",
        default: -1,
        options: ["Keep"],
      },
      {
        key: "tagInfuse",
        display: "Infuse",
        filter: "tag:infuse",
        default: 0,
        options: ["Keep"],
      },
      {
        key: "tagArchive",
        display: "Archive",
        filter: "tag:archive",
        default: 0,
        options: ["Keep"],
      },
    ],
  },
  {
    display: "Weapons",
    options: [
      {
        key: "weaponsStaticRollDuplicates",
        display: "Static Roll Duplicates",
        filter: "(is:weapon -is:randomroll is:dupelower)",
        default: 0,
        options: ["Trash"],
      },
    ],
  },
  {
    display: "Armor",
    options: [
      {
        key: "armor1",
        display: "Armor 1.0",
        filter: "(is:armor -is:armor2.0)",
        default: 0,
        options: ["Keep", "Trash", "Don't care"],
      },
      {
        key: "armorEvent",
        display: "Event Armor",
        filter: "(is:armor source:events)",
        default: 0,
        options: ["Keep"],
      },
    ],
  },
  {
    display: "Class Items",
    options: [],
  },
];

export const DimSearchBuilder = () => {
  const [toggleState, setToggleState] = useToggleState({});

  const handleChange = (key, current) => {
    setToggleState((previousToggles) => {
      const newToggles = { ...previousToggles };
      newToggles[key] = current;
      return newToggles;
    });
  };

  return (
    <StyledDimSearchBuilder>
      <div>
        <h1>DIM Search Builder</h1>
        <p>
          Using the options below, you can construct your own junk, infusion,
          and vendor item finder search strings for use in{" "}
          <A href="https://destinyitemmanager.com/">DIM</A>.
        </p>
        <p>Green preferences are to keep, red preferences are to trash.</p>
        <p>
          <i>I take no responsibility for deleted god rolls...</i> 😉
        </p>
      </div>
      <div>
        <DimSearchBuilderToggles
          toggles={toggles}
          toggleState={toggleState}
          onChange={handleChange}
        />
        <DimSearchBuilderResults toggles={toggles} toggleState={toggleState} />
      </div>
    </StyledDimSearchBuilder>
  );
};
