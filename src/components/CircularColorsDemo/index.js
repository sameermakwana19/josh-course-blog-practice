// export * from './CircularColorsDemo';
// export { default } from './CircularColorsDemo';

import dynamic from "next/dynamic.js";

const CircularColorsDemo = dynamic(() => import("./CircularColorsDemo.js"));

export default CircularColorsDemo;
