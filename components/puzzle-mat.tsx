'use client';

import { motion } from 'framer-motion';

/**
 * Puzzle Mat — a grid of interlocking puzzle pieces using the
 * teal/navy palette from the pilot illustration.
 * Each piece has a unique combination of tabs (bumps out) and
 * blanks (indents in) on its edges, creating the classic jigsaw interlock.
 */

const palette = [
  '#1a2d4a', // deep navy
  '#1e3a5f', // dark blue
  '#2a6478', // teal
  '#3d8a96', // mid teal
  '#6bb8b8', // light teal
  '#8dd3c7', // mint
  '#b5e3d8', // pale mint
  '#c8ede4', // very light mint
  '#c2956b', // warm clay
  '#a87849', // terracotta
  '#d4a574', // sandy clay
  '#e8c9a0', // light sand
  '#8b6f52', // dark clay
  '#c49a6c', // caramel
];

// Generates an SVG path for a single puzzle piece at (x, y) with given size
// tabs: { top, right, bottom, left } — 1 = tab out, -1 = blank in, 0 = flat edge
function puzzlePath(
  x: number,
  y: number,
  size: number,
  tabs: { top: number; right: number; bottom: number; left: number }
) {
  const s = size;
  const t = s * 0.18; // tab size
  const neck = s * 0.08;

  const sx = x;
  const sy = y;

  let d = `M ${sx} ${sy}`;

  // Top edge
  if (tabs.top === 0) {
    d += ` L ${sx + s} ${sy}`;
  } else {
    const dir = tabs.top;
    d += ` L ${sx + s * 0.35} ${sy}`;
    d += ` C ${sx + s * 0.35} ${sy - dir * neck}, ${sx + s * 0.5 - t} ${sy - dir * (t + neck)}, ${sx + s * 0.5} ${sy - dir * (t + neck)}`;
    d += ` C ${sx + s * 0.5 + t} ${sy - dir * (t + neck)}, ${sx + s * 0.65} ${sy - dir * neck}, ${sx + s * 0.65} ${sy}`;
    d += ` L ${sx + s} ${sy}`;
  }

  // Right edge
  if (tabs.right === 0) {
    d += ` L ${sx + s} ${sy + s}`;
  } else {
    const dir = tabs.right;
    d += ` L ${sx + s} ${sy + s * 0.35}`;
    d += ` C ${sx + s + dir * neck} ${sy + s * 0.35}, ${sx + s + dir * (t + neck)} ${sy + s * 0.5 - t}, ${sx + s + dir * (t + neck)} ${sy + s * 0.5}`;
    d += ` C ${sx + s + dir * (t + neck)} ${sy + s * 0.5 + t}, ${sx + s + dir * neck} ${sy + s * 0.65}, ${sx + s} ${sy + s * 0.65}`;
    d += ` L ${sx + s} ${sy + s}`;
  }

  // Bottom edge
  if (tabs.bottom === 0) {
    d += ` L ${sx} ${sy + s}`;
  } else {
    const dir = -tabs.bottom;
    d += ` L ${sx + s * 0.65} ${sy + s}`;
    d += ` C ${sx + s * 0.65} ${sy + s - dir * neck}, ${sx + s * 0.5 + t} ${sy + s - dir * (t + neck)}, ${sx + s * 0.5} ${sy + s - dir * (t + neck)}`;
    d += ` C ${sx + s * 0.5 - t} ${sy + s - dir * (t + neck)}, ${sx + s * 0.35} ${sy + s - dir * neck}, ${sx + s * 0.35} ${sy + s}`;
    d += ` L ${sx} ${sy + s}`;
  }

  // Left edge
  if (tabs.left === 0) {
    d += ` L ${sx} ${sy}`;
  } else {
    const dir = -tabs.left;
    d += ` L ${sx} ${sy + s * 0.65}`;
    d += ` C ${sx - dir * neck} ${sy + s * 0.65}, ${sx - dir * (t + neck)} ${sy + s * 0.5 + t}, ${sx - dir * (t + neck)} ${sy + s * 0.5}`;
    d += ` C ${sx - dir * (t + neck)} ${sy + s * 0.5 - t}, ${sx - dir * neck} ${sy + s * 0.35}, ${sx} ${sy + s * 0.35}`;
    d += ` L ${sx} ${sy}`;
  }

  d += ' Z';
  return d;
}

export function PuzzleMat() {
  const cols = 16;
  const rows = 5;
  const pieceSize = 64;
  const padding = 12;

  const width = cols * pieceSize + padding * 2;
  const height = rows * pieceSize + padding * 2;

  // Deterministic color selection based on position
  const seed = (r: number, c: number) => ((r * 7 + c * 13 + r * c * 3 + 5) % palette.length);

  // Generate tab pattern — adjacent pieces must have opposite tabs
  const tabsGrid: { top: number; right: number; bottom: number; left: number }[][] = [];

  for (let r = 0; r < rows; r++) {
    tabsGrid[r] = [];
    for (let c = 0; c < cols; c++) {
      const top = r === 0 ? 0 : -tabsGrid[r - 1][c].bottom;
      const left = c === 0 ? 0 : -tabsGrid[r][c - 1].right;
      const bottom = r === rows - 1 ? 0 : ((r + c) % 2 === 0 ? 1 : -1);
      const right = c === cols - 1 ? 0 : ((r + c + 1) % 2 === 0 ? 1 : -1);
      tabsGrid[r][c] = { top, right, bottom, left };
    }
  }

  return (
    <div className="w-full px-4 md:px-8 lg:px-12">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto rounded-2xl md:rounded-3xl overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const x = padding + c * pieceSize;
            const y = padding + r * pieceSize;
            const color = palette[seed(r, c)];
            const d = puzzlePath(x, y, pieceSize, tabsGrid[r][c]);

            return (
              <motion.path
                key={`${r}-${c}`}
                d={d}
                fill={color}
                stroke="#fafaf8"
                strokeWidth={1.5}
                strokeLinejoin="round"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: (r * cols + c) * 0.015,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}
