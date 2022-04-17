import CycleCard from "../../components/CycleCard";
import LostSector from "../../components/LostSector";
import Popup from "reactjs-popup";
import { lcm } from "../../functions/gcd";

const locations = [
  {
    name: "K1 Crew Quarters",
    location: "Moon",
    info: "http://kyber3000.com/LS-K1CrewQuarters",
  },
  {
    name: "K1 Logistics",
    location: "Moon",
    info: "http://kyber3000.com/LS-K1Logistics",
  },
  {
    name: "Metamorphosis",
    location: "Throne World",
    info: "https://kyber3000.com/LS-Metamorphosis",
  },
  {
    name: "Sepulchur",
    location: "Throne World",
    info: "https://kyber3000.com/LS-Sepulcher",
  },
  {
    name: "Extraction",
    location: "Throne World",
    info: "http://kyber3000.com/LS-Extraction",
  },
  {
    name: "Veles Labyrinth",
    location: "Cosmodrome",
    info: "http://kyber3000.com/LS-VelesLabyrinth",
  },
  {
    name: "Exodus Garden A2",
    location: "Cosmodrome",
    info: "https://i.imgur.com/88r6qcR.png",
  },
  {
    name: "Aphelion's Rest",
    location: "Dreaming City",
    info: "http://kyber3000.com/LS-AphelionsRest",
  },
  {
    name: "Bay of Drowned Wishes",
    location: "Dreaming City",
    info: "http://kyber3000.com/LS-BayofDrownedWishes",
  },
  {
    name: "Chamber of Starlight",
    location: "Dreaming City",
    info: "http://kyber3000.com/LS-ChamberofStarlight",
  },
  {
    name: "K1 Revelation",
    location: "Moon",
    info: "http://kyber3000.com/LS-K1Revelation",
  },
];

const drops = ["Arms", "Chest", "Helmet", "Legs"];

const items = [];

do {
  items.push(
    <>
      <Popup
        trigger={
          <a
            href={locations[items.length % locations.length].info}
            target="_blank"
            rel="noreferrer"
          >
            {locations[items.length % locations.length].name} -{" "}
            {locations[items.length % locations.length].location}
          </a>
        }
        modal
      >
        <div className="Modal">
          <LostSector name={locations[items.length % locations.length].name} />
        </div>
      </Popup>
      {" ("}
      {drops[items.length % drops.length]}
      {")"}
    </>
  );
} while (items.length < lcm(drops.length, locations.length));

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

export default function LostSectors() {
  return (
    <CycleCard
      name="Legend & Master Lost Sector"
      items={items}
      start={1648918800 * 1000}
      period={day}
      type="duty"
    />
  );
}
