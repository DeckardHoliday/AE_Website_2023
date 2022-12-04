export const post_services = [
  {
    // Standard Tier
    title: Standard,
    price: 35,
    per: "15 Seconds",
    features: [
      {
        included: true,
        description: "3 Revisions",
      },
      {
        included: true,
        description: "Custom foley and design work",
      },
      {
        included: true,
        description: "1080p, 720p MP4 Exports",
      },
      {
        included: true,
        description: "24 bit/48 kHz WAV export",
      },
      {
        included: false,
        description: "High complex scenes not included",
      },
      {
        included: false,
        description: "3 Character Limit",
      },
    ],
  },
  {
    title: Premium,
    price: 50,
    per: "15 Seconds",
    features: [
      {
        included: true,
        description: "5 Revisions",
      },
      {
        included: true,
        description: "Custom foley and design work",
      },
      {
        included: true,
        description: "1080p, 720p MP4 Exports",
      },
      {
        included: true,
        description: "24 bit/48 kHz WAV export",
      },
      {
        included: true,
        description: "Includes complex scenes",
      },
      {
        included: true,
        description: "No character limit",
      },
    ],
  },
];

export const editing_services = [
  {
    title: "Cleanup and Restoration",
    price: 50,
    per: "15 Minutes",
    features: [
      {
        included: true,
        description: "Spectral repair and noise removal",
      },
      {
        included: true,
        description: "Filler word cleanup (ums, ahs)",
      },
      {
        included: true,
        description: "Silence removal",
      },
      {
        included: false,
        description: "Pace editing",
      },
      {
        included: false,
        description: "Mixing and mastering",
      },
    ],
  },
  {
    title: "Podcast Editing and Mixing",
    price: 100,
    per: "Hour",
    features: [
      {
        included: true,
        description: "Filler word cleanup (ums, ahs)",
      },
      {
        included: true,
        description: "Silence removal",
      },
      {
        included: true,
        description: "Pace and structural editing",
      },
      {
        included: true,
        description: "Ad Placements and loudness matching",
      },
      {
        included: true,
        description: "Mixing and mastering for publication",
      },
    ],
  },
  {},
];

export const music_services = [
  {
    title: "Music Mixing",
    price: 150,
    per: "Song",
    features: [
      {
        included: true,
        description: "Full mix of one song",
      },
      {
        included: true,
        description: "5 revisions",
      },
      {
        included: true,
        description: "Master ready mix with plenty of headroom",
      },
      {
        included: false,
        description: "Mastering services excluded",
      },
    ],
  },
  {
    title: "Music Mastering",
    price: 150,
    per: "Song",
    features: [
      {
        included: true,
        description: "Full master of one song",
      },
      {
        included: true,
        description: "5 revisions",
      },
      {
        included: true,
        description: "Ready to publish finals for your platform of choice",
      },
      {
        included: false,
        description: "Additional platform masters not included",
      },
    ],
  },
];
