export async function loadWords(path) {
  const res = await fetch(path, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to load ${path} (${res.status})`);
  }
  const text = await res.text();

  // one word per line, allow comments/blank lines
  const words = text
    .split(/\r?\n/)
    .map(s => s.trim().toLowerCase())
    .filter(s => s && !s.startsWith('#'))
    .filter(s => /^[a-z]{5}$/.test(s));

  // de-dupe
  return Array.from(new Set(words));
}

export function sanitizeLetters(str) {
  return Array.from(
    new Set((str || '').toLowerCase().replace(/[^a-z]/g, '').split(''))
  );
}

// Returns YYYY-MM-DD in UTC for "daily" stability
export function dayKeyUTC(offsetDays = 0) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + offsetDays);
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

// Simple deterministic hash -> index
export function pickDailyIndex(length, key) {
  // FNV-1a 32-bit
  let h = 0x811c9dc5;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  // unsigned -> range
  return (h >>> 0) % length;
}

export function createGrid(container, rows, cols) {
  container.style.gridTemplateColumns = `repeat(${cols}, 62px)`;
  container.innerHTML = '';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.textContent = '';
      container.appendChild(tile);
    }
  }
  return container;
}

export function setGridWord(container, word) {
  const tiles = Array.from(container.querySelectorAll('.tile'));
  const letters = (word || '').toUpperCase().slice(0, 5).split('');

  tiles.forEach((t, i) => {
    const ch = letters[i] || '';
    t.textContent = ch;
    t.classList.toggle('filled', !!ch);
  });
}
