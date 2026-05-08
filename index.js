const BASE_URL = "http://162.19.133.164:4988";

async function brat(text, blur = 2) {
  if (!text) {
    throw new Error("Text is required");
  }

  const url = `${BASE_URL}/brat?text=${encodeURIComponent(text)}&blur=${blur}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to generate brat image");
  }

  return Buffer.from(await response.arrayBuffer());
}

async function bratvid(text, options = {}) {
  if (!text) {
    throw new Error("Text is required");
  }

  const {
    blur = 2,
    fast = false
  } = options;

  const url =
    `${BASE_URL}/bratvid?text=${encodeURIComponent(text)}` +
    `&blur=${blur}` +
    `&fast=${fast}` +
    `&format=gif`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to generate brat video");
  }

  return Buffer.from(await response.arrayBuffer());
}

module.exports = {
  brat,
  bratvid
};
