import Image from "next/image"

export default function Home() {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-around lg:flex-row-reverse lg:justify-center">
        <div className="flex h-[40%] w-full overflow-hidden lg:h-full lg:w-[30%]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className=" m-auto h-[300px] w-[300px] lg:h-[100%] lg:w-[100%]">
              <path fill="#FF0066" d="M48.3,-41.2C61.1,-22.4,69.1,-2.4,63.6,11.8C58.2,26.1,39.5,34.5,20.5,44.3C1.5,54.1,-17.6,65.3,-35.7,61.4C-53.8,57.6,-70.8,38.8,-76,17C-81.2,-4.7,-74.6,-29.5,-60,-48.7C-45.3,-67.8,-22.7,-81.4,-2.5,-79.4C17.7,-77.4,35.4,-59.9,48.3,-41.2Z" transform="translate(100 100)" />
              <clipPath id="clip-path">
                <path fill="#FF0066" d="M48.3,-41.2C61.1,-22.4,69.1,-2.4,63.6,11.8C58.2,26.1,39.5,34.5,20.5,44.3C1.5,54.1,-17.6,65.3,-35.7,61.4C-53.8,57.6,-70.8,38.8,-76,17C-81.2,-4.7,-74.6,-29.5,-60,-48.7C-45.3,-67.8,-22.7,-81.4,-2.5,-79.4C17.7,-77.4,35.4,-59.9,48.3,-41.2Z" transform="translate(100 100)" />
                </clipPath>
              <image clip-path="url(#clip-path)" href="/sandip.jpeg" className="h-full"/>       
            </svg>
        </div>
        <div className="flex h-1/2 w-full flex-col items-center lg:h-full lg:w-[40%] lg:justify-center">
            <h2 className="font-heading text-4xl font-bold text-foreground lg:text-5xl">Hi, I am Rohan</h2>
            <h3 className="mb-12 text-lg font-bold text-muted">Web Developer</h3>
            <p className="mb-16 px-6 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, enim. </p>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 435.20001220703125 105.5999755859375" width="435.20001220703125" height="105.5999755859375">

<g transform="translate(18 30.79998779296875) rotate(0 24.399993896484375 22)" stroke="none"><path fill="#fff" d="M 1.55,-0.38 Q 1.55,-0.38 2.02,1.44 2.50,3.28 2.67,6.04 2.85,8.80 2.90,12.26 2.95,15.71 2.97,19.94 2.98,24.16 2.28,29.27 1.58,34.38 0.82,39.28 0.06,44.18 -0.96,47.94 -1.99,51.70 -2.41,54.35 -2.84,57.00 -3.75,59.03 -4.66,61.05 -4.89,62.25 -5.12,63.44 -5.87,64.42 -6.63,65.40 -8.04,64.82 -9.46,64.24 -9.67,62.79 -9.88,61.34 -9.59,58.56 -9.30,55.78 -8.44,52.24 -7.58,48.69 -6.26,44.66 -4.95,40.62 -3.46,36.17 -1.97,31.71 -0.17,27.04 1.62,22.36 3.79,17.59 5.95,12.82 8.02,8.28 10.09,3.74 12.15,-0.06 14.20,-3.87 16.28,-6.49 18.37,-9.11 20.85,-12.03 23.33,-14.96 25.15,-16.50 26.97,-18.05 28.24,-18.86 29.50,-19.67 30.62,-20.45 31.74,-21.23 33.14,-21.72 34.55,-22.20 35.88,-22.43 37.22,-22.66 38.49,-22.55 39.75,-22.44 41.06,-22.10 42.37,-21.77 43.81,-20.37 45.26,-18.97 45.82,-16.67 46.38,-14.36 46.45,-12.05 46.52,-9.74 46.51,-6.45 46.49,-3.16 45.04,1.44 43.58,6.06 41.52,9.65 39.45,13.25 37.17,16.39 34.88,19.52 32.00,22.29 29.11,25.06 25.76,27.41 22.41,29.76 18.88,31.69 15.35,33.61 12.12,34.47 8.89,35.33 6.72,36.10 4.55,36.88 3.08,37.35 1.62,37.82 0.28,37.85 -1.05,37.88 -2.58,36.48 -4.10,35.09 -4.30,33.93 -4.50,32.77 -3.79,29.82 -3.09,26.86 -1.94,25.47 -0.78,24.08 0.63,22.71 2.06,21.34 3.98,20.04 5.89,18.73 8.35,17.29 10.80,15.85 14.01,14.54 17.22,13.22 20.60,11.79 23.98,10.35 27.78,9.04 31.59,7.74 35.61,7.17 39.64,6.60 42.96,6.37 46.27,6.14 48.60,6.05 50.93,5.96 52.28,5.85 53.64,5.74 54.63,6.25 55.62,6.76 57.00,8.45 58.38,10.14 58.62,11.69 58.85,13.23 58.43,14.89 58.01,16.55 57.32,17.93 56.64,19.32 55.38,21.12 54.13,22.93 53.33,23.81 52.54,24.68 51.41,25.30 50.29,25.93 48.95,26.91 47.60,27.88 46.00,28.18 44.41,28.48 43.03,28.56 41.65,28.63 39.72,28.14 37.80,27.65 38.94,27.49 40.08,27.34 38.63,29.00 37.18,30.65 35.88,31.25 34.58,31.85 33.61,32.84 32.63,33.83 31.80,34.06 30.97,34.29 30.70,34.55 30.43,34.81 30.11,34.99 29.79,35.17 29.43,35.28 29.07,35.38 28.70,35.39 28.33,35.41 27.97,35.33 27.61,35.26 27.27,35.10 26.94,34.94 26.65,34.70 26.36,34.47 26.14,34.17 25.92,33.87 25.77,33.53 25.63,33.19 25.57,32.82 25.51,32.45 25.54,32.08 25.57,31.71 25.69,31.36 25.81,31.01 26.01,30.70 26.21,30.38 28.66,32.48 31.10,34.57 30.83,34.82 30.56,35.08 30.24,35.27 29.91,35.45 29.55,35.56 29.20,35.66 28.82,35.67 28.45,35.69 28.08,35.61 27.72,35.54 27.38,35.38 27.04,35.21 26.76,34.98 26.47,34.74 26.24,34.44 26.02,34.14 25.88,33.80 25.73,33.45 25.67,33.09 25.61,32.72 25.64,32.34 25.67,31.97 25.79,31.62 25.91,31.27 26.11,30.95 26.31,30.64 28.00,29.32 29.69,28.00 30.80,27.28 31.91,26.57 32.91,25.98 33.91,25.39 35.73,24.21 37.56,23.03 38.01,22.84 38.46,22.64 38.95,22.60 39.44,22.56 39.92,22.68 40.40,22.80 40.81,23.07 41.23,23.33 41.53,23.72 41.84,24.10 42.01,24.56 42.18,25.02 42.20,25.51 42.21,26.01 42.06,26.48 41.92,26.95 41.63,27.35 41.35,27.75 40.95,28.03 40.55,28.32 40.08,28.46 39.60,28.61 39.11,28.60 38.62,28.58 38.16,28.41 37.70,28.24 37.31,27.93 36.93,27.63 36.67,27.21 36.40,26.80 36.28,26.32 36.16,25.84 36.20,25.35 36.24,24.86 36.44,24.41 36.63,23.96 36.96,23.59 37.29,23.22 37.72,22.98 38.15,22.74 38.63,22.65 39.11,22.55 39.60,22.62 40.09,22.69 40.53,22.91 40.97,23.13 41.32,23.47 41.67,23.82 41.88,24.26 42.10,24.70 42.17,25.19 42.24,25.68 42.14,26.16 42.05,26.65 41.81,27.07 41.56,27.50 41.20,27.83 40.83,28.16 40.83,28.16 40.83,28.16 38.07,29.87 35.32,31.58 34.28,32.32 33.25,33.06 32.18,33.81 31.10,34.57 30.83,34.82 30.56,35.08 30.24,35.27 29.91,35.45 29.55,35.56 29.20,35.66 28.82,35.67 28.45,35.69 28.08,35.61 27.72,35.54 27.38,35.38 27.04,35.21 26.76,34.98 26.47,34.74 26.24,34.44 26.02,34.14 25.88,33.80 25.73,33.45 25.67,33.09 25.61,32.72 25.64,32.34 25.67,31.97 25.79,31.62 25.91,31.27 26.11,30.95 26.31,30.64 28.64,32.46 30.97,34.29 30.70,34.55 30.43,34.81 30.11,34.99 29.79,35.17 29.43,35.28 29.08,35.38 28.70,35.39 28.33,35.41 27.97,35.33 27.61,35.26 27.27,35.10 26.94,34.94 26.65,34.70 26.36,34.47 26.14,34.17 25.92,33.87 25.77,33.53 25.63,33.19 25.57,32.82 25.51,32.45 25.54,32.08 25.57,31.71 25.69,31.36 25.81,31.01 26.01,30.70 26.21,30.38 27.27,30.00 28.32,29.62 29.09,28.71 29.85,27.81 31.62,26.81 33.39,25.82 34.33,24.99 35.27,24.16 36.51,23.35 37.76,22.53 40.19,22.55 42.63,22.56 44.37,22.65 46.11,22.74 47.05,21.90 47.99,21.07 49.12,20.32 50.25,19.57 51.34,18.34 52.43,17.10 53.01,16.08 53.59,15.05 53.97,13.36 54.35,11.67 53.80,10.60 53.25,9.52 52.15,9.12 51.05,8.72 48.76,8.84 46.48,8.95 43.27,9.20 40.06,9.45 36.31,10.00 32.57,10.55 28.90,11.88 25.23,13.21 21.87,14.73 18.51,16.25 15.59,17.56 12.67,18.87 10.45,20.36 8.22,21.85 6.70,23.10 5.18,24.36 3.94,25.76 2.70,27.17 1.89,27.99 1.09,28.80 0.52,30.59 -0.05,32.38 0.44,33.57 0.93,34.76 2.28,34.55 3.63,34.34 5.91,33.51 8.20,32.68 11.12,31.93 14.04,31.18 17.41,29.31 20.79,27.45 23.94,25.21 27.10,22.97 29.77,20.37 32.44,17.76 34.58,14.73 36.71,11.70 38.56,8.38 40.40,5.05 41.64,0.95 42.89,-3.14 42.73,-6.28 42.57,-9.43 42.31,-11.43 42.04,-13.43 41.40,-15.47 40.77,-17.52 39.19,-18.03 37.62,-18.54 35.57,-18.38 33.51,-18.22 32.23,-17.55 30.95,-16.88 29.82,-16.44 28.68,-16.00 27.03,-14.61 25.37,-13.22 22.93,-10.32 20.48,-7.42 18.54,-5.00 16.61,-2.57 14.61,1.15 12.62,4.88 10.58,9.43 8.54,13.98 6.44,18.68 4.34,23.39 2.61,28.02 0.88,32.65 -0.52,37.10 -1.94,41.56 -3.12,45.50 -4.31,49.43 -5.00,52.75 -5.69,56.06 -5.79,58.60 -5.90,61.14 -5.97,62.45 -6.04,63.76 -7.11,63.11 -8.18,62.47 -7.67,61.17 -7.15,59.88 -6.32,58.22 -5.49,56.55 -5.05,53.77 -4.62,50.99 -3.64,47.37 -2.65,43.76 -1.92,38.88 -1.19,34.00 -0.53,29.09 0.11,24.18 0.05,19.98 -0.00,15.78 -0.11,12.41 -0.22,9.03 -0.44,6.55 -0.66,4.07 -1.10,2.23 -1.55,0.38 -1.57,0.19 -1.60,0.00 -1.57,-0.18 -1.55,-0.37 -1.48,-0.55 -1.42,-0.74 -1.31,-0.89 -1.20,-1.05 -1.05,-1.18 -0.91,-1.31 -0.74,-1.40 -0.57,-1.49 -0.38,-1.54 -0.19,-1.59 -0.00,-1.59 0.18,-1.59 0.37,-1.54 0.56,-1.50 0.73,-1.41 0.90,-1.32 1.05,-1.19 1.19,-1.06 1.30,-0.90 1.41,-0.74 1.48,-0.56 1.55,-0.38 1.55,-0.38 L 1.55,-0.38 Z"></path></g><g transform="translate(84.4000244140625 71.5999755859375) rotate(0 31.199981689453125 -0.79998779296875)" stroke="none"><path fill="#fff" d="M -0.27,-1.64 Q -0.27,-1.64 2.49,-2.05 5.25,-2.47 8.38,-3.52 11.51,-4.57 15.18,-5.93 18.84,-7.29 22.95,-8.79 27.05,-10.28 31.57,-11.84 36.09,-13.39 40.32,-14.74 44.55,-16.09 47.96,-17.13 51.38,-18.16 54.06,-18.61 56.73,-19.07 58.28,-19.35 59.83,-19.63 60.01,-19.64 60.20,-19.65 60.38,-19.61 60.56,-19.58 60.73,-19.50 60.90,-19.42 61.04,-19.30 61.18,-19.19 61.30,-19.04 61.41,-18.89 61.48,-18.73 61.56,-18.56 61.59,-18.37 61.62,-18.19 61.60,-18.01 61.59,-17.82 61.53,-17.65 61.48,-17.47 61.38,-17.31 61.28,-17.16 61.15,-17.03 61.01,-16.90 60.86,-16.80 60.70,-16.71 60.52,-16.66 60.34,-16.61 58.45,-14.74 56.55,-12.87 53.15,-10.66 49.75,-8.45 45.05,-5.89 40.34,-3.33 35.61,-0.65 30.88,2.02 26.35,4.75 21.82,7.49 18.51,9.57 15.21,11.65 13.38,12.96 11.55,14.28 13.14,13.74 14.72,13.21 17.11,11.81 19.49,10.42 22.65,8.66 25.81,6.89 29.10,5.65 32.38,4.41 34.63,3.47 36.88,2.52 38.59,1.15 40.31,-0.22 40.51,-0.39 40.71,-0.57 40.95,-0.68 41.19,-0.78 41.46,-0.81 41.72,-0.83 41.98,-0.77 42.24,-0.70 42.46,-0.56 42.68,-0.42 42.85,-0.21 43.02,-0.01 43.11,0.23 43.20,0.48 43.21,0.74 43.22,1.01 43.14,1.26 43.07,1.52 42.91,1.73 42.76,1.95 42.54,2.10 42.33,2.26 42.08,2.34 41.82,2.42 41.56,2.41 41.29,2.41 41.04,2.32 40.79,2.23 40.59,2.06 40.38,1.89 40.24,1.67 40.09,1.45 40.03,1.19 39.96,0.94 39.98,0.67 40.00,0.41 40.11,0.16 40.21,-0.07 40.39,-0.27 40.56,-0.47 40.79,-0.60 41.02,-0.73 41.28,-0.78 41.54,-0.83 41.81,-0.80 42.07,-0.76 42.31,-0.65 42.55,-0.53 42.73,-0.34 42.92,-0.16 43.04,0.07 43.16,0.31 43.20,0.57 43.23,0.83 43.18,1.09 43.14,1.35 43.01,1.58 42.88,1.82 42.88,1.82 42.88,1.82 40.45,3.49 38.02,5.16 35.73,6.18 33.45,7.19 30.40,8.39 27.35,9.59 24.28,11.41 21.20,13.23 18.64,14.85 16.08,16.47 13.63,17.43 11.18,18.40 9.83,17.85 8.49,17.30 8.15,16.08 7.81,14.86 8.88,13.49 9.96,12.13 11.86,10.75 13.77,9.36 17.09,7.26 20.40,5.16 24.96,2.38 29.51,-0.38 34.25,-3.09 38.99,-5.80 43.58,-8.33 48.17,-10.87 51.48,-13.08 54.80,-15.29 56.51,-16.44 58.21,-17.60 59.02,-18.61 59.83,-19.63 60.01,-19.64 60.20,-19.65 60.38,-19.61 60.56,-19.58 60.73,-19.50 60.90,-19.42 61.04,-19.31 61.18,-19.19 61.30,-19.04 61.41,-18.89 61.48,-18.73 61.56,-18.56 61.59,-18.37 61.62,-18.19 61.60,-18.01 61.59,-17.82 61.53,-17.65 61.48,-17.47 61.38,-17.31 61.28,-17.16 61.15,-17.03 61.01,-16.90 60.86,-16.80 60.70,-16.71 60.52,-16.66 60.34,-16.61 58.76,-16.51 57.18,-16.42 54.67,-16.00 52.16,-15.57 48.77,-14.53 45.39,-13.49 41.19,-12.13 37.00,-10.78 32.52,-9.20 28.03,-7.63 23.95,-6.11 19.87,-4.58 16.18,-3.15 12.49,-1.73 9.13,-0.54 5.78,0.63 3.02,1.13 0.27,1.64 0.07,1.65 -0.12,1.66 -0.32,1.62 -0.52,1.58 -0.70,1.50 -0.88,1.41 -1.04,1.28 -1.19,1.16 -1.32,1.00 -1.44,0.84 -1.52,0.65 -1.60,0.47 -1.63,0.27 -1.66,0.07 -1.65,-0.12 -1.63,-0.32 -1.57,-0.51 -1.51,-0.70 -1.40,-0.88 -1.29,-1.05 -1.15,-1.19 -1.00,-1.33 -0.83,-1.43 -0.66,-1.53 -0.46,-1.59 -0.27,-1.64 -0.27,-1.64 L -0.27,-1.64 Z"></path></g><g transform="translate(163.5999755859375 71.5999755859375) rotate(0 111.20004272460938 -22.399978637695312)" stroke="none"><path fill="#fff" d="M -1.40,1.05 Q -1.40,1.05 -1.78,0.36 -2.16,-0.32 -4.09,0.79 -6.03,1.91 -8.22,2.94 -10.42,3.96 -12.95,5.28 -15.47,6.60 -17.96,7.84 -20.45,9.09 -22.90,10.30 -25.34,11.50 -27.43,12.08 -29.52,12.66 -31.11,13.53 -32.71,14.39 -34.00,14.93 -35.29,15.47 -36.93,15.51 -38.58,15.56 -39.50,14.43 -40.42,13.31 -39.99,11.33 -39.57,9.35 -38.03,6.80 -36.49,4.26 -33.91,1.29 -31.32,-1.68 -28.35,-4.52 -25.39,-7.37 -22.30,-10.38 -19.21,-13.39 -16.51,-16.04 -13.81,-18.69 -11.73,-20.74 -9.64,-22.78 -7.95,-23.82 -6.26,-24.85 -5.25,-25.38 -4.23,-25.90 -2.92,-25.43 -1.62,-24.96 -1.11,-23.75 -0.60,-22.55 -0.45,-21.35 -0.30,-20.15 -0.23,-18.72 -0.17,-17.28 -0.37,-15.78 -0.57,-14.27 -1.19,-12.76 -1.81,-11.24 -2.59,-10.03 -3.38,-8.82 -5.27,-7.83 -7.17,-6.84 -8.18,-7.20 -9.20,-7.55 -9.72,-9.07 -10.24,-10.59 -10.13,-11.76 -10.02,-12.92 -9.83,-13.15 -9.65,-13.37 -9.57,-13.71 -9.50,-14.04 -9.35,-14.36 -9.19,-14.67 -8.97,-14.93 -8.75,-15.20 -8.47,-15.40 -8.19,-15.61 -7.87,-15.74 -7.55,-15.87 -7.20,-15.92 -6.86,-15.98 -6.52,-15.94 -6.17,-15.91 -5.84,-15.80 -5.52,-15.68 -5.23,-15.50 -4.93,-15.31 -4.70,-15.05 -4.46,-14.80 -4.29,-14.50 -4.12,-14.20 -4.03,-13.86 -3.94,-13.53 -3.93,-13.18 -3.92,-12.83 -4.79,-11.33 -5.66,-9.83 -7.06,-8.63 -8.46,-7.43 -10.32,-6.33 -12.17,-5.22 -13.91,-4.31 -15.65,-3.39 -17.32,-2.56 -18.99,-1.72 -20.20,-1.30 -21.42,-0.88 -21.94,-2.08 -22.46,-3.28 -20.34,-4.62 -18.22,-5.96 -15.44,-7.05 -12.66,-8.14 -9.90,-9.24 -7.14,-10.33 -4.29,-11.25 -1.44,-12.17 1.13,-12.99 3.71,-13.81 5.56,-14.23 7.41,-14.65 8.60,-15.45 9.78,-16.25 11.32,-16.73 12.85,-17.21 14.16,-15.56 15.47,-13.91 14.88,-12.26 14.30,-10.61 13.51,-9.83 12.71,-9.05 12.76,-10.23 12.80,-11.40 18.24,-11.26 23.67,-11.12 31.47,-11.89 39.26,-12.66 51.77,-15.01 64.27,-17.36 80.41,-20.86 96.56,-24.36 114.95,-27.90 133.34,-31.45 151.02,-35.46 168.70,-39.47 184.74,-43.01 200.78,-46.55 213.10,-49.65 225.42,-52.75 233.89,-54.76 242.36,-56.76 247.39,-57.62 252.41,-58.48 255.00,-58.84 257.59,-59.19 259.33,-59.95 261.07,-60.70 261.32,-60.75 261.57,-60.79 261.83,-60.75 262.09,-60.72 262.31,-60.60 262.54,-60.48 262.72,-60.29 262.91,-60.11 263.02,-59.88 263.13,-59.64 263.16,-59.39 263.19,-59.13 263.14,-58.88 263.09,-58.62 262.96,-58.40 262.83,-58.18 262.63,-58.01 262.44,-57.84 262.20,-57.74 261.96,-57.64 261.70,-57.62 261.44,-57.60 261.19,-57.67 260.94,-57.74 260.73,-57.88 260.51,-58.02 260.35,-58.22 260.19,-58.43 260.11,-58.67 260.02,-58.92 260.02,-59.17 260.02,-59.43 260.09,-59.68 260.17,-59.92 260.33,-60.13 260.48,-60.34 260.69,-60.49 260.91,-60.64 261.15,-60.71 261.40,-60.78 261.66,-60.77 261.92,-60.76 262.16,-60.67 262.40,-60.57 262.60,-60.41 262.80,-60.24 262.93,-60.03 263.07,-59.81 263.13,-59.55 263.19,-59.30 263.16,-59.04 263.14,-58.79 263.03,-58.55 262.93,-58.32 262.75,-58.13 262.58,-57.94 262.35,-57.81 262.12,-57.69 262.12,-57.69 262.13,-57.69 260.05,-57.10 257.98,-56.52 255.43,-56.15 252.87,-55.78 247.94,-54.92 243.01,-54.06 234.56,-52.03 226.11,-50.00 213.76,-46.85 201.41,-43.71 185.39,-40.12 169.38,-36.53 151.66,-32.43 133.95,-28.34 115.62,-24.70 97.28,-21.07 81.13,-17.43 64.97,-13.78 52.34,-11.23 39.72,-8.67 31.67,-7.64 23.63,-6.61 18.99,-6.50 14.34,-6.38 11.68,-7.37 9.02,-8.35 9.67,-10.46 10.31,-12.57 11.14,-14.18 11.97,-15.79 11.75,-14.51 11.54,-13.23 9.83,-12.34 8.13,-11.45 6.43,-11.13 4.73,-10.81 2.19,-9.90 -0.33,-8.98 -3.01,-7.98 -5.69,-6.98 -8.37,-5.72 -11.05,-4.46 -13.49,-3.27 -15.94,-2.07 -17.91,-0.76 -19.88,0.54 -21.48,0.72 -23.08,0.91 -24.06,0.23 -25.03,-0.44 -24.11,-2.72 -23.19,-4.99 -22.12,-5.30 -21.05,-5.60 -19.50,-6.49 -17.95,-7.37 -16.45,-8.33 -14.95,-9.29 -13.52,-10.43 -12.08,-11.57 -10.86,-12.47 -9.65,-13.37 -9.57,-13.71 -9.50,-14.04 -9.35,-14.36 -9.19,-14.67 -8.97,-14.93 -8.75,-15.20 -8.47,-15.40 -8.19,-15.61 -7.87,-15.74 -7.55,-15.87 -7.21,-15.92 -6.86,-15.98 -6.52,-15.94 -6.17,-15.91 -5.84,-15.80 -5.52,-15.68 -5.23,-15.50 -4.93,-15.31 -4.70,-15.05 -4.46,-14.80 -4.29,-14.50 -4.12,-14.20 -4.03,-13.86 -3.94,-13.53 -3.93,-13.18 -3.92,-12.83 -4.25,-12.39 -4.59,-11.94 -4.88,-10.67 -5.17,-9.41 -5.88,-10.24 -6.59,-11.07 -6.37,-12.13 -6.15,-13.20 -5.66,-14.15 -5.17,-15.10 -4.94,-16.15 -4.70,-17.20 -4.70,-18.54 -4.70,-19.87 -4.73,-21.01 -4.76,-22.15 -6.20,-21.44 -7.63,-20.73 -9.67,-18.66 -11.71,-16.59 -14.37,-13.89 -17.02,-11.20 -20.05,-8.12 -23.08,-5.04 -25.86,-2.22 -28.63,0.58 -30.89,3.37 -33.14,6.15 -34.74,9.16 -36.35,12.17 -35.23,11.94 -34.11,11.70 -32.21,10.74 -30.31,9.78 -28.50,9.31 -26.69,8.84 -24.29,7.58 -21.89,6.32 -19.48,5.01 -17.06,3.70 -14.55,2.25 -12.03,0.80 -9.94,-0.36 -7.85,-1.52 -5.70,-2.65 -3.56,-3.78 -2.08,-3.57 -0.59,-3.35 0.40,-2.20 1.40,-1.05 1.51,-0.87 1.62,-0.68 1.68,-0.48 1.73,-0.28 1.74,-0.06 1.75,0.14 1.71,0.35 1.67,0.55 1.57,0.75 1.48,0.94 1.35,1.10 1.21,1.27 1.04,1.39 0.87,1.52 0.68,1.61 0.48,1.69 0.27,1.72 0.06,1.76 -0.14,1.74 -0.35,1.72 -0.55,1.65 -0.75,1.59 -0.93,1.47 -1.11,1.36 -1.26,1.21 -1.40,1.05 -1.40,1.05 L -1.40,1.05 Z"></path></g><g transform="translate(48.4000244140625 61.199981689453125) rotate(0 18.399993896484375 3.20001220703125)" stroke="none"><path fill="#fff" d="M 0.51,-2.31 Q 0.51,-2.31 2.55,-1.71 4.59,-1.12 6.21,-0.69 7.83,-0.26 9.53,0.42 11.23,1.11 12.75,1.58 14.27,2.06 15.79,2.77 17.31,3.48 19.22,3.96 21.13,4.45 23.14,5.55 25.15,6.64 25.98,7.56 26.81,8.47 27.72,9.36 28.63,10.24 27.27,11.04 25.92,11.84 25.70,9.74 25.48,7.65 25.84,6.40 26.20,5.14 26.93,3.51 27.66,1.88 28.54,0.00 29.41,-1.87 30.31,-4.03 31.21,-6.20 32.11,-8.29 33.01,-10.38 33.85,-12.05 34.69,-13.73 35.18,-15.05 35.68,-16.36 36.09,-17.61 36.50,-18.86 37.74,-18.53 38.99,-18.20 38.29,-17.31 37.59,-16.41 35.87,-15.14 34.15,-13.88 31.53,-12.00 28.91,-10.12 25.72,-7.76 22.53,-5.39 19.09,-2.79 15.64,-0.20 12.48,1.62 9.31,3.46 6.23,5.76 3.14,8.07 0.39,9.99 -2.34,11.92 -4.38,13.61 -6.42,15.30 -7.71,16.53 -9.00,17.76 -10.34,18.66 -11.67,19.57 -12.76,20.38 -13.85,21.20 -14.05,21.37 -14.24,21.54 -14.47,21.66 -14.70,21.78 -14.95,21.84 -15.20,21.90 -15.46,21.90 -15.72,21.90 -15.97,21.83 -16.22,21.77 -16.45,21.65 -16.68,21.53 -16.87,21.35 -17.06,21.18 -17.21,20.97 -17.36,20.75 -17.45,20.51 -17.54,20.27 -17.57,20.01 -17.60,19.76 -17.56,19.50 -17.53,19.24 -17.44,19.00 -17.35,18.76 -17.20,18.55 -17.05,18.34 -15.65,16.64 -14.25,14.95 -12.50,13.82 -10.74,12.69 -8.40,11.16 -6.07,9.64 -2.93,7.83 0.20,6.03 4.04,3.69 7.88,1.35 11.59,-0.99 15.30,-3.34 19.17,-5.94 23.04,-8.53 26.80,-10.80 30.56,-13.07 33.73,-15.15 36.91,-17.24 39.22,-18.60 41.53,-19.97 43.49,-20.83 45.46,-21.68 46.94,-22.35 48.43,-23.01 49.66,-23.39 50.89,-23.78 52.55,-23.03 54.21,-22.29 54.62,-20.78 55.03,-19.27 54.89,-17.27 54.76,-15.26 54.14,-13.74 53.52,-12.21 53.08,-10.99 52.64,-9.78 52.23,-8.56 51.82,-7.35 51.07,-6.09 50.31,-4.82 49.51,-3.82 48.71,-2.81 47.29,-1.08 45.87,0.64 47.79,2.01 49.70,3.38 49.62,4.51 49.54,5.64 48.66,6.84 47.79,8.05 46.81,9.71 45.83,11.38 44.65,12.32 43.48,13.27 42.85,14.29 42.23,15.32 40.92,16.64 39.61,17.97 38.49,19.33 37.37,20.69 36.39,22.02 35.41,23.36 34.41,24.39 33.41,25.42 32.60,26.80 31.80,28.19 30.82,27.09 29.84,26.00 30.62,25.08 31.41,24.17 31.59,23.71 31.77,23.25 32.08,22.87 32.40,22.49 32.82,22.23 33.24,21.97 33.72,21.86 34.20,21.75 34.69,21.80 35.18,21.85 35.63,22.05 36.08,22.25 36.44,22.59 36.80,22.93 37.04,23.36 37.27,23.79 37.36,24.28 37.44,24.76 37.37,25.25 37.29,25.74 37.07,26.18 36.84,26.62 36.49,26.96 36.13,27.30 35.69,27.51 35.24,27.72 34.75,27.78 34.26,27.84 33.78,27.74 33.30,27.64 32.87,27.39 32.44,27.14 32.12,26.77 31.80,26.39 31.61,25.94 31.42,25.48 31.39,24.99 31.36,24.50 31.49,24.02 31.62,23.54 31.89,23.13 32.16,22.72 32.55,22.42 32.94,22.12 33.41,21.95 33.87,21.79 34.36,21.79 34.86,21.78 35.33,21.93 35.80,22.09 36.19,22.38 36.59,22.68 36.87,23.08 37.15,23.49 37.29,23.96 37.42,24.44 37.40,24.93 37.38,25.42 37.38,25.42 37.38,25.42 34.33,28.22 31.29,31.02 29.95,31.15 28.62,31.29 27.68,30.59 26.74,29.89 26.51,28.44 26.28,26.99 27.33,25.33 28.39,23.66 29.88,22.11 31.37,20.56 32.28,19.15 33.19,17.74 34.35,15.87 35.51,14.00 36.31,13.15 37.12,12.29 38.23,10.35 39.33,8.42 40.50,7.30 41.66,6.19 42.93,5.03 44.19,3.87 44.58,4.94 44.96,6.01 43.40,5.20 41.83,4.39 41.29,3.42 40.75,2.44 40.91,0.56 41.06,-1.31 42.20,-2.51 43.34,-3.71 43.99,-4.94 44.65,-6.17 45.84,-7.62 47.03,-9.06 47.48,-10.29 47.92,-11.53 48.42,-12.83 48.91,-14.12 49.64,-15.93 50.37,-17.74 49.96,-18.91 49.55,-20.08 48.05,-19.60 46.55,-19.12 44.74,-18.36 42.94,-17.61 40.69,-16.25 38.45,-14.90 35.25,-12.76 32.05,-10.62 28.38,-8.36 24.70,-6.09 20.84,-3.43 16.97,-0.76 13.29,1.66 9.60,4.10 5.80,6.55 1.99,9.00 -0.94,10.86 -3.89,12.73 -6.13,14.44 -8.37,16.14 -9.80,17.21 -11.24,18.27 -12.54,19.73 -13.85,21.20 -14.05,21.37 -14.24,21.54 -14.47,21.66 -14.70,21.78 -14.95,21.84 -15.20,21.90 -15.46,21.90 -15.72,21.90 -15.97,21.83 -16.22,21.77 -16.45,21.65 -16.68,21.53 -16.87,21.35 -17.06,21.18 -17.21,20.97 -17.36,20.75 -17.45,20.51 -17.54,20.27 -17.57,20.01 -17.60,19.76 -17.56,19.50 -17.53,19.24 -17.44,19.00 -17.35,18.76 -17.20,18.55 -17.05,18.34 -16.61,18.19 -16.16,18.05 -14.78,17.34 -13.39,16.63 -12.21,16.06 -11.02,15.48 -9.63,14.31 -8.24,13.14 -6.13,11.35 -4.02,9.56 -1.34,7.62 1.33,5.68 4.52,3.23 7.72,0.77 10.66,-1.02 13.61,-2.81 16.98,-5.51 20.34,-8.20 23.43,-10.71 26.52,-13.22 28.94,-15.23 31.35,-17.24 32.82,-18.63 34.28,-20.02 36.26,-21.22 38.23,-22.42 39.37,-19.90 40.50,-17.38 39.97,-16.09 39.43,-14.80 38.80,-13.39 38.16,-11.99 37.41,-10.50 36.66,-9.01 35.99,-6.90 35.32,-4.79 34.69,-2.50 34.07,-0.20 33.51,1.92 32.95,4.04 32.48,5.34 32.02,6.64 31.52,8.44 31.03,10.23 30.93,12.02 30.83,13.80 29.34,15.03 27.84,16.26 26.16,15.12 24.48,13.99 23.58,12.88 22.67,11.78 21.79,10.74 20.91,9.70 19.38,8.93 17.85,8.16 16.64,7.74 15.43,7.32 14.22,6.68 13.01,6.05 11.34,5.52 9.67,4.99 8.19,4.40 6.72,3.80 5.20,3.38 3.68,2.96 1.58,2.63 -0.51,2.31 -0.78,2.21 -1.05,2.12 -1.29,1.96 -1.52,1.80 -1.72,1.59 -1.91,1.38 -2.05,1.14 -2.19,0.89 -2.26,0.61 -2.34,0.33 -2.35,0.05 -2.35,-0.23 -2.29,-0.51 -2.23,-0.78 -2.10,-1.04 -1.97,-1.30 -1.79,-1.51 -1.61,-1.73 -1.37,-1.90 -1.14,-2.07 -0.88,-2.17 -0.61,-2.28 -0.33,-2.32 -0.05,-2.36 0.22,-2.33 0.51,-2.31 0.51,-2.31 L 0.51,-2.31 Z"></path></g></svg>
        </div>
    </div>
  )
}
