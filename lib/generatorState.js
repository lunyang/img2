const PINYIN_BY_CHAR = {
  卫: "wei",
  星: "xing",
  与: "yu",
  地: "di",
  球: "qiu",
};

export function selectResult(currentIndex, nextIndex, total) {
  if (!Number.isInteger(nextIndex) || nextIndex < 0 || nextIndex >= total) {
    return currentIndex;
  }

  return nextIndex;
}

export function toggleSavedResult(savedSources, source) {
  if (savedSources.includes(source)) {
    return savedSources.filter((item) => item !== source);
  }

  return [...savedSources, source];
}

export function isResultSaved(savedSources, source) {
  return savedSources.includes(source);
}

export function getDownloadFilename(label, index) {
  const parts = [];
  let asciiBuffer = "";

  for (const char of label) {
    if (PINYIN_BY_CHAR[char]) {
      if (asciiBuffer) {
        parts.push(asciiBuffer);
        asciiBuffer = "";
      }
      parts.push(PINYIN_BY_CHAR[char]);
    } else if (/[a-z0-9]/i.test(char)) {
      asciiBuffer += char.toLowerCase();
    } else if (asciiBuffer) {
      parts.push(asciiBuffer);
      asciiBuffer = "";
    }
  }

  if (asciiBuffer) {
    parts.push(asciiBuffer);
  }

  const slug = parts.join("-").replace(/^-+|-+$/g, "");

  return `image-2-${index + 1}-${slug || "result"}.png`;
}
