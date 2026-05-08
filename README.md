# brat-farel

Simple Brat & BratVid API Wrapper.

Package ini digunakan untuk generate brat image dan brat video langsung dalam bentuk Buffer.

---

# Install

```bash
npm install brat-farel
```

---

# Features

- Generate brat image
- Generate brat gif
- Return Buffer
- Lightweight
- Easy to use
- Node.js support

---

# Usage

## Import

```js
const { brat, bratvid } = require("brat-farel");
```

---

# Brat Image

## Example

```js
const fs = require("fs");
const { brat } = require("brat-farel");

async function test() {
  const image = await brat("Halo Dunia");

  fs.writeFileSync("brat.png", image);
}

test();
```

---

# Brat Video GIF

## Example

```js
const fs = require("fs");
const { bratvid } = require("brat-farel");

async function test() {
  const gif = await bratvid("Halo GIF");

  fs.writeFileSync("brat.gif", gif);
}

test();
```

---

# Full Options

```js
const fs = require("fs");
const { bratvid } = require("brat-farel");

async function test() {
  const gif = await bratvid("Hello World", {
    blur: 5,
    fast: true
  });

  fs.writeFileSync("brat.gif", gif);
}

test();
```

---

# Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| text | string | required | Text brat |
| blur | number | 2 | Blur effect |
| fast | boolean | false | Fast render |

---

# Return

## brat()

Return:

```js
Buffer
```

Format:

```txt
PNG
```

---

## bratvid()

Return:

```js
Buffer
```

Format:

```txt
GIF
```

---

# Example WhatsApp Bot

```js
const { brat } = require("brat-farel");

case "brat": {
  if (!text) return m.reply("Masukkan text");

  const img = await brat(text);

  await sock.sendMessage(m.chat, {
    image: img,
    caption: "Done"
  });

}
break;
```

---

# Example WhatsApp Bot GIF

```js
const { bratvid } = require("brat-farel");

case "bratvid": {
  if (!text) return m.reply("Masukkan text");

  const gif = await bratvid(text);

  await sock.sendMessage(m.chat, {
    video: gif,
    gifPlayback: true,
    caption: "Done"
  });

}
break;
```

---

# Creator

Muhammad Farel

GitHub:
https://github.com/rayyzneverlus

---

# License

MIT
