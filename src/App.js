import React, { useState } from "react";
import "./App.css";

const CopyIcon = () => (
  // Modern clipboard icon (outline + fill)
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect
      x="7"
      y="4"
      width="10"
      height="16"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M9 2h6a2 2 0 0 1 2 2v2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="3"
      y="8"
      width="14"
      height="12"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const CheckIcon = () => (
  // Modern checkmark
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <polyline
      points="5 11 9 15 15 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const NicknamePasswordGenerator = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState({ nickname: false, password: false });

  const generateNickname = () => {
    const adj = [
      "Cool",
      "Fast",
      "Dark",
      "Smart",
      "Silent",
      "Happy",
      "Angry",
      "Lucky",
      "Brave",
      "Calm",
      "Clever",
      "Crazy",
      "Dangerous",
      "Elegant",
      "Fierce",
      "Gentle",
      "Honest",
      "Hungry",
      "Kind",
      "Lazy",
      "Mysterious",
      "Nervous",
      "Old",
      "Peaceful",
      "Powerful",
      "Quick",
      "Quiet",
      "Rich",
      "Scary",
      "Shiny",
      "Silly",
      "Sleepy",
      "Strong",
      "Sweet",
      "Tough",
      "Wise",
      "Wild",
      "Young",
      "Adorable",
      "Amazing",
      "Boring",
      "Bright",
      "Charming",
      "Clumsy",
      "Confident",
      "Creative",
      "Curious",
      "Delightful",
      "Determined",
      "Energetic",
    ];
    const animals = [
      "Tiger",
      "Lion",
      "Panda",
      "Wolf",
      "Falcon",
      "Bear",
      "Eagle",
      "Shark",
      "Elephant",
      "Giraffe",
      "Zebra",
      "Hippo",
      "Rhino",
      "Kangaroo",
      "Koala",
      "Crocodile",
      "Alligator",
      "Snake",
      "Python",
      "Cobra",
      "Turtle",
      "Tortoise",
      "Frog",
      "Toad",
      "Salamander",
      "Newt",
      "Chameleon",
      "Iguana",
      "Gecko",
      "Parrot",
      "Owl",
      "Hawk",
      "Vulture",
      "Peacock",
      "Swan",
      "Duck",
      "Goose",
      "Penguin",
      "Flamingo",
      "Pelican",
      "Stork",
      "Crane",
      "Heron",
      "Kingfisher",
      "Woodpecker",
      "Hummingbird",
      "Sparrow",
      "Robin",
      "Pigeon",
      "Dove",
      "Octopus",
      "Squid",
      "Jellyfish",
      "Starfish",
      "Seahorse",
      "Dolphin",
      "Whale",
      "Seal",
      "Walrus",
      "Manatee",
      "Otter",
      "Beaver",
      "Platypus",
      "Antelope",
      "Buffalo",
      "Bison",
      "Moose",
      "Deer",
      "Reindeer",
      "Gazelle",
      "Gorilla",
      "Chimpanzee",
      "Orangutan",
      "Baboon",
      "Lemur",
      "Sloth",
      "Armadillo",
      "Porcupine",
      "Hedgehog",
      "Badger",
      "Raccoon",
      "Skunk",
      "Fox",
      "Coyote",
      "Hyena",
      "Cheetah",
      "Leopard",
      "Jaguar",
      "Panther",
      "Puma",
      "Lynx",
      "Bobcat",
      "Ocelot",
      "Meerkat",
      "Mongoose",
      "Wombat",
      "Tapir",
      "Aardvark",
      "Anteater",
      "Pangolin",
      "Gibbon",
      "Marmoset",
      "Tamarin",
      "Capuchin",
      "Howler",
      "Spider",
      "Scorpion",
      "Centipede",
      "Millipede",
      "Ladybug",
      "Butterfly",
      "Moth",
      "Dragonfly",
      "Grasshopper",
      "Cricket",
      "Cicada",
      "Bee",
      "Wasp",
      "Hornet",
      "Ant",
      "Termite",
      "Firefly",
      "Beetle",
      "Mosquito",
      "Fly",
      "Flea",
      "Tick",
      "Louse",
      "Crab",
      "Lobster",
      "Shrimp",
      "Prawn",
      "Crayfish",
      "Barnacle",
      "Clam",
      "Oyster",
      "Mussel",
      "Snail",
      "Slug",
      "Cuttlefish",
      "Nautilus",
      "Angelfish",
      "Clownfish",
      "Goldfish",
      "Piranha",
      "Salmon",
      "Tuna",
      "Trout",
      "Catfish",
      "Stingray",
      "Eel",
      "Barracuda",
      "Cod",
      "Haddock",
      "Sardine",
      "Anchovy",
      "Herring",
      "Mackerel",
      "Swordfish",
      "Marlin",
    ];
    const number = Math.floor(Math.random() * 1000);
    const adjectives = adj[Math.floor(Math.random() * adj.length)];
    const animal = animals[Math.floor(Math.random() * animals.length)];
    setNickname(`${adjectives}${animal}${number}`);
    setCopied((c) => ({ ...c, nickname: false }));
  };

  const generatPassword = () => {
    const passwordChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < 16; i++) {
      pass += passwordChars[Math.floor(Math.random() * passwordChars.length)];
    }
    setPassword(pass);
    setCopied((c) => ({ ...c, password: false }));
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied((c) => ({ ...c, [type]: true }));
      setTimeout(() => setCopied((c) => ({ ...c, [type]: false })), 1200);
    });
  };

  return (
    <div>
      <h1>Nickname va Password Generator</h1>
      <div className="beautiful-card">
        <p>
          Nickname kombinatsiyalari: <strong>7,500,000</strong>
        </p>
        <p>
          Parol imkoniyatlari: <strong>79.6 oktallion (10^28)</strong>
        </p>
        <p>
          Brute-force orqali buzish vaqti:{" "}
          <strong>Sekundiga 1 milliard urinishda = 2 trillion yil</strong>
        </p>

        <div style={{ marginTop: "22px" }}>
          <p>
            <strong>Nickname:</strong> {nickname}
            {nickname && (
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(nickname, "nickname")}
                aria-label="Copy Nickname"
                title="Copy Nickname"
              >
                {copied.nickname ? <CheckIcon /> : <CopyIcon />}
                Nusxalash
              </button>
            )}
          </p>
        </div>

        <div style={{ marginTop: "18px" }}>
          <p>
            <strong>Password:</strong> {password}
            {password && (
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(password, "password")}
                aria-label="Copy Password"
                title="Copy Password"
              >
                {copied.password ? <CheckIcon /> : <CopyIcon />}
                Nusxalash
              </button>
            )}
          </p>
        </div>

        <div style={{ marginTop: "28px" }}>
          <button onClick={generateNickname} className="generate-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14c-4.418 0-8 2.015-8 4.5V20h16v-1.5c0-2.485-3.582-4.5-8-4.5z"
              />
            </svg>
            Nickname yaratish
          </button>
          <button onClick={generatPassword} className="generate-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 10-8 0v4"
              />
            </svg>
            Password yaratish
          </button>
        </div>
      </div>
    </div>
  );
};

export default NicknamePasswordGenerator;
