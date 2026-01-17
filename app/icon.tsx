import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 20,
        background: '#2A1B12', // cocoa-950
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#EAB308', // gold-500
        borderRadius: '8px', // rounded-md
        fontWeight: 800,
        fontFamily: 'sans-serif',
        border: '2px solid #EAB308',
      }}
    >
      EV
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  );
}
